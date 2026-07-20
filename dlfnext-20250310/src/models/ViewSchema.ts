// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataField } from "./DataField";


export class ViewSchema extends $dara.Model {
  comment?: string;
  dialects?: { [key: string]: string };
  fields?: DataField[];
  options?: { [key: string]: string };
  query?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      dialects: 'dialects',
      fields: 'fields',
      options: 'options',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      dialects: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      fields: { 'type': 'array', 'itemType': DataField },
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: 'string',
    };
  }

  validate() {
    if(this.dialects) {
      $dara.Model.validateMap(this.dialects);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

