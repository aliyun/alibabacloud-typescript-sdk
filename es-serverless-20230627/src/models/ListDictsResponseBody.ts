// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDictsResponseBodyResult } from "./ListDictsResponseBodyResult";


export class ListDictsResponseBody extends $dara.Model {
  /**
   * @example
   * E92BCBB9-3CFE-58DD-8D8C-56DF46AB3BF3
   */
  requestId?: string;
  result?: ListDictsResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListDictsResponseBodyResult },
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

