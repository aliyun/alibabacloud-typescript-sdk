// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedAppsResponseBodyApps extends $dara.Model {
  /**
   * @remarks
   * The URL of the application icon.
   * 
   * @example
   * https://app-center-icon-****.png
   */
  appIcon?: string;
  /**
   * @remarks
   * The application ID. Pass this value together with `AppInstanceGroupId` when you invoke the [AuthorizeUsersForApp](~~AuthorizeUsersForApp~~) operation to authorize users for this application.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the published delivery group to which this application belongs.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the published delivery group to which this application belongs.
   * 
   * @example
   * OfficeApps
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * OfficeApps
   */
  appName?: string;
  /**
   * @remarks
   * The application version number.
   * 
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The application version name, which is the name assigned to this version when the application was published.
   * 
   * @example
   * Initial version
   */
  appVersionName?: string;
  /**
   * @remarks
   * The number of users authorized by application for this application within its delivery group. Only users authorized through [AuthorizeUsersForApp](~~AuthorizeUsersForApp~~) by application are counted. The value is `0` if no users have been authorized by application.
   * 
   * @example
   * 5
   */
  authorizedUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      appIcon: 'AppIcon',
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appName: 'AppName',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      authorizedUserCount: 'AuthorizedUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcon: 'string',
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appName: 'string',
      appVersion: 'string',
      appVersionName: 'string',
      authorizedUserCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of application records on the current page. Each record corresponds to a deployed application in a published delivery group. The list is sorted by the creation time of the delivery group in descending order. An empty list is returned if no results match or the requested page exceeds the result range.
   */
  apps?: ListPublishedAppsResponseBodyApps[];
  /**
   * @remarks
   * The page number specified in this request.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page specified in this request. This value does not represent the actual number of records returned on the current page. The actual number may be less than this value.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. You can use this ID to locate and troubleshoot issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match all filter conditions. Records are counted on a per-delivery-group-plus-application basis. If the same application appears in multiple published delivery groups, each combination is counted separately. This value does not represent the number of records returned on the current page. The value is `0` if no results match.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': ListPublishedAppsResponseBodyApps },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

