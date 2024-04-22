# BillingHistoryService

Service for managing billing history.

## Constructors

### new BillingHistoryService()

> **new BillingHistoryService**(): [`BillingHistoryService`](BillingHistoryService.md)

#### Returns

[`BillingHistoryService`](BillingHistoryService.md)

## Properties

### history

> `private` **history**: [`BillingTransaction`](../interfaces/BillingTransaction.md)[] = `[]`

## Methods

### addTransactionToHistory()

> **addTransactionToHistory**(`transaction`): `void`

Add a transaction to the billing history.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction to be added to the history.

#### Returns

`void`

***

### getBillingHistory()

> **getBillingHistory**(): [`BillingTransaction`](../interfaces/BillingTransaction.md)[]

Get the entire billing history.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions in the history.
