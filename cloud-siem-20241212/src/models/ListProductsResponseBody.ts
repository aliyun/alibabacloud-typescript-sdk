// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyProducts extends $dara.Model {
  /**
   * @remarks
   * The number of abnormal data ingestion entries.
   * 
   * @example
   * 2
   */
  abnormalDataIngestionCount?: number;
  /**
   * @remarks
   * The activation time.
   * 
   * @example
   * 1733269771123
   */
  activeTime?: number;
  /**
   * @remarks
   * Indicates whether data collection can be added.
   * 
   * @example
   * true
   */
  allowAddDataIngestion?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @remarks
   * The accessed state of data ingestion. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  dataIngestionStatus?: boolean;
  /**
   * @remarks
   * The number of enabled data ingestion entries.
   * 
   * @example
   * 1
   */
  enabledDataIngestionCount?: number;
  /**
   * @remarks
   * The product alias.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productAlias?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * sas
   */
  productName?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * - preset
   * - custom
   * 
   * @example
   * preset
   */
  productType?: string;
  /**
   * @remarks
   * The total number of data ingestion entries.
   * 
   * @example
   * 10
   */
  totalDataIngestionCount?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
  /**
   * @remarks
   * The vendor ID.
   * 
   * @example
   * vd-qlsw5eocx94w9
   */
  vendorId?: string;
  /**
   * @remarks
   * The vendor name.
   * 
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
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. You do not need to specify this parameter for the first request or if no more results exist. If more results exist, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of products.
   */
  products?: ListProductsResponseBodyProducts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

