// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CssInstanceProperty extends $dara.Model {
  code?: string;
  globalKey?: string;
  name?: string;
  unit?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      globalKey: 'globalKey',
      name: 'name',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalKey: 'string',
      name: 'string',
      unit: 'string',
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

