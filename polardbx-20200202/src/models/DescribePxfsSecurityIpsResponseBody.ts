// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePxfsSecurityIpsResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class DescribePxfsSecurityIpsResponseBodyDataGroups extends $dara.Model {
  /**
   * @remarks
   * Agent文件服务白名单分组名称。
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * 白名单分组标签。
   * 
   * @example
   * default
   */
  groupTag?: string;
  /**
   * @remarks
   * 白名单分组中的IP地址或CIDR列表。
   * 
   * @example
   * 192.168.1.0/24,10.0.0.1
   */
  ipLists?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      ipLists: 'IpLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      groupTag: 'string',
      ipLists: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePxfsSecurityIpsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent文件服务在管控系统中的实例名称。
   * 
   * @example
   * pxfs-xxxxxxxx
   */
  custinsName?: string;
  /**
   * @remarks
   * Agent文件服务白名单分组列表。
   */
  groups?: DescribePxfsSecurityIpsResponseBodyDataGroups[];
  static names(): { [key: string]: string } {
    return {
      custinsName: 'CustinsName',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custinsName: 'string',
      groups: { 'type': 'array', 'itemType': DescribePxfsSecurityIpsResponseBodyDataGroups },
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePxfsSecurityIpsResponseBody extends $dara.Model {
  accessDeniedDetail?: DescribePxfsSecurityIpsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * 接口返回的业务数据。
   */
  data?: DescribePxfsSecurityIpsResponseBodyData;
  /**
   * @remarks
   * 请求的唯一标识，可用于排查问题。
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
      accessDeniedDetail: DescribePxfsSecurityIpsResponseBodyAccessDeniedDetail,
      data: DescribePxfsSecurityIpsResponseBodyData,
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

