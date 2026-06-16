// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressionVariableFunctionListResponseBodyResultObject extends $dara.Model {
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
   * The function name.
   * 
   * @example
   * concat
   */
  key?: string;
  /**
   * @remarks
   * The maximum number of input parameters.
   * 
   * @example
   * 4
   */
  maxParamSize?: number;
  /**
   * @remarks
   * The minimum number of input parameters.
   * 
   * @example
   * 2
   */
  minParamSize?: number;
  /**
   * @remarks
   * The input parameter types.
   * 
   * @example
   * *STRING
   */
  paramTypes?: string;
  /**
   * @remarks
   * Indicates whether the function is directly invoked.
   * 
   * @example
   * true
   */
  redirect?: boolean;
  /**
   * @remarks
   * The return type of the method.
   * 
   * @example
   * STRING
   */
  returnTypes?: string;
  /**
   * @remarks
   * The function value.
   * 
   * @example
   * concat
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      key: 'key',
      maxParamSize: 'maxParamSize',
      minParamSize: 'minParamSize',
      paramTypes: 'paramTypes',
      redirect: 'redirect',
      returnTypes: 'returnTypes',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      maxParamSize: 'number',
      minParamSize: 'number',
      paramTypes: 'string',
      redirect: 'boolean',
      returnTypes: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressionVariableFunctionListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6E8817D5-5354-5953-84B1-D98379F036DC
   */
  requestId?: string;
  /**
   * @remarks
   * The response object.
   */
  resultObject?: DescribeExpressionVariableFunctionListResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeExpressionVariableFunctionListResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

