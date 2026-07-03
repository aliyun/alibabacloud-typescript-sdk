// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperatorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The position of the operator in the operator list.
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
   * The Chinese description of the operator.
   * 
   * @example
   * arger than or equal to
   */
  operatorDescCn?: string;
  /**
   * @remarks
   * The English description of the operator.
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
   * The scenarios that the operator supports. Multiple scenarios are separated by commas, such as aggregation (AGGREGATE). The default value is empty.
   * 
   * @example
   * [AGGREGATE]
   */
  supportTag?: string[];
  static names(): { [key: string]: string } {
    return {
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

export class DescribeOperatorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeOperatorsResponseBodyData[];
  /**
   * @remarks
   * The message returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
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
      data: { 'type': 'array', 'itemType': DescribeOperatorsResponseBodyData },
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

