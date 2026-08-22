// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpenSearchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: true.
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request. Use a different value for each creation request.
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
   * TestInstance
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The node specifications code of PolarDBX Search data nodes. Available specifications depend on the region and sales configuration. Use a PolarDBX Search specification code that is available for purchase in the current region.
   * 
   * This parameter is required.
   * 
   * @example
   * opensearch.sn2ne.large.1
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The PolarDBX Search DPI engine version. The value is fixed to 3.0. If this parameter is not specified, the default value 3.0 is used.
   * 
   * @example
   * 3.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * A compatible parameter that does not take effect. Use DBNodeClass to specify the PolarDBX Search data node specifications.
   * 
   * @example
   * opensearch.sn2ne.large.1
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The number of PolarDBX Search data nodes. The value must be a positive integer and a multiple of the number of selected zones.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * - **PREPAY**: subscription.
   * - **POSTPAY**: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle. Valid values for subscription: Year and Month. Default value for pay-as-you-go: Hour.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This parameter can be left empty. This parameter is not supported.
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
   * The topology type. Valid values:
   * 
   * - **1azone**: single active zone.
   * - **3azones**: three active zones.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @remarks
   * The subscription duration. Specify the number of months or years for prepaid instances.
   * 
   * > When Period is set to Year, valid values for this parameter are 1, 2, and 3.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * VPC ID。
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
   * The second zone. This parameter is required when TopologyType is set to 3azones. The value cannot be the same as other zones.
   * 
   * @example
   * cn-hangzhou-i
   */
  zone2?: string;
  /**
   * @remarks
   * The third zone. This parameter is required when TopologyType is set to 3azones. The value cannot be the same as other zones.
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

