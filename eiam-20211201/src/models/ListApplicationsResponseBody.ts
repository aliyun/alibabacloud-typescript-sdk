// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * Indicates how the application was created.
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
   * The identity type of the application.
   * 
   * @example
   * application
   */
  applicationIdentityType?: string;
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
   * The source used to create the application. Valid values:
   * 
   * - `urn:alibaba:idaas:app:source:template`: Application template.
   * 
   * - `urn:alibaba:idaas:app:source:standard`: Standard protocol.
   * 
   * @example
   * urn:alibaba:idaas:app:source:standard
   */
  applicationSourceType?: string;
  /**
   * @remarks
   * The ID of the application template.
   * 
   * @example
   * apt_xxx_xxx
   */
  applicationTemplateId?: string;
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
   * The time the application was created, as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * A test application
   */
  description?: string;
  /**
   * @remarks
   * A string containing a JSON array of features supported by the application. Valid values:
   * 
   * - `sso`: SSO.
   * 
   * - `slo`: SLO.
   * 
   * - `provision`: Provisioning.
   * 
   * - `api_invoke`: API invocation.
   * 
   * - `m2m_client`: M2M client.
   * 
   * - `resource_server`: Resource server.
   * 
   * - `other`: Other.
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
   * The service code of the cloud service that manages the application template.
   * 
   * @example
   * rpa
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * The unique identifier of the resource server.
   * 
   * @example
   * https://example.com
   */
  resourceServerIdentifier?: string;
  /**
   * @remarks
   * The source type of the resource server.
   * 
   * @example
   * urn:cloud:idaas:resourceserver:source:custom
   */
  resourceServerSourceType?: string;
  /**
   * @remarks
   * The status of the resource server.
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
  /**
   * @remarks
   * The SSO protocol. Valid values:
   * 
   * - `saml2`: SAML 2.0
   * 
   * - `oidc`: OpenID Connect (OIDC)
   * 
   * - `oauth2/m2m`: OAuth 2.0
   * 
   * - `oidc+oauth2/m2m`: OIDC and OAuth 2.0
   * 
   * @example
   * saml2
   */
  ssoType?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * - `enabled`: The application is enabled.
   * 
   * - `disabled`: The application is disabled.
   * 
   * - `deleted`: The application is soft-deleted.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time the application was last updated, as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationCreationType: 'ApplicationCreationType',
      applicationId: 'ApplicationId',
      applicationIdentityType: 'ApplicationIdentityType',
      applicationName: 'ApplicationName',
      applicationSourceType: 'ApplicationSourceType',
      applicationTemplateId: 'ApplicationTemplateId',
      clientId: 'ClientId',
      createTime: 'CreateTime',
      description: 'Description',
      features: 'Features',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
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
      applicationCreationType: 'string',
      applicationId: 'string',
      applicationIdentityType: 'string',
      applicationName: 'string',
      applicationSourceType: 'string',
      applicationTemplateId: 'string',
      clientId: 'string',
      createTime: 'number',
      description: 'string',
      features: 'string',
      instanceId: 'string',
      logoUrl: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of applications.
   */
  applications?: ListApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

