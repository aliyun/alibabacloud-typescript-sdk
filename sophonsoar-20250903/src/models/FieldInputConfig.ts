// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldInputConfig extends $dara.Model {
  arrayed?: boolean;
  defaultValue?: string;
  fieldCheckRegex?: string;
  fieldClass?: string;
  fieldConfigs?: FieldInputConfig[];
  fieldDescription?: string;
  fieldExample?: string;
  fieldName?: string;
  fieldPath?: string;
  fieldType?: string;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrayed: 'Arrayed',
      defaultValue: 'DefaultValue',
      fieldCheckRegex: 'FieldCheckRegex',
      fieldClass: 'FieldClass',
      fieldConfigs: 'FieldConfigs',
      fieldDescription: 'FieldDescription',
      fieldExample: 'FieldExample',
      fieldName: 'FieldName',
      fieldPath: 'FieldPath',
      fieldType: 'FieldType',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayed: 'boolean',
      defaultValue: 'string',
      fieldCheckRegex: 'string',
      fieldClass: 'string',
      fieldConfigs: { 'type': 'array', 'itemType': FieldInputConfig },
      fieldDescription: 'string',
      fieldExample: 'string',
      fieldName: 'string',
      fieldPath: 'string',
      fieldType: 'string',
      required: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fieldConfigs)) {
      $dara.Model.validateArray(this.fieldConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

