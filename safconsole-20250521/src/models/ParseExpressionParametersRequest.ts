// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ParseExpressionParametersRequest extends $dara.Model {
  /**
   * @example
   * score
   */
  expression?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
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

