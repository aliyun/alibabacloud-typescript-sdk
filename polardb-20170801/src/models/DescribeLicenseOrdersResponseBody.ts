// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLicenseOrdersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of generated activation codes.
   * 
   * @example
   * 10
   */
  activatedCodeCount?: number;
  /**
   * @remarks
   * The maximum number of activation codes that you can apply for.
   * 
   * @example
   * 10
   */
  activationCodeQuota?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud order. The ID of a virtual order may be returned.
   * 
   * @example
   * 227638319690519
   */
  aliyunOrderId?: string;
  /**
   * @remarks
   * Indicates whether the SystemIdentifier parameter can be left empty when the system generates an activation code.
   * 
   * @example
   * false
   */
  allowEmptySystemIdentifier?: boolean;
  /**
   * @remarks
   * The engine of the PolarDB cluster. Valid values: PG, Oracle, and MySQL.
   * 
   * @example
   * PG
   */
  engine?: string;
  /**
   * @remarks
   * The time when the order was created.
   * 
   * @example
   * 2022-02-11 03:14:15
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the order was updated.
   * 
   * @example
   * 2022-02-11 03:14:15
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the order is a virtual order. Pre-generation of activation codes is allowed for virtual orders.
   * 
   * @example
   * false
   */
  isVirtualOrder?: boolean;
  /**
   * @remarks
   * Indicates whether the virtual order is frozen. Generation of activation codes is not allowed for frozen virtual orders.
   * 
   * @example
   * false
   */
  isVirtualOrderFrozen?: boolean;
  /**
   * @remarks
   * The type of the package. Valid values:
   * 
   * *   single_node_subscribe: Single-node Edition (Subscription).
   * *   single_node_long_term: Single-node Edition (Long-term).
   * *   primary_backup_subscribe: HA Edition (Subscription).
   * *   primary_backup_long_term: HA Edition (Long-term).
   * *   pre_generation_long_term: Pre-generated (Long-term).
   * 
   * @example
   * single_node_subscribe
   */
  packageType?: string;
  /**
   * @remarks
   * The validity period of the package. Valid values: 1 year and 30 years.
   * 
   * @example
   * 1 year
   */
  packageValidity?: string;
  /**
   * @remarks
   * The purchase channel. Valid values: aliyun_market and aliyun_public. aliyun_market indicates Alibaba Cloud Marketplace. aliyun_public indicates the PolarDB buy page.
   * 
   * @example
   * aliyun_public
   */
  purchaseChannel?: string;
  /**
   * @remarks
   * The ID of the virtual order.
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
   * The queried orders.
   */
  items?: DescribeLicenseOrdersResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
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
   * The total number of entries returned.
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

