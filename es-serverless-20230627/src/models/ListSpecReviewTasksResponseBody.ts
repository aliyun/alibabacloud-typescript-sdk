// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSpecReviewTasksResponseBodyResult } from "./ListSpecReviewTasksResponseBodyResult";


export class ListSpecReviewTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 55F7B3FE-05D8-5F0F-BD55-A18967D447DC
   */
  requestId?: string;
  result?: ListSpecReviewTasksResponseBodyResult[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSpecReviewTasksResponseBodyResult },
      totalCount: 'number',
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

