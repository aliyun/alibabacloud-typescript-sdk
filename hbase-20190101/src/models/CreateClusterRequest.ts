// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @example
   * hbase_test
   */
  clusterName?: string;
  /**
   * @example
   * 1024
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  coreInstanceType?: string;
  /**
   * @example
   * 400
   */
  diskSize?: number;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * 0d2470df-da7b-4786-b981-9a164dae****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase
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
   * hbase.sn1.medium
   */
  masterInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * 6
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-j4d53glb3****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 116.62.XX.XX/24
   */
  securityIPList?: string;
  /**
   * @example
   * vsw-bp191otqj1ssyl****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp120k6ixs4eog****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clusterName: 'ClusterName',
      coldStorageSize: 'ColdStorageSize',
      coreInstanceType: 'CoreInstanceType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      masterInstanceType: 'MasterInstanceType',
      nodeCount: 'NodeCount',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clusterName: 'string',
      coldStorageSize: 'number',
      coreInstanceType: 'string',
      diskSize: 'number',
      diskType: 'string',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      masterInstanceType: 'string',
      nodeCount: 'number',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
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

