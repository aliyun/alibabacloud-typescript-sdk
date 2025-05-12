// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResultsCensorResult } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResultsCensorResult";


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults extends $dara.Model {
  censorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResultsCensorResult[];
  static names(): { [key: string]: string } {
    return {
      censorResult: 'CensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResultsCensorResult },
    };
  }

  validate() {
    if(Array.isArray(this.censorResult)) {
      $dara.Model.validateArray(this.censorResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

