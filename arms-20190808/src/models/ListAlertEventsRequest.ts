// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Test-triggered alert
   */
  alertName?: string;
  /**
   * @remarks
   * The end time of the alert events that you want to query. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2021-12-22 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The list of matching conditions.
   * 
   * @example
   * [         {           "value": "ARMS_NOTIFICATION",           "key": "clustername",           "operator": "eq"         }       ]     },{       "matchingConditions": [         {           "value": "test",           "key": "alertname",           "operator": "eq"         }       ]
   */
  matchingConditions?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Specifies whether to show the associated notification policy.
   * 
   * @example
   * false
   */
  showNotificationPolicies?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The start time of the alert events that you want to query. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2021-12-19 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the alert events. Valid values:
   * 
   * *   Active
   * *   Silenced
   * *   Resolved
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      endTime: 'EndTime',
      matchingConditions: 'MatchingConditions',
      page: 'Page',
      showNotificationPolicies: 'ShowNotificationPolicies',
      size: 'Size',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      endTime: 'string',
      matchingConditions: 'string',
      page: 'number',
      showNotificationPolicies: 'boolean',
      size: 'number',
      startTime: 'string',
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

