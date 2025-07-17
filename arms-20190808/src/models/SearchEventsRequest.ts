// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert rule. You can call the SearchAlertRules operation and view the `Id` parameter in the response. For more information, see [SearchAlertRules](https://help.aliyun.com/document_detail/175825.html).
   * 
   * @example
   * 123
   */
  alertId?: number;
  /**
   * @remarks
   * The type of the alert rule. Valid values:
   * 
   * *   `1`: custom alert rules to monitor drill-down data sets
   * *   `3`: custom alert rules to monitor tiled data sets
   * *   `4`: alert rules to monitor the frontend, including the default frontend alert rules
   * *   `5`: alert rules to monitor applications, including the default application alert rules
   * *   `6`: the default frontend alert rules
   * *   `7`: the default application alert rules
   * *   `8`: Tracing Analysis alert rules
   * *   `101`: Prometheus alert rules
   * 
   * @example
   * 4
   */
  alertType?: number;
  /**
   * @remarks
   * The type of the application that is associated with the alert rule. Valid values:
   * 
   * *   `TRACE`: application monitoring
   * *   `RETCODE`: frontend monitoring
   * 
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: `1`.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify a UNIX timestamp of the LONG data type, in milliseconds. The default value is the current time.
   * 
   * @example
   * 1595568970000
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies whether the alert event is triggered. If you do not set this parameter, all alert events are queried. Valid values:
   * 
   * *   `1`: The event is triggered.
   * *   `0`: The event is not triggered.
   * 
   * @example
   * 1
   */
  isTrigger?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: `10`.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The process identifier (PID) of the application that is associated with the alert rule.
   * 
   * @example
   * atc889zkcf@d8deedfa9bf****
   */
  pid?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a UNIX timestamp of the LONG data type, in milliseconds. The default value is 10 minutes before the current time.
   * 
   * @example
   * 1595565300000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertType: 'AlertType',
      appType: 'AppType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      isTrigger: 'IsTrigger',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertType: 'number',
      appType: 'string',
      currentPage: 'number',
      endTime: 'number',
      isTrigger: 'number',
      pageSize: 'number',
      pid: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

