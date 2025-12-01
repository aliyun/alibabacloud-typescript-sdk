// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressionVariableVersionDetailResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Creation type.
   * 
   * @example
   * MORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * 变量描述
   */
  description?: string;
  /**
   * @remarks
   * Expression.
   * 
   * @example
   * @ex_GX9rrlTq4b67 + 1001
   */
  expression?: string;
  /**
   * @remarks
   * Expression title.
   * 
   * @example
   * @selfvariable_02 + 1001
   */
  expressionTitle?: string;
  /**
   * @remarks
   * Expression variable.
   * 
   * @example
   * ex_GX9rrlTq4b67
   */
  expressionVariable?: string;
  /**
   * @remarks
   * Field ranking.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1762409015000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1762409026000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Custom variable primary key.
   * 
   * @example
   * 397625
   */
  id?: number;
  /**
   * @remarks
   * Invoke key.
   * 
   * @example
   * deInvokeSelfVariable_v1
   */
  invokeKey?: string;
  /**
   * @remarks
   * Variable name, a uniquely generated identifier.
   * 
   * @example
   * ex_0kWIfZ27c525
   */
  name?: string;
  /**
   * @remarks
   * Outlier.
   * 
   * @example
   * SYS_ERROR
   */
  outlier?: string;
  /**
   * @remarks
   * Variable return type.
   * 
   * @example
   * EXPRESSION
   */
  outputs?: string;
  /**
   * @remarks
   * Variable associated event.
   * 
   * @example
   * de_awkhwh0314
   */
  refObjId?: string;
  /**
   * @remarks
   * Variable association type.
   * 
   * @example
   * EVENT_BY_EXPRESSION
   */
  refObjType?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Source type.
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * Variable title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * Variable type.
   * 
   * @example
   * EXPRESSION
   */
  type?: string;
  /**
   * @remarks
   * User UID.
   * 
   * @example
   * 151222xxxxxxxxxx
   */
  userId?: number;
  /**
   * @remarks
   * Variable version.
   * 
   * @example
   * 2
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createType: 'createType',
      description: 'description',
      expression: 'expression',
      expressionTitle: 'expressionTitle',
      expressionVariable: 'expressionVariable',
      fieldRank: 'fieldRank',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      invokeKey: 'invokeKey',
      name: 'name',
      outlier: 'outlier',
      outputs: 'outputs',
      refObjId: 'refObjId',
      refObjType: 'refObjType',
      region: 'region',
      sourceType: 'sourceType',
      status: 'status',
      title: 'title',
      type: 'type',
      userId: 'userId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createType: 'string',
      description: 'string',
      expression: 'string',
      expressionTitle: 'string',
      expressionVariable: 'string',
      fieldRank: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      invokeKey: 'string',
      name: 'string',
      outlier: 'string',
      outputs: 'string',
      refObjId: 'string',
      refObjType: 'string',
      region: 'string',
      sourceType: 'string',
      status: 'string',
      title: 'string',
      type: 'string',
      userId: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressionVariableVersionDetailResponseBody extends $dara.Model {
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
   * Returned object.
   */
  resultObject?: DescribeExpressionVariableVersionDetailResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeExpressionVariableVersionDetailResponseBodyResultObject,
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

