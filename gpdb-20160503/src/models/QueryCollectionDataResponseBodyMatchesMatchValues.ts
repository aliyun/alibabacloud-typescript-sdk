// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCollectionDataResponseBodyMatchesMatchValues extends $dara.Model {
  value?: number[];
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

