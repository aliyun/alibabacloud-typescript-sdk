// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProxyAccessResponseBodyProxyAccess extends $dara.Model {
  /**
   * @remarks
   * The username of the database account that is authorized to enable the secure access proxy feature for an instance.
   * 
   * @example
   * hObpgEXoca42q***
   */
  accessId?: string;
  /**
   * @remarks
   * The time when the user is authorized to enable the secure access proxy feature for an instance.
   * 
   * @example
   * 1643034647
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The username of the independent database account.
   * 
   * @example
   * ***
   */
  indepAccount?: string;
  /**
   * @remarks
   * The ID of the instance for which the secure access proxy feature is enabled.
   * 
   * @example
   * 1922545
   */
  instanceId?: number;
  /**
   * @remarks
   * The method that is used to authorize the user to enable the secure access proxy feature for an instance. Valid values:
   * 
   * *   **Authorization by the Alibaba Cloud Account ()**: The information in the parentheses () indicates the ID of the Alibaba Cloud account.
   * *   **Authorization by submitting the ticket ()**:The information in the parentheses () indicates the number of the ticket that the user submits to apply for permissions.
   * 
   * @example
   * Authorization by the Alibaba Cloud account (29490401597700\\*\\*\\*\\*)
   */
  originInfo?: string;
  /**
   * @remarks
   * The ID that DMS generates after the user is authorized to enable the secure access proxy feature for an instance. The ID is unique in DMS. You can call the [ListProxyAccesses](https://help.aliyun.com/document_detail/295386.html) operation to query the ID.
   * 
   * @example
   * 2002
   */
  proxyAccessId?: number;
  /**
   * @remarks
   * The ID of the secure access proxy.
   * 
   * >  You can call the [ListProxies](https://help.aliyun.com/document_detail/295371.html) operation to query the ID of the secure access proxy.
   * 
   * @example
   * 1905
   */
  proxyId?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 12***
   */
  userId?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * user
   */
  userName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 25936669186260****
   */
  userUid?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      gmtCreate: 'GmtCreate',
      indepAccount: 'IndepAccount',
      instanceId: 'InstanceId',
      originInfo: 'OriginInfo',
      proxyAccessId: 'ProxyAccessId',
      proxyId: 'ProxyId',
      userId: 'UserId',
      userName: 'UserName',
      userUid: 'UserUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      gmtCreate: 'string',
      indepAccount: 'string',
      instanceId: 'number',
      originInfo: 'string',
      proxyAccessId: 'number',
      proxyId: 'number',
      userId: 'number',
      userName: 'string',
      userUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProxyAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UserNotExist
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The specified user not exists.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The authorization information about the secure access proxy feature.
   */
  proxyAccess?: GetProxyAccessResponseBodyProxyAccess;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3CDB8601-AD74-4A47-8114-08E08CD6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      proxyAccess: 'ProxyAccess',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxyAccess: GetProxyAccessResponseBodyProxyAccess,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.proxyAccess && typeof (this.proxyAccess as any).validate === 'function') {
      (this.proxyAccess as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

