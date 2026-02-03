// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RowFilter extends $dara.Model {
  expression?: string;
  predicate?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'expression',
      predicate: 'predicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      predicate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

