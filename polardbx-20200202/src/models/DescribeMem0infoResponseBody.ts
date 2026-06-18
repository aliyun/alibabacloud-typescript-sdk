// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMem0InfoResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
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

export class DescribeMem0InfoResponseBodyDataInstanceConnAddrs extends $dara.Model {
  /**
   * @remarks
   * Connection address
   * 
   * @example
   * pxc-spsil01pww4hfz.polarx.singapore.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * Port
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * Connection address type
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
   * vSwitch ID
   * 
   * @example
   * vsw-t4ny14pr37spmjsbv5dc2
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC instance ID
   * 
   * @example
   * pxc-spsil01pww4hfzjayd-cn-20251013180429
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
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

export class DescribeMem0InfoResponseBodyDataInstance extends $dara.Model {
  /**
   * @remarks
   * Instance specifications
   * 
   * @example
   * mysql.x2.large.2c
   */
  classCode?: string;
  /**
   * @remarks
   * Connection address list
   */
  connAddrs?: DescribeMem0InfoResponseBodyDataInstanceConnAddrs[];
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
   * Instance ID
   * 
   * @example
   * pxc-spsil01pww4hfz-mem
   */
  instanceId?: string;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @remarks
   * Instance status
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Storage type
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
   * vSwitch ID
   * 
   * @example
   * vsw-t4ny14pr37spmjsbv5dc2
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Zone ID
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
      instanceId: 'InstanceId',
      nodeCount: 'NodeCount',
      regionId: 'RegionId',
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
      connAddrs: { 'type': 'array', 'itemType': DescribeMem0InfoResponseBodyDataInstanceConnAddrs },
      createTime: 'string',
      instanceId: 'string',
      nodeCount: 'number',
      regionId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMem0InfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Instance information
   */
  instance?: DescribeMem0InfoResponseBodyDataInstance;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeMem0InfoResponseBodyDataInstance,
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

export class DescribeMem0InfoResponseBody extends $dara.Model {
  accessDeniedDetail?: DescribeMem0InfoResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * Response data
   */
  data?: DescribeMem0InfoResponseBodyData;
  /**
   * @remarks
   * Request ID
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
      accessDeniedDetail: DescribeMem0InfoResponseBodyAccessDeniedDetail,
      data: DescribeMem0InfoResponseBodyData,
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

