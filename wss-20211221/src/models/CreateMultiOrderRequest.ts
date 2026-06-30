// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateMultiOrderRequestOrderItemsComponents extends $dara.Model {
  /**
   * @remarks
   * The key of the component.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the component.
   * 
   * Example and valid values for the keys of a monthly duration package (Enterprise Edition):
   * 
   * - RegionId: cn-shanghai
   * 
   * - InstanceType: eds.enterprise_office.4c8g
   * 
   * - DurationType (in hours): Valid values:
   * 
   *   - 120
   * 
   *   - 250
   * 
   * - OsType: Valid values:
   * 
   *   - Windows
   * 
   *   - Linux
   * 
   * - RootDiskSize (in GiB): 80
   * 
   * - RootDiskCategory: Valid values:
   * 
   *   - cloud_efficiency (Ultra Disk)
   * 
   *   - cloud_auto (ESSD AutoPL Disk)
   * 
   *   - `cloud_essd` (Enhanced SSD). This value is supported only by specific instance types.
   * 
   * - RootPerformanceLevel: Valid values:
   * 
   *   - PL0
   * 
   *   - PL1
   * 
   *   - PL2
   * 
   *   - PL3
   * 
   * - DataDiskSize (in GiB): Same as `RootDiskSize`.
   * 
   * - DataDiskCategory: Same as `RootDiskCategory`.
   * 
   * - DataPerformanceLevel: Same as `RootPerformanceLevel`.
   * 
   * @example
   * cn-shanghai
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiOrderRequestOrderItems extends $dara.Model {
  /**
   * @remarks
   * The number of resources to purchase.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  buyChange?: boolean;
  /**
   * @remarks
   * The components that define the resource.
   */
  components?: CreateMultiOrderRequestOrderItemsComponents[];
  instanceIds?: string[];
  /**
   * @remarks
   * The subscription period. Valid values:
   * 
   * - If `PeriodUnit` is set to `Year`, the valid values are 1, 2, 3, and 5.
   * 
   * - If `PeriodUnit` is set to `Month`, the valid values are 1, 2, 3, and 6.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit of the subscription duration.
   * 
   * > This parameter is required for prepaid instances and is case-sensitive.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * A list of resource IDs.
   * 
   * > For a monthly duration package, this parameter specifies the IDs of the cloud desktops. This parameter is required unless the `OrderType` is `create`.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the resource.
   * 
   * > This parameter is case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * DurationPackage
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      buyChange: 'BuyChange',
      components: 'Components',
      instanceIds: 'InstanceIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      buyChange: 'boolean',
      components: { 'type': 'array', 'itemType': CreateMultiOrderRequestOrderItemsComponents },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiOrderRequest extends $dara.Model {
  channelCookie?: string;
  /**
   * @remarks
   * The items in the order.
   */
  orderItems?: CreateMultiOrderRequestOrderItems[];
  /**
   * @remarks
   * The order type.
   * 
   * @example
   * create
   */
  orderType?: string;
  /**
   * @remarks
   * The extended properties.
   */
  properties?: { [key: string]: string };
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      channelCookie: 'ChannelCookie',
      orderItems: 'OrderItems',
      orderType: 'OrderType',
      properties: 'Properties',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCookie: 'string',
      orderItems: { 'type': 'array', 'itemType': CreateMultiOrderRequestOrderItems },
      orderType: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderItems)) {
      $dara.Model.validateArray(this.orderItems);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

