// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyDataVSwitches extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the vSwitch is the primary vSwitch.
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1p0mldwx5av55v0xXXX
   */
  vswId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      vswId: 'VswId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      vswId: 'string',
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

export class DescribeInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The network access control list (ACL) ID.
   * 
   * @example
   * acl-bp1xc6b9vs013jjtp****
   */
  aclId?: string;
  /**
   * @remarks
   * The AI dedicated cluster ID. The ID has an af- prefix. This parameter is returned if an unreleased dedicated cluster exists, including those being created. If no dedicated cluster is created, this parameter is empty.
   * 
   * @example
   * af-498ae4af
   */
  aiFunctionClusterId?: string;
  /**
   * @remarks
   * The internal network endpoint of the AI dedicated cluster. The format is fe-{AiFunctionClusterId}-internal.starrocks.aliyuncs.com. This parameter is returned only after the dedicated cluster is created. If no dedicated cluster is created, this parameter is empty.
   * 
   * @example
   * fe-af-498ae4af-internal.starrocks.aliyuncs.com
   */
  aiFunctionEndpoint?: string;
  /**
   * @remarks
   * The AI function billing instance ID.
   * 
   * @example
   * aif-xxxxxxxx
   */
  aiFunctionInstanceId?: string;
  /**
   * @remarks
   * The instance architecture. Valid values:
   * 
   * - onEci: Deployed based on Elastic Container Instance (ECI).
   * - onECS: Deployed based on Elastic Compute Service (ECS).
   * - onBareMetal: Deployed based on bare metal resource pools.
   * 
   * @example
   * onECS
   */
  architecture?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 1733292921000
   */
  beginTime?: number;
  computeFree?: boolean;
  /**
   * @remarks
   * Indicates whether the AI center is enabled. Default value: false.
   */
  enableAiFunction?: boolean;
  /**
   * @remarks
   * Indicates whether automatic minor version upgrades are allowed.
   * 
   * @example
   * true
   */
  enableAutoMinorVersionUpgrade?: boolean;
  /**
   * @remarks
   * Indicates whether disaster recovery is enabled.
   */
  enableMultiAz?: boolean;
  /**
   * @remarks
   * Indicates whether SSL is enabled.
   * 
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * Indicates whether the audit plug-in is enabled.
   * 
   * @example
   * true
   */
  enabledAuditLoader?: boolean;
  /**
   * @remarks
   * Indicates whether encryption is enabled.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The end-of-support date for the cluster version.
   * 
   * @example
   * 2026-07
   */
  eosDate?: string;
  /**
   * @remarks
   * The expiration time of the cluster.
   * 
   * @example
   * 4889001600000
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-d4be777ff5e8cXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * sr_test_1
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - not_init: Not initialized.
   * - unpaid: Unpaid.
   * - paid: Paid.
   * - creating: Creating.
   * - creating_failed: Creation failed.
   * - created: Created.
   * - running: Running.
   * - updating: Upgrading.
   * - agent_creating: Creating the agent.
   * - agent_scaling_up: Scaling up the agent.
   * - modifying_config: Updating configurations.
   * - scaling_out: Scaling out.
   * - restarting: Restarting.
   * - scaling_in: Scaling in.
   * - scaling_up: Scaling up.
   * - scaling_down: Scaling down.
   * - upgrading: Upgrading the version.
   * - enable_public_network: Enabling the public network.
   * - disable_public_network: Disabling the public network.
   * - convert_from_trial_to_official: Converting the edition.
   * - migration_cluster_to_serverless: Migrating the cluster.
   * - modifying_timezone: Modifying the time zone.
   * - switch_az: Switching the primary and secondary zones.
   * - enabling: Recovering.
   * - disable: Unavailable.
   * - actively_disabled: Unavailable.
   * - deleting: Deleting.
   * - deleting_failed: Deletion failed.
   * - deleted_with_error: Ended due to creation failure.
   * - deleted: Deleted.
   * 
   * @example
   * running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * Indicates whether read/write splitting is enabled. If enabled, the leader FE node processes write requests and other nodes process read requests.
   * 
   * @example
   * true
   */
  isolateLeader?: boolean;
  /**
   * @remarks
   * The KMS key ID.
   * 
   * @example
   * rewqfds****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maintenance window of the instance. Valid values:
   * 
   * - 00:00-06:00
   * - 06:00-07:00
   * - 07:00-08:00
   * - 08:00-09:00
   * - 09:00-10:00
   * - 10:00-11:00
   * - 11:00-12:00
   * - 12:00-13:00
   * - 13:00-14:00
   * - 14:00-15:00
   * - 15:00-16:00
   * - 16:00-17:00
   * - 17:00-18:00
   * - 18:00-19:00
   * - 19:00-20:00
   * - 20:00-21:00
   * - 21:00-22:00
   * - 22:00-23:00
   * - 23:00-24:00
   * 
   * @example
   * 00:00-06:00
   */
  maintainablePeriod?: string;
  /**
   * @remarks
   * The minor version number.
   * 
   * @example
   * 3.2.11-1.79-1.6.5
   */
  minorVersion?: string;
  /**
   * @remarks
   * The monitoring service type.
   * 
   * @example
   * cms
   */
  monitorType?: string;
  /**
   * @remarks
   * The OSS address.
   * 
   * @example
   * oss://sr-c-****
   */
  ossLocation?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * - trial: Trial Edition.
   * - official: Standard Edition.
   * 
   * @example
   * official
   */
  packageType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - prePaid: Subscription.
   * - postPaid: Pay-as-you-go.
   * 
   * @example
   * postPaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmytyuofb****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The running mode of the cluster. Valid values:
   * - shared_nothing: Shared-nothing.
   * - shared_data: Shared-data.
   * - lakehouse: Lakehouse.
   * 
   * @example
   * shared_nothing
   */
  runMode?: string;
  /**
   * @remarks
   * The running time of the cluster. Unit: seconds.
   * 
   * @example
   * 3645445
   */
  runningTime?: number;
  /**
   * @remarks
   * Indicates whether the managed security group is used.
   * 
   * @example
   * true
   */
  securityGroupManaged?: boolean;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-8vbaz2etr66a62b9****
   */
  sgId?: string;
  /**
   * @remarks
   * The tags bound to the instance.
   */
  tags?: DescribeInstancesResponseBodyDataTags[];
  /**
   * @remarks
   * The vSwitches.
   */
  vSwitches?: DescribeInstancesResponseBodyDataVSwitches[];
  /**
   * @remarks
   * The cluster version.
   * 
   * @example
   * 3.2
   */
  version?: string;
  /**
   * @remarks
   * The version lifecycle status.
   * 
   * @example
   * Long-term support
   */
  versionLifecycleStatus?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1rbvag1cafkj4prwXXX
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aiFunctionClusterId: 'AiFunctionClusterId',
      aiFunctionEndpoint: 'AiFunctionEndpoint',
      aiFunctionInstanceId: 'AiFunctionInstanceId',
      architecture: 'Architecture',
      beginTime: 'BeginTime',
      computeFree: 'ComputeFree',
      enableAiFunction: 'EnableAiFunction',
      enableAutoMinorVersionUpgrade: 'EnableAutoMinorVersionUpgrade',
      enableMultiAz: 'EnableMultiAz',
      enableSSL: 'EnableSSL',
      enabledAuditLoader: 'EnabledAuditLoader',
      encrypted: 'Encrypted',
      eosDate: 'EosDate',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      isolateLeader: 'IsolateLeader',
      kmsKeyId: 'KmsKeyId',
      maintainablePeriod: 'MaintainablePeriod',
      minorVersion: 'MinorVersion',
      monitorType: 'MonitorType',
      ossLocation: 'OssLocation',
      packageType: 'PackageType',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runMode: 'RunMode',
      runningTime: 'RunningTime',
      securityGroupManaged: 'SecurityGroupManaged',
      sgId: 'SgId',
      tags: 'Tags',
      vSwitches: 'VSwitches',
      version: 'Version',
      versionLifecycleStatus: 'VersionLifecycleStatus',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aiFunctionClusterId: 'string',
      aiFunctionEndpoint: 'string',
      aiFunctionInstanceId: 'string',
      architecture: 'string',
      beginTime: 'number',
      computeFree: 'boolean',
      enableAiFunction: 'boolean',
      enableAutoMinorVersionUpgrade: 'boolean',
      enableMultiAz: 'boolean',
      enableSSL: 'boolean',
      enabledAuditLoader: 'boolean',
      encrypted: 'boolean',
      eosDate: 'string',
      expireTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      isolateLeader: 'boolean',
      kmsKeyId: 'string',
      maintainablePeriod: 'string',
      minorVersion: 'string',
      monitorType: 'string',
      ossLocation: 'string',
      packageType: 'string',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runMode: 'string',
      runningTime: 'number',
      securityGroupManaged: 'boolean',
      sgId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyDataTags },
      vSwitches: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyDataVSwitches },
      version: 'string',
      versionLifecycleStatus: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query results.
   */
  data?: DescribeInstancesResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

