// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WritingStyleTemplateFieldEnums } from "./WritingStyleTemplateFieldEnums";
import { WritingStyleTemplateFieldStyle } from "./WritingStyleTemplateFieldStyle";


export class WritingStyleTemplateField extends $dara.Model {
  buildIn?: boolean;
  cascadingFields?: WritingStyleTemplateField[];
  enums?: WritingStyleTemplateFieldEnums[];
  initialValue?: string;
  key?: string;
  max?: number;
  maxItem?: number;
  maxItemLength?: number;
  maxLength?: number;
  min?: number;
  minItemLength?: number;
  minLength?: number;
  name?: string;
  required?: boolean;
  style?: WritingStyleTemplateFieldStyle;
  static names(): { [key: string]: string } {
    return {
      buildIn: 'BuildIn',
      cascadingFields: 'CascadingFields',
      enums: 'Enums',
      initialValue: 'InitialValue',
      key: 'Key',
      max: 'Max',
      maxItem: 'MaxItem',
      maxItemLength: 'MaxItemLength',
      maxLength: 'MaxLength',
      min: 'Min',
      minItemLength: 'MinItemLength',
      minLength: 'MinLength',
      name: 'Name',
      required: 'Required',
      style: 'Style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildIn: 'boolean',
      cascadingFields: { 'type': 'array', 'itemType': WritingStyleTemplateField },
      enums: { 'type': 'array', 'itemType': WritingStyleTemplateFieldEnums },
      initialValue: 'string',
      key: 'string',
      max: 'number',
      maxItem: 'number',
      maxItemLength: 'number',
      maxLength: 'number',
      min: 'number',
      minItemLength: 'number',
      minLength: 'number',
      name: 'string',
      required: 'boolean',
      style: WritingStyleTemplateFieldStyle,
    };
  }

  validate() {
    if(Array.isArray(this.cascadingFields)) {
      $dara.Model.validateArray(this.cascadingFields);
    }
    if(Array.isArray(this.enums)) {
      $dara.Model.validateArray(this.enums);
    }
    if(this.style && typeof (this.style as any).validate === 'function') {
      (this.style as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

