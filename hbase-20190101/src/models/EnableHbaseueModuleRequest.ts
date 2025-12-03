// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableHBaseueModuleRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * bds-bp174pm3tsk3****
   */
  bdsId?: string;
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.large
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  hbaseueClusterId?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  masterInstanceType?: string;
  /**
   * @example
   * cluster-name
   */
  moduleClusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * solr
   */
  moduleTypeName?: string;
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
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp120k6ixs4eog*****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-bp191ipotqj1ssyl*****
   */
  vswitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewPeriod: 'AutoRenewPeriod',
      bdsId: 'BdsId',
      clientToken: 'ClientToken',
      coreInstanceType: 'CoreInstanceType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      hbaseueClusterId: 'HbaseueClusterId',
      masterInstanceType: 'MasterInstanceType',
      moduleClusterName: 'ModuleClusterName',
      moduleTypeName: 'ModuleTypeName',
      nodeCount: 'NodeCount',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewPeriod: 'number',
      bdsId: 'string',
      clientToken: 'string',
      coreInstanceType: 'string',
      diskSize: 'number',
      diskType: 'string',
      hbaseueClusterId: 'string',
      masterInstanceType: 'string',
      moduleClusterName: 'string',
      moduleTypeName: 'string',
      nodeCount: 'number',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
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

