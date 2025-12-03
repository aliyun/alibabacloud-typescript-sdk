// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateMultiZoneResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxb****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  archVersion?: string;
  /**
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * f4g8t5rd2gr94****
   */
  clientToken?: string;
  /**
   * @example
   * hbaseue_test
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 400
   */
  coreDiskSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_ssd
   */
  coreDiskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  coreInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  coreNodeCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @example
   * 400
   */
  logDiskSize?: number;
  /**
   * @example
   * cloud_ssd
   */
  logDiskType?: string;
  /**
   * @example
   * hbase.sn1.medium
   */
  logInstanceType?: string;
  /**
   * @example
   * 4
   */
  logNodeCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  masterInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-bef-aliyun-com
   */
  multiZoneCombination?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxe*****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-e
   */
  primaryZoneId?: string;
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
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxf****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp120k6ixs4eog*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clusterName: 'ClusterName',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceType: 'CoreInstanceType',
      coreNodeCount: 'CoreNodeCount',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      logDiskSize: 'LogDiskSize',
      logDiskType: 'LogDiskType',
      logInstanceType: 'LogInstanceType',
      logNodeCount: 'LogNodeCount',
      masterInstanceType: 'MasterInstanceType',
      multiZoneCombination: 'MultiZoneCombination',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      archVersion: 'string',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clusterName: 'string',
      coreDiskSize: 'number',
      coreDiskType: 'string',
      coreInstanceType: 'string',
      coreNodeCount: 'number',
      engine: 'string',
      engineVersion: 'string',
      logDiskSize: 'number',
      logDiskType: 'string',
      logInstanceType: 'string',
      logNodeCount: 'number',
      masterInstanceType: 'string',
      multiZoneCombination: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      primaryVSwitchId: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      securityIPList: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

