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
   * The ID of the application image used by the delivery group.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The delivery group ID. When you call the [GetConnectionTicket](~~GetConnectionTicket~~) operation, you can specify this value to indicate the delivery group to connect to.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group name.
   * 
   * @example
   * Office applications
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The specification type of the delivery group.
   * 
   * @example
   * __dynamic__
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The list of applications deployed in the delivery group. This list includes all applications deployed in the delivery group image and is not affected by the AppId and AppName request parameters.
   */
  apps?: ListAuthorizedAppInstanceGroupByUserResponseBodyAppInstanceGroupModelsApps[];
  /**
   * @remarks
   * The expiration time of the delivery group. The time is in ISO 8601 format with milliseconds and a time zone offset of +00:00. Format: yyyy-MM-ddTHH:mm:ss.SSS+HH:mm.
   * 
   * @example
   * 2022-04-27T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The creation time of the delivery group. The time is in ISO 8601 format with milliseconds and a time zone offset of +00:00. Format: yyyy-MM-ddTHH:mm:ss.SSS+HH:mm.
   * 
   * @example
   * 2022-04-26T15:06:16.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The region ID of the delivery group. For more information about supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the delivery group. Valid values:
   * 
   * - DEPLOYING: Deploying. The delivery group is creating or starting resources and cannot be connected to.
   * - DEPLOYED: Deployed. Resources are ready but the delivery group is not published for external services.
   * - PUBLISHED: Published. The delivery group is published and users can connect to it.
   * - STOPPING: Unpublishing. The delivery group is stopping services.
   * - STOPPED: Unpublished. The delivery group has stopped services and users cannot connect to it.
   * - MAINTAINING: Updating. The delivery group is undergoing maintenance or changes.
   * - FAILED: Publishing failed. Resource initialization failed.
   * - MAINTAIN_FAILED: Update failed. Maintenance or changes were not successful.
   * - DELETING: Deleting. The delivery group is being deleted.
   * 
   * > Deleted delivery groups are not returned.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether mixed authorization of users and user groups is supported.
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
   * The list of authorized delivery groups on the current page. If the user does not have any authorized delivery groups that meet the conditions, an empty list is returned.
   */
  appInstanceGroupModels?: ListAuthorizedAppInstanceGroupByUserResponseBodyAppInstanceGroupModels[];
  /**
   * @remarks
   * The current page number. The value is the same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of delivery groups returned per page. The value is the same as the PageSize request parameter.
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
   * The total number of authorized delivery groups that meet the filter conditions.
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

