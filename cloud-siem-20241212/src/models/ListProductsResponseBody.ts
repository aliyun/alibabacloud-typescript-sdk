// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyProducts extends $dara.Model {
  /**
   * @example
   * 2
   */
  abnormalDataIngestionCount?: number;
  /**
   * @example
   * 1733269771123
   */
  activeTime?: number;
  /**
   * @example
   * true
   */
  allowAddDataIngestion?: boolean;
  /**
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @example
   * enabled
   */
  dataIngestionStatus?: boolean;
  /**
   * @example
   * 1
   */
  enabledDataIngestionCount?: number;
  /**
   * @example
   * alibaba_cloud_sas
   */
  productAlias?: string;
  /**
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @example
   * sas
   */
  productName?: string;
  /**
   * @example
   * preset
   */
  productType?: string;
  /**
   * @example
   * 10
   */
  totalDataIngestionCount?: number;
  /**
   * @example
   * 1733269771123
   */
  updateTime?: number;
  /**
   * @example
   * vd-qlsw5eocx94w9
   */
  vendorId?: string;
  /**
   * @example
   * 111
   */
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
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  products?: ListProductsResponseBodyProducts[];
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @example
   * 57
   */
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

