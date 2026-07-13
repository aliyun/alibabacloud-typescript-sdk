// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRspDomainServerProhibitStatusForGatewayResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * UpdateRspDomainServerProhibitStatusForGateway
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorized entity.
   * 
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the owner of the authorized entity.
   * 
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encrypted complete diagnostic information.
   * 
   * @example
   * AQFohtp4aIbaeEXXXXQxNjFDLUIzMzgtNTXXXX05NkFCLUI2RkY5XXXXzAzQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason why authentication failed. Valid values:
   * 
   * - ExplicitDeny: The access is explicitly denied.
   * 
   * - ImplicitDeny: The access is implicitly denied.
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
   * DlpSend
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

export class UpdateRspDomainServerProhibitStatusForGatewayResponseBodyDataStatusList extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * uptp.test.abchina.com.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The current status of the domain name.
   * 
   * @example
   * serverUpdateProhibited
   */
  status?: string;
  /**
   * @remarks
   * The message for the domain name status.
   * 
   * @example
   * 实名认证未通过，增加serverUpdateProhibited状态
   */
  statusMsg?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      status: 'Status',
      statusMsg: 'StatusMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      status: 'string',
      statusMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRspDomainServerProhibitStatusForGatewayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status information of the task.
   */
  statusList?: UpdateRspDomainServerProhibitStatusForGatewayResponseBodyDataStatusList[];
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      statusList: { 'type': 'array', 'itemType': UpdateRspDomainServerProhibitStatusForGatewayResponseBodyDataStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRspDomainServerProhibitStatusForGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This field is returned only when Resource Access Management (RAM) authentication fails.
   */
  accessDeniedDetail?: UpdateRspDomainServerProhibitStatusForGatewayResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateRspDomainServerProhibitStatusForGatewayResponseBodyData;
  /**
   * @remarks
   * Indicates whether the request can be retried if it fails. true: The request can be retried. false: The request cannot be retried.
   * 
   * @example
   * true
   */
  recoverableError?: boolean;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 0629502C-6224-5DC9-A8ED-2ED73A2E3931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. true: The request was successful. false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      recoverableError: 'RecoverableError',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: UpdateRspDomainServerProhibitStatusForGatewayResponseBodyAccessDeniedDetail,
      data: UpdateRspDomainServerProhibitStatusForGatewayResponseBodyData,
      recoverableError: 'boolean',
      requestId: 'string',
      success: 'boolean',
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

