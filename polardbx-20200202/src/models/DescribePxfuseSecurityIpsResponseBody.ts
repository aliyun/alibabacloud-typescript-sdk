// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePxfuseSecurityIpsResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The description is the same as above.
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
   * The type of the no-permission error.
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

export class DescribePxfuseSecurityIpsResponseBodyDataGroups extends $dara.Model {
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
   * The group tag.
   * 
   * @example
   * test
   */
  groupTag?: string;
  /**
   * @remarks
   * Specifies whether an IP address that is already used for a DNAT entry can also be used for an SNAT entry. Valid values:
   * 
   * - **true**: Destination IP address can also be used for an SNAT entry.
   * 
   * - **false**: Destination IP address cannot be used for an SNAT entry.
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

export class DescribePxfuseSecurityIpsResponseBodyData extends $dara.Model {
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
  groups?: DescribePxfuseSecurityIpsResponseBodyDataGroups[];
  static names(): { [key: string]: string } {
    return {
      custinsName: 'CustinsName',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custinsName: 'string',
      groups: { 'type': 'array', 'itemType': DescribePxfuseSecurityIpsResponseBodyDataGroups },
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

export class DescribePxfuseSecurityIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   */
  accessDeniedDetail?: DescribePxfuseSecurityIpsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The instance details.
   */
  data?: DescribePxfuseSecurityIpsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
      accessDeniedDetail: DescribePxfuseSecurityIpsResponseBodyAccessDeniedDetail,
      data: DescribePxfuseSecurityIpsResponseBodyData,
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

