// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobInfo extends $dara.Model {
  id?: string;
  properties?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

