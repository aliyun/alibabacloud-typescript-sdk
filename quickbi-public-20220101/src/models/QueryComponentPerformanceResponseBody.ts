// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryComponentPerformanceResponseBodyResult } from "./QueryComponentPerformanceResponseBodyResult";


export class QueryComponentPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCE45E6D-9304-4F94-86BB-5A772B1615FF
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned.
   */
  result?: QueryComponentPerformanceResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': QueryComponentPerformanceResponseBodyResult },
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

