// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryVariableDetailResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Data source code.
   * 
   * @example
   * ds_vcaoii1697
   */
  dataSourceCode?: number;
  /**
   * @remarks
   * Data source name
   * 
   * @example
   * 名称数据源
   */
  dataSourceName?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 变量描述
   */
  description?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * Expression.
   * 
   * @example
   * SELECT  AVG( $source )\\nFROM ds_vcaoii1697 \\nWHERE  $age > 0
   */
  expression?: string;
  /**
   * @remarks
   * Expression title.
   * 
   * @example
   * SELECT  AVG( $source )\\nFROM testCase\\nWHERE  $age > 0
   */
  expressionTitle?: string;
  /**
   * @remarks
   * Expression variable.
   * 
   * @example
   * [96426]
   */
  expressionVariable?: string;
  /**
   * @remarks
   * Variable ID
   * 
   * @example
   * 355
   */
  id?: number;
  /**
   * @remarks
   * Outlier
   * 
   * @example
   * -1
   */
  outlier?: string;
  /**
   * @remarks
   * Output results.
   * 
   * @example
   * DOUBLE
   */
  outputs?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 自定义查询变量标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceCode: 'dataSourceCode',
      dataSourceName: 'dataSourceName',
      description: 'description',
      eventCode: 'eventCode',
      expression: 'expression',
      expressionTitle: 'expressionTitle',
      expressionVariable: 'expressionVariable',
      id: 'id',
      outlier: 'outlier',
      outputs: 'outputs',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceCode: 'number',
      dataSourceName: 'string',
      description: 'string',
      eventCode: 'string',
      expression: 'string',
      expressionTitle: 'string',
      expressionVariable: 'string',
      id: 'number',
      outlier: 'string',
      outputs: 'string',
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

export class DescribeQueryVariableDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeQueryVariableDetailResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeQueryVariableDetailResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

