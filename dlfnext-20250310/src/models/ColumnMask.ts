// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ColumnMask extends $dara.Model {
  /**
   * @remarks
   * The column masking expression.
   * 
   * @example
   * CONCAT(\\"***-**-****\\")
   */
  expression?: string;
  /**
   * @remarks
   * The column masking transform method.
   * 
   * @example
   * {"name":"CONCAT","inputs":["***-",{"index":1,"name":"phone","type":"STRING"}]}
   */
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

