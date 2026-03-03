// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  comment?: string;
  name?: string;
  properties?: { [key: string]: any };
  provider?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      properties: 'Properties',
      provider: 'Provider',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      provider: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

