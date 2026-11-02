// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertsResponseBodyAlerts extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values:
   * - Scheduling Error: An error occurred while building the schedule.
   * - PlayBack Warning: An exception occurred while pulling the address when adding a source.
   * - info: Information.
   * 
   * @example
   * Scheduling Error
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
   * The creation time.
   * 
   * @example
   * 2024-07-16T10:03Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
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
   * The ARNs of related resources.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<userId>:vodSource/mySourceLocation/MySource
   */
  relatedResourceArns?: string;
  /**
   * @remarks
   * The resource ARN.
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
   * The alert list.
   */
  alerts?: ListAlertsResponseBodyAlerts[];
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * **The request ID.**
   * 
   * @example
   * xxx-xxxx-xxxxx-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the conditions.
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

