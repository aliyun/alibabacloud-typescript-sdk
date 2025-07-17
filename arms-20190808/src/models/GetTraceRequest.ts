// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * > If the ID of the trace is 30 characters in length, this parameter is optional. Otherwise, this parameter is required.
   * 
   * @example
   * 1623827603000
   */
  endTime?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on each page. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * > If the ID of the trace is 30 characters in length, this parameter is optional. Otherwise, this parameter is required.
   * 
   * @example
   * 1623827602000
   */
  startTime?: number;
  /**
   * @remarks
   * The trace ID. You can log on to the ARMS console and obtain the trace ID on the **Trace Query** page or **Interface Snapshot** tab.
   * 
   * This parameter is required.
   * 
   * @example
   * ac14001a15954493811405707d****
   */
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
      traceID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

