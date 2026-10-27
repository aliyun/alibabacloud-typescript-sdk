// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpenSearchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: true. Valid values:
   * - **true**: enables auto-renewal
   * - **false**: disables auto-renewal
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The idempotency token. Make sure that the value is unique for each creation request.
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
   * The code for the node specifications of the PolarDBX Search data node. The active node specifications vary by region and sales configuration. Use a PolarDBX Search node specifications code that is available for purchase in the current region.
   * 
   * This parameter is required.
   * 
   * @example
   * opensearch.sn2ne.large.1
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The database engine version of PolarDBX Search. The current fixed DPI engine version is 3.0. If this parameter is not specified, 3.0 is used.
   * 
   * @example
   * 3.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * A compatible parameter. This parameter does not take effect. Specify the node specifications of the PolarDBX Search data node by using DBNodeClass.
   * 
   * @example
   * opensearch.sn2ne.large.1
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The number of PolarDBX Search data nodes. The value must be a positive integer and an integer multiple of the number of selected zones.
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
   * - **PREPAY**: subscription
   * - **POSTPAY**: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle. For subscription instances, only Year and Month are supported. For pay-as-you-go instances, the default value is Hour.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This parameter can be left empty and is not currently supported.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The storage space per node, in GB. The value must be a positive integer.
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
   * The active topology type. Valid values:
   * - **1azone**: single-zone.
   * - **3azones**: Three-zone deployment.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @remarks
   * The subscription duration. You can specify a duration in months or years for subscription instances.
   * 
   * > When Period is set to Year, valid values for this parameter are 1, 2, and 3.
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
   * The secondary zone. This parameter is required when TopologyType is set to 3azones, and the value must be different from other zones.
   * 
   * @example
   * cn-hangzhou-i
   */
  zone2?: string;
  /**
   * @remarks
   * The third zone for Three-zone deployment. This parameter is required when TopologyType is set to 3azones, and the value must be different from other active zones.
   * 
   * @example
   * cn-hangzhou-j
   */
  zone3?: string;
  /**
   * @remarks
   * The zone of the instance.
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

