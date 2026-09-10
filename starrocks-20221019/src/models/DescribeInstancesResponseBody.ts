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
   * Indicates whether this is the primary vSwitch.
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
   * The AI dedicated cluster ID, prefixed with af-. This value is returned if an unreleased dedicated cluster exists (including clusters being created). This value is empty if no dedicated cluster has been created.
   * 
   * @example
   * af-498ae4af
   */
  aiFunctionClusterId?: string;
  /**
   * @remarks
   * The internal network connection endpoint of the AI dedicated cluster, in the format fe-{AiFunctionClusterId}-internal.starrocks.aliyuncs.com. This value is returned only after the dedicated cluster is created. This value is empty if no dedicated cluster has been created.
   * 
   * @example
   * fe-af-498ae4af-internal.starrocks.aliyuncs.com
   */
  aiFunctionEndpoint?: string;
  /**
   * @remarks
   * The billing instance ID for the AI function.
   */
  aiFunctionInstanceId?: string;
  /**
   * @remarks
   * The instance architecture. Valid values:
   * 
   * - onEci: deployed on Elastic Container Instance (ECI).
   * - onECS: deployed on Elastic Compute Service (ECS).
   * - onBareMetal: deployed on a bare metal resource pool.
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
  /**
   * @remarks
   * Indicates whether the AI center is enabled. Default value: false.
   */
  enableAiFunction?: boolean;
  /**
   * @remarks
   * Indicates whether automatic minor version upgrades are enabled.
   * 
   * @example
   * true
   */
  enableAutoMinorVersionUpgrade?: boolean;
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
   * The time when the cluster expires.
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
   * - unpaid: Pending payment.
   * - paid: Paid.
   * - creating: Being created.
   * - creating_failed: Creation failed.
   * - created: Created.
   * - running: Running.
   * - updating: Being upgraded.
   * - agent_creating: Agent is being created.
   * - agent_scaling_up: Agent specifications are being upgraded.
   * - modifying_config: Configuration is being updated.
   * - scaling_out: Scaling out.
   * - restarting: Restarting.
   * - scaling_in: Scaling in.
   * - scaling_up: Specifications are being upgraded.
   * - scaling_down: Specifications are being downgraded.
   * - upgrading: Version is being upgraded.
   * - enable_public_network: Public network access is being enabled.
   * - disable_public_network: Public network access is being disabled.
   * - convert_from_trial_to_official: Edition is being converted.
   * - migration_cluster_to_serverless: Cluster is being migrated.
   * - modifying_timezone: Time zone is being modified.
   * - switch_az: Primary/secondary zone switchover is in progress.
   * - enabling: Being resumed.
   * - disable: Unavailable.
   * - actively_disabled: Unavailable.
   * - deleting: Being deleted.
   * - deleting_failed: Deletion failed.
   * - deleted_with_error: Creation failed and terminated.
   * - deleted: Deleted.
   * 
   * @example
   * running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * Indicates whether read/write splitting is enabled. When enabled, the Leader FE node handles write requests and other nodes handle read requests.
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
   * The OSS path.
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
   * - prePaid: subscription.
   * - postPaid: pay-as-you-go.
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
   * - shared_nothing: Shared-nothing architecture.
   * - shared_data: Storage-compute disaggregation.
   * - lakehouse: Data lakehouse analytics.
   * 
   * @example
   * shared_nothing
   */
  runMode?: string;
  /**
   * @remarks
   * The duration that the cluster has been running. Unit: seconds.
   * 
   * @example
   * 3645445
   */
  runningTime?: number;
  /**
   * @remarks
   * Indicates whether the security group is a managed security group.
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
   * The tags that are bound to the instance.
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
   * VPC ID。
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
      enableAiFunction: 'EnableAiFunction',
      enableAutoMinorVersionUpgrade: 'EnableAutoMinorVersionUpgrade',
      enableMultiAz: 'EnableMultiAz',
      enableSSL: 'EnableSSL',
      enabledAuditLoader: 'EnabledAuditLoader',
      encrypted: 'Encrypted',
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
      enableAiFunction: 'boolean',
      enableAutoMinorVersionUpgrade: 'boolean',
      enableMultiAz: 'boolean',
      enableSSL: 'boolean',
      enabledAuditLoader: 'boolean',
      encrypted: 'boolean',
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
   * Indicates whether the request was successful.
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

