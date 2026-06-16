// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressionVariableRequest extends $dara.Model {
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
   * The data version.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  dataVersion?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The event code.
   * 
   * This parameter is required.
   * 
   * @example
   * de_acytyt7036
   */
  eventCode?: string;
  /**
   * @remarks
   * The expression.
   * 
   * This parameter is required.
   * 
   * @example
   * @ex_GX9rrlTq4b67 + 1001
   */
  expression?: string;
  /**
   * @remarks
   * The display name of the expression.
   * 
   * This parameter is required.
   * 
   * @example
   * @selfvariable_02 + 1001
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The calculation expression variable.
   * 
   * @example
   * ex_GX9rrlTq4b67
   */
  expressionVariable?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3144
   */
  id?: number;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * ex_NgR6nDVD821c
   */
  name?: string;
  /**
   * @remarks
   * The outlier value.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  outlier?: string;
  /**
   * @remarks
   * The output.
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  outputs?: string;
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
   * The title.
   * 
   * This parameter is required.
   * 
   * @example
   * 变量标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      dataVersion: 'dataVersion',
      description: 'description',
      eventCode: 'eventCode',
      expression: 'expression',
      expressionTitle: 'expressionTitle',
      expressionVariable: 'expressionVariable',
      id: 'id',
      name: 'name',
      outlier: 'outlier',
      outputs: 'outputs',
      regId: 'regId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      dataVersion: 'number',
      description: 'string',
      eventCode: 'string',
      expression: 'string',
      expressionTitle: 'string',
      expressionVariable: 'string',
      id: 'number',
      name: 'string',
      outlier: 'string',
      outputs: 'string',
      regId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

