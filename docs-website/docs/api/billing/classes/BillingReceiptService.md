# BillingReceiptService

Service for generating billing receipts.

## Constructors

### new BillingReceiptService()

• **new BillingReceiptService**(): [`BillingReceiptService`](BillingReceiptService.md)

#### Returns

[`BillingReceiptService`](BillingReceiptService.md)

## Properties

### receipts

• **`private`** **receipts**: [`BillingReceipt`](../interfaces/BillingReceipt.md)[] = `[]`

## Methods

### generateReceipt()

• **generateReceipt**(`transaction`): [`BillingReceipt`](../interfaces/BillingReceipt.md)

Generate a billing receipt for a transaction.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction for which to generate a receipt.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)

The generated billing receipt.

***

### getAllReceipts()

• **getAllReceipts**(): [`BillingReceipt`](../interfaces/BillingReceipt.md)[]

Get all billing receipts.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)[]

An array of all billing receipts.
