// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpenSearchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: true. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Keep the value unique for each request.
   * 
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Test instance
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The node specification code of the PolarDB-X Search data node. Available specifications vary by region and sales configuration. Use a PolarDB-X Search node specification code that is available for purchase in the current region.
   * 
   * This parameter is required.
   * 
   * @example
   * opensearch.sn2ne.large.1
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The PolarDB-X Search engine version. The value is fixed to 3.0. If you do not specify this parameter, 3.0 is used.
   * 
   * @example
   * 3.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * A compatible parameter. This parameter does not take effect. Specify the node specification of the PolarDB-X Search data node by using DBNodeClass.
   * 
   * @example
   * opensearch.sn2ne.large.1
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The number of PolarDB-X Search data nodes. The value must be a positive integer and an integer multiple of the number of selected zones.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PREPAY**: Subscription.
   * - **POSTPAY**: Pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle. For subscription instances, valid values are Year and Month. For pay-as-you-go instances, the default value is Hour.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This parameter can be left empty. Resource groups are not currently supported.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The storage space per node. Unit: GB. The value must be a positive integer.
   * 
   * @example
   * 20
   */
  storageSpace?: number;
  /**
   * @remarks
   * The storage type. Default value: cloud_auto.
   * 
   * @example
   * cloud_auto
   */
  storageType?: string;
  /**
   * @remarks
   * The topology type. Valid values:
   * 
   * - **1azone**: Single zone.
   * - **3azones**: Three-zone deployment.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @remarks
   * Specifies the subscription duration in months or years.
   * 
   * > If Period is set to Year, valid values for this parameter are 1, 2, and 3.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-*****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The secondary zone. This parameter is required when TopologyType is set to 3azones, and it cannot be the same as other zones.
   * 
   * @example
   * cn-hangzhou-i
   */
  zone2?: string;
  /**
   * @remarks
   * The third zone. This parameter is required when TopologyType is set to 3azones, and it cannot be the same as other zones.
   * 
   * @example
   * cn-hangzhou-j
   */
  zone3?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      DBInstanceDescription: 'DBInstanceDescription',
      DBNodeClass: 'DBNodeClass',
      engineVersion: 'EngineVersion',
      instanceSpec: 'InstanceSpec',
      nodeCount: 'NodeCount',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      topologyType: 'TopologyType',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zone2: 'Zone2',
      zone3: 'Zone3',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientToken: 'string',
      DBInstanceDescription: 'string',
      DBNodeClass: 'string',
      engineVersion: 'string',
      instanceSpec: 'string',
      nodeCount: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storageSpace: 'number',
      storageType: 'string',
      topologyType: 'string',
      usedTime: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
      zone2: 'string',
      zone3: 'string',
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

