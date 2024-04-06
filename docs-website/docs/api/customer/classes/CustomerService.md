# CustomerService

Service for managing customers.

## Constructors

### new CustomerService()

> **new CustomerService**(): [`CustomerService`](CustomerService.md)

#### Returns

[`CustomerService`](CustomerService.md)

## Properties

### customers

> **`private`** **customers**: [`CustomerAccount`](CustomerAccount.md)[] = `[]`

## Methods

### addCustomer()

> **addCustomer**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](CustomerAccount.md)

Add a new customer.

#### Parameters

• **customer**: [`Customer`](../interfaces/Customer.md)

The customer to be added.

• **contactInfo**: [`CustomerContact`](../interfaces/CustomerContact.md)

The contact information for the customer.

• **billingInfo**: [`CustomerBilling`](../interfaces/CustomerBilling.md)

The billing information for the customer.

#### Returns

[`CustomerAccount`](CustomerAccount.md)

The added customer account.

***

### getAllCustomers()

> **getAllCustomers**(): [`CustomerAccount`](CustomerAccount.md)[]

Get all customer accounts.

#### Returns

[`CustomerAccount`](CustomerAccount.md)[]

An array of all customer accounts.

***

### getCustomerById()

> **getCustomerById**(`customerId`): [`CustomerAccount`](CustomerAccount.md)

Get a customer account by ID.

#### Parameters

• **customerId**: `string`

The ID of the customer.

#### Returns

[`CustomerAccount`](CustomerAccount.md)

The customer account with the specified ID.
