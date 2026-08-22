// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchTopologyResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
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
   * @example
   * t1222576965886205
   */
  availabilityZone?: string;
  /**
   * @example
   * 0.25
   */
  cpu?: number;
  /**
   * @example
   * https://secnet-defense-vastip.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  isLeader?: boolean;
  /**
   * @example
   * 32
   */
  memoryGB?: number;
  /**
   * @example
   * pxc-c-jf0pivh2dt
   */
  nodeId?: string;
  /**
   * @example
   * polarx_cn
   */
  role?: string;
  /**
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
   * @example
   * 1
   */
  replicaCount?: number;
  /**
   * @example
   * 500
   */
  storageTotalGB?: number;
  /**
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
  nodes?: DescribeOpenSearchTopologyResponseBodyDataNodes[];
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
  accessDeniedDetail?: DescribeOpenSearchTopologyResponseBodyAccessDeniedDetail;
  data?: DescribeOpenSearchTopologyResponseBodyData;
  /**
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

