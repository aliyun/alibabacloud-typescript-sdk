// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataField } from "./DataField";


export class FullDataType extends $dara.Model {
  element?: FullDataType;
  fields?: DataField[];
  key?: FullDataType;
  type?: string;
  value?: FullDataType;
  static names(): { [key: string]: string } {
    return {
      element: 'element',
      fields: 'fields',
      key: 'key',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      element: FullDataType,
      fields: { 'type': 'array', 'itemType': DataField },
      key: FullDataType,
      type: 'string',
      value: FullDataType,
    };
  }

  validate() {
    if(this.element && typeof (this.element as any).validate === 'function') {
      (this.element as any).validate();
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(this.key && typeof (this.key as any).validate === 'function') {
      (this.key as any).validate();
    }
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

