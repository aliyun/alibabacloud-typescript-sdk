// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerlessClusterRequest extends $dara.Model {
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
   * xx
   */
  clientType?: string;
  /**
   * @example
   * serverless-name
   */
  clusterName?: string;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * serverlesshbase
   */
  engine?: string;
  /**
   * @example
   * 2.0
   */
  engineVersion?: string;
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
   * 1000
   */
  serverlessCapability?: number;
  /**
   * @example
   * serverless.small
   */
  serverlessSpec?: string;
  /**
   * @example
   * 100
   */
  serverlessStorage?: number;
  /**
   * @example
   * vsw-bp191ipotqj1ssyl*****
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
      clientType: 'ClientType',
      clusterName: 'ClusterName',
      diskType: 'DiskType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverlessCapability: 'ServerlessCapability',
      serverlessSpec: 'ServerlessSpec',
      serverlessStorage: 'ServerlessStorage',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clientType: 'string',
      clusterName: 'string',
      diskType: 'string',
      engine: 'string',
      engineVersion: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serverlessCapability: 'number',
      serverlessSpec: 'string',
      serverlessStorage: 'number',
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

