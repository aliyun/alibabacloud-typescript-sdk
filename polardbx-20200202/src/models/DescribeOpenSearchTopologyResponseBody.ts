// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchTopologyResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The display name of the authentication principal.
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
   * NoPermissionType
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

export class DescribeOpenSearchTopologyResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * t1222576965886205
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The total number of CPU cores in the cluster.
   * 
   * @example
   * 0.25
   */
  cpu?: number;
  /**
   * @remarks
   * The Origin Domain Name that you configured in the DCDN console, including IPv4 addresses, IPv6 addresses, common domain names, and OSS domain names.
   * 
   * @example
   * https://secnet-defense-vastip.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * Indicates whether the current node is the primary node.
   */
  isLeader?: boolean;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 32
   */
  memoryGB?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pxc-c-jf0pivh2dt
   */
  nodeId?: string;
  /**
   * @remarks
   * The role of a node in the three-node RDS cluster. Valid values:
   * 
   * - **leader**: primary node
   * - **follower**: secondary node
   * - **logger**: logger node
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * 
   * - **0**: Running
   * - **1**: Creating
   * - **2**: Abnormal
   * - **3**: Expired
   * - **4**: Releasing
   * - **5**: Released
   * - **6**: Locked
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      availabilityZone: 'AvailabilityZone',
      cpu: 'Cpu',
      host: 'Host',
      isLeader: 'IsLeader',
      memoryGB: 'MemoryGB',
      nodeId: 'NodeId',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityZone: 'string',
      cpu: 'number',
      host: 'string',
      isLeader: 'boolean',
      memoryGB: 'number',
      nodeId: 'string',
      role: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchTopologyResponseBodyDataStorage extends $dara.Model {
  /**
   * @remarks
   * The number of secondary nodes in the primary zone.
   * > The **ReplicaCount** and **SlaveReplicaCount** parameters apply only to cloud-native instances. If the instance uses the cluster architecture, these parameters indicate the number of secondary nodes of a **single shard** in the primary and secondary zones.
   * 
   * @example
   * 1
   */
  replicaCount?: number;
  /**
   * @remarks
   * The total storage capacity of the node. Unit: GB.
   * 
   * @example
   * 500
   */
  storageTotalGB?: number;
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
      replicaCount: 'ReplicaCount',
      storageTotalGB: 'StorageTotalGB',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaCount: 'number',
      storageTotalGB: 'number',
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

export class DescribeOpenSearchTopologyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The node IDs.
   */
  nodes?: DescribeOpenSearchTopologyResponseBodyDataNodes[];
  /**
   * @remarks
   * The configuration of the automatic storage scaling feature for the instance.
   */
  storage?: DescribeOpenSearchTopologyResponseBodyDataStorage;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeOpenSearchTopologyResponseBodyDataNodes },
      storage: DescribeOpenSearchTopologyResponseBodyDataStorage,
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeOpenSearchTopologyResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeOpenSearchTopologyResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
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
      accessDeniedDetail: DescribeOpenSearchTopologyResponseBodyAccessDeniedDetail,
      data: DescribeOpenSearchTopologyResponseBodyData,
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

