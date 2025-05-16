// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommonLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The action types.
   */
  actionName?: string[];
  /**
   * @remarks
   * The action status. Logs associated with the specific action status are returned.
   * 
   * Valid values:
   * 
   * *   Finished: The action is completed.
   * *   Failed: The action failed.
   * *   InProgress: The action is being performed.
   * 
   * @example
   * Finished
   */
  actionStatus?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The start time of the time range. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1703821542
   */
  from?: number;
  /**
   * @remarks
   * Specifies whether to display results in reverse order.
   * 
   * Default value: true
   * 
   * @example
   * true
   */
  isReverse?: boolean;
  /**
   * @remarks
   * The request ID of the action. Logs associated with the specific request ID are returned.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  logRequestId?: string;
  /**
   * @remarks
   * The log type. Logs of the specific type are returned.
   * 
   * @example
   * Operation
   */
  logType?: string;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 137***
   */
  operatorUid?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the resource involved in the action. Logs associated with the specific resource are returned. This parameter is not recommended.
   * 
   * @example
   * i-abc***
   */
  resource?: string;
  /**
   * @remarks
   * The end time of the time range. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1703821666
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionStatus: 'ActionStatus',
      clusterId: 'ClusterId',
      from: 'From',
      isReverse: 'IsReverse',
      logRequestId: 'LogRequestId',
      logType: 'LogType',
      operatorUid: 'OperatorUid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resource: 'Resource',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: { 'type': 'array', 'itemType': 'string' },
      actionStatus: 'string',
      clusterId: 'string',
      from: 'number',
      isReverse: 'boolean',
      logRequestId: 'string',
      logType: 'string',
      operatorUid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resource: 'string',
      to: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actionName)) {
      $dara.Model.validateArray(this.actionName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

