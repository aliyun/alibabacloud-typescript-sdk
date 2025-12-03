// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerlessInstanceResponseBody extends $dara.Model {
  autoRenew?: string;
  clusterType?: string;
  createTime?: string;
  cuSize?: string;
  diskSize?: string;
  expireTime?: string;
  haType?: string;
  hasUser?: string;
  innerEndpoint?: string;
  instanceId?: string;
  instanceName?: string;
  isDeletionProtection?: string;
  lockMode?: string;
  mainVersion?: string;
  outerEndpoint?: string;
  payType?: string;
  regionId?: string;
  requestId?: string;
  reserverMaxQpsNum?: string;
  reserverMinQpsNum?: string;
  status?: string;
  updateStatus?: string;
  vSwitchId?: string;
  vpcId?: string;
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

