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
   * The error message.
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
   * The error reason. This field returns a value when the health check status is unhealthy.
   */
  errorReason?: GetCloudAccountResponseBodyCloudAccountCloudAccountHealthCheckResultErrorReason;
  /**
   * @remarks
   * The time of the last check. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  lastCheckTime?: number;
  /**
   * @remarks
   * The health check result of the cloud account. Valid values:
   * - success: The check succeeded.
   * - failed: The check failed.
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
   * The ID of the authorization server.
   * 
   * @example
   * iauths_system
   */
  authorizationServerId?: string;
  /**
   * @remarks
   * The issuer.
   * 
   * @example
   * https://xxxxx.aliyunidaas.com/api/v2/iauths_system/oauth2
   */
  issuer?: string;
  /**
   * @remarks
   * The public key endpoint for signature verification.
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
   * The error code of the failure.
   * 
   * @example
   * Error
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message of the failure.
   * 
   * @example
   * test message
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
   * - healthy: The cloud account is healthy.
   * - unhealthy: The cloud account is unhealthy.
   * - unknown: The health status is unknown.
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
   * The name of the cloud account.
   * 
   * @example
   * cloud_accout_xxxx
   */
  cloudAccountName?: string;
  /**
   * @remarks
   * The configuration information of the identity provider.
   */
  cloudAccountProviderConfig?: GetCloudAccountResponseBodyCloudAccountCloudAccountProviderConfig;
  /**
   * @remarks
   * The name of the identity provider.
   * 
   * @example
   * idaas-eiam-oidc-provider
   */
  cloudAccountProviderName?: string;
  /**
   * @remarks
   * The site of the cloud account. Valid values:
   * - china_mainland: The Chinese mainland.
   * - global: Global.
   * 
   * @example
   * china_mainland
   */
  cloudAccountSite?: string;
  /**
   * @remarks
   * The type of the cloud account. Valid values:
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
   * The description of the cloud account.
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
   * The list of associated privileged application IDs.
   */
  privilegeApplicationIds?: string[];
  /**
   * @remarks
   * The cause of the privilege hosting or removal failure.
   */
  privilegeHostingError?: GetCloudAccountResponseBodyCloudAccountPrivilegeHostingError;
  /**
   * @remarks
   * The hosting status of the cloud account. Default value: hosting_unmanaged. Valid values:
   * - hosting_unmanaged: Unmanaged. The cloud account has not initiated hosting and is in the initial state.
   * - hosting_pending: Hosting. The hosting task has been submitted and is being executed asynchronously. Wait for the hosting process to complete to enter the final state.
   * - hosting_completed: Hosting completed. The cloud account hosting process is executed successfully, and the relevant permission templates and hosting bindings have taken effect.
   * - hosting_failed: Hosting failed. The hosting process encounters an exception. You can view the cause of the failure and initiate hosting again.
   * - hosting_removing: Removing. The removal task has been submitted and is being executed asynchronously. Wait for the removal process to complete to enter the final state.
   * - hosting_remove_failed: Removal failed. The removal process encounters an exception. You can view the cause of the failure and initiate removal again.
   * 
   * @example
   * hosting_unmanaged
   */
  privilegeHostingState?: string;
  /**
   * @remarks
   * The status of the privilege switch. Valid values:
   * - enabled: Enabled. The resource is in the effective state and can be used normally.
   * - disabled: Disabled. The resource is in the stopped state and no longer takes effect. You can enable it again to restore it.
   * 
   * @example
   * enabled
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

