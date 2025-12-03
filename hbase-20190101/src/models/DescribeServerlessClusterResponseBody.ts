// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerlessClusterResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @example
   * single
   */
  clusterType?: string;
  /**
   * @example
   * 2019-10-12T14:40:46
   */
  createTime?: string;
  /**
   * @example
   * 150
   */
  cuSize?: string;
  /**
   * @example
   * 200
   */
  diskSize?: string;
  /**
   * @example
   * 2019-10-12T14:40:46
   */
  expireTime?: string;
  /**
   * @example
   * false
   */
  haType?: string;
  /**
   * @example
   * false
   */
  hasUser?: string;
  /**
   * @example
   * https://sh-wz91452kg946i****-lindorm-serverless-in.lindorm.rds.aliyuncs.com:443
   */
  innerEndpoint?: string;
  /**
   * @example
   * hb-bp16f1441y6p2****
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @example
   * true
   */
  isDeletionProtection?: string;
  lockMode?: string;
  /**
   * @example
   * 2.0.8
   */
  mainVersion?: string;
  /**
   * @example
   * https://sh-wz91452kg946i****-lindorm-serverless.lindorm.rds.aliyuncs.com:443
   */
  outerEndpoint?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 89F81C30-320B-4550-91DB-C37C81D2358F
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  reserverMaxQpsNum?: string;
  /**
   * @example
   * 50
   */
  reserverMinQpsNum?: string;
  /**
   * @example
   * rg-fjm2d4v7sf****
   */
  resourceGroupId?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @example
   * NO
   */
  updateStatus?: string;
  /**
   * @example
   * vsw-bp191ipotqf****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp120k6ixs4eoghz****
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      cuSize: 'CuSize',
      diskSize: 'DiskSize',
      expireTime: 'ExpireTime',
      haType: 'HaType',
      hasUser: 'HasUser',
      innerEndpoint: 'InnerEndpoint',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isDeletionProtection: 'IsDeletionProtection',
      lockMode: 'LockMode',
      mainVersion: 'MainVersion',
      outerEndpoint: 'OuterEndpoint',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      reserverMaxQpsNum: 'ReserverMaxQpsNum',
      reserverMinQpsNum: 'ReserverMinQpsNum',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      updateStatus: 'UpdateStatus',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      clusterType: 'string',
      createTime: 'string',
      cuSize: 'string',
      diskSize: 'string',
      expireTime: 'string',
      haType: 'string',
      hasUser: 'string',
      innerEndpoint: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isDeletionProtection: 'string',
      lockMode: 'string',
      mainVersion: 'string',
      outerEndpoint: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      reserverMaxQpsNum: 'string',
      reserverMinQpsNum: 'string',
      resourceGroupId: 'string',
      status: 'string',
      updateStatus: 'string',
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

