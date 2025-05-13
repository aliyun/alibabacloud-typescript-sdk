// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConnectedClustersResponseBodyResultResult } from "./ListConnectedClustersResponseBodyResultResult";


export class ListConnectedClustersResponseBodyResult extends $dara.Model {
  result?: ListConnectedClustersResponseBodyResultResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListConnectedClustersResponseBodyResultResult },
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

