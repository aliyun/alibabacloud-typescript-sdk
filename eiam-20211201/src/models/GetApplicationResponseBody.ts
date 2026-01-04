// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The status of the Developer API feature. Valid values:
   * 
   * *   Enabled: The Developer API feature is enabled.
   * *   Disabled: The Developer API feature is disabled.
   * 
   * @example
   * disabled
   */
  apiInvokeStatus?: string;
  /**
   * @example
   * user_custom
   */
  applicationCreationType?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * SAML Application
   */
  applicationName?: string;
  /**
   * @remarks
   * The origin of the application. Valid values:
   * 
   * *   urn:alibaba:idaas:app:source:template: The application is created based on a template.
   * *   urn:alibaba:idaas: The application is created based on the standard protocol.
   * 
   * @example
   * urn:alibaba:idaas:app:source:template
   */
  applicationSourceType?: string;
  /**
   * @remarks
   * The ID of the template based on which the application is created. This parameter is returned only if the application is created based on a template.
   * 
   * @example
   * apt_rpa_tdsxxx
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * Application visibility
   */
  applicationVisibility?: string[];
  /**
   * @remarks
   * The authorization type of the EIAM application. Valid values:
   * 
   * *   authorize_required: Only the user with explicit authorization can access the application.
   * *   default_all: By default, all users can access the application.
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
   * The time when the application was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  customSubjectStatus?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * The application is applicable to the test environment.
   */
  description?: string;
  /**
   * @remarks
   * The features that are supported by the application. The value is a JSON array. Valid values:
   * 
   * *   sso: The application supports SSO.
   * *   provision: The application supports account synchronization.
   * *   api_invoke: The application supports custom APIs.
   * 
   * @example
   * ["sso", "provision"]
   */
  features?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The URL of the application icon.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01lvYwpv1aGowQXDML9_!!6000000003303-0-tps-580-580.jpg
   */
  logoUrl?: string;
  /**
   * @remarks
   * M2M client status.
   * 
   * @example
   * enabled
   */
  m2MClientStatus?: string;
  /**
   * @remarks
   * The service code of the cloud service that manages the application template.
   * 
   * @example
   * rpa
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * Unique identifier of the resource server
   * 
   * @example
   * https://www.example.com
   */
  resourceServerIdentifier?: string;
  /**
   * @example
   * urn:cloud:idaas:resourceserver:source:custom
   */
  resourceServerSourceType?: string;
  /**
   * @remarks
   * Resource server status.
   * 
   * @example
   * disabled	enabled
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
  /**
   * @remarks
   * The type of the single sign-on (SSO) protocol. Valid values:
   * 
   * *   saml2: the Security Assertion Markup Language (SAML) 2.0 protocol.
   * *   oidc: the OpenID Connect (OIDC) protocol.
   * 
   * @example
   * saml2
   */
  ssoType?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Enabled: The application is enabled.
   * *   Disabled: The application is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the application was last updated. The value is a UNIX timestamp. Unit: milliseconds.
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
      applicationName: 'ApplicationName',
      applicationSourceType: 'ApplicationSourceType',
      applicationTemplateId: 'ApplicationTemplateId',
      applicationVisibility: 'ApplicationVisibility',
      authorizationType: 'AuthorizationType',
      clientId: 'ClientId',
      createTime: 'CreateTime',
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
      applicationName: 'string',
      applicationSourceType: 'string',
      applicationTemplateId: 'string',
      applicationVisibility: { 'type': 'array', 'itemType': 'string' },
      authorizationType: 'string',
      clientId: 'string',
      createTime: 'number',
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
      ssoType: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationVisibility)) {
      $dara.Model.validateArray(this.applicationVisibility);
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
   * The details of the application.
   */
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * The ID of the request.
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

