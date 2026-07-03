// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupabaseInstanceAttributeResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The type of the authentication principal.
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

export class DescribeSupabaseInstanceAttributeResponseBodyDataConnAddrs extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * pxsp-********.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * 0
   */
  netType?: string;
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
   * VPC ID
   * 
   * @example
   * vpc-********
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      netType: 'string',
      port: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupabaseInstanceAttributeResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The class code.
   * 
   * @example
   * polarx.supabase.x2.small
   */
  classCode?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 2005777
   */
  id?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * pxsp-********
   */
  name?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      id: 'Id',
      name: 'Name',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      id: 'string',
      name: 'string',
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

export class DescribeSupabaseInstanceAttributeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of endpoints.
   */
  connAddrs?: DescribeSupabaseInstanceAttributeResponseBodyDataConnAddrs[];
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2025-07-13 10:01:50 +0800
   */
  createTime?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-supabase-001
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Indicates whether the instance has expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The lock mode.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The minor engine version.
   * 
   * @example
   * polardb-2.4.0_5.4.19-20250116_xcluster5.4.20-20241213
   */
  minorVersion?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * polarx.supabase.x2.small
   */
  nodeClass?: string;
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
   * The list of nodes.
   */
  nodes?: DescribeSupabaseInstanceAttributeResponseBodyDataNodes[];
  /**
   * @remarks
   * The name of the associated PolarDB-X instance.
   * 
   * @example
   * pxc-*********
   */
  polarDBXDBInstanceName?: string;
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
   * The instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The Supabase class code.
   * 
   * @example
   * polarx.supabase.x4.xlarge
   */
  supabaseClassCode?: string;
  /**
   * @remarks
   * The multi-tenant mode.
   * 
   * @example
   * false
   */
  tenantMode?: boolean;
  /**
   * @remarks
   * The topology type.
   * 
   * @example
   * 1azone
   */
  topologyType?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-********
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrs: 'ConnAddrs',
      createTime: 'CreateTime',
      DBInstanceName: 'DBInstanceName',
      engineVersion: 'EngineVersion',
      expired: 'Expired',
      lockMode: 'LockMode',
      minorVersion: 'MinorVersion',
      nodeClass: 'NodeClass',
      nodeCount: 'NodeCount',
      nodes: 'Nodes',
      polarDBXDBInstanceName: 'PolarDBXDBInstanceName',
      regionId: 'RegionId',
      status: 'Status',
      supabaseClassCode: 'SupabaseClassCode',
      tenantMode: 'TenantMode',
      topologyType: 'TopologyType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrs: { 'type': 'array', 'itemType': DescribeSupabaseInstanceAttributeResponseBodyDataConnAddrs },
      createTime: 'string',
      DBInstanceName: 'string',
      engineVersion: 'string',
      expired: 'boolean',
      lockMode: 'string',
      minorVersion: 'string',
      nodeClass: 'string',
      nodeCount: 'number',
      nodes: { 'type': 'array', 'itemType': DescribeSupabaseInstanceAttributeResponseBodyDataNodes },
      polarDBXDBInstanceName: 'string',
      regionId: 'string',
      status: 'string',
      supabaseClassCode: 'string',
      tenantMode: 'boolean',
      topologyType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connAddrs)) {
      $dara.Model.validateArray(this.connAddrs);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupabaseInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeSupabaseInstanceAttributeResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The instance details.
   */
  data?: DescribeSupabaseInstanceAttributeResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C457B28E-9CAB-4B77-B5C6-5D71B7870B6E
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
      accessDeniedDetail: DescribeSupabaseInstanceAttributeResponseBodyAccessDeniedDetail,
      data: DescribeSupabaseInstanceAttributeResponseBodyData,
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

