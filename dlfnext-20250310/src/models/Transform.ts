// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FullDataType } from "./FullDataType";
import { FieldRef } from "./FieldRef";
import { TransformInput } from "./TransformInput";


export class Transform extends $dara.Model {
  castType?: FullDataType;
  fieldRef?: FieldRef;
  inputs?: TransformInput[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      castType: 'castType',
      fieldRef: 'fieldRef',
      inputs: 'inputs',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      castType: FullDataType,
      fieldRef: FieldRef,
      inputs: { 'type': 'array', 'itemType': TransformInput },
      name: 'string',
    };
  }

  validate() {
    if(this.castType && typeof (this.castType as any).validate === 'function') {
      (this.castType as any).validate();
    }
    if(this.fieldRef && typeof (this.fieldRef as any).validate === 'function') {
      (this.fieldRef as any).validate();
    }
    if(Array.isArray(this.inputs)) {
      $dara.Model.validateArray(this.inputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

