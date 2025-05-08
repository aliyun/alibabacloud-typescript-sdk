// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetExpressionFieldsRequestExpressions extends $dara.Model {
  /**
   * @remarks
   * Content of the expression.
   * 
   * @example
   * ip.src eq 1.1.1.1
   */
  expression?: string;
  /**
   * @remarks
   * The sequence number of the expression.
   * 
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

