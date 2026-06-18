// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMem0SecurityIpsResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * Same as above.
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
   * Same as above.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * Same as above.
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
   * AQEAAAAAacnceTlBNjlFODgyLTlBMDUtNUUyRC04MzE5LUQwMzZDRjJFQTM3NA==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The type of no-permission error.
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
   * System
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

export class DescribeMem0SecurityIpsResponseBodyDataGroups extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * bigdata
   */
  groupName?: string;
  /**
   * @remarks
   * The tag of the group.
   * 
   * @example
   * test
   */
  groupTag?: string;
  /**
   * @remarks
   * Indicates whether the IP addresses that are already used for DNAT entries can also be used for SNAT entries. Valid values:
   * 
   * - **true**: The IP addresses can also be used for SNAT entries.
   * 
   * - **false**: The IP addresses cannot be used for SNAT entries.
   * 
   * @example
   * 127.0.0.1
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

export class DescribeMem0SecurityIpsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the memory engine instance.
   * 
   * @example
   * pxc-***-mem
   */
  custinsName?: string;
  /**
   * @remarks
   * The groups corresponding to the consumed service.
   */
  groups?: DescribeMem0SecurityIpsResponseBodyDataGroups[];
  static names(): { [key: string]: string } {
    return {
      custinsName: 'CustinsName',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custinsName: 'string',
      groups: { 'type': 'array', 'itemType': DescribeMem0SecurityIpsResponseBodyDataGroups },
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

export class DescribeMem0SecurityIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   */
  accessDeniedDetail?: DescribeMem0SecurityIpsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The data list.
   */
  data?: DescribeMem0SecurityIpsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
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
      accessDeniedDetail: DescribeMem0SecurityIpsResponseBodyAccessDeniedDetail,
      data: DescribeMem0SecurityIpsResponseBodyData,
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

