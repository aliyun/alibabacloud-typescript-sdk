// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineDetailResponseBodyBaselineDetail extends $dara.Model {
  /**
   * @remarks
   * The remediation suggestion for the baseline check risk item.
   * 
   * @example
   * 删除泄漏的AK信息。
   */
  advice?: string;
  /**
   * @remarks
   * The alias of the baseline classification.
   * 
   * @example
   * ak_leak
   */
  baselineClassAlias?: string;
  /**
   * @remarks
   * The alias of the baseline sub-item.
   * 
   * @example
   * Access Key泄露
   */
  baselineItemAlias?: string;
  /**
   * @remarks
   * The key of the baseline sub-item.
   * 
   * @example
   * ak_leak
   */
  baselineItemKey?: string;
  /**
   * @remarks
   * The alias of the baseline name.
   * 
   * @example
   * Access Key泄露
   */
  baselineNameAlias?: string;
  /**
   * @remarks
   * The description of the baseline risk item.
   * 
   * @example
   * Access Key泄露，会导致Access Key被冒用的风险。
   */
  description?: string;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * 
   * - **high**: High risk level.
   * 
   * - **medium**: Medium risk level.
   * 
   * - **low**: Low risk level.
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The baseline issue prompt.
   * 
   * @example
   * /usr/aksk.txt:yourAccessKeyID
   */
  prompt?: string;
  /**
   * @remarks
   * The asynchronous request ID.
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
   * The image baseline details.
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

