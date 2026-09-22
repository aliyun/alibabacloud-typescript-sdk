// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID used for filtering. Substring matching is supported. You can specify a complete ID or a consecutive segment of it. If this parameter is not specified or is set to an empty string, filtering by application ID is not applied. If both this parameter and `AppName` are specified, both conditions must be met by the same application.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID used for filtering. Substring matching is supported. You can specify a complete ID or a consecutive segment of it. If this parameter is not specified or is set to an empty string, filtering by delivery group ID is not applied. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain delivery group IDs. This parameter can be used together with other filter conditions, and all conditions must be met simultaneously.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group name used for filtering. Substring matching is supported. For example, if you specify `OfficeApps`, delivery groups whose names contain this text are matched. If this parameter is not specified or is set to an empty string, filtering by delivery group name is not applied. If both this parameter and the delivery group ID are specified, both conditions must be met.
   * 
   * @example
   * OfficeApps
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The application name used for filtering. Substring matching is supported. For example, if you specify `OfficeApps`, applications whose names contain this text are matched. If this parameter is not specified or is set to an empty string, filtering by application name is not applied. If both this parameter and `AppId` are specified, both conditions must be met by the same application.
   * 
   * @example
   * OfficeApps
   */
  appName?: string;
  /**
   * @remarks
   * The username to exclude. Exact username matching is used. For example, `alice`. When specified, applications that have been authorized to this user through [AuthorizeUsersForApp](~~AuthorizeUsersForApp~~) by application are not returned. This helps you find applications that can still be authorized to the user. If this parameter is not specified or is set to an empty string, no exclusion based on user authorization is applied.
   * 
   * **Access permissions granted through delivery-group-level authorization or user groups are not evaluated by this condition.** The returned results cannot be treated as a complete list of applications that the user has no access to.
   * 
   * @example
   * alice
   */
  excludeUserId?: string;
  /**
   * @remarks
   * The page number. This parameter is required. Start from page `1` and use this parameter together with `PageSize`. Keep other filter conditions unchanged when querying subsequent pages. If an invalid value is specified, the error code `InvalidParameter.PageNumber` is returned.
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
   * The product type. This parameter is required. The value is case-insensitive. Only applications in published delivery groups of the specified product type are returned. If an unrecognized value is specified, the error code `InvalidParameter.ProductType` is returned. Filtering and statistics related to per-application authorization (`ExcludeUserId` and `AuthorizedUserCount`) are primarily used in WUYING Cloud Application common scenarios.
   * 
   * Valid values:
   * 
   * - `CloudApp`: WUYING Cloud Application.
   * - `CloudBrowser`: Cloud Browser.
   * - `WuyingServer`: Enterprise Workstation.
   * - `WuyingWorkstation`: Personal Edition Lingjou Container Workstation.
   * - `WuyingWorkstationTeam`: Team Edition Lingjou Container Workstation.
   * - `WuyingWorkstationBusiness`: Dedicated Edition Lingjou Container Workstation.
   * - `AndroidCloud`: Cloud Phone.
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

