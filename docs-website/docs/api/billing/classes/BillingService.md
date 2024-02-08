# BillingService

Service for managing billing transactions.

## Constructors

### new BillingService()

• **new BillingService**(): [`BillingService`](BillingService.md)

#### Returns

[`BillingService`](BillingService.md)

## Properties

### transactions

• **`private`** **transactions**: [`BillingTransaction`](../interfaces/BillingTransaction.md)[] = `[]`

## Methods

### getAllTransactions()

• **getAllTransactions**(): [`BillingTransaction`](../interfaces/BillingTransaction.md)[]

Get all billing transactions.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions.

***

### processTransaction()

• **processTransaction**(`transaction`): [`BillingTransaction`](../interfaces/BillingTransaction.md)

Process a billing transaction.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction to be processed.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)

The processed billing transaction.
