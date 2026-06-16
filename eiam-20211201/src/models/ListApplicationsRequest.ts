// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * The custom field identifier. Valid values:
   * 
   * - `agent_type`: The agent type.
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
   * The application creation type. If unspecified, only user-created (`user_custom`) applications are returned. To query applications of all types, set this parameter to `all`.
   * 
   * @example
   * system_init
   */
  applicationCreationType?: string;
  /**
   * @remarks
   * The application identity type. If unspecified, only applications of the `application` type are returned. To query all identity types, set this parameter to `all`.
   * 
   * @example
   * application
   */
  applicationIdentityType?: string;
  /**
   * @remarks
   * A list of application IDs.
   * 
   * @example
   * Ram Account SSO
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The application name. Only prefix matching is supported.
   * 
   * @example
   * Ram Account SSO
   */
  applicationName?: string;
  /**
   * @remarks
   * The authorization type for application access. Valid values:
   * 
   * - `authorize_required`: Access requires explicit authorization.
   * 
   * - `default_all`: All members have access by default.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * A list of custom fields.
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
   * The status of the M2M client identity.
   * 
   * @example
   * enabled
   */
  m2MClientStatus?: string;
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
   * The status of the resource server capability.
   * 
   * @example
   * enabled
   */
  resourceServerStatus?: string;
  /**
   * @remarks
   * A filter for the Single Sign-On (SSO) type. You can specify multiple types, separated by a comma. Example: `oauth2/m2m,oidc+oauth2/m2m`.
   * 
   * @example
   * oauth2/m2m
   */
  ssoType?: string;
  /**
   * @remarks
   * The application status. Valid values:
   * 
   * - `enabled`: Enabled.
   * 
   * - `disabled`: Disabled.
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
      authorizationType: 'AuthorizationType',
      customFields: 'CustomFields',
      instanceId: 'InstanceId',
      m2MClientStatus: 'M2MClientStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceServerStatus: 'ResourceServerStatus',
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
      authorizationType: 'string',
      customFields: { 'type': 'array', 'itemType': ListApplicationsRequestCustomFields },
      instanceId: 'string',
      m2MClientStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceServerStatus: 'string',
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

