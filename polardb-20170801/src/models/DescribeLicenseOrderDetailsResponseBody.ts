// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLicenseOrderDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of generated activation codes.
   * 
   * @example
   * 2
   */
  activatedCodeCount?: number;
  /**
   * @remarks
   * The quota of activation codes that can be requested.
   * 
   * @example
   * 8
   */
  activationCodeQuota?: number;
  /**
   * @remarks
   * The Alibaba Cloud order ID, including the virtual order ID.
   * 
   * @example
   * 239618016570503
   */
  aliyunOrderId?: string;
  /**
   * @remarks
   * Specifies whether the System Identifier can be left empty when generating an activation code.
   * 
   * @example
   * false
   */
  allowEmptySystemIdentifier?: boolean;
  /**
   * @remarks
   * The database type, such as PostgreSQL, Oracle, or MySQL.
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
   * 2021-10-19 01:13:45
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  gmtModified?: string;
  /**
   * @remarks
   * Specifies whether the order is a virtual order. Virtual orders allow pre-generation of activation codes.
   * 
   * @example
   * false
   */
  isVirtualOrder?: boolean;
  /**
   * @remarks
   * Specifies whether the virtual order is frozen. A frozen virtual order does not allow further generation of activation codes.
   * 
   * @example
   * false
   */
  isVirtualOrderFrozen?: boolean;
  /**
   * @remarks
   * The package type. Valid values:
   * - single_node_subscribe: single node (subscription)
   * - single_node_long_term: single node (long-term)
   * - primary_backup_subscribe: primary/secondary edition (subscription)
   * - primary_backup_long_term: primary/secondary edition (long-term)
   * - pre_generation_long_term: pre-generation (long-term)
   * 
   * @example
   * pre_generation_long_term
   */
  packageType?: string;
  /**
   * @remarks
   * The validity period of the package, which is typically one year or a long-term period of 30 years.
   * 
   * @example
   * 1 year
   */
  packageValidity?: string;
  /**
   * @remarks
   * The purchase channel. Valid values: aliyun_market (Alibaba Cloud Marketplace) and aliyun_public (regular purchase page).
   * 
   * @example
   * aliyun_market
   */
  purchaseChannel?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C0ACF0-DD29-4B67-9190-B7A48C******
   */
  requestId?: string;
  /**
   * @remarks
   * The virtual order ID.
   * 
   * @example
   * 239618016570503
   */
  virtualOrderId?: string;
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
      requestId: 'RequestId',
      virtualOrderId: 'VirtualOrderId',
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
      requestId: 'string',
      virtualOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

