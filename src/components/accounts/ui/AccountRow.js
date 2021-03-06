import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

const AccountRow = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.address}</Table.Cell>
      <Table.Cell>{props.etherBalance}</Table.Cell>
      <Table.Cell>{props.cryptoDollarBalance}</Table.Cell>
      <Table.Cell>{props.reservedEtherBalance}</Table.Cell>
    </Table.Row>
  )
}

AccountRow.propTypes = {
  address: PropTypes.string,
  etherBalance: PropTypes.string,
  cryptoDollarBalance: PropTypes.string,
  reservedEtherBalance: PropTypes.string
}

export default AccountRow
