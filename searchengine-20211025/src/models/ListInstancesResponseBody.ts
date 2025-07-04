// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyResult } from "./ListInstancesResponseBodyResult";


export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 89B968E6-1E41-58DF-BB25-5F98ECC759CE
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: ListInstancesResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned
   * 
   * @example
   * 5
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
      result: { 'type': 'array', 'itemType': ListInstancesResponseBodyResult },
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

