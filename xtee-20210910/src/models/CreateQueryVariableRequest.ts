// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueryVariableRequest extends $dara.Model {
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
   * Data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3527
   */
  dataSourceCode?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 查询变量描述信息
   */
  description?: string;
  /**
   * @remarks
   * Event code
   * 
   * This parameter is required.
   * 
   * @example
   * de_arqbuy7206
   */
  eventCode?: string;
  /**
   * @remarks
   * Calculation expression
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
   * Display value of calculation expression
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
   * Calculation expression variable
   * 
   * This parameter is required.
   * 
   * @example
   * age
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

