// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList } from "./GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList";


export class GetAutoIncrementUsageStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The usage details of auto-increment IDs.
   */
  autoIncrementUsageList?: GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList[];
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * the given database name list invalid, none of the database names in the list exist on the instance
   */
  errorInfo?: string;
  /**
   * @remarks
   * Indicates whether the task is complete. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  finish?: boolean;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **RUNNING**: The task is being executed.
   * *   **SUCCESS**: The task succeeds.
   * *   **FAIL**: The task fails.
   * 
   * @example
   * INIT
   */
  taskStatus?: string;
  /**
   * @remarks
   * The time when the request was made. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1697183353000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      autoIncrementUsageList: 'AutoIncrementUsageList',
      errorInfo: 'ErrorInfo',
      finish: 'Finish',
      taskStatus: 'TaskStatus',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementUsageList: { 'type': 'array', 'itemType': GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList },
      errorInfo: 'string',
      finish: 'boolean',
      taskStatus: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.autoIncrementUsageList)) {
      $dara.Model.validateArray(this.autoIncrementUsageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

