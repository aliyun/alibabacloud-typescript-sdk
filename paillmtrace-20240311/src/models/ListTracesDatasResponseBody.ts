// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTracesDatasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code. This parameter is returned only when an error occurs.
   * 
   * @example
   * ExecutionFailure
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when an error occurs.
   * 
   * @example
   * failed to get trace data
   */
  message?: string;
  /**
   * @remarks
   * POP request id
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of traces that meet the condition.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  /**
   * @remarks
   * The JSON array with each element being a trace\\"s JSON string. Length of the array is equal to or less than the page size parameter value.
   */
  traces?: any[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
      traces: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.traces)) {
      $dara.Model.validateArray(this.traces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

