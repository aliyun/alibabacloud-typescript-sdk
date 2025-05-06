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
   * The maximum number of activation codes that you can apply for.
   * 
   * @example
   * 8
   */
  activationCodeQuota?: number;
  /**
   * @remarks
   * The Alibaba Cloud order ID (including the virtual order ID).
   * 
   * @example
   * 239618016570503
   */
  aliyunOrderId?: string;
  /**
   * @remarks
   * Indicates whether activation codes can be generated without the system identifier.
   * 
   * @example
   * false
   */
  allowEmptySystemIdentifier?: boolean;
  /**
   * @remarks
   * The type of the engine. Valid values: PG, Oracle, and MySQL.
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
   * 2021-10-19 01:13:45
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the order was last updated.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the order is a virtual order (virtual orders allow pre-generation of activation codes).
   * 
   * @example
   * false
   */
  isVirtualOrder?: boolean;
  /**
   * @remarks
   * Indicates whether the virtual order is frozen (activation codes cannot be generated for a frozen virtual order).
   * 
   * @example
   * false
   */
  isVirtualOrderFrozen?: boolean;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * *   single_node_subscribe
   * *   single_node_long_term
   * *   primary_backup_subscribe
   * *   primary_backup_long_term
   * *   pre_generation_long_term
   * 
   * @example
   * pre_generation_long_term
   */
  packageType?: string;
  /**
   * @remarks
   * The validity period of the plan, which is one year (common) or thirty years (long-term).
   * 
   * @example
   * 1 year
   */
  packageValidity?: string;
  /**
   * @remarks
   * The plan validity period, one year (common) or thirty years (long-term).
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

