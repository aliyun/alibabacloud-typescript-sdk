// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchNodesResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * polardbx:DescribeOpenSearchNodes
   */
  authAction?: string;
  /**
   * @remarks
   * The identity identifier used for authentication in the request.
   * 
   * @example
   * Sample RAM user
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
   * The description as above.
   * 
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The diagnostic message.
   * 
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The no-permission type.
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

export class DescribeOpenSearchNodesResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores of the node.
   * 
   * @example
   * 1
   */
  cpuCores?: number;
  /**
   * @remarks
   * The CPU utilization (%).
   * 
   * @example
   * 35.6
   */
  cpuPercent?: string;
  /**
   * @remarks
   * The total disk capacity of the node, in GB.
   * 
   * @example
   * 500
   */
  diskSizeGB?: number;
  /**
   * @remarks
   * The disk space utilization of the node.
   * 
   * @example
   * 42.5
   */
  diskUsedPercent?: string;
  /**
   * @remarks
   * The total number of unresolved baseline checks.
   * 
   * @example
   * GREEN
   */
  health?: string;
  /**
   * @remarks
   * The JVM heap memory utilization of the node.
   * 
   * @example
   * 38.2
   */
  heapPercent?: string;
  /**
   * @remarks
   * The IP address and port of the session host that initiated the session.
   * 
   * @example
   * 100.115.107.0/24
   */
  host?: string;
  /**
   * @remarks
   * The name of the host where the node instance runs. You can log on to the host and run the `hostname` command to view the hostname.
   * 
   * @example
   * hb2h-ali-oceanbase-public-online-013
   */
  hostName?: string;
  /**
   * @remarks
   * The average system load of the node over the last 1 minute.
   * 
   * @example
   * 1.25
   */
  loadOneM?: string;
  /**
   * @remarks
   * The amount of used memory.
   * 
   * @example
   * 16
   */
  memoryGB?: number;
  /**
   * @remarks
   * The type of node to query. Valid values:
   * - all: Queries both dn and gms nodes.
   * - gms: Queries only gms nodes.
   * - dn: Queries only dn nodes.
   * 
   * @example
   * dn
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
   * The zone ID.
   * 
   * @example
   * cn-beijing-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'CpuCores',
      cpuPercent: 'CpuPercent',
      diskSizeGB: 'DiskSizeGB',
      diskUsedPercent: 'DiskUsedPercent',
      health: 'Health',
      heapPercent: 'HeapPercent',
      host: 'Host',
      hostName: 'HostName',
      loadOneM: 'LoadOneM',
      memoryGB: 'MemoryGB',
      nodeType: 'NodeType',
      port: 'Port',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'number',
      cpuPercent: 'string',
      diskSizeGB: 'number',
      diskUsedPercent: 'string',
      health: 'string',
      heapPercent: 'string',
      host: 'string',
      hostName: 'string',
      loadOneM: 'string',
      memoryGB: 'number',
      nodeType: 'string',
      port: 'number',
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

export class DescribeOpenSearchNodesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The query result object.
   */
  result?: DescribeOpenSearchNodesResponseBodyDataResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': DescribeOpenSearchNodesResponseBodyDataResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeOpenSearchNodesResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The data structure.
   */
  data?: DescribeOpenSearchNodesResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AE4F6C34-065F-45AA-B5DC-4B8D816F6305
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
      accessDeniedDetail: DescribeOpenSearchNodesResponseBodyAccessDeniedDetail,
      data: DescribeOpenSearchNodesResponseBodyData,
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

