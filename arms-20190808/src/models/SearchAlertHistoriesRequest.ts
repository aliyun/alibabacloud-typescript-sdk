// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertHistoriesRequest extends $dara.Model {
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
   * *   `1`: a custom alert rule that is used to monitor drill-down data sets
   * *   `3`: a custom alert rule that is used to monitor tiled data sets
   * *   `4`: an alert rule that is used to monitor web pages, including the default alert rule for browser monitoring
   * *   `5`: an alert rule that is used to monitor applications, including the default alert rule for application monitoring
   * *   `6`: the default alert rule for browser monitoring
   * *   `7`: the default alert rule for application monitoring
   * *   `8`: a Tracing Analysis alert rule
   * *   `101`: a Prometheus alert rule
   * 
   * @example
   * 4
   */
  alertType?: number;
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
   * The end of the time range to query. The value is a UNIX timestamp of the LONG data type. Unit: milliseconds. The default value is the current time.
   * 
   * @example
   * 1579499626000
   */
  endTime?: number;
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
   * The ID of the region. Default value: `cn-hangzhou`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp of the LONG data type. Unit: milliseconds. The default value is 10 minutes before the current time.
   * 
   * @example
   * 1595568910000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertType: 'AlertType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertType: 'number',
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
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

