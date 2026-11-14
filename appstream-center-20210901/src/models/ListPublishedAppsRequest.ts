// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application used for filtering. Substring matching is supported. You can pass the complete ID or a continuous segment of it. If this parameter is not specified or an empty string is passed, filtering is not performed based on the application ID. If this parameter and `AppName` are specified at the same time, both conditions must be met by the same application.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the delivery group used for filtering. Substring matching is supported. You can pass the complete ID or a continuous segment of it. If this parameter is not specified or an empty string is passed, filtering is not performed based on the delivery group ID. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the delivery group ID. This parameter can be used together with other filter conditions, and all conditions must be met.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the delivery group used for filtering. Substring matching is supported. For example, if you pass `Office applications`, delivery groups whose names contain this text are matched. If this parameter is not specified or an empty string is passed, filtering is not performed based on the delivery group name. If this parameter and the delivery group ID are specified at the same time, both conditions must be met.
   * 
   * @example
   * Office applications
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The name of the application used for filtering. Substring matching is supported. For example, if you pass `Office applications`, applications whose names contain this text are matched. If this parameter is not specified or an empty string is passed, filtering is not performed based on the application name. If this parameter and `AppId` are specified at the same time, both conditions must be met by the same application.
   * 
   * @example
   * Office applications
   */
  appName?: string;
  /**
   * @remarks
   * The username to be excluded. Exact matching is performed based on the full username, such as `alice`. If this parameter is specified, applications that have been authorized for this user on a per-application basis through [AuthorizeUsersForApp](~~AuthorizeUsersForApp~~) are not returned. This can be used to find applications that can still be authorized for the user. If this parameter is not specified or an empty string is passed, filtering is not performed based on user authorization.
   * 
   * **Access permissions obtained through overall delivery group authorization or user groups are not evaluated by this condition.** Do not equate the returned results with a list of applications that the user has absolutely no access to.
   * 
   * @example
   * alice
   */
  excludeUserId?: string;
  /**
   * @remarks
   * The page number. This parameter is required. Start the query from page `1` and use it in conjunction with `PageSize`. Keep other filter conditions unchanged when querying subsequent pages. If the value is invalid, the error code `InvalidParameter.PageNumber` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of application records to return per page. This parameter is required. Valid values: `1` to `100`. If the value is out of range, the error code `InvalidParameter.PageSize` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. This parameter is required and is not case-sensitive. Only applications in published delivery groups of this product type are returned. If an unrecognized value is passed, the error code `InvalidParameter.ProductType` is returned. Filtering and statistics related to per-application authorization (`ExcludeUserId` and `AuthorizedUserCount`) are primarily used in WUYING Cloud App scenarios.
   * 
   * Valid values:
   * 
   * - `CloudApp`: WUYING Cloud App.
   * - `CloudBrowser`: Cloud browser.
   * - `WuyingServer`: Enterprise Edition workstation.
   * - `WuyingWorkstation`: Personal Edition Linggou container workstation.
   * - `WuyingWorkstationTeam`: Team Edition Linggou container workstation.
   * - `WuyingWorkstationBusiness`: Dedicated Edition Linggou container workstation.
   * - `AndroidCloud`: Cloud phone.
   * - `AIAgent`: AgentBay (AI agent).
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appName: 'AppName',
      excludeUserId: 'ExcludeUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appName: 'string',
      excludeUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

