// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerlessClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled. Valid values:
   * - **true**: Auto-renewal is enabled.
   * - **false**: Auto-renewal is not enabled.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * - **Cluster**: Cluster Edition.
   * - **Single**: single-node.
   * 
   * @example
   * single
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2019-10-12T14:40:46
   */
  createTime?: string;
  /**
   * @remarks
   * The compute unit (CU) size.
   * 
   * @example
   * 150
   */
  cuSize?: string;
  /**
   * @remarks
   * The disk size of the node. Unit: GB.
   * 
   * @example
   * 200
   */
  diskSize?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2019-10-12T14:40:46
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether high availability (HA) is enabled. Valid values:
   * - **true**: HA is enabled.
   * - **false**: HA is not enabled.
   * 
   * @example
   * false
   */
  haType?: string;
  /**
   * @remarks
   * Indicates whether the cluster has users. Valid values:
   * - **true**: The cluster has users.
   * - **false**: The cluster does not have users.
   * 
   * @example
   * false
   */
  hasUser?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * https://sh-wz91452kg946i****-lindorm-serverless-in.lindorm.rds.aliyuncs.com:443
   */
  innerEndpoint?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * hb-bp16f1441y6p2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled.
   * 
   * @example
   * true
   */
  isDeletionProtection?: string;
  /**
   * @remarks
   * The lock type of the cluster.
   * > This parameter does not return a value.
   * 
   * @example
   * 过期
   */
  lockMode?: string;
  /**
   * @remarks
   * The major version.
   * 
   * @example
   * 2.0.8
   */
  mainVersion?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * https://sh-wz91452kg946i****-lindorm-serverless.lindorm.rds.aliyuncs.com:443
   */
  outerEndpoint?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - **Prepaid**: subscription.
   * - **Postpaid**: pay-as-you-go.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89F81C30-320B-4550-91DB-C37C81D2358F
   */
  requestId?: string;
  /**
   * @remarks
   * The maximum reserved QPS.
   * 
   * @example
   * 100
   */
  reserverMaxQpsNum?: string;
  /**
   * @remarks
   * The minimum reserved QPS.
   * 
   * @example
   * 50
   */
  reserverMinQpsNum?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resource belongs.
   * 
   * @example
   * rg-fjm2d4v7sf****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The current status. Valid values:
   * - **CREATING**: being created.
   * - **ACTIVATION**: running.
   * - **DELETING**: being deleted.
   * - **RESTARTING**: being restarted.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The minor version upgrade status. Valid values:
   * - **YES**: An upgrade is available.
   * - **NO**: No upgrade is available.
   * - **PENDING**: An upgrade is in progress.
   * 
   * @example
   * NO
   */
  updateStatus?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp191ipotqf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the instance belongs.
   * 
   * @example
   * vpc-bp120k6ixs4eoghz****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
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

