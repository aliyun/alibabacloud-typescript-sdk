// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpressionTestRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The test expression.
   * 
   * This parameter is required.
   * 
   * @example
   * @ex_GX9rrlTq4b67 + 1001
   */
  expression?: string;
  /**
   * @remarks
   * The calculation expression variable.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"name\\":\\"age\\",\\"code\\":\\"age\\",\\"fieldType\\":\\"INT\\",\\"id\\":44809,\\"value\\":\\"1\\"}]
   */
  expressionVariable?: string;
  /**
   * @remarks
   * The associated variable ID.
   * 
   * @example
   * [44659]
   */
  expressionVariableIds?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 3144
   */
  id?: number;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The scenario.
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

