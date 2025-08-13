// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressionVariableFunctionListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Function name
   * 
   * @example
   * concat
   */
  key?: string;
  /**
   * @remarks
   * Maximum number of parameters
   * 
   * @example
   * 4
   */
  maxParamSize?: number;
  /**
   * @remarks
   * Minimum number of parameters
   * 
   * @example
   * 2
   */
  minParamSize?: number;
  /**
   * @remarks
   * Parameter types
   * 
   * @example
   * *STRING
   */
  paramTypes?: string;
  /**
   * @remarks
   * Whether it is directly invoked
   * 
   * @example
   * true
   */
  redirect?: boolean;
  /**
   * @remarks
   * Method return types
   * 
   * @example
   * STRING
   */
  returnTypes?: string;
  /**
   * @remarks
   * Function value
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
   * Request ID.
   * 
   * @example
   * 6E8817D5-5354-5953-84B1-D98379F036DC
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
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

