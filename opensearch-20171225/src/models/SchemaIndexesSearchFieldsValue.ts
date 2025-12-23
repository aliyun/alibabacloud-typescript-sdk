// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SchemaIndexesSearchFieldsValue extends $dara.Model {
  analyzer?: string;
  analyzerType?: string;
  analyzerGeneration?: string;
  fields?: string[];
  label?: string;
  static names(): { [key: string]: string } {
    return {
      analyzer: 'analyzer',
      analyzerType: 'analyzerType',
      analyzerGeneration: 'analyzerGeneration',
      fields: 'fields',
      label: 'label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzer: 'string',
      analyzerType: 'string',
      analyzerGeneration: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      label: 'string',
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

