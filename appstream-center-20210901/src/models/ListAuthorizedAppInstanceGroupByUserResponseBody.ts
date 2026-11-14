// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedAppInstanceGroupByUserResponseBodyAppInstanceGroupModelsApps extends $dara.Model {
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
   * The application ID. When you call the [GetConnectionTicket](~~GetConnectionTicket~~) operation to obtain the connection ticket for the application, specify this value.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
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
   * The application version name.
   * 
   * @example
   * Initial version
   */
  appVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      appIcon: 'AppIcon',
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      appVersionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedAppInstanceGroupByUserResponseBodyAppInstanceGroupModels extends $dara.Model {
  /**
   * @remarks
   * The ID of the application image used by the app instance group.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The app instance group ID. When you call the [GetConnectionTicket](~~GetConnectionTicket~~) operation, you can specify this value to indicate the app instance group to connect to.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The app instance group name.
   * 
   * @example
   * Office applications
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The specification type of the app instance group.
   * 
   * @example
   * __dynamic__
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The list of applications deployed in the app instance group. This list includes all applications deployed in the app instance group image and is not affected by the AppId and AppName request parameters.
   */
  apps?: ListAuthorizedAppInstanceGroupByUserResponseBodyAppInstanceGroupModelsApps[];
  /**
   * @remarks
   * The expiration time of the app instance group. The time is displayed in the ISO 8601 standard format, including milliseconds and time zone offset. The returned time zone offset is +00:00. Format: yyyy-MM-ddTHH:mm:ss.SSS+HH:mm.
   * 
   * @example
   * 2022-04-27T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The creation time of the app instance group. The time is displayed in the ISO 8601 standard format, including milliseconds and time zone offset. The returned time zone offset is +00:00. Format: yyyy-MM-ddTHH:mm:ss.SSS+HH:mm.
   * 
   * @example
   * 2022-04-26T15:06:16.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The region ID of the app instance group. For more information about supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the app instance group. Valid values:
   * 
   * - DEPLOYING: Deploying. The app instance group is creating or starting resources and cannot be connected.
   * - DEPLOYED: Deployed. Resources are ready but the app instance group is not listed to provide external services.
   * - PUBLISHED: Published. The app instance group is listed and users can connect to it.
   * - STOPPING: Delisting. The app instance group is stopping services.
   * - STOPPED: Delisted. The app instance group has stopped services and users cannot connect to it.
   * - MAINTAINING: Updating. The app instance group is undergoing maintenance or changes.
   * - FAILED: Publishing failed. Resource initialization failed.
   * - MAINTAIN_FAILED: Update failed. Maintenance or changes were not successful.
   * - DELETING: Deleting. The app instance group is being deleted.
   * 
   * > Deleted app instance groups are not returned.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether mixed authorization for users and user groups is supported.
   */
  supportUserGroupMixedAuth?: boolean;
  /**
   * @remarks
   * The authorization mode for users and user groups.
   * 
   * @example
   * Mixed
   */
  userGroupAuthMode?: string;
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appInstanceType: 'AppInstanceType',
      apps: 'Apps',
      expiredTime: 'ExpiredTime',
      gmtCreate: 'GmtCreate',
      regionId: 'RegionId',
      status: 'Status',
      supportUserGroupMixedAuth: 'SupportUserGroupMixedAuth',
      userGroupAuthMode: 'UserGroupAuthMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appInstanceType: 'string',
      apps: { 'type': 'array', 'itemType': ListAuthorizedAppInstanceGroupByUserResponseBodyAppInstanceGroupModelsApps },
      expiredTime: 'string',
      gmtCreate: 'string',
      regionId: 'string',
      status: 'string',
      supportUserGroupMixedAuth: 'boolean',
      userGroupAuthMode: 'string',
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

export class ListAuthorizedAppInstanceGroupByUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of authorized app instance groups on the current page. If the user does not have any authorized app instance groups that meet the conditions, an empty list is returned.
   */
  appInstanceGroupModels?: ListAuthorizedAppInstanceGroupByUserResponseBodyAppInstanceGroupModels[];
  /**
   * @remarks
   * The current page number, which is the same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of app instance groups returned on each page, which is the same as the PageSize request parameter.
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
   * The total number of authorized app instance groups that meet the filter conditions.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupModels: 'AppInstanceGroupModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupModels: { 'type': 'array', 'itemType': ListAuthorizedAppInstanceGroupByUserResponseBodyAppInstanceGroupModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceGroupModels)) {
      $dara.Model.validateArray(this.appInstanceGroupModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

