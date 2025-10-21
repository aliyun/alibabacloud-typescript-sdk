// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Database extends $dara.Model {
  comment?: string;
  name?: string;
  properties?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      name: 'name',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

