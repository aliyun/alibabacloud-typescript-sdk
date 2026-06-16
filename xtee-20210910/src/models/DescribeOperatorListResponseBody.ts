// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperatorListResponseBodyResultObjectOperatorsRightVariables extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * 年龄
   */
  fieldName?: string;
  /**
   * @remarks
   * The type of the field.
   * 
   * @example
   * INT
   */
  fieldType?: string;
  /**
   * @remarks
   * The field value.
   * 
   * @example
   * 20
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      fieldType: 'fieldType',
      fieldValue: 'fieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldType: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorListResponseBodyResultObjectOperators extends $dara.Model {
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
   * Indicates whether a right variable exists.
   * 
   * @example
   * true
   */
  hasRightVariable?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 等于
   */
  memo?: string;
  /**
   * @remarks
   * The operator name.
   * 
   * @example
   * 等于
   */
  name?: string;
  /**
   * @remarks
   * The right variable object.
   */
  rightVariables?: DescribeOperatorListResponseBodyResultObjectOperatorsRightVariables[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasRightVariable: 'hasRightVariable',
      memo: 'memo',
      name: 'name',
      rightVariables: 'rightVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasRightVariable: 'boolean',
      memo: 'string',
      name: 'string',
      rightVariables: { 'type': 'array', 'itemType': DescribeOperatorListResponseBodyResultObjectOperatorsRightVariables },
    };
  }

  validate() {
    if(Array.isArray(this.rightVariables)) {
      $dara.Model.validateArray(this.rightVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The type of the return value.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * The list of operators.
   */
  operators?: DescribeOperatorListResponseBodyResultObjectOperators[];
  static names(): { [key: string]: string } {
    return {
      fieldType: 'fieldType',
      operators: 'operators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldType: 'string',
      operators: { 'type': 'array', 'itemType': DescribeOperatorListResponseBodyResultObjectOperators },
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

export class DescribeOperatorListResponseBody extends $dara.Model {
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
  resultObject?: DescribeOperatorListResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeOperatorListResponseBodyResultObject },
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

