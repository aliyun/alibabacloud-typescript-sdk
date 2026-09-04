// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePxfsInfoResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authorization action. Same as described above.
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
   * The authorization action. Same as described above.
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

export class DescribePxfsInfoResponseBodyDataInstanceConnAddrs extends $dara.Model {
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * agent-files.example.com:12049
   */
  connectionString?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * agent-files.example.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 12049
   */
  port?: number;
  /**
   * @remarks
   * The access protocol.
   * 
   * @example
   * NFS
   */
  protocol?: string;
  /**
   * @remarks
   * Indicates whether TLS is enabled.
   * 
   * @example
   * true
   */
  tlsEnabled?: boolean;
  /**
   * @remarks
   * The transport protocol.
   * 
   * @example
   * TLS
   */
  transport?: string;
  /**
   * @remarks
   * The connection type.
   * 
   * @example
   * Intranet
   */
  type?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-xxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxxxxxxx
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      endpoint: 'Endpoint',
      port: 'Port',
      protocol: 'Protocol',
      tlsEnabled: 'TlsEnabled',
      transport: 'Transport',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      endpoint: 'string',
      port: 'number',
      protocol: 'string',
      tlsEnabled: 'boolean',
      transport: 'string',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePxfsInfoResponseBodyDataInstance extends $dara.Model {
  /**
   * @remarks
   * The node specification.
   * 
   * @example
   * polarx.pxfs.x4.xlarge
   */
  classCode?: string;
  /**
   * @remarks
   * The list of connection addresses.
   */
  connAddrs?: DescribePxfsInfoResponseBodyDataInstanceConnAddrs[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-09-03T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The PolarDB-X instance ID.
   * 
   * @example
   * pxc-xxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The associated instance ID.
   * 
   * @example
   * pxc-xxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * The Agent file service instance ID.
   * 
   * @example
   * pxfs-xxxxxxxx
   */
  pxfsInstanceId?: string;
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
   * The status.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The storage size.
   * 
   * @example
   * 500
   */
  storageSize?: number;
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
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-xxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
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
      pxfsInstanceId: 'PxfsInstanceId',
      regionId: 'RegionId',
      status: 'Status',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      connAddrs: { 'type': 'array', 'itemType': DescribePxfsInfoResponseBodyDataInstanceConnAddrs },
      createTime: 'string',
      DBInstanceName: 'string',
      instanceId: 'string',
      nodeCount: 'number',
      pxfsInstanceId: 'string',
      regionId: 'string',
      status: 'string',
      storageSize: 'number',
      storageType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      version: 'string',
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

export class DescribePxfsInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance information.
   */
  instance?: DescribePxfsInfoResponseBodyDataInstance;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribePxfsInfoResponseBodyDataInstance,
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

export class DescribePxfsInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   */
  accessDeniedDetail?: DescribePxfsInfoResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The response data.
   */
  data?: DescribePxfsInfoResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
      accessDeniedDetail: DescribePxfsInfoResponseBodyAccessDeniedDetail,
      data: DescribePxfsInfoResponseBodyData,
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

