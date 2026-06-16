// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleCountByUserIdResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the limit condition is reached. Valid values: - **true**: The limit condition is reached. - **false**: The limit condition is not reached.
   * 
   * @example
   * false
   */
  limit?: boolean;
  /**
   * @remarks
   * The maximum number of entries.
   * 
   * @example
   * 100
   */
  maxTotalItem?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 27
   */
  totalItem?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      maxTotalItem: 'maxTotalItem',
      totalItem: 'totalItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'boolean',
      maxTotalItem: 'number',
      totalItem: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleCountByUserIdResponseBody extends $dara.Model {
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
   * The response object.
   */
  resultObject?: DescribeRuleCountByUserIdResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeRuleCountByUserIdResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

