// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFailedNotificationsResponseBodyNotificationList extends $dara.Model {
  /**
   * @example
   * orderPay
   */
  action?: string;
  /**
   * @example
   * 1665988512000
   */
  createTime?: number;
  /**
   * @example
   * {"productCode":"cmgj00001","orderId":"123456","orderBizId":"111222","action":"orderPay","aliUid":"12211222211","skuId":"cmgj00001-prepay"}
   */
  message?: string;
  /**
   * @example
   * deab3673236843a3b378c7d8d25c5f01
   */
  notificationRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      createTime: 'CreateTime',
      message: 'Message',
      notificationRequestId: 'NotificationRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'number',
      message: 'string',
      notificationRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFailedNotificationsResponseBody extends $dara.Model {
  notificationList?: DescribeFailedNotificationsResponseBodyNotificationList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  /**
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      notificationList: 'NotificationList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationList: { 'type': 'array', 'itemType': DescribeFailedNotificationsResponseBodyNotificationList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.notificationList)) {
      $dara.Model.validateArray(this.notificationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

