// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineDetailResponseBodyBaselineDetail extends $dara.Model {
  /**
   * @remarks
   * The suggestion for the management of the risk item.
   * 
   * @example
   * Delete the leaked AccessKey pairs.
   */
  advice?: string;
  /**
   * @remarks
   * The alias of the baseline type.
   * 
   * @example
   * ak_leak
   */
  baselineClassAlias?: string;
  /**
   * @remarks
   * The alias of the baseline check item.
   * 
   * @example
   * AccessKey pair leak
   */
  baselineItemAlias?: string;
  /**
   * @remarks
   * The key of the baseline check item.
   * 
   * @example
   * ak_leak
   */
  baselineItemKey?: string;
  /**
   * @remarks
   * The alias of the baseline.
   * 
   * @example
   * AccessKey pair leak
   */
  baselineNameAlias?: string;
  /**
   * @remarks
   * The description of the risk item.
   * 
   * @example
   * If an AccessKey pair is leaked, the AccessKey pair may be fraudulently used.
   */
  description?: string;
  /**
   * @remarks
   * The risk level of the baseline check item. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The issue that is detected by using the baseline.
   * 
   * @example
   * /usr/aksk.txt:yourAccessKeyID
   */
  prompt?: string;
  /**
   * @remarks
   * The ID of the asynchronous request.
   * 
   * @example
   * async__c6f3b0b54613383b40bdce593ffe****
   */
  resultId?: string;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      baselineClassAlias: 'BaselineClassAlias',
      baselineItemAlias: 'BaselineItemAlias',
      baselineItemKey: 'BaselineItemKey',
      baselineNameAlias: 'BaselineNameAlias',
      description: 'Description',
      level: 'Level',
      prompt: 'Prompt',
      resultId: 'ResultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      baselineClassAlias: 'string',
      baselineItemAlias: 'string',
      baselineItemKey: 'string',
      baselineNameAlias: 'string',
      description: 'string',
      level: 'string',
      prompt: 'string',
      resultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBaselineDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the image baseline.
   */
  baselineDetail?: DescribeImageBaselineDetailResponseBodyBaselineDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineDetail: 'BaselineDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineDetail: DescribeImageBaselineDetailResponseBodyBaselineDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.baselineDetail && typeof (this.baselineDetail as any).validate === 'function') {
      (this.baselineDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

