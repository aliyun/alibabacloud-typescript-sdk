// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultimodalSearchBody extends $dara.Model {
  advancedParams?: { [key: string]: any };
  query?: string;
  static names(): { [key: string]: string } {
    return {
      advancedParams: 'advancedParams',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      query: 'string',
    };
  }

  validate() {
    if(this.advancedParams) {
      $dara.Model.validateMap(this.advancedParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

