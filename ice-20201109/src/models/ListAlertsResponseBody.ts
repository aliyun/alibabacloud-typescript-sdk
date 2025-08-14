// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertsResponseBodyAlerts extends $dara.Model {
  /**
   * @remarks
   * The alert type.
   */
  category?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ScheduleError
   */
  code?: string;
  /**
   * @remarks
   * The time when the alert was received in UTC.
   * 
   * @example
   * 2024-07-16T10:03Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the alert was modified in UTC.
   * 
   * @example
   * 2024-07-16T10:03Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xxxxx
   */
  message?: string;
  /**
   * @remarks
   * The ARN of the related resource.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<userId>:vodSource/mySourceLocation/MySource
   */
  relatedResourceArns?: string;
  /**
   * @remarks
   * The ARN of the resource.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<userId>:vodSource/mySourceLocation/MySource
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      code: 'Code',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      message: 'Message',
      relatedResourceArns: 'RelatedResourceArns',
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      code: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      message: 'string',
      relatedResourceArns: 'string',
      resourceArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alerts.
   */
  alerts?: ListAlertsResponseBodyAlerts[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * **Request ID**
   * 
   * @example
   * xxx-xxxx-xxxxx-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alerts: 'Alerts',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alerts: { 'type': 'array', 'itemType': ListAlertsResponseBodyAlerts },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alerts)) {
      $dara.Model.validateArray(this.alerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

