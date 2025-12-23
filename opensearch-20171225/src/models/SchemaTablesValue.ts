// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SchemaTablesValueFieldsValue } from "./SchemaTablesValueFieldsValue";


export class SchemaTablesValue extends $dara.Model {
  name?: string;
  primaryTable?: boolean;
  fields?: { [key: string]: SchemaTablesValueFieldsValue };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      primaryTable: 'primaryTable',
      fields: 'fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      primaryTable: 'boolean',
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': SchemaTablesValueFieldsValue },
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

