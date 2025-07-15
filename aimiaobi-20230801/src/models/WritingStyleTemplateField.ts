// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WritingStyleTemplateFieldEnums extends $dara.Model {
  cascadingFields?: string[];
  key?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cascadingFields: 'CascadingFields',
      key: 'Key',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadingFields: { 'type': 'array', 'itemType': 'string' },
      key: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cascadingFields)) {
      $dara.Model.validateArray(this.cascadingFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WritingStyleTemplateFieldStyle extends $dara.Model {
  description?: string;
  format?: string;
  placeholder?: string;
  showTime?: boolean;
  suffix?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      format: 'Format',
      placeholder: 'Placeholder',
      showTime: 'ShowTime',
      suffix: 'Suffix',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      format: 'string',
      placeholder: 'string',
      showTime: 'boolean',
      suffix: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

