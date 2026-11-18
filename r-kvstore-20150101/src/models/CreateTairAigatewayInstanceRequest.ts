// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairAIGatewayInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * > * **N** specifies the sequence number of the tag key. You can attach up to 20 tags to an instance. For example, Tag.1.Key specifies the key of the first tag, and Tag.2.Key specifies the key of the second tag.
   * > * If the tag key does not exist, it is automatically created.
   * 
   * @example
   * demokey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * > **N** specifies the sequence number of the tag value. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
   * 
   * @example
   * testvalue
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

export class CreateTairAIGatewayInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Only pay-as-you-go is supported. Ignore this parameter. Specifies whether to enable automatic payment. The value is fixed to **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Only pay-as-you-go is supported. Ignore this parameter. Specifies whether to enable auto-renewal. Valid values:
   * * **true**: Enable auto-renewal.
   * * **false** (default): Disable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Only pay-as-you-go is supported. Ignore this parameter. The auto-renewal epoch. Unit: months. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * > This parameter is required when **AutoRenew** is set to **true**.
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * Only pay-as-you-go is supported. Ignore this parameter.
   * Specifies whether to use a voucher. Valid values:
   * * **true**: Use a voucher.
   * * **false** (default): Do not use a voucher.
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The activity ID and business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method. Only pay-as-you-go is supported. Valid values:
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The coupon code. Default value: `default`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run before you create the instance. Valid values:
   * * **true**: performs a dry run and does not create the instance. The system checks the request parameters, request format, service limits, and available resources. If the request fails the dry run, the corresponding error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * * **false** (default): sends a normal request and creates the instance after the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the gateway.
   * 
   * @example
   * TestGateway01
   */
  gatewayName?: string;
  /**
   * @remarks
   * The specifications of the gateway.
   * 
   * @example
   * aigw.std.2
   */
  gatewayType?: string;
  /**
   * @remarks
   * Only pay-as-you-go is supported. Ignore this parameter.
   * The renewal period. Unit: months. Valid values: **1** to **9**, **12**, **24**, and **36**.
   * > For example, if an instance expires in three months and you renew it for three months, the instance will expire in six months after the renewal.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. Do not specify this parameter.
   * 
   * @example
   * -
   */
  pluginParams?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. Do not specify this parameter.
   * 
   * @example
   * -
   */
  pluginType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tag?: CreateTairAIGatewayInstanceRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch in the VPC. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query the vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-l
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      businessInfo: 'BusinessInfo',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      dryRun: 'DryRun',
      gatewayName: 'GatewayName',
      gatewayType: 'GatewayType',
      period: 'Period',
      pluginParams: 'PluginParams',
      pluginType: 'PluginType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewPeriod: 'string',
      autoUseCoupon: 'boolean',
      businessInfo: 'string',
      chargeType: 'string',
      clientToken: 'string',
      couponNo: 'string',
      dryRun: 'boolean',
      gatewayName: 'string',
      gatewayType: 'string',
      period: 'number',
      pluginParams: 'string',
      pluginType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateTairAIGatewayInstanceRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

