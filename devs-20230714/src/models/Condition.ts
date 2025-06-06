// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Condition extends $dara.Model {
  expression?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'expression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

