// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHitRuleListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Number of hits.
   * 
   * @example
   * 100
   */
  hitCount?: number;
  /**
   * @remarks
   * Strategy name
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      hitCount: 'hitCount',
      ruleName: 'ruleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitCount: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHitRuleListResponseBody extends $dara.Model {
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
   * Response object
   */
  resultObject?: DescribeHitRuleListResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeHitRuleListResponseBodyResultObject },
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

