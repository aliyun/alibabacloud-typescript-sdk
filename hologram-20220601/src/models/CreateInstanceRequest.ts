// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: true. Valid values:
   * - true: Automatic payment is enabled.
   * - false: Only an order is generated, and no payment is made.
   * > Default value: true. If your payment method has insufficient balance, you can set the AutoPay parameter to false. In this case, an unpaid order is generated, and you can log on to the Expenses and Costs console to complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable monthly auto-renewal. Default value: false. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * - PrePaid: Subscription.
   * - PostPaid: Pay-as-you-go.
   * > This parameter is ignored for Shared instances. Shared is a defined specifications type, and its billing method defaults to PostPaid.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The low-frequency storage capacity of the instance. Unit: GB.
   * > This parameter is ignored for pay-as-you-go instances.
   * 
   * @example
   * 500
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * The instance specifications. Valid values:
   * - 32 cores, 128 GB (Number of compute nodes: 2)
   * - 64 cores, 256 GB (Number of compute nodes: 4)
   * - 96 cores, 384 GB (Number of compute nodes: 6)
   * - 128 cores, 512 GB (Number of compute nodes: 8)
   * - Other specifications
   * 
   * >
   *  >- Specify the number of cores.
   *  >- To purchase an instance with more than 1,024 cores, submit a ticket.
   *  >- You do not need to specify the specifications for a Shared instance.
   * 
   * @example
   * 64
   */
  cpu?: number;
  /**
   * @remarks
   * The subscription duration. For example, set this parameter to 2 for a two-month subscription.
   * > This parameter is not required if the billing method is PostPaid.
   * 
   * @example
   * 2
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable Serverless Computing.
   * 
   * @example
   * true
   */
  enableServerlessComputing?: boolean;
  /**
   * @remarks
   * The number of gateways. Valid values: 2 to 50.
   * 
   * > This parameter is required only for Warehouse instances.
   * 
   * @example
   * 4
   */
  gatewayCount?: number;
  /**
   * @remarks
   * The initial databases.
   * 
   * @example
   * chatbot
   */
  initialDatabases?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 64 characters in length. Each Chinese character or letter counts as one character.
   * 
   * This parameter is required.
   * 
   * @example
   * my_holo
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - Standard: General-purpose.
   * - Follower: Read-only secondary instance.
   * - Warehouse: Compute group.
   * - Shared: Shared.
   * - Severless: Serverless.
   * 
   * This parameter is required.
   * 
   * @example
   * Standard
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the primary instance. This parameter is required for Follower instances.
   * 
   * > The primary and secondary instances must meet the following conditions:
   * > - The primary instance is in the Running state.
   * > - The primary and secondary instances are in the same region.
   * > - The primary and secondary instances are in the same zone.
   * > - The primary instance is associated with fewer than 10 secondary instances.
   * > - The primary and secondary instances belong to the same Alibaba Cloud account.
   * 
   * @example
   * hgpostcn-cn-lbj3aworq112
   */
  leaderInstanceId?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * - Month: Monthly billing.
   * - Hour: Hourly billing.
   * >
   * > - PrePaid supports only Month.
   * > - PostPaid supports only Hour.
   * > - For Shared instances, this parameter is automatically set to Hour and does not need to be specified.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID. You can go to <props="china">[service registration endpoints](https://www.alibabacloud.com/help/en/hologres/developer-reference/api-hologram-2022-06-01-endpoint)
   * <props="intl">[service registration endpoints](https://www.alibabacloud.com/help/zh/hologres/developer-reference/api-hologram-2022-06-01-endpoint) to view the supported regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If this parameter is left empty, the default resource group of the account is used.
   * 
   * @example
   * ""
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The standard storage capacity of the instance. Unit: GB.
   * > This parameter is ignored for pay-as-you-go instances.
   * 
   * @example
   * 500
   */
  storageSize?: number;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * redundant
   */
  storageType?: string;
  /**
   * @remarks
   * The ID of the vSwitch. The zone ID of the vSwitch must be the same as that of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2vccsiymtxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). The region ID of the VPC must be the same as that of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-t4netc3y5xxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID. Refer to the usage notes.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'autoPay',
      autoRenew: 'autoRenew',
      chargeType: 'chargeType',
      coldStorageSize: 'coldStorageSize',
      cpu: 'cpu',
      duration: 'duration',
      enableServerlessComputing: 'enableServerlessComputing',
      gatewayCount: 'gatewayCount',
      initialDatabases: 'initialDatabases',
      instanceName: 'instanceName',
      instanceType: 'instanceType',
      leaderInstanceId: 'leaderInstanceId',
      pricingCycle: 'pricingCycle',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      storageSize: 'storageSize',
      storageType: 'storageType',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      chargeType: 'string',
      coldStorageSize: 'number',
      cpu: 'number',
      duration: 'number',
      enableServerlessComputing: 'boolean',
      gatewayCount: 'number',
      initialDatabases: 'string',
      instanceName: 'string',
      instanceType: 'string',
      leaderInstanceId: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storageSize: 'number',
      storageType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

