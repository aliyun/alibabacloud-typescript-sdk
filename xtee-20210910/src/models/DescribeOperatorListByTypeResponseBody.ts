// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperatorListByTypeResponseBodyResultObjectOperators extends $dara.Model {
  /**
   * @remarks
   * The operator code.
   * 
   * @example
   * equals
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the operator has a right variable.
   * 
   * @example
   * true
   */
  hasRightVariable?: boolean;
  /**
   * @remarks
   * The operator name.
   * 
   * @example
   * 等于
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasRightVariable: 'hasRightVariable',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasRightVariable: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorListByTypeResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The return value type.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * The list of operators.
   */
  operators?: DescribeOperatorListByTypeResponseBodyResultObjectOperators[];
  static names(): { [key: string]: string } {
    return {
      fieldType: 'fieldType',
      operators: 'operators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldType: 'string',
      operators: { 'type': 'array', 'itemType': DescribeOperatorListByTypeResponseBodyResultObjectOperators },
    };
  }

  validate() {
    if(Array.isArray(this.operators)) {
      $dara.Model.validateArray(this.operators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorListByTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeOperatorListByTypeResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeOperatorListByTypeResponseBodyResultObject },
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

