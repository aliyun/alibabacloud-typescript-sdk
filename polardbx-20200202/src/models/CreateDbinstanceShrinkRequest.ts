// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  CNNodeCount?: number;
  /**
   * @example
   * xxxxxx-xxx
   */
  clientToken?: string;
  cnClass?: string;
  /**
   * @example
   * polarx.x4.2xlarge.2d
   */
  DBNodeClass?: string;
  /**
   * @example
   * 2
   */
  DBNodeCount?: number;
  DNNodeCount?: number;
  description?: string;
  dnClass?: string;
  dnStorageSpace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  extraParamsShrink?: string;
  isColumnarReadDBInstance?: boolean;
  /**
   * @example
   * false
   */
  isReadDBInstance?: boolean;
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
   * pxc-*********
   */
  primaryDBInstanceName?: string;
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
  series?: string;
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
  /**
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      CNNodeCount: 'CNNodeCount',
      clientToken: 'ClientToken',
      cnClass: 'CnClass',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DNNodeCount: 'DNNodeCount',
      description: 'Description',
      dnClass: 'DnClass',
      dnStorageSpace: 'DnStorageSpace',
      engineVersion: 'EngineVersion',
      extraParamsShrink: 'ExtraParams',
      isColumnarReadDBInstance: 'IsColumnarReadDBInstance',
      isReadDBInstance: 'IsReadDBInstance',
      networkType: 'NetworkType',
      payType: 'PayType',
      period: 'Period',
      primaryDBInstanceName: 'PrimaryDBInstanceName',
      primaryZone: 'PrimaryZone',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondaryZone: 'SecondaryZone',
      series: 'Series',
      tertiaryZone: 'TertiaryZone',
      topologyType: 'TopologyType',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      CNNodeCount: 'number',
      clientToken: 'string',
      cnClass: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DNNodeCount: 'number',
      description: 'string',
      dnClass: 'string',
      dnStorageSpace: 'string',
      engineVersion: 'string',
      extraParamsShrink: 'string',
      isColumnarReadDBInstance: 'boolean',
      isReadDBInstance: 'boolean',
      networkType: 'string',
      payType: 'string',
      period: 'string',
      primaryDBInstanceName: 'string',
      primaryZone: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryZone: 'string',
      series: 'string',
      tertiaryZone: 'string',
      topologyType: 'string',
      usedTime: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
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

