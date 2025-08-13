// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperatorListBySceneResponseBodyResultObjectOperatorsRightVariables extends $dara.Model {
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * 年龄
   */
  fieldName?: string;
  /**
   * @remarks
   * Field type.
   * 
   * @example
   * INT
   */
  fieldType?: string;
  /**
   * @remarks
   * Field value.
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

export class DescribeOperatorListBySceneResponseBodyResultObjectOperators extends $dara.Model {
  /**
   * @remarks
   * Operator code
   * 
   * @example
   * equals
   */
  code?: string;
  /**
   * @remarks
   * Whether it contains a right variable
   * 
   * @example
   * true
   */
  hasRightVariable?: boolean;
  /**
   * @remarks
   * Description
   * 
   * @example
   * 等于
   */
  memo?: string;
  /**
   * @remarks
   * Operator name
   * 
   * @example
   * 等于
   */
  name?: string;
  /**
   * @remarks
   * Right variable object
   */
  rightVariables?: DescribeOperatorListBySceneResponseBodyResultObjectOperatorsRightVariables[];
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
      rightVariables: { 'type': 'array', 'itemType': DescribeOperatorListBySceneResponseBodyResultObjectOperatorsRightVariables },
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

export class DescribeOperatorListBySceneResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Return value type
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * Operator list
   */
  operators?: DescribeOperatorListBySceneResponseBodyResultObjectOperators[];
  static names(): { [key: string]: string } {
    return {
      fieldType: 'fieldType',
      operators: 'operators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldType: 'string',
      operators: { 'type': 'array', 'itemType': DescribeOperatorListBySceneResponseBodyResultObjectOperators },
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

export class DescribeOperatorListBySceneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeOperatorListBySceneResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeOperatorListBySceneResponseBodyResultObject },
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

