// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAssetMatchOperatorsResponseBodyMatchTypeOperatorsMatchOperators extends $dara.Model {
  /**
   * @remarks
   * Operation data types. Values: 
   * - LIST type: 
   * 1. For Name as LIST_CONTAINS, the value is: LIST 
   * 2. For Name as LIST_LENGTH_GT, the value is: PRIMITIVE 
   * 3. For Name as LIST_LENGTH_LT, the value is: PRIMITIVE 
   * 4. For Name as LIST_NOT_CONTAINS, the value is: LIST
   * - STRING type: 
   * 1. For Name as STRING_NOT_IN, the value is: LIST 
   * 2. For Name as STRING_EQ, the value is: PRIMITIVE 
   * 3. For Name as STRING_IN, the value is: LIST 
   * 4. For Name as STRING_NOT_EQ, the value is: PRIMITIVE
   * - BOOLEAN type: 
   * 1. For Name as BOOLEAN_NOT_IN, the value is: LIST 
   * 2. For Name as BOOLEAN_EQ, the value is: PRIMITIVE 
   * 3. For Name as BOOLEAN_IN, the value is: LIST 
   * 4. For Name as BOOLEAN_NOT_EQ, the value is: PRIMITIVE
   * - FLOAT type: 
   * 1. For Name as FLOAT_NOT_IN, the value is: LIST 
   * 2. For Name as FLOAT_EQ, the value is: PRIMITIVE 
   * 3. For Name as FLOAT_IN, the value is: LIST 
   * 4. For Name as FLOAT_NOT_EQ, the value is: PRIMITIVE 
   * 5. For Name as FLOAT_GT, the value is: PRIMITIVE 
   * 6. For Name as FLOAT_GTE, the value is: PRIMITIVE 
   * 7. For Name as FLOAT_LT, the value is: PRIMITIVE 
   * 8. For Name as FLOAT_LTE, the value is: PRIMITIVE
   * - DOUBLE type: 
   * 1. For Name as DOUBLE_NOT_IN, the value is: LIST 
   * 2. For Name as DOUBLE_EQ, the value is: PRIMITIVE 
   * 3. For Name as DOUBLE_IN, the value is: LIST 
   * 4. For Name as DOUBLE_NOT_EQ, the value is: PRIMITIVE 
   * 5. For Name as DOUBLE_GT, the value is: PRIMITIVE 
   * 6. For Name as DOUBLE_GTE, the value is: PRIMITIVE 
   * 7. For Name as DOUBLE_LT, the value is: PRIMITIVE 8. For Name as DOUBLE_LTE, the value is: PRIMITIVE
   * - INTEGER type: 
   * 1. For Name as INTEGER_NOT_IN, the value is: LIST 
   * 2. For Name as INTEGER_EQ, the value is: PRIMITIVE 
   * 3. For Name as INTEGER_IN, the value is: LIST 
   * 4. For Name as INTEGER_NOT_EQ, the value is: PRIMITIVE 
   * 5. For Name as INTEGER_GT, the value is: PRIMITIVE 
   * 6. For Name as INTEGER_GTE, the value is: PRIMITIVE 
   * 7. For Name as INTEGER_LT, the value is: PRIMITIVE 
   * 8. For Name as INTEGER_LTE, the value is: PRIMITIVE
   * - LONG type: 
   * 1. For Name as LONG_NOT_IN, the value is: LIST 
   * 2. For Name as LONG_EQ, the value is: PRIMITIVE 
   * 3. For Name as LONG_IN, the value is: LIST 
   * 4. For Name as LONG_NOT_EQ, the value is: PRIMITIVE 
   * 5. For Name as LONG_GT, the value is: PRIMITIVE 
   * 6. For Name as LONG_GTE, the value is: PRIMITIVE 
   * 7. For Name as LONG_LT, the value is: PRIMITIVE 
   * 8. For Name as LONG_LTE, the value is: PRIMITIVE
   * - INTEGER type (repeated): 
   * 1. For Name as INTEGER_NOT_IN, the value is: LIST 
   * 2. For Name as INTEGER_EQ, the value is: PRIMITIVE 
   * 3. For Name as INTEGER_IN, the value is: LIST 
   * 4. For Name as INTEGER_NOT_EQ, the value is: PRIMITIVE 
   * 5. For Name as INTEGER_GT, the value is: PRIMITIVE 
   * 6. For Name as INTEGER_GTE, the value is: PRIMITIVE 
   * 7. For Name as INTEGER_LT, the value is: PRIMITIVE 
   * 8. For Name as INTEGER_LTE, the value is: PRIMITIVE
   * 
   * @example
   * PRIMITIVE
   */
  inputPattern?: string;
  /**
   * @remarks
   * Unique name of the operator. Values: - LIST type: 
   * 1. LIST_CONTAINS: contains 
   * 2. LIST_LENGTH_GT: length greater than 
   * 3. LIST_LENGTH_LT: length less than 
   * 4. LIST_NOT_CONTAINS: does not contain
   * - STRING type: 
   * 1. STRING_NOT_IN: not in list 
   * 2. STRING_EQ: equals 
   * 3. STRING_IN: in list 
   * 4. STRING_NOT_EQ: not equal
   * - BOOLEAN type: 
   * 1. BOOLEAN_NOT_IN: not in list 
   * 2. BOOLEAN_EQ: equals 
   * 3. BOOLEAN_IN: in list 
   * 4. BOOLEAN_NOT_EQ: not equal
   * - FLOAT type: 1. FLOAT_NOT_IN: not in list 
   * 2. FLOAT_EQ: equals 3. FLOAT_IN: in list 
   * 4. FLOAT_NOT_EQ: not equal 
   * 5. FLOAT_GT: greater than 
   * 6. FLOAT_GTE: greater than or equal to 
   * 7. FLOAT_LT: less than 
   * 8. FLOAT_LTE: less than or equal to
   * - DOUBLE type: 
   * 1. DOUBLE_NOT_IN: not in list 
   * 2. DOUBLE_EQ: equals 
   * 3. DOUBLE_IN: in list 
   * 4. DOUBLE_NOT_EQ: not equal 
   * 5. DOUBLE_GT: greater than 
   * 6. DOUBLE_GTE: greater than or equal to 7
   * . DOUBLE_LT: less than 
   * 8. DOUBLE_LTE: less than or equal to
   * - INTEGER type: 
   * 1. INTEGER_NOT_IN: not in list 
   * 2. INTEGER_EQ: equals 
   * 3. INTEGER_IN: in list 
   * 4. INTEGER_NOT_EQ: not equal 
   * 5. INTEGER_GT: greater than 
   * 6. INTEGER_GTE: greater than or equal to 
   * 7. INTEGER_LT: less than 
   * 8. INTEGER_LTE: less than or equal to
   * - LONG type: 
   * 1. LONG_NOT_IN: not in list 
   * 2. LONG_EQ: equals 
   * 3. LONG_IN: in list 
   * 4. LONG_NOT_EQ: not equal 
   * 5. LONG_GT: greater than 
   * 6. LONG_GTE: greater than or equal to 
   * 7. LONG_LT: less than 
   * 8. LONG_LTE: less than or equal to<details>
   * 
   * @example
   * LIST_CONTAINS
   */
  name?: string;
  /**
   * @remarks
   * Operator display name. Values: - For LIST type: 
   * 1. Contains: includes 
   * 2. SizeGreaterThan: size greater than 
   * 3. SizeLessThan: size less than 
   * 4. NotContains: does not include
   * - For STRING type: 
   * 1. NotIn: not in the list 
   * 2. Equals: equals 
   * 3. In: in the list 
   * 4. NotEquals: does not equal
   * - For BOOLEAN type: 
   * 1. NotIn: not in the list 
   * 2. Equals: equals 
   * 3. In: in the list 
   * 4. NotEquals: does not equal
   * - For FLOAT type: 
   * 1. NotIn: not in the list 
   * 2. Equals: equals 
   * 3. In: in the list 
   * 4. NotEquals: does not equal 
   * 5. >: greater than 
   * 6. >=: greater than or equal to 
   * 7. <: less than 
   * 8. <=: less than or equal to
   * - For DOUBLE type: 
   * 1. NotIn: not in the list 
   * 2. Equals: equals 
   * 3. In: in the list 
   * 4. NotEquals: does not equal 
   * 5. >: greater than 
   * 6. >=: greater than or equal to 
   * 7. <: less than 
   * 8. <=: less than or equal to (Note: There seems to be a repetition here, likely meant to be \\"<=\\" for \\"less than or equal to\\")
   * - For INTEGER type: 
   * 1. NotIn: not in the list 
   * 2. Equals: equals 
   * 3. In: in the list 
   * 4. NotEquals: does not equal 
   * 5. >: greater than 
   * 6. >=: greater than or equal to 
   * 7. <: less than 
   * 8. <=: less than or equal to
   * - For LONG type: 
   * 1. NotIn: not in the list 
   * 2. Equals: equals 
   * 3. In: in the list 
   * 4. NotEquals: does not equal 
   * 5. >: greater than 
   * 6. >=: greater than or equal to 
   * 7. <: less than 
   * 8. <=: less than or equal to
   * - For INTEGER type (repeated): 
   * 1. NotIn: not in the list 
   * 2. Equals: equals 
   * 3. In: in the list 
   * 4. NotEquals: does not equal 
   * 5. >: greater than 
   * 6. >=: greater than or equal to 
   * 7. <: less than 
   * 8. <=: less than or equal to
   * 
   * @example
   * Contains
   */
  showName?: string;
  /**
   * @remarks
   * Operator value. Options: - For LIST type: 
   * 1. CONTAINS: contains 
   * 2. LENGTH_GT: length greater than 
   * 3. LENGTH_LT: length less than 
   * 4. NOT_CONTAINS: does not contain
   * - For STRING type: 
   * 1. NOT_IN: not in the list 
   * 2. EQ: equals 
   * 3. IN: in the list 
   * 4. NOT_EQ: does not equal
   * - For BOOLEAN type: 
   * 1. NOT_IN: not in the list 
   * 2. EQ: equals 
   * 3. IN: in the list 
   * 4. NOT_EQ: does not equal
   * - For FLOAT type: 
   * 1. NOT_IN: not in the list 
   * 2. EQ: equals 
   * 3. IN: in the list 
   * 4. NOT_EQ: does not equal 
   * 5. GT: greater than 
   * 6. GTE: greater than or equal to 
   * 7. LT: less than 
   * 8. LTE: less than or equal to
   * - For DOUBLE type: 
   * 1. NOT_IN: not in the list 
   * 2. EQ: equals 
   * 3. IN: in the list 
   * 4. NOT_EQ: does not equal 
   * 5. GT: greater than 
   * 6. GTE: greater than or equal to 
   * 7. LT: less than 
   * 8. LTE: less than or equal to
   * - For INTEGER type: 
   * 1. NOT_IN: not in the list 
   * 2. EQ: equals 
   * 3. IN: in the list 
   * 4. NOT_EQ: does not equal 
   * 5. GT: greater than 
   * 6. GTE: greater than or equal to 
   * 7. LT: less than 
   * 8. LTE: less than or equal to
   * - For LONG type: 
   * 1. NOT_IN: not in the list 
   * 2. EQ: equals 
   * 3. IN: in the list 
   * 4. NOT_EQ: does not equal 
   * 5. GT: greater than 
   * 6. GTE: greater than or equal to 
   * 7. LT: less than 
   * 8. LTE: less than or equal to
   * 
   * @example
   * CONTAINS
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      inputPattern: 'InputPattern',
      name: 'Name',
      showName: 'ShowName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputPattern: 'string',
      name: 'string',
      showName: 'string',
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

export class ListCloudAssetMatchOperatorsResponseBodyMatchTypeOperators extends $dara.Model {
  /**
   * @remarks
   * List of operators
   */
  matchOperators?: ListCloudAssetMatchOperatorsResponseBodyMatchTypeOperatorsMatchOperators[];
  /**
   * @remarks
   * The type used by the operator. Values:
   * - LIST 
   * - MAP 
   * - STRING 
   * - BOOLEAN 
   * - FLOAT 
   * - DOUBLE 
   * - INTEGER 
   * - LONG
   * 
   * @example
   * LIST
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      matchOperators: 'MatchOperators',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchOperators: { 'type': 'array', 'itemType': ListCloudAssetMatchOperatorsResponseBodyMatchTypeOperatorsMatchOperators },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.matchOperators)) {
      $dara.Model.validateArray(this.matchOperators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAssetMatchOperatorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of operator types
   */
  matchTypeOperators?: ListCloudAssetMatchOperatorsResponseBodyMatchTypeOperators[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C699E4E4-F2F4-58FC-A949-457FFE59****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      matchTypeOperators: 'MatchTypeOperators',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchTypeOperators: { 'type': 'array', 'itemType': ListCloudAssetMatchOperatorsResponseBodyMatchTypeOperators },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.matchTypeOperators)) {
      $dara.Model.validateArray(this.matchTypeOperators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

