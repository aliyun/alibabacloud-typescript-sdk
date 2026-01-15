// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestProcessExpressionRequest extends $dara.Model {
  /**
   * @example
   * score
   */
  expression?: string;
  /**
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

