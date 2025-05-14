// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAlertsResponseBodyAlerts } from "./ListAlertsResponseBodyAlerts";


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

