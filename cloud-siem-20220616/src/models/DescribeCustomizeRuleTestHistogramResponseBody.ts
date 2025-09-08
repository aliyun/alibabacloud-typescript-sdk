// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeRuleTestHistogramResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of alerts that are generated in the query time range.
   * 
   * @example
   * 125
   */
  count?: number;
  /**
   * @remarks
   * The start of the time range for querying alerts. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1599897188
   */
  from?: number;
  /**
   * @remarks
   * The end of the time range for querying alerts. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1599997188
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleTestHistogramResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The return value for the request.
   * 
   * @example
   * 123456
   */
  data?: DescribeCustomizeRuleTestHistogramResponseBodyData[];
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: { 'type': 'array', 'itemType': DescribeCustomizeRuleTestHistogramResponseBodyData },
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

