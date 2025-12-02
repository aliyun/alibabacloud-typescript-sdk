// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldOutputConfig extends $dara.Model {
  defaultValue?: string;
  fieldDescription?: string;
  fieldExample?: string;
  fieldName?: string;
  fieldType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      fieldDescription: 'FieldDescription',
      fieldExample: 'FieldExample',
      fieldName: 'FieldName',
      fieldType: 'FieldType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      fieldDescription: 'string',
      fieldExample: 'string',
      fieldName: 'string',
      fieldType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

