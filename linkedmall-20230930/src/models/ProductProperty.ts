// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductProperty extends $dara.Model {
  text?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      text: 'text',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

