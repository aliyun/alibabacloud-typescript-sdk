// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContext0InfoResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The type of missing permission.
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

export class DescribeContext0InfoResponseBodyDataInstanceConnAddrs extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * pxc-spsil01pww4hfz.polarx.singapore.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The target node type: service or dashboard.
   * 
   * @example
   * service
   */
  nodeType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The endpoint type.
   * 
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-t4n4hf9xey7ea3lp4bwwx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-t4ny14pr37spmjsbv5dc2
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
   * @example
   * pxc-spsil01pww4hfzjayd-cn-20251013180429
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      nodeType: 'NodeType',
      port: 'Port',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      nodeType: 'string',
      port: 'number',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContext0InfoResponseBodyDataInstanceReplicaSetsConnAddrs extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * pxc-hzrlz8e3khuaoz.polarx.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The target node type: service or dashboard.
   * 
   * @example
   * service
   */
  nodeType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **ReadWrite**: Primary instance.
   * - **ReadOnly**: Read-only instance.
   * 
   * @example
   * RemoveHeader
   */
  type?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp1550umsomy2mw24vhwl
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zedp17pfss1133bvdizl
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
   * @example
   * vpc-8vbdw66evguopfcfvieoi
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      nodeType: 'NodeType',
      port: 'Port',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      nodeType: 'string',
      port: 'number',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContext0InfoResponseBodyDataInstanceReplicaSets extends $dara.Model {
  /**
   * @remarks
   * The instance specifications.
   * 
   * @example
   * pg.x2.13large.2c
   */
  classCode?: string;
  /**
   * @remarks
   * The vSwitch ID.
   */
  connAddrs?: DescribeContext0InfoResponseBodyDataInstanceReplicaSetsConnAddrs[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-07-28T02:01:13Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-hzrbqgiocrpu8a
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @remarks
   * The target node type: service or dashboard.
   * 
   * @example
   * service
   */
  nodeType?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * 
   * - **0**: Running.
   * - **1**: Creating.
   * - **2**: Abnormal.
   * - **3**: Expired.
   * - **4**: Releasing.
   * - **5**: Released.
   * - **6**: Locked.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * cloud_essd
   */
  storageType?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      connAddrs: 'ConnAddrs',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      nodeCount: 'NodeCount',
      nodeType: 'NodeType',
      status: 'Status',
      storageType: 'StorageType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      connAddrs: { 'type': 'array', 'itemType': DescribeContext0InfoResponseBodyDataInstanceReplicaSetsConnAddrs },
      createTime: 'string',
      instanceId: 'string',
      nodeCount: 'number',
      nodeType: 'string',
      status: 'string',
      storageType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connAddrs)) {
      $dara.Model.validateArray(this.connAddrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContext0InfoResponseBodyDataInstance extends $dara.Model {
  /**
   * @remarks
   * The instance specifications.
   * 
   * @example
   * mysql.x2.large.2c
   */
  classCode?: string;
  /**
   * @remarks
   * The list of endpoints.
   */
  connAddrs?: DescribeContext0InfoResponseBodyDataInstanceConnAddrs[];
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
   * The database instance name.
   * 
   * @example
   * pxc-hzr9qzafkeury3
   */
  DBInstanceName?: string;
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
   * The number of nodes.
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @remarks
   * The PolarDB-X Search instance name.
   * 
   * @example
   * pxs-********
   */
  openSearchInstanceName?: string;
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
   * The endpoints of the nodes.
   */
  replicaSets?: DescribeContext0InfoResponseBodyDataInstanceReplicaSets[];
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
   * The storage type.
   * 
   * @example
   * local_ssd
   */
  storageType?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-t4n4hf9xey7ea3lp4bwwx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-t4ny14pr37spmjsbv5dc2
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * ap-southeast-1a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      connAddrs: 'ConnAddrs',
      createTime: 'CreateTime',
      DBInstanceName: 'DBInstanceName',
      instanceId: 'InstanceId',
      nodeCount: 'NodeCount',
      openSearchInstanceName: 'OpenSearchInstanceName',
      regionId: 'RegionId',
      replicaSets: 'ReplicaSets',
      status: 'Status',
      storageType: 'StorageType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      connAddrs: { 'type': 'array', 'itemType': DescribeContext0InfoResponseBodyDataInstanceConnAddrs },
      createTime: 'string',
      DBInstanceName: 'string',
      instanceId: 'string',
      nodeCount: 'number',
      openSearchInstanceName: 'string',
      regionId: 'string',
      replicaSets: { 'type': 'array', 'itemType': DescribeContext0InfoResponseBodyDataInstanceReplicaSets },
      status: 'string',
      storageType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connAddrs)) {
      $dara.Model.validateArray(this.connAddrs);
    }
    if(Array.isArray(this.replicaSets)) {
      $dara.Model.validateArray(this.replicaSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContext0InfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance information.
   */
  instance?: DescribeContext0InfoResponseBodyDataInstance;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeContext0InfoResponseBodyDataInstance,
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContext0InfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   */
  accessDeniedDetail?: DescribeContext0InfoResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The parameter details.
   */
  data?: DescribeContext0InfoResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
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
      accessDeniedDetail: DescribeContext0InfoResponseBodyAccessDeniedDetail,
      data: DescribeContext0InfoResponseBodyData,
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

