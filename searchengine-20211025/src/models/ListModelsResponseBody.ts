// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListModelsResponseBodyResult } from "./ListModelsResponseBodyResult";


export class ListModelsResponseBody extends $dara.Model {
  /**
   * @example
   * 38b079f1-7846-4226-8c90-3e2644b5c52b
   */
  requestId?: string;
  result?: ListModelsResponseBodyResult[];
  /**
   * @example
   * 14
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
      result: { 'type': 'array', 'itemType': ListModelsResponseBodyResult },
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

