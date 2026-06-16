// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueryVariableRequest extends $dara.Model {
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
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3527
   */
  dataSourceCode?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 查询变量描述信息
   */
  description?: string;
  /**
   * @remarks
   * The event code.
   * 
   * This parameter is required.
   * 
   * @example
   * de_arqbuy7206
   */
  eventCode?: string;
  /**
   * @remarks
   * The calculation expression.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT  AVG( $source )
   * FROM testCase
   * WHERE  $age > 0
   */
  expression?: string;
  /**
   * @remarks
   * The display value of the calculation expression.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT  AVG( $source )
   * FROM testCase
   * WHERE  $age > 0
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The variable of the calculation expression.
   * 
   * This parameter is required.
   * 
   * @example
   * age
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
      dataSourceCode: 'dataSourceCode',
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
      dataSourceCode: 'string',
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

