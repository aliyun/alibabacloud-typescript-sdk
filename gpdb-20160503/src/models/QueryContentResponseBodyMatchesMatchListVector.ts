// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContentResponseBodyMatchesMatchListVector extends $dara.Model {
  vectorList?: number[];
  static names(): { [key: string]: string } {
    return {
      vectorList: 'VectorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vectorList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.vectorList)) {
      $dara.Model.validateArray(this.vectorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

