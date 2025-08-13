// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpressionTestRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Test expression.
   * 
   * This parameter is required.
   * 
   * @example
   * @ex_GX9rrlTq4b67 + 1001
   */
  expression?: string;
  /**
   * @remarks
   * Calculation expression variable
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"name\\":\\"age\\",\\"code\\":\\"age\\",\\"fieldType\\":\\"INT\\",\\"id\\":44809,\\"value\\":\\"1\\"}]
   */
  expressionVariable?: string;
  /**
   * @remarks
   * Associated variable ID
   * 
   * @example
   * [44659]
   */
  expressionVariableIds?: string;
  /**
   * @remarks
   * Variable ID
   * 
   * @example
   * 3144
   */
  id?: number;
  /**
   * @remarks
   * Region code
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Scene
   * 
   * This parameter is required.
   * 
   * @example
   * EXPRESSION
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      expression: 'expression',
      expressionVariable: 'expressionVariable',
      expressionVariableIds: 'expressionVariableIds',
      id: 'id',
      regId: 'regId',
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      expression: 'string',
      expressionVariable: 'string',
      expressionVariableIds: 'string',
      id: 'number',
      regId: 'string',
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

