// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications.
   * 
   * @example
   * Ram Account SSO
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The name of the application. Only fuzzy match from the leftmost character is supported.
   * 
   * @example
   * Ram Account SSO
   */
  applicationName?: string;
  /**
   * @remarks
   * The authorization of the application. Valid values:
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
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Used to determine whether M2M client identity is enabled.
   * - enabled
   * - disabled
   * 
   * @example
   * enabled
   */
  m2MClientStatus?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Used to determine whether the ResourceServer capability is enabled.
   * - enabled
   * - disabled
   * 
   * @example
   * enabled
   */
  resourceServerStatus?: string;
  /**
   * @remarks
   * SSO type.
   * - oidc
   * - saml2
   * - oauth2/m2m
   * 
   * @example
   * oauth2/m2m
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
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationName: 'ApplicationName',
      authorizationType: 'AuthorizationType',
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
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationName: 'string',
      authorizationType: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

