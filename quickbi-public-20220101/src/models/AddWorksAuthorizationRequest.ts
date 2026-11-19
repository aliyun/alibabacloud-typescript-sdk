// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorksAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of granted permissions. Valid values:
   * - 1: View.
   * - 3: View and export.
   * - 11: Edit, view, and export.
   * Note: When the value is set to 11, the authorization does not expire.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authPoints?: number;
  /**
   * @remarks
   * The authorization scope. Valid values:
   * - 0: User. The AuthorizedId parameter corresponds to the user ID in Quick BI.
   * - 1: User group. The AuthorizedId parameter corresponds to the user group ID in Quick BI.
   * - 2: All organization members. The AuthorizedId parameter corresponds to the organization ID in Quick BI.
   * - 3: All workspace members. The AuthorizedId parameter corresponds to the workspace ID in Quick BI.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  authorizeScope?: number;
  /**
   * @remarks
   * The ID of the authorized object. For more information, see the description of AuthorizeScope.
   * 
   * This parameter is required.
   * 
   * @example
   * ASDAS-WDAS****ASDA
   */
  authorizedId?: string;
  /**
   * @remarks
   * The expiration date of the authorization. Format: yyyy-MM-dd. Example: 2022-02-16. Note: The authorization period must be at least N+1 days. This parameter is required when the AuthPoints parameter is not set to 11.
   * 
   * @example
   * 2099-12-31
   */
  expireDay?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * al*************7ufv
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * - dashboard: Dashboard.
   * - report: Workbook.
   * - dashboardOfflineQuery: Ad hoc query.
   * - cube: Dataset.
   * - datasource: Data source.
   * - screen: Data screen.
   * - ANALYSIS: Ad hoc analysis.
   * - dataForm: Data entry.
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

