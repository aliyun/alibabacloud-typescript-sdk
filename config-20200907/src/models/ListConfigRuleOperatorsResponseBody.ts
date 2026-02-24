// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRuleOperatorsResponseBodyOperators extends $dara.Model {
  /**
   * @remarks
   * The data type that the operator applies to.
   * 
   * @example
   * String
   */
  dataType?: string;
  /**
   * @remarks
   * The description of the operator, which can be used to explain why a resource is non-compliant.
   * 
   * @example
   * The current value must equal the target value (case insensitive)
   */
  description?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * StringEquals
   */
  name?: string;
  /**
   * @remarks
   * The operator for the rule\\"s input parameter. The available operators vary based on the data type retrieved using SelectPath.
   * 
   * - If the data type is String, valid values are:
   * 
   *   - StringEquals: equals.
   * 
   *   - NotStringEquals: does not equal.
   * 
   *   - StringIn: is in.
   * 
   *   - NotStringIn: is not in.
   * 
   *   - StringContains: contains.
   * 
   *   - NotStringContains: does not contain.
   * 
   * - If the data type is Number, valid values are:
   * 
   *   - Equals: equals.
   * 
   *   - NotEquals: does not equal.
   * 
   *   - Less: is less than.
   * 
   *   - LessOrEquals: is less than or equal to.
   * 
   *   - Greater: is greater than.
   * 
   *   - GreaterOrEquals: is greater than or equal to.
   * 
   * - If the data type is a Base64-encoded string, valid values are:
   * 
   *   - Base64Contains: contains.
   * 
   *   - NotBase64Contains: does not contain.
   * 
   *   - Base64ContainsAll: contains all.
   * 
   *   - Base64ExcludeAll: excludes all.
   * 
   * - If the data type is Array, valid values are:
   * 
   *   - Contains: contains.
   * 
   *   - NotContains: does not contain.
   * 
   *   - In: is in.
   * 
   *   - NotIn: is not in.
   * 
   *   - ContainsAll: contains all.
   * 
   *   - ExcludeAll: excludes all.
   * 
   *   - IsEmpty: is empty.
   * 
   * @example
   * StringEquals
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      description: 'string',
      name: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleOperatorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of operators.
   */
  operators?: ListConfigRuleOperatorsResponseBodyOperators[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A68DD98C-DE65-46AC-B2D2-04A4A9AB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operators: 'Operators',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operators: { 'type': 'array', 'itemType': ListConfigRuleOperatorsResponseBodyOperators },
      requestId: 'string',
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

