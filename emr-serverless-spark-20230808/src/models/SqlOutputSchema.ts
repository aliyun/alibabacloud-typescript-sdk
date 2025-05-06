// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SqlOutputSchemaFields } from "./SqlOutputSchemaFields";


export class SqlOutputSchema extends $dara.Model {
  fields?: SqlOutputSchemaFields[];
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': SqlOutputSchemaFields },
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

