// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryShareListResponseBodyResult } from "./QueryShareListResponseBodyResult";


export class QueryShareListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the list of objects to which the work has been shared.
   */
  result?: QueryShareListResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
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
      result: { 'type': 'array', 'itemType': QueryShareListResponseBodyResult },
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

