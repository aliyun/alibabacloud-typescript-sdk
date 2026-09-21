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
   * The application ID. Pass this value to the [GetConnectionTicket](~~GetConnectionTicket~~) operation to obtain a connection ticket for the application.
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
   * Office App
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
   * The delivery group ID. You can pass this value to the [GetConnectionTicket](~~GetConnectionTicket~~) operation to specify the delivery group to connect to.
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
   * Office App
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
   * The list of applications deployed in the delivery group. This list includes all deployed applications in the delivery group image and is not affected by the AppId or AppName request parameters.
   */
  apps?: ListAuthorizedAppInstanceGroupByUserResponseBodyAppInstanceGroupModelsApps[];
  /**
   * @remarks
   * The expiration time of the delivery group. The value is in the ISO 8601 datetime format with milliseconds and a time zone offset. The returned time zone offset is +00:00. Format: yyyy-MM-ddTHH:mm:ss.SSS+HH:mm.
   * 
   * @example
   * 2022-04-27T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The creation time of the delivery group. The value is in the ISO 8601 datetime format with milliseconds and a time zone offset. The returned time zone offset is +00:00. Format: yyyy-MM-ddTHH:mm:ss.SSS+HH:mm.
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
   * The delivery group status. Valid values:
   * 
   * - DEPLOYING: The delivery group is being created or starting resources and is not yet connectable.
   * - DEPLOYED: The delivery group is deployed. Resources are ready but the delivery group has not been listed for service.
   * - PUBLISHED: The delivery group is published and listed. Users can connect to and use the delivery group.
   * - STOPPING: The delivery group is being delisted and is stopping service.
   * - STOPPED: The delivery group is delisted and has stopped service. Users cannot connect.
   * - MAINTAINING: The delivery group is being maintained or updated.
   * - FAILED: The delivery group failed to publish. Resource initialization failed.
   * - MAINTAIN_FAILED: The update failed. Maintenance or changes were not successful.
   * - DELETING: The delivery group is being deleted.
   * 
   * > Deleted delivery groups are not returned.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
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
   * The list of authorized delivery groups on the current page. This is an empty list if the user has no authorized delivery groups that match the conditions.
   */
  appInstanceGroupModels?: ListAuthorizedAppInstanceGroupByUserResponseBodyAppInstanceGroupModels[];
  /**
   * @remarks
   * The current page number. This value is the same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of delivery groups returned per page. This value is the same as the PageSize request parameter.
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
   * The total number of authorized delivery groups that match the filter conditions.
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

