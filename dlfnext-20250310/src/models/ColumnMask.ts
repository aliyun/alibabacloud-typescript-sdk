// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ColumnMask extends $dara.Model {
  expression?: string;
  transform?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'expression',
      transform: 'transform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      transform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

