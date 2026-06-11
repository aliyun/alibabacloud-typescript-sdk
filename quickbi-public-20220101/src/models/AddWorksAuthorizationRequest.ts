// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorksAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The permissions to grant. Valid values:
   * 
   * `1`: View
   * 
   * `3`: View and Export
   * 
   * `11`: Edit, View, and Export
   * 
   * **Note**: If AuthPoints is set to 11, the authorization is permanent and the ExpireDay parameter is ignored.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authPoints?: number;
  /**
   * @remarks
   * The type of the principal. Valid values:
   * 
   * - `0`: User. Set AuthorizedId to the user ID.
   * 
   * - `1`: User group. Set AuthorizedId to the user group ID.
   * 
   * - `2`: All members of an organization. Set AuthorizedId to the organization ID.
   * 
   * - `3`: All members of a workspace. Set AuthorizedId to the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  authorizeScope?: number;
  /**
   * @remarks
   * The ID of the principal to be authorized. The AuthorizeScope parameter specifies the type of principal.
   * 
   * This parameter is required.
   * 
   * @example
   * ASDAS-WDAS****ASDA
   */
  authorizedId?: string;
  /**
   * @remarks
   * The expiration date for the permissions.
   * 
   * Format: `YYYY-MM-DD`.
   * 
   * **Note**: This parameter is required if AuthPoints is not 11. The authorization must be valid for at least one day after the authorization date.
   * 
   * @example
   * 2099-12-31
   */
  expireDay?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * This parameter is required.
   * 
   * @example
   * al*************7ufv
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * - `dashboard`: A dashboard.
   * 
   * - `report`: A report.
   * 
   * - `dashboardOfflineQuery`: An ad-hoc query.
   * 
   * - `cube`: A dataset.
   * 
   * - `datasource`: A data source.
   * 
   * - `screen`: A data screen.
   * 
   * - `ANALYSIS`: An ad-hoc analysis.
   * 
   * - `dataForm`: A data form.
   * 
   * This parameter is required.
   * 
   * @example
   * dashboard
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      authPoints: 'AuthPoints',
      authorizeScope: 'AuthorizeScope',
      authorizedId: 'AuthorizedId',
      expireDay: 'ExpireDay',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPoints: 'number',
      authorizeScope: 'number',
      authorizedId: 'string',
      expireDay: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

