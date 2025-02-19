# ProductInventory

Class representing a product inventory.

## Constructors

### new ProductInventory()

> **new ProductInventory**(): [`ProductInventory`](ProductInventory.md)

#### Returns

[`ProductInventory`](ProductInventory.md)

## Properties

### products

> `private` **products**: [`ProductDetails`](../interfaces/ProductDetails.md)[] = `[]`

## Methods

### addProduct()

> **addProduct**(`product`): [`ProductDetails`](../interfaces/ProductDetails.md)

Add a new product to the inventory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `product` | [`ProductDetails`](../interfaces/ProductDetails.md) | The product to be added. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The added product details.

***

### getAllProducts()

> **getAllProducts**(): [`ProductDetails`](../interfaces/ProductDetails.md)[]

Get all products in the inventory.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of all product details.

***

### getProductById()

> **getProductById**(`productId`): [`ProductDetails`](../interfaces/ProductDetails.md)

Get product details by ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The product details with the specified ID.

***

### getProductsByCategory()

> **getProductsByCategory**(`category`): [`ProductDetails`](../interfaces/ProductDetails.md)[]

Get products by category.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `category` | [`ProductCategory`](../enumerations/ProductCategory.md) | The product category. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of product details in the specified category.

***

### removeProduct()

> **removeProduct**(`productId`): [`ProductDetails`](../interfaces/ProductDetails.md)

Remove a product from the inventory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product to be removed. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The removed product details.

***

### updateProductDetails()

> **updateProductDetails**(`productId`, `updatedDetails`): [`ProductDetails`](../interfaces/ProductDetails.md)

Update product details.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](../interfaces/ProductDetails.md) | The updated product details. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.
