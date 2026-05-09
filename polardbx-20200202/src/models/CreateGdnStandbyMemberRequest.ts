// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGdnStandbyMemberRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @example
   * 2
   */
  CNNodeCount?: string;
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-***
   */
  cloneInstanceName?: string;
  cnClass?: string;
  /**
   * @example
   * 2
   */
  DNNodeCount?: string;
  /**
   * @example
   * go-to-the-docks-for-french-fries
   */
  description?: string;
  dnClass?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @example
   * Month
   */
  period?: string;
  /**
   * @example
   * cn-shenzhen-e
   */
  primaryZone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * null
   */
  resourceGroupId?: string;
  /**
   * @example
   * cn-shenzhen-a
   */
  secondaryZone?: string;
  /**
   * @example
   * enterprise
   */
  series?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  sourceInstanceRegion?: string;
  /**
   * @example
   * cloud_auto
   */
  storageType?: string;
  /**
   * @example
   * cn-shenzhen-e
   */
  tertiaryZone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-*****
   */
  VPCId?: string;
  /**
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      CNNodeCount: 'CNNodeCount',
      clientToken: 'ClientToken',
      cloneInstanceName: 'CloneInstanceName',
      cnClass: 'CnClass',
      DNNodeCount: 'DNNodeCount',
      description: 'Description',
      dnClass: 'DnClass',
      engineVersion: 'EngineVersion',
      networkType: 'NetworkType',
      payType: 'PayType',
      period: 'Period',
      primaryZone: 'PrimaryZone',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondaryZone: 'SecondaryZone',
      series: 'Series',
      sourceInstanceRegion: 'SourceInstanceRegion',
      storageType: 'StorageType',
      tertiaryZone: 'TertiaryZone',
      topologyType: 'TopologyType',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      CNNodeCount: 'string',
      clientToken: 'string',
      cloneInstanceName: 'string',
      cnClass: 'string',
      DNNodeCount: 'string',
      description: 'string',
      dnClass: 'string',
      engineVersion: 'string',
      networkType: 'string',
      payType: 'string',
      period: 'string',
      primaryZone: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryZone: 'string',
      series: 'string',
      sourceInstanceRegion: 'string',
      storageType: 'string',
      tertiaryZone: 'string',
      topologyType: 'string',
      usedTime: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

