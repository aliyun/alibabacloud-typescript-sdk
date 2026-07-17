// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBotInstancesResponseBodyInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The Bot protection instance level. If this parameter is empty, the plan does not include a Bot protection instance. If a value is returned, the plan includes a Bot protection instance. Valid values:
   * 
   * - enterprise_bot: web edition.
   * 
   * - enterprise_bot_with_app: app edition.
   * 
   * @example
   * enterprise_bot
   */
  botInstanceLevel?: string;
  /**
   * @remarks
   * The time when the instance was purchased. The time is in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-04-12T05:41:51Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The scheduled release time. The time is in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2026-03-25T16:00:00Z
   */
  reserveReleaseTime?: string;
  /**
   * @remarks
   * The ID of the associated site plan instance.
   * 
   * @example
   * esa-site-b0s6kmx0r0n4
   */
  siteInstanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **online**: The instance is running normally.
   * - **offline**: The instance has expired but has not exceeded the retention period and is unavailable.
   * - **disable**: The instance has been released.
   * - **overdue**: The instance has been stopped due to an overdue payment.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      botInstanceLevel: 'BotInstanceLevel',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      reserveReleaseTime: 'ReserveReleaseTime',
      siteInstanceId: 'SiteInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botInstanceLevel: 'string',
      createTime: 'string',
      instanceId: 'string',
      reserveReleaseTime: 'string',
      siteInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instances that match the specified conditions under the current account.
   */
  instanceInfo?: ListBotInstancesResponseBodyInstanceInfo[];
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 509FD5AF-AB5B-55A9-9568-38D98668E3AB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 0
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': ListBotInstancesResponseBodyInstanceInfo },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfo)) {
      $dara.Model.validateArray(this.instanceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

