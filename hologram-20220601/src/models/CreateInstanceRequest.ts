// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-payment. Default value: true. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  The default value is true. If the balance of your account is insufficient, you can set this parameter to false. In this case, an unpaid order is generated. You can log on to the Expenses and Costs console to pay for the order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable monthly auto-renewal. The default value is false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * >  This parameter is invalid for Hologres Shared Cluster instances. Hologres Shared Cluster instances have fixed specifications and are pay-as-you-go instances.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The infrequent access (IA) storage space of the instance. Unit: GB.
   * 
   * >  This parameter is invalid for pay-as-you-go instances.
   * 
   * @example
   * 500
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * The instance specifications. Valid values:
   * 
   * *   8-core 32GB (number of compute nodes: 1)
   * *   32-core 128GB (number of compute nodes: 2)
   * *   64-core 256GB (number of compute nodes: 4)
   * *   96-core 384GB (number of compute nodes: 6)
   * *   128-core 512GB (number of compute nodes: 8)
   * *   Others
   * 
   * > 
   * 
   * *   Set this parameter to the number of cores.
   * 
   * *   If you want to set this parameter to specifications with more than 1,024 GB, you must submit a ticket.
   * 
   * *   This parameter is invalid for Hologres Shared Cluster instances.
   * 
   * *   The specifications of 8-core 32GB (number of compute nodes: 1) are for trial use only and cannot be used for production.
   * 
   * @example
   * 64
   */
  cpu?: number;
  /**
   * @remarks
   * The validity period of the instance that you want to purchase. For example, you can specify a validity period of two months.
   * 
   * >  You do not need to configure this parameter for pay-as-you-go instances.
   * 
   * @example
   * 2
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable the Serverless Computing feature.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableServerlessComputing?: boolean;
  /**
   * @remarks
   * The number of gateways. Valid values: 2 to 50.
   * 
   * >  This parameter is required only for virtual warehouse instances.
   * 
   * @example
   * 4
   */
  gatewayCount?: number;
  /**
   * @remarks
   * The initial database.
   * 
   * @example
   * chatbot
   */
  initialDatabases?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my_holo
   */
  instanceName?: string;
  /**
   * @remarks
   * The category of the instance. Valid values:
   * 
   * *   Standard: general-purpose instance
   * *   Follower: read-only secondary instance
   * *   Warehouse: virtual warehouse instance
   * *   Shared: Hologres Shared Cluster instance
   * 
   * This parameter is required.
   * 
   * @example
   * Standard
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the primary instance. This parameter is required for read-only secondary instances.
   * 
   * >  The primary and secondary instances must meet the following requirements:
   * 
   * *   The primary instance is in the Running state.
   * 
   * *   The primary instance and secondary instances are deployed in the same region.
   * 
   * *   The primary instance and secondary instances are deployed in the same zone.
   * 
   * *   Less than 10 secondary instances are associated with the primary instance.
   * 
   * *   The primary instance and secondary instances belong to the same Alibaba Cloud account.
   * 
   * @example
   * hgpostcn-cn-lbj3aworq112
   */
  leaderInstanceId?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * *   Month
   * *   Hour
   * 
   * > 
   * 
   * *   This parameter can only be set to Month for subscription instances.
   * 
   * *   This parameter can only be set to Hour for pay-as-you-go instances.
   * 
   * *   By default, this parameter is set to Hour for Hologres Shared Cluster instances.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the region. You can obtain region IDs in [Endpoints](https://www.alibabacloud.com/help/en/maxcompute/user-guide/endpoints).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify this parameter, the default resource group of the account is used.
   * 
   * @example
   * ""
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The standard storage space of the instance. Unit: GB.
   * 
   * >  This parameter is invalid for pay-as-you-go instances.
   * 
   * @example
   * 500
   */
  storageSize?: number;
  storageType?: string;
  /**
   * @remarks
   * The ID of the vSwitch. The zone in which the vSwitch resides must be the same as the zone in which the Hologres instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2vccsiymtxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). The region in which the VPC resides must be the same as the region in which the Hologres instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-t4netc3y5xxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone. For more information, see the "Operation description" section in this topic.
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

