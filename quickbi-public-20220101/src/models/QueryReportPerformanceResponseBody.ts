// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryReportPerformanceResponseBodyResult } from "./QueryReportPerformanceResponseBodyResult";


export class QueryReportPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1FC71085-D5FD-08E0-813A-4D4BD1031BC5
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: QueryReportPerformanceResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryReportPerformanceResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

