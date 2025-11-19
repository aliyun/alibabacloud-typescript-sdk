// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelParameterRule extends $dara.Model {
  default?: any;
  max?: number;
  min?: number;
  name?: string;
  required?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      max: 'max',
      min: 'min',
      name: 'name',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'any',
      max: 'number',
      min: 'number',
      name: 'string',
      required: 'boolean',
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

