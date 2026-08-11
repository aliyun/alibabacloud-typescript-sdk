// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAccountResponseBodyCloudAccountCloudAccountHealthCheckResultErrorReason extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * AuthenticationFail.NoPermission
   */
  errorCode?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * There is no permission.
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAccountResponseBodyCloudAccountCloudAccountHealthCheckResult extends $dara.Model {
  /**
   * @remarks
   * The error reason. This field is returned when the health check status is unhealthy.
   */
  errorReason?: GetCloudAccountResponseBodyCloudAccountCloudAccountHealthCheckResultErrorReason;
  /**
   * @remarks
   * The time of the last health check. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  lastCheckTime?: number;
  /**
   * @remarks
   * The health check result of the cloud account. Valid values:
   * 
   * - success: Succeeded.
   * - failed: Failed.
   * 
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      errorReason: 'ErrorReason',
      lastCheckTime: 'LastCheckTime',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorReason: GetCloudAccountResponseBodyCloudAccountCloudAccountHealthCheckResultErrorReason,
      lastCheckTime: 'number',
      result: 'string',
    };
  }

  validate() {
    if(this.errorReason && typeof (this.errorReason as any).validate === 'function') {
      (this.errorReason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAccountResponseBodyCloudAccountCloudAccountProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The audience identifier.
   * 
   * @example
   * urn:cloud:idaas:sts:xxx:xxx
   */
  audience?: string;
  /**
   * @remarks
   * The authorization server ID.
   * 
   * @example
   * iauths_system
   */
  authorizationServerId?: string;
  /**
   * @remarks
   * Issuer。
   * 
   * @example
   * https://xxxxx.aliyunidaas.com/api/v2/iauths_system/oauth2
   */
  issuer?: string;
  /**
   * @remarks
   * The signature verification public key endpoint.
   * 
   * @example
   * https://xxxxx.aliyunidaas.com/api/v2/iauths_system/oauth2/jwks
   */
  oidcJwksEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      audience: 'Audience',
      authorizationServerId: 'AuthorizationServerId',
      issuer: 'Issuer',
      oidcJwksEndpoint: 'OidcJwksEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audience: 'string',
      authorizationServerId: 'string',
      issuer: 'string',
      oidcJwksEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAccountResponseBodyCloudAccountPrivilegeHostingError extends $dara.Model {
  /**
   * @remarks
   * The failure error code.
   */
  errorCode?: string;
  /**
   * @remarks
   * The failure message.
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAccountResponseBodyCloudAccount extends $dara.Model {
  /**
   * @remarks
   * The external unique identifier of the cloud account.
   * 
   * @example
   * 1234567
   */
  cloudAccountExternalId?: string;
  /**
   * @remarks
   * The health status of the cloud account. Valid values:
   * - healthy: Healthy.
   * - unhealthy: Unhealthy.
   * - unknown: Unknown.
   * 
   * @example
   * healthy
   */
  cloudAccountHealth?: string;
  /**
   * @remarks
   * The health check result of the cloud account.
   */
  cloudAccountHealthCheckResult?: GetCloudAccountResponseBodyCloudAccountCloudAccountHealthCheckResult;
  /**
   * @remarks
   * The cloud account ID.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The cloud account name.
   * 
   * @example
   * cloud_accout_xxxx
   */
  cloudAccountName?: string;
  /**
   * @remarks
   * The identity provider configuration.
   */
  cloudAccountProviderConfig?: GetCloudAccountResponseBodyCloudAccountCloudAccountProviderConfig;
  /**
   * @remarks
   * The identity provider name.
   * 
   * @example
   * idaas-eiam-oidc-provider
   */
  cloudAccountProviderName?: string;
  cloudAccountRoleCreationType?: string;
  /**
   * @remarks
   * The cloud account site.
   */
  cloudAccountSite?: string;
  /**
   * @remarks
   * The cloud account type. Valid values:
   * 
   * - alibaba_cloud: Alibaba Cloud.
   * 
   * @example
   * alibaba_cloud
   */
  cloudAccountVendorType?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * The cloud account description.
   * 
   * @example
   * cloud_accout_description
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of associated privilege application IDs.
   */
  privilegeApplicationIds?: string[];
  /**
   * @remarks
   * The reason for the privilege hosting or removal failure.
   */
  privilegeHostingError?: GetCloudAccountResponseBodyCloudAccountPrivilegeHostingError;
  /**
   * @remarks
   * The privilege hosting state, which indicates whether the privilege capability is available.
   */
  privilegeHostingState?: string;
  /**
   * @remarks
   * The privilege switch status, which indicates whether the privilege capability is enabled.
   */
  privilegeStatus?: string;
  /**
   * @remarks
   * The last update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830227000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccountExternalId: 'CloudAccountExternalId',
      cloudAccountHealth: 'CloudAccountHealth',
      cloudAccountHealthCheckResult: 'CloudAccountHealthCheckResult',
      cloudAccountId: 'CloudAccountId',
      cloudAccountName: 'CloudAccountName',
      cloudAccountProviderConfig: 'CloudAccountProviderConfig',
      cloudAccountProviderName: 'CloudAccountProviderName',
      cloudAccountRoleCreationType: 'CloudAccountRoleCreationType',
      cloudAccountSite: 'CloudAccountSite',
      cloudAccountVendorType: 'CloudAccountVendorType',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      privilegeApplicationIds: 'PrivilegeApplicationIds',
      privilegeHostingError: 'PrivilegeHostingError',
      privilegeHostingState: 'PrivilegeHostingState',
      privilegeStatus: 'PrivilegeStatus',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountExternalId: 'string',
      cloudAccountHealth: 'string',
      cloudAccountHealthCheckResult: GetCloudAccountResponseBodyCloudAccountCloudAccountHealthCheckResult,
      cloudAccountId: 'string',
      cloudAccountName: 'string',
      cloudAccountProviderConfig: GetCloudAccountResponseBodyCloudAccountCloudAccountProviderConfig,
      cloudAccountProviderName: 'string',
      cloudAccountRoleCreationType: 'string',
      cloudAccountSite: 'string',
      cloudAccountVendorType: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      privilegeApplicationIds: { 'type': 'array', 'itemType': 'string' },
      privilegeHostingError: GetCloudAccountResponseBodyCloudAccountPrivilegeHostingError,
      privilegeHostingState: 'string',
      privilegeStatus: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.cloudAccountHealthCheckResult && typeof (this.cloudAccountHealthCheckResult as any).validate === 'function') {
      (this.cloudAccountHealthCheckResult as any).validate();
    }
    if(this.cloudAccountProviderConfig && typeof (this.cloudAccountProviderConfig as any).validate === 'function') {
      (this.cloudAccountProviderConfig as any).validate();
    }
    if(Array.isArray(this.privilegeApplicationIds)) {
      $dara.Model.validateArray(this.privilegeApplicationIds);
    }
    if(this.privilegeHostingError && typeof (this.privilegeHostingError as any).validate === 'function') {
      (this.privilegeHostingError as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud account details.
   */
  cloudAccount?: GetCloudAccountResponseBodyCloudAccount;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAccount: 'CloudAccount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccount: GetCloudAccountResponseBodyCloudAccount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.cloudAccount && typeof (this.cloudAccount as any).validate === 'function') {
      (this.cloudAccount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

