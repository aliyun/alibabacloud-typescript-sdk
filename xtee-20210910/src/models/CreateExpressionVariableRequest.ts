// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressionVariableRequest extends $dara.Model {
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
   * Description.
   * 
   * @example
   * 获取入参的手机号前7位
   */
  description?: string;
  /**
   * @remarks
   * Event code
   * 
   * This parameter is required.
   * 
   * @example
   * de_ahpayh4121
   */
  eventCode?: string;
  /**
   * @remarks
   * Calculation expression
   * 
   * This parameter is required.
   * 
   * @example
   * @ex_GX9rrlTq4b67 + 1001
   */
  expression?: string;
  /**
   * @remarks
   * Display value of calculation expression
   * 
   * This parameter is required.
   * 
   * @example
   * @selfvariable_02 + 1001
   */
  expressionTitle?: string;
  /**
   * @remarks
   * Calculation expression variable
   * 
   * @example
   * [{"name":"ex_GX9rrlTq4b67","code":"deInvokeSelfVariable(44659)","fieldType":"INT"}]
   */
  expressionVariable?: string;
  /**
   * @remarks
   * Outlier
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  outlier?: string;
  /**
   * @remarks
   * Variable return type
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  outputs?: string;
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
   * Title.
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

