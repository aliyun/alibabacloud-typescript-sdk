// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyApplicationApplicationOwner extends $dara.Model {
  groupIds?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplicationCustomFields extends $dara.Model {
  fieldName?: string;
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The status of the Developer API feature for the application. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * disabled
   */
  apiInvokeStatus?: string;
  /**
   * @remarks
   * The application creation type.
   * 
   * @example
   * user_custom
   */
  applicationCreationType?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The application identity type. Valid values:
   * - application: Application.
   * - agent: Agent.
   * 
   * @example
   * application
   */
  applicationIdentityType?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * SAML application
   */
  applicationName?: string;
  applicationOwner?: GetApplicationResponseBodyApplicationApplicationOwner;
  /**
   * @remarks
   * The source from which the application was created. Valid values:
   * - urn:alibaba:idaas:app:source:template: Application template.
   * - urn:alibaba:idaas:app:source:standard: Standard protocol.
   * 
   * @example
   * urn:alibaba:idaas:app:source:template
   */
  applicationSourceType?: string;
  /**
   * @remarks
   * The ID of the application template associated during creation. This value is returned only when the application was created from an application template.
   * 
   * @example
   * apt_rpa_tdsxxx
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The application visibility.
   */
  applicationVisibility?: string[];
  /**
   * @remarks
   * The access authorization type of the application. Valid values:
   * - authorize_required: Explicit authorization is required for access.
   * - default_all: All members have access permissions by default.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The time when the application was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  customFields?: GetApplicationResponseBodyApplicationCustomFields[];
  /**
   * @remarks
   * Indicates whether the custom Subject field in the token is enabled. After this feature is enabled, the issued Access Token changes from \\<clientId\\> to \\<clientId\\>:\\<client.activeSubjectUrn\\>, where client.activeSubjectUrn is configured in the attribute mapping of the federated identity credential of the application.
   * 
   * @example
   * enabled
   */
  customSubjectStatus?: string;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * An application for test environment
   */
  description?: string;
  /**
   * @remarks
   * The features supported by the application, returned as a JSON array string. Valid values:
   * - sso: Single sign-on.
   * - provision: Account synchronization.
   * - api_invoke: API access.
   * 
   * @example
   * ["sso", "provision"]
   */
  features?: string;
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
   * The URL of the application logo.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01lvYwpv1aGowQXDML9_!!6000000003303-0-tps-580-580.jpg
   */
  logoUrl?: string;
  /**
   * @remarks
   * The M2MClient status.
   * 
   * @example
   * enabled
   */
  m2MClientStatus?: string;
  /**
   * @remarks
   * The ServiceCode of the cloud service that manages the application template.
   * 
   * @example
   * rpa
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * The unique identifier of the ResourceServer, which corresponds to the ResourceServer audience.
   * 
   * @example
   * https://www.example.com
   */
  resourceServerIdentifier?: string;
  /**
   * @remarks
   * The resource server source type.
   * 
   * @example
   * urn:cloud:idaas:resourceserver:source:custom
   */
  resourceServerSourceType?: string;
  /**
   * @remarks
   * The ResourceServer status.
   * 
   * @example
   * enabled
   */
  resourceServerStatus?: string;
  /**
   * @remarks
   * Indicates whether the application template is managed by a cloud service.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  smartConfigCapabilities?: string[];
  /**
   * @remarks
   * The single sign-on protocol. Valid values:
   * - saml2: SAML 2.0 protocol.
   * - oidc: OpenID Connect protocol.
   * - oauth2/m2m: OAuth 2.0 protocol.
   * - oidc+oauth2/m2m: OpenID Connect and OAuth 2.0 protocols.
   * 
   * @example
   * saml2
   */
  ssoType?: string;
  /**
   * @remarks
   * The application status. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the application was last updated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiInvokeStatus: 'ApiInvokeStatus',
      applicationCreationType: 'ApplicationCreationType',
      applicationId: 'ApplicationId',
      applicationIdentityType: 'ApplicationIdentityType',
      applicationName: 'ApplicationName',
      applicationOwner: 'ApplicationOwner',
      applicationSourceType: 'ApplicationSourceType',
      applicationTemplateId: 'ApplicationTemplateId',
      applicationVisibility: 'ApplicationVisibility',
      authorizationType: 'AuthorizationType',
      clientId: 'ClientId',
      createTime: 'CreateTime',
      customFields: 'CustomFields',
      customSubjectStatus: 'CustomSubjectStatus',
      description: 'Description',
      features: 'Features',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
      m2MClientStatus: 'M2MClientStatus',
      managedServiceCode: 'ManagedServiceCode',
      resourceServerIdentifier: 'ResourceServerIdentifier',
      resourceServerSourceType: 'ResourceServerSourceType',
      resourceServerStatus: 'ResourceServerStatus',
      serviceManaged: 'ServiceManaged',
      smartConfigCapabilities: 'SmartConfigCapabilities',
      ssoType: 'SsoType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInvokeStatus: 'string',
      applicationCreationType: 'string',
      applicationId: 'string',
      applicationIdentityType: 'string',
      applicationName: 'string',
      applicationOwner: GetApplicationResponseBodyApplicationApplicationOwner,
      applicationSourceType: 'string',
      applicationTemplateId: 'string',
      applicationVisibility: { 'type': 'array', 'itemType': 'string' },
      authorizationType: 'string',
      clientId: 'string',
      createTime: 'number',
      customFields: { 'type': 'array', 'itemType': GetApplicationResponseBodyApplicationCustomFields },
      customSubjectStatus: 'string',
      description: 'string',
      features: 'string',
      instanceId: 'string',
      logoUrl: 'string',
      m2MClientStatus: 'string',
      managedServiceCode: 'string',
      resourceServerIdentifier: 'string',
      resourceServerSourceType: 'string',
      resourceServerStatus: 'string',
      serviceManaged: 'boolean',
      smartConfigCapabilities: { 'type': 'array', 'itemType': 'string' },
      ssoType: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.applicationOwner && typeof (this.applicationOwner as any).validate === 'function') {
      (this.applicationOwner as any).validate();
    }
    if(Array.isArray(this.applicationVisibility)) {
      $dara.Model.validateArray(this.applicationVisibility);
    }
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(Array.isArray(this.smartConfigCapabilities)) {
      $dara.Model.validateArray(this.smartConfigCapabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned application information.
   */
  application?: GetApplicationResponseBodyApplication;
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
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  validate() {
    if(this.application && typeof (this.application as any).validate === 'function') {
      (this.application as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

