// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedAppsResponseBodyApps extends $dara.Model {
  /**
   * @remarks
   * The access URL of the application icon.
   * 
   * @example
   * https://app-center-icon-****.png
   */
  appIcon?: string;
  /**
   * @remarks
   * The application ID. When you invoke the [AuthorizeUsersForApp](~~AuthorizeUsersForApp~~) operation to grant authorization to a user for this application, pass this value together with `AppInstanceGroupId`.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the published delivery group to which the application belongs.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the published delivery group to which the application belongs.
   * 
   * @example
   * Office applications
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Office applications
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
   * The application version name, which is the name set for this version when the application is published.
   * 
   * @example
   * Initial version
   */
  appVersionName?: string;
  /**
   * @remarks
   * The number of users currently authorized for this application on a per-application basis within the associated delivery group. Only users authorized on a per-application basis through [AuthorizeUsersForApp](~~AuthorizeUsersForApp~~) are counted. If no users are authorized on a per-application basis, `0` is returned.
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
   * The list of application records on the current page. Each record corresponds to a deployed application in a published delivery group, sorted in descending order of the creation time of the associated delivery group. If no matching results are found or the requested page exceeds the result range, an empty list is returned.
   */
  apps?: ListPublishedAppsResponseBodyApps[];
  /**
   * @remarks
   * The page number specified in the current request.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page specified in the current request. This value does not represent the actual number of records returned on the current page. The actual number on the current page may be less than this value.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the current request, which can be used to troubleshoot request issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that meet all filter conditions. The count is based on the "delivery group + application" combination. If the same application appears in multiple published delivery groups, it is counted separately. This value is not the number of records returned on the current page. If no matching results are found, the value is `0`.
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

