// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceSpec4ModifyResponseBodyDataOptionalValues extends $dara.Model {
  label?: string;
  max?: number;
  min?: number;
  step?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      max: 'Max',
      min: 'Min',
      step: 'Step',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      max: 'number',
      min: 'number',
      step: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

