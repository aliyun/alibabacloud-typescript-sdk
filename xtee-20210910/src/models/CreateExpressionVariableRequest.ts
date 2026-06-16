// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressionVariableRequest extends $dara.Model {
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
   * The description.
   * 
   * @example
   * 获取入参的手机号前7位
   */
  description?: string;
  /**
   * @remarks
   * The event code.
   * 
   * This parameter is required.
   * 
   * @example
   * de_ahpayh4121
   */
  eventCode?: string;
  /**
   * @remarks
   * The calculation expression.
   * 
   * This parameter is required.
   * 
   * @example
   * @ex_GX9rrlTq4b67 + 1001
   */
  expression?: string;
  /**
   * @remarks
   * The display value of the calculation expression.
   * 
   * This parameter is required.
   * 
   * @example
   * @selfvariable_02 + 1001
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The variable of the calculation expression.
   * 
   * @example
   * [{"name":"ex_GX9rrlTq4b67","code":"deInvokeSelfVariable(44659)","fieldType":"INT"}]
   */
  expressionVariable?: string;
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
   * The return type of the variable.
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
   * 获取手机号前7位
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      description: 'description',
      eventCode: 'eventCode',
      expression: 'expression',
      expressionTitle: 'expressionTitle',
      expressionVariable: 'expressionVariable',
      outlier: 'outlier',
      outputs: 'outputs',
      regId: 'regId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      description: 'string',
      eventCode: 'string',
      expression: 'string',
      expressionTitle: 'string',
      expressionVariable: 'string',
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

