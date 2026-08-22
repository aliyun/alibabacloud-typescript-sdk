// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchInfoResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The identity used for authentication in the request.
   * 
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authentication principal.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The authentication principal type.
   * 
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic message.
   * 
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The type of the permission denial.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * PRIORITY
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchInfoResponseBodyDataInstance extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - **POSTPAY**: pay-as-you-go.
   * - **PREPAY**: subscription.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The OpenSearch-compatible version.
   * 
   * @example
   * 2.0
   */
  compatibleVersion?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-02-17T02:00:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deployment mode. Valid values:
   * - multiple: multi-zone deployment.
   * - single: single-zone deployment.
   * 
   * @example
   * NORMAL
   */
  deployMode?: string;
  /**
   * @remarks
   * The DPI engine version. Default value: 2.0.
   * 
   * @example
   * anchashi
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2026-01-27T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-spsil01pww4hfz-mem
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-bjr76v5uw7z4f5fs-cdc
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type of the connection string. Valid values:
   * * **Public**: public endpoint.
   * * **Private**: private endpoint.
   * * **Inner**: private endpoint (classic network).
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the last task was updated (in timestamp format).
   * 
   * @example
   * 2025-09-02T16:01:51Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the access endpoint resides.
   * 
   * @example
   * vpc-2ze99u5upo8zxyf5dlfl5
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is required when you create a DRDS instance of the VPC network type.
   * 
   * @example
   * vsw-2zes4ojp6ygziyvq3vhd2
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      compatibleVersion: 'CompatibleVersion',
      createTime: 'CreateTime',
      deployMode: 'DeployMode',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      netType: 'NetType',
      regionId: 'RegionId',
      status: 'Status',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      compatibleVersion: 'string',
      createTime: 'string',
      deployMode: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      netType: 'string',
      regionId: 'string',
      status: 'string',
      updateTime: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchInfoResponseBodyDataSpec extends $dara.Model {
  /**
   * @remarks
   * The number of coordinator nodes.
   * 
   * @example
   * 3
   */
  coordinatorNodeCount?: number;
  /**
   * @remarks
   * The number of CPU cores of a single coordinator node.
   * 
   * @example
   * 4
   */
  coordinatorNodeCpu?: number;
  /**
   * @remarks
   * Indicates whether coordinator nodes are enabled.
   */
  coordinatorNodeEnabled?: boolean;
  /**
   * @remarks
   * The memory size of a single coordinator node. Unit: GB.
   * 
   * @example
   * 16
   */
  coordinatorNodeMemoryGB?: number;
  /**
   * @remarks
   * The number of data nodes.
   * 
   * @example
   * 3
   */
  dataNodeCount?: number;
  /**
   * @remarks
   * The number of CPU cores of a single data node.
   * 
   * @example
   * 8
   */
  dataNodeCpu?: number;
  /**
   * @remarks
   * The memory size of a single data node. Unit: GB.
   * 
   * @example
   * 32
   */
  dataNodeMemoryGB?: number;
  /**
   * @remarks
   * The master node type. Valid values:
   * - **0**: The master node is a single node.
   * - **2**: The master node is in Cluster Edition.
   * 
   * @example
   * 2
   */
  masterNodeCount?: number;
  /**
   * @remarks
   * The number of CPU cores of a single dedicated master node.
   * 
   * @example
   * 4
   */
  masterNodeCpu?: number;
  /**
   * @remarks
   * Indicates whether dedicated master nodes are enabled.
   */
  masterNodeEnabled?: boolean;
  /**
   * @remarks
   * The memory size of a single dedicated master node. Unit: GB.
   * 
   * @example
   * 16
   */
  masterNodeMemoryGB?: number;
  /**
   * @remarks
   * The number of replica nodes in the primary zone.
   * > The **ReplicaCount** and **SlaveReplicaCount** parameters apply only to cloud-native instances. If the instance uses a cluster architecture, these parameters indicate the number of replica nodes of a **single shard** in the primary and secondary zones.
   * 
   * @example
   * 0
   */
  replicaCount?: number;
  /**
   * @remarks
   * The storage size of a single data node. Unit: GB.
   * 
   * @example
   * 500
   */
  storageSizeGB?: number;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * cloud_auto
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      coordinatorNodeCount: 'CoordinatorNodeCount',
      coordinatorNodeCpu: 'CoordinatorNodeCpu',
      coordinatorNodeEnabled: 'CoordinatorNodeEnabled',
      coordinatorNodeMemoryGB: 'CoordinatorNodeMemoryGB',
      dataNodeCount: 'DataNodeCount',
      dataNodeCpu: 'DataNodeCpu',
      dataNodeMemoryGB: 'DataNodeMemoryGB',
      masterNodeCount: 'MasterNodeCount',
      masterNodeCpu: 'MasterNodeCpu',
      masterNodeEnabled: 'MasterNodeEnabled',
      masterNodeMemoryGB: 'MasterNodeMemoryGB',
      replicaCount: 'ReplicaCount',
      storageSizeGB: 'StorageSizeGB',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinatorNodeCount: 'number',
      coordinatorNodeCpu: 'number',
      coordinatorNodeEnabled: 'boolean',
      coordinatorNodeMemoryGB: 'number',
      dataNodeCount: 'number',
      dataNodeCpu: 'number',
      dataNodeMemoryGB: 'number',
      masterNodeCount: 'number',
      masterNodeCpu: 'number',
      masterNodeEnabled: 'boolean',
      masterNodeMemoryGB: 'number',
      replicaCount: 'number',
      storageSizeGB: 'number',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance information.
   */
  instance?: DescribeOpenSearchInfoResponseBodyDataInstance;
  /**
   * @remarks
   * The specifications.
   */
  spec?: DescribeOpenSearchInfoResponseBodyDataSpec;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeOpenSearchInfoResponseBodyDataInstance,
      spec: DescribeOpenSearchInfoResponseBodyDataSpec,
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   */
  accessDeniedDetail?: DescribeOpenSearchInfoResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The returned result set.
   */
  data?: DescribeOpenSearchInfoResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 173CA69A-3513-591D-8A09-C1EA37CBE2D9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeOpenSearchInfoResponseBodyAccessDeniedDetail,
      data: DescribeOpenSearchInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

