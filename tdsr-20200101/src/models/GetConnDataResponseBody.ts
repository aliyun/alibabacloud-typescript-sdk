// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnDataResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class GetConnDataResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * 1#234#abc
   */
  id?: string;
  /**
   * @example
   * 1#456#def
   */
  mapId?: string;
  /**
   * @example
   * outer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mapId: 'MapId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mapId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnDataResponseBody extends $dara.Model {
  accessDeniedDetail?: GetConnDataResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * {}
   */
  extend?: string;
  list?: GetConnDataResponseBodyList[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4F882EA7-3A1D-0113-94E4-70162C4****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      extend: 'Extend',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetConnDataResponseBodyAccessDeniedDetail,
      code: 'number',
      extend: 'string',
      list: { 'type': 'array', 'itemType': GetConnDataResponseBodyList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      version: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

