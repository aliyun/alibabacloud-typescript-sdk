// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyProducts extends $dara.Model {
  abnormalDataIngestionCount?: number;
  activeTime?: number;
  allowAddDataIngestion?: boolean;
  createTime?: number;
  dataIngestionStatus?: boolean;
  enabledDataIngestionCount?: number;
  productAlias?: string;
  productId?: string;
  productName?: string;
  productType?: string;
  totalDataIngestionCount?: number;
  updateTime?: number;
  vendorId?: string;
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalDataIngestionCount: 'AbnormalDataIngestionCount',
      activeTime: 'ActiveTime',
      allowAddDataIngestion: 'AllowAddDataIngestion',
      createTime: 'CreateTime',
      dataIngestionStatus: 'DataIngestionStatus',
      enabledDataIngestionCount: 'EnabledDataIngestionCount',
      productAlias: 'ProductAlias',
      productId: 'ProductId',
      productName: 'ProductName',
      productType: 'ProductType',
      totalDataIngestionCount: 'TotalDataIngestionCount',
      updateTime: 'UpdateTime',
      vendorId: 'VendorId',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalDataIngestionCount: 'number',
      activeTime: 'number',
      allowAddDataIngestion: 'boolean',
      createTime: 'number',
      dataIngestionStatus: 'boolean',
      enabledDataIngestionCount: 'number',
      productAlias: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      totalDataIngestionCount: 'number',
      updateTime: 'number',
      vendorId: 'string',
      vendorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  products?: ListProductsResponseBodyProducts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      products: 'Products',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      products: { 'type': 'array', 'itemType': ListProductsResponseBodyProducts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

