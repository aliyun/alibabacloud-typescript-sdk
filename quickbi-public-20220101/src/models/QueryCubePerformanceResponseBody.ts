// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCubePerformanceResponseBodyResult } from "./QueryCubePerformanceResponseBodyResult";


export class QueryCubePerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 685072a0-1fd5-40ef-ae6b-cf94e79e718f
   */
  requestId?: string;
  /**
   * @remarks
   * Array of report objects
   */
  result?: QueryCubePerformanceResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
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
      result: { 'type': 'array', 'itemType': QueryCubePerformanceResponseBodyResult },
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

