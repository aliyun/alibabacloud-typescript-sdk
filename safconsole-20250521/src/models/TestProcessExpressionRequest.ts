// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestProcessExpressionRequest extends $dara.Model {
  /**
   * @remarks
   * Expression.
   * 
   * @example
   * score
   */
  expression?: string;
  /**
   * @remarks
   * Parameter list.
   * 
   * @example
   * {"score": "1"}
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

