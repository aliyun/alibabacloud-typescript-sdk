// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQueryVariableRequest extends $dara.Model {
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
   * Data source code
   * 
   * This parameter is required.
   * 
   * @example
   * ds_vcaoii1697
   */
  dataSourceCode?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Event code
   * 
   * This parameter is required.
   * 
   * @example
   * de_ajnoqe2016
   */
  eventCode?: string;
  /**
   * @remarks
   * Expression.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT  AVG( $source )\\nFROM ds_vcaoii1697 \\nWHERE  $age > 0
   */
  expression?: string;
  /**
   * @remarks
   * Display expression
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT  AVG( $source )\\nFROM testCase\\nWHERE  $age > 0
   */
  expressionTitle?: string;
  /**
   * @remarks
   * Expression associated variable
   * 
   * This parameter is required.
   * 
   * @example
   * age
   */
  expressionVariable?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * This parameter is required.
   * 
   * @example
   * 3144
   */
  id?: number;
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
   * 获取年龄大于30的数据
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
      id: 'id',
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
      id: 'number',
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

