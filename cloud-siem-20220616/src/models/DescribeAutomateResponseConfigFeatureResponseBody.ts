// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums extends $dara.Model {
  /**
   * @remarks
   * The enumeration value of the right operand.
   * 
   * @example
   * serious
   */
  value?: string;
  /**
   * @remarks
   * The Medusa code for the enumeration value of the right operand.
   * 
   * @example
   * aliyun.siem.automate.feature.alert_level.serious
   */
  valueMds?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      valueMds: 'ValueMds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      valueMds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigFeatureResponseBodyDataSupportOperators extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a right operand is required. Valid values:
   * 
   * - true: A right operand is required.
   * 
   * - false: A right operand is not required.
   * 
   * @example
   * false
   */
  hasRightValue?: boolean;
  /**
   * @remarks
   * The position of the operator in the list of operators.
   * 
   * @example
   * 3
   */
  index?: number;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * <=
   */
  operator?: string;
  /**
   * @remarks
   * The description of the operator in Chinese.
   * 
   * @example
   * larger than or equal to
   */
  operatorDescCn?: string;
  /**
   * @remarks
   * The description of the operator in English.
   * 
   * @example
   * larger than or equal to
   */
  operatorDescEn?: string;
  /**
   * @remarks
   * The display name of the operator.
   * 
   * @example
   * <=
   */
  operatorName?: string;
  /**
   * @remarks
   * The data types that the operator supports. Multiple data types are separated by commas.
   * 
   * @example
   * varchar
   */
  supportDataType?: string;
  /**
   * @remarks
   * The scenarios that the operator supports. Multiple scenarios are separated by commas, such as aggregation. By default, this parameter is empty.
   * 
   * @example
   * [AGGREGATE]
   */
  supportTag?: string[];
  static names(): { [key: string]: string } {
    return {
      hasRightValue: 'HasRightValue',
      index: 'Index',
      operator: 'Operator',
      operatorDescCn: 'OperatorDescCn',
      operatorDescEn: 'OperatorDescEn',
      operatorName: 'OperatorName',
      supportDataType: 'SupportDataType',
      supportTag: 'SupportTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasRightValue: 'boolean',
      index: 'number',
      operator: 'string',
      operatorDescCn: 'string',
      operatorDescEn: 'string',
      operatorName: 'string',
      supportDataType: 'string',
      supportTag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportTag)) {
      $dara.Model.validateArray(this.supportTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigFeatureResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data type of the condition field for the automated response rule.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The name of the condition field for the automated response rule.
   * 
   * @example
   * alert_desc
   */
  feature?: string;
  /**
   * @remarks
   * The enumeration of the right operand that corresponds to the field.
   */
  rightValueEnums?: DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums[];
  /**
   * @remarks
   * The operators that the field supports.
   */
  supportOperators?: DescribeAutomateResponseConfigFeatureResponseBodyDataSupportOperators[];
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      feature: 'Feature',
      rightValueEnums: 'RightValueEnums',
      supportOperators: 'SupportOperators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      feature: 'string',
      rightValueEnums: { 'type': 'array', 'itemType': DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums },
      supportOperators: { 'type': 'array', 'itemType': DescribeAutomateResponseConfigFeatureResponseBodyDataSupportOperators },
    };
  }

  validate() {
    if(Array.isArray(this.rightValueEnums)) {
      $dara.Model.validateArray(this.rightValueEnums);
    }
    if(Array.isArray(this.supportOperators)) {
      $dara.Model.validateArray(this.supportOperators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigFeatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 123456
   */
  data?: DescribeAutomateResponseConfigFeatureResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAutomateResponseConfigFeatureResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

