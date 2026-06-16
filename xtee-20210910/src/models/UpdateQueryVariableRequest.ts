// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQueryVariableRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The data source code.
   * 
   * This parameter is required.
   * 
   * @example
   * ds_vcaoii1697
   */
  dataSourceCode?: string;
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
   * de_ajnoqe2016
   */
  eventCode?: string;
  /**
   * @remarks
   * The expression.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT  AVG( $source )\\nFROM ds_vcaoii1697 \\nWHERE  $age > 0
   */
  expression?: string;
  /**
   * @remarks
   * The display expression.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT  AVG( $source )\\nFROM testCase\\nWHERE  $age > 0
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The variable associated with the expression.
   * 
   * This parameter is required.
   * 
   * @example
   * age
   */
  expressionVariable?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3144
   */
  id?: number;
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

