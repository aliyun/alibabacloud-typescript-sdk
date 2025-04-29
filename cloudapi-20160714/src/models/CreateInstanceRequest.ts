// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceRequestTag } from "./CreateInstanceRequestTag";
import { CreateInstanceRequestZoneVSwitchSecurityGroup } from "./CreateInstanceRequestZoneVswitchSecurityGroup";


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to automatically pay when renewing. Value:
   * 
   * - True: Automatic payment. Please ensure that your account has sufficient balance.
   * - False: Console manual payment. The specific operation is to log in to the console, select Expenses in the upper right corner, enter the Expense Center, and find the target order in Order Management to make payment.
   * 
   * Default value: False.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The billing method of the instance. Valid values: PostPaid (pay-as-you-go) and PrePaid (subscription).
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The subscription duration of the instance.
   * 
   * *   If PricingCycle is set to **Month**, set this parameter to an integer ranges from **1** to **9**.
   * *   If PricingCycle is set to **Year**, set this parameter to an integer ranges from **1** to **3**.
   * 
   * >  This parameter is valid and required only if the ChargeType parameter is set to **PrePaid**.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The HTTPS policy.
   * 
   * @example
   * HTTPS2_TLS1_2
   */
  httpsPolicy?: string;
  /**
   * @remarks
   * The CIDR block of the VPC integration instance.
   * 
   * *   192.168.0.0/16
   * *   172.16.0.0/12
   * 
   * **
   * 
   * **Warning** The VPC integration instance is connected to the specified CIDR block. Plan your CIDR block carefully to prevent overlaps with the private IP addresses of cloud services.
   * 
   * >  This parameter is in invitational preview and not available for public use.
   * 
   * @example
   * 172.16.0.0/12
   */
  instanceCidr?: string;
  /**
   * @remarks
   * Instance Name
   * 
   * This parameter is required.
   * 
   * @example
   * ApigatewayInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * Instance specifications
   * 
   * This parameter is required.
   * 
   * @example
   * api.s1.small
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The type of the dedicated instance. Valid values:
   * 
   * *   vpc_connect: a VPC integration instance
   * *   normal: a conventional dedicated instance
   * 
   * >  This parameter is in invitational preview and not available for public use.
   * 
   * @example
   * vpc_connect
   */
  instanceType?: string;
  /**
   * @remarks
   * The unit of the subscription duration of the subscription instance. Valid values:
   * 
   * *   **year**
   * *   **month**
   * 
   * >  This parameter is required if the ChargeType parameter is set to Prepaid.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The tags that you want to add to the instance.
   */
  tag?: CreateInstanceRequestTag[];
  /**
   * @remarks
   * Passwords are used to prevent duplicate requests from being submitted, please do not reuse them.
   * 
   * This parameter is required.
   * 
   * @example
   * c20d86c4-1eb3-4d0b-afe9-c586df1e2136
   */
  token?: string;
  /**
   * @remarks
   * The ID of the user\\"s VPC to be connected by the VPC integration instance.
   * 
   * >  This parameter is in invitational preview and not available for public use.
   * 
   * @example
   * vpc-m5eo7khlb4h4f8y9egsdg
   */
  userVpcId?: string;
  /**
   * @remarks
   * The zone in which you want to create the instance. This parameter is required for a conventional dedicated instance and optional for a virtual private cloud (VPC) integration instance.
   * 
   * @example
   * cn-beijing-MAZ3(c,e)
   */
  zoneId?: string;
  /**
   * @remarks
   * The network information when the instance is a VPC integration instance, such as the zone, vSwitch, and security group.
   * 
   * >  This parameter is in invitational preview and not available for public use.
   */
  zoneVSwitchSecurityGroup?: CreateInstanceRequestZoneVSwitchSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      chargeType: 'ChargeType',
      duration: 'Duration',
      httpsPolicy: 'HttpsPolicy',
      instanceCidr: 'InstanceCidr',
      instanceName: 'InstanceName',
      instanceSpec: 'InstanceSpec',
      instanceType: 'InstanceType',
      pricingCycle: 'PricingCycle',
      tag: 'Tag',
      token: 'Token',
      userVpcId: 'UserVpcId',
      zoneId: 'ZoneId',
      zoneVSwitchSecurityGroup: 'ZoneVSwitchSecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      chargeType: 'string',
      duration: 'number',
      httpsPolicy: 'string',
      instanceCidr: 'string',
      instanceName: 'string',
      instanceSpec: 'string',
      instanceType: 'string',
      pricingCycle: 'string',
      tag: { 'type': 'array', 'itemType': CreateInstanceRequestTag },
      token: 'string',
      userVpcId: 'string',
      zoneId: 'string',
      zoneVSwitchSecurityGroup: { 'type': 'array', 'itemType': CreateInstanceRequestZoneVSwitchSecurityGroup },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.zoneVSwitchSecurityGroup)) {
      $dara.Model.validateArray(this.zoneVSwitchSecurityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

