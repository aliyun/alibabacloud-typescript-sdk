// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLicenseOrdersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of activation codes that have been generated.
   * 
   * @example
   * 10
   */
  activatedCodeCount?: number;
  /**
   * @remarks
   * The quota for requesting activation codes.
   * 
   * @example
   * 10
   */
  activationCodeQuota?: number;
  /**
   * @remarks
   * The Alibaba Cloud order ID or virtual order ID.
   * 
   * @example
   * 227638319690519
   */
  aliyunOrderId?: string;
  /**
   * @remarks
   * Specifies whether the System Identifier can be left empty when an activation code is generated.
   * 
   * @example
   * false
   */
  allowEmptySystemIdentifier?: boolean;
  /**
   * @remarks
   * The database type, such as PG, Oracle, or MySQL.
   * 
   * @example
   * PG
   */
  engine?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-02-11 03:14:15
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-02-11 03:14:15
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the order is a virtual order. Virtual orders allow for pre-generating activation codes.
   * 
   * @example
   * false
   */
  isVirtualOrder?: boolean;
  /**
   * @remarks
   * Indicates whether the virtual order is frozen. No more activation codes can be generated from a frozen order.
   * 
   * @example
   * false
   */
  isVirtualOrderFrozen?: boolean;
  /**
   * @remarks
   * The package type. Valid values:
   * 
   * - single_node_subscribe: single node (subscription)
   * 
   * - single_node_long_term: single node (long-term)
   * 
   * - primary_backup_subscribe: primary/standby (subscription)
   * 
   * - primary_backup_long_term: primary/standby (long-term)
   * 
   * - pre_generation_long_term: pre-generated (long-term)
   * 
   * @example
   * single_node_subscribe
   */
  packageType?: string;
  /**
   * @remarks
   * The validity period of the package. Common options are one year or long-term (30 years).
   * 
   * @example
   * 1 year
   */
  packageValidity?: string;
  /**
   * @remarks
   * The purchase channel. Valid values: \\`aliyun_market\\` (Alibaba Cloud Marketplace) and \\`aliyun_public\\` (standard purchase page).
   * 
   * @example
   * aliyun_public
   */
  purchaseChannel?: string;
  /**
   * @remarks
   * The virtual order ID.
   * 
   * @example
   * 227638319690519
   */
  virtualAliyunOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      activatedCodeCount: 'ActivatedCodeCount',
      activationCodeQuota: 'ActivationCodeQuota',
      aliyunOrderId: 'AliyunOrderId',
      allowEmptySystemIdentifier: 'AllowEmptySystemIdentifier',
      engine: 'Engine',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      isVirtualOrder: 'IsVirtualOrder',
      isVirtualOrderFrozen: 'IsVirtualOrderFrozen',
      packageType: 'PackageType',
      packageValidity: 'PackageValidity',
      purchaseChannel: 'PurchaseChannel',
      virtualAliyunOrderId: 'VirtualAliyunOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activatedCodeCount: 'number',
      activationCodeQuota: 'number',
      aliyunOrderId: 'string',
      allowEmptySystemIdentifier: 'boolean',
      engine: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      isVirtualOrder: 'boolean',
      isVirtualOrderFrozen: 'boolean',
      packageType: 'string',
      packageValidity: 'string',
      purchaseChannel: 'string',
      virtualAliyunOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of orders.
   */
  items?: DescribeLicenseOrdersResponseBodyItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 12
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34458CD3-33E0-4624-BFEF-840C15******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 50
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeLicenseOrdersResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

