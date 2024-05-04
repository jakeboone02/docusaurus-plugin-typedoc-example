# CustomerAccount

Class representing a customer account.

## Constructors

### new CustomerAccount()

> **new CustomerAccount**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](CustomerAccount.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `customer` | [`Customer`](../interfaces/Customer.md) |
| `contactInfo` | [`CustomerContact`](../interfaces/CustomerContact.md) |
| `billingInfo` | [`CustomerBilling`](../interfaces/CustomerBilling.md) |

#### Returns

[`CustomerAccount`](CustomerAccount.md)

## Properties

### billingInfo

> `private` **billingInfo**: [`CustomerBilling`](../interfaces/CustomerBilling.md)

***

### contactInfo

> `private` **contactInfo**: [`CustomerContact`](../interfaces/CustomerContact.md)

***

### customer

> `private` **customer**: [`Customer`](../interfaces/Customer.md)

***

### orderHistory

> `private` **orderHistory**: [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

## Methods

### addOrderToHistory()

> **addOrderToHistory**(`order`): `void`

Add an order to the customer's order history.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `order` | [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md) | The order to be added to the history. |

#### Returns

`void`

***

### getBillingInfo()

> **getBillingInfo**(): [`CustomerBilling`](../interfaces/CustomerBilling.md)

Get the customer billing information.

#### Returns

[`CustomerBilling`](../interfaces/CustomerBilling.md)

The customer billing information.

***

### getContactInfo()

> **getContactInfo**(): [`CustomerContact`](../interfaces/CustomerContact.md)

Get the customer contact information.

#### Returns

[`CustomerContact`](../interfaces/CustomerContact.md)

The customer contact information.

***

### getCustomer()

> **getCustomer**(): [`Customer`](../interfaces/Customer.md)

Get the customer information.

#### Returns

[`Customer`](../interfaces/Customer.md)

The customer information.

***

### getOrderHistory()

> **getOrderHistory**(): [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

Get the customer's order history.

#### Returns

[`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

An array of the customer's order history.
