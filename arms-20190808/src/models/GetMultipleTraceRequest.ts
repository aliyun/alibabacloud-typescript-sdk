// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultipleTraceRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the trace ends. The value is a timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1663999380000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: `1`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page, the maximum value is 1000.
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
   * The start time of the trace. The value is a timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1657692507000
   */
  startTime?: number;
  /**
   * @remarks
   * The trace IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ac1400a115951745017447033d****
   */
  traceIDs?: string[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      traceIDs: 'TraceIDs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
      traceIDs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.traceIDs)) {
      $dara.Model.validateArray(this.traceIDs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

