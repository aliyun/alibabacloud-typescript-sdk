// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessControlListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AclId for public network access control.
   * 
   * @example
   * acl-xxxx
   */
  aclId?: string;
  /**
   * @remarks
   * The CIDR blocks.
   */
  cidr?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      cidr: 'Cidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      cidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cidr)) {
      $dara.Model.validateArray(this.cidr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the failed permission verification.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeAccessControlListResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to find instance c-123xxx
   */
  errMessage?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Instance.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errMessage: 'ErrMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: DescribeAccessControlListResponseBodyData,
      errMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

