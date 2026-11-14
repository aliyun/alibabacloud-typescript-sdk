// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedAppsByUserResponseBodyApps extends $dara.Model {
  /**
   * @remarks
   * The access URL of the application icon. This parameter is empty when the deployment details of the application cannot be obtained.
   * 
   * @example
   * https://app-center-icon-****.png
   */
  appIcon?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the app instance group to which the application belongs.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the app instance group to which the application belongs. If the app instance group information cannot be obtained, the returned value is the same as the AppInstanceGroupId.
   * 
   * @example
   * Office applications
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The application name. If the deployment details of the application cannot be obtained, the returned value is the same as the AppId.
   * 
   * @example
   * Office applications
   */
  appName?: string;
  /**
   * @remarks
   * The application version. This parameter is empty when the deployment details of the application cannot be obtained.
   * 
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The application version name. This parameter is empty when the deployment details of the application cannot be obtained.
   * 
   * @example
   * Initial version
   */
  appVersionName?: string;
  /**
   * @remarks
   * The number of users authorized to access the application in the app instance group to which the application belongs. This parameter is empty when the deployment details of the application cannot be obtained.
   * 
   * @example
   * 3
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

export class ListAuthorizedAppsByUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of applications authorized for the user. Each record corresponds to an application within an app instance group.
   */
  apps?: ListAuthorizedAppsByUserResponseBodyApps[];
  /**
   * @remarks
   * The page number of the returned results.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of authorization records that meet the query conditions.
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
      apps: { 'type': 'array', 'itemType': ListAuthorizedAppsByUserResponseBodyApps },
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

