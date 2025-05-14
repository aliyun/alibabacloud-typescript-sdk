// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertMultiDimTableRecordRequestRecords extends $dara.Model {
  fields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.fields) {
      $dara.Model.validateMap(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

