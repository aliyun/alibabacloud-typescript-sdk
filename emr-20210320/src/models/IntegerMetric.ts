// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntegerMetric extends $dara.Model {
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

