// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBodyTaskOutputsVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * key1
   */
  name?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * *   Constant: constant
   * *   PassThrough: node output
   * *   System: variable
   * *   NodeOutput: script output
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
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

