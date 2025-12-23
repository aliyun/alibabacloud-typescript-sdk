// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SchemaTablesValueFieldsValue extends $dara.Model {
  name?: string;
  primaryKey?: boolean;
  type?: string;
  joinWith?: string[];
  label?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      primaryKey: 'primaryKey',
      type: 'type',
      joinWith: 'joinWith',
      label: 'label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      primaryKey: 'boolean',
      type: 'string',
      joinWith: { 'type': 'array', 'itemType': 'string' },
      label: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.joinWith)) {
      $dara.Model.validateArray(this.joinWith);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

