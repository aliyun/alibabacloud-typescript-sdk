// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * The custom field identifier. Valid values:
   * - agent_type: The agent type.
   * 
   * @example
   * agent_type
   */
  fieldName?: string;
  /**
   * @remarks
   * The custom field value.
   * 
   * @example
   * x-claw
   */
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

export class ListApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The application creation type. If this parameter is left empty, applications of the user_custom type are queried by default. To query applications of all types, set this parameter to all.
   * 
   * @example
   * system_init
   */
  applicationCreationType?: string;
  /**
   * @remarks
   * The application identity type. If this parameter is left empty, applications of the application type are queried by default. To query applications of all identity types, set this parameter to all.
   * 
   * @example
   * application
   */
  applicationIdentityType?: string;
  /**
   * @remarks
   * The list of application IDs.
   * 
   * @example
   * Ram Account SSO
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The application name. Only left fuzzy match is supported.
   * 
   * @example
   * Ram Account SSO
   */
  applicationName?: string;
  /**
   * @remarks
   * The application template ID.
   * 
   * @example
   * apt_ramuser_xxxx
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The application access authorization type. Valid values:
   * - authorize_required: Explicit authorization is required for access.
   * - default_all: All members have access permissions by default.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The list of custom fields.
   */
  customFields?: ListApplicationsRequestCustomFields[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the M2M Client identity is enabled.
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
   * waf
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the ResourceServer capability is enabled.
   * 
   * @example
   * enabled
   */
  resourceServerStatus?: string;
  /**
   * @remarks
   * Specifies whether the application template is managed by a cloud service.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The SSO type filter condition. Multiple types can be separated by commas. Example: oauth2/m2m,oidc+oauth2/m2m.
   * 
   * @example
   * oauth2/m2m
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
  static names(): { [key: string]: string } {
    return {
      applicationCreationType: 'ApplicationCreationType',
      applicationIdentityType: 'ApplicationIdentityType',
      applicationIds: 'ApplicationIds',
      applicationName: 'ApplicationName',
      applicationTemplateId: 'ApplicationTemplateId',
      authorizationType: 'AuthorizationType',
      customFields: 'CustomFields',
      instanceId: 'InstanceId',
      m2MClientStatus: 'M2MClientStatus',
      managedServiceCode: 'ManagedServiceCode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceServerStatus: 'ResourceServerStatus',
      serviceManaged: 'ServiceManaged',
      ssoType: 'SsoType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCreationType: 'string',
      applicationIdentityType: 'string',
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationName: 'string',
      applicationTemplateId: 'string',
      authorizationType: 'string',
      customFields: { 'type': 'array', 'itemType': ListApplicationsRequestCustomFields },
      instanceId: 'string',
      m2MClientStatus: 'string',
      managedServiceCode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceServerStatus: 'string',
      serviceManaged: 'boolean',
      ssoType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

