// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSqlLogRecordsResponseBodyDataItems } from "./DescribeSqlLogRecordsResponseBodyDataItems";


export class DescribeSqlLogRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp. Unit: millisecond.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the task was complete. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * >  If the value of **Finish** is 0 and the value of **JobId** is returned, the request is an asynchronous request and the return result cannot be directly obtained. You must query the return result based on the value of **JobId**. Specify JobId as the key of **Filters** and the value of **JobId** as the value of Filters. Example: `Filters=[{"Key": "JobId", "Value": "******"}]`.
   * 
   * @example
   * 1
   */
  finish?: string;
  /**
   * @remarks
   * The data.
   */
  items?: DescribeSqlLogRecordsResponseBodyDataItems;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * MzI4NTZfUUlOR0RBT19DTTlfTlUyMF9NWVNRTF9PREJTX0xWU18zMjg1Nl9teXNxbF9XZWQgTWFyIDA2IDE0OjUwOjQ3IENTVCAyMDI0XzBfMzBfRXhlY3V0ZVRpbWVfREVTQ19XZWQgTWFyIDA2IDE0OjM1OjQ3IENTVCAyMDI0Xw==_1709708406465
   */
  jobId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp. Unit: millisecond.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      finish: 'Finish',
      items: 'Items',
      jobId: 'JobId',
      startTime: 'StartTime',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      finish: 'string',
      items: DescribeSqlLogRecordsResponseBodyDataItems,
      jobId: 'string',
      startTime: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

