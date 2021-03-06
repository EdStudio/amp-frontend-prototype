import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Steps } from 'antd'
import { Dialog, Intent, Button } from '@blueprintjs/core'
import InputPassword from './InputPassword'
import DownloadWallet from './DownloadWallet'
import WalletInformation from './WalletInformation'
import EncryptionProgressBar from './EncryptionProgressBar'

class CreateWalletCard extends Component {
  renderInputPassword () {
    const { updatePassword, showEncryptionProgress, encryptionPercentage } = this.props
    return (
      <div>
        <InputPassword updatePassword={updatePassword} />
        {showEncryptionProgress && <EncryptionProgressBar percent={encryptionPercentage} />}
      </div>
    )
  }

  renderDownloadWallet () {
    return (
      <DownloadWallet />
    )
  }

  renderWalletInformation () {
    return (
      <WalletInformation />
    )
  }

  render () {
    const currentStep = this.props.currentStep

    const buttons = [
      {
        'ok': 'Create Wallet',
        'cancel': 'Cancel',
        'onOkClick': this.props.goToDownloadWallet,
        'onCancelClick': this.props.cancel
      },
      {
        'ok': 'I have downloaded my wallet',
        'cancel': 'Go back',
        'onOkClick': this.props.goToComplete,
        'onCancelClick': this.props.goBackToCreateWallet
      },
      {
        'ok': 'Complete',
        'cancel': 'Go back',
        'onOkClick': this.props.complete,
        'onCancelClick': this.props.goBackToDownloadWallet
      }
    ]
    return (
      <Dialog
        title='Create Wallet Modal'
        icon='inbox'
        isOpen={this.props.visible}
        onClose={this.props.hideModal}
        width = {800}
        style={{ width: '600px' }}
      >
      <div className='pt-dialog-body'>
        <Steps current={this.props.currentStep}>
          <Steps.Step title='Choose password' />
          <Steps.Step title='Download Wallet' />
          <Steps.Step title='Wallet Information' />
        </Steps>
        { this.props.currentStep === 0 && this.renderInputPassword()}
        { this.props.currentStep === 1 && this.renderDownloadWallet()}
        { this.props.currentStep === 2 && this.renderWalletInformation()}
      </div>
      <div className='pt-dialog-footer'>
        <div className='pt-dialog-footer-actions'>
          <Button
            key='Previous'
            text={buttons[currentStep].cancel}
            onClick={buttons[currentStep].onCancelClick} />
          <Button
            key='Next'
            text={buttons[currentStep].ok}
            intent={Intent.PRIMARY}
            onClick={buttons[currentStep].onOkClick} />
        </div>
      </div>
      </Dialog>
    )
  }
}

CreateWalletCard.propTypes = {
  visible: PropTypes.bool,
  hideModal: PropTypes.func,
  currentStep: PropTypes.number,
  goToDownloadWallet: PropTypes.func,
  goBackToCreateWallet: PropTypes.func,
  goToComplete: PropTypes.func,
  goBackToDownloadWallet: PropTypes.func,
  complete: PropTypes.func,
  cancel: PropTypes.func,
  updatePassword: PropTypes.func,
  encryptionPercentage: PropTypes.number,
  showEncryptionProgress: PropTypes.bool
}

export default CreateWalletCard
