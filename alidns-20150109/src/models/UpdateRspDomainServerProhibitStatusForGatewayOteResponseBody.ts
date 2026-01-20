// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRspDomainServerProhibitStatusForGatewayOteResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * CreateUser
   */
  authAction?: string;
  /**
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQFohtp4aIbaeEXXXXQxNjFDLUIzMzgtNTXXXX05NkFCLUI2RkY5XXXXzAzQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
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

export class UpdateRspDomainServerProhibitStatusForGatewayOteResponseBodyDataStatusList extends $dara.Model {
  /**
   * @example
   * uptp.test.abchina.com.cn
   */
  domainName?: string;
  /**
   * @example
   * serverUpdateProhibited
   */
  status?: string;
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

export class UpdateRspDomainServerProhibitStatusForGatewayOteResponseBodyData extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domainName?: string;
  statusList?: UpdateRspDomainServerProhibitStatusForGatewayOteResponseBodyDataStatusList[];
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      statusList: { 'type': 'array', 'itemType': UpdateRspDomainServerProhibitStatusForGatewayOteResponseBodyDataStatusList },
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

export class UpdateRspDomainServerProhibitStatusForGatewayOteResponseBody extends $dara.Model {
  accessDeniedDetail?: UpdateRspDomainServerProhibitStatusForGatewayOteResponseBodyAccessDeniedDetail;
  data?: UpdateRspDomainServerProhibitStatusForGatewayOteResponseBodyData;
  /**
   * @example
   * true
   */
  recoverableError?: boolean;
  /**
   * @example
   * 0629502C-6224-5DC9-A8ED-2ED73A2E3931
   */
  requestId?: string;
  /**
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
      accessDeniedDetail: UpdateRspDomainServerProhibitStatusForGatewayOteResponseBodyAccessDeniedDetail,
      data: UpdateRspDomainServerProhibitStatusForGatewayOteResponseBodyData,
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

