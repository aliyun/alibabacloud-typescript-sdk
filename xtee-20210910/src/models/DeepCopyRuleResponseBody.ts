// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepCopyRuleResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Whether to redirect to details
   * 
   * @example
   * true
   */
  batchCopyFlag?: boolean;
  /**
   * @remarks
   * Primary key of the policy
   * 
   * @example
   * 2346
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * 104556
   */
  ruleId?: string;
  /**
   * @remarks
   * Primary key of the policy version
   * 
   * @example
   * 1135
   */
  ruleVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      batchCopyFlag: 'BatchCopyFlag',
      consoleRuleId: 'ConsoleRuleId',
      ruleId: 'RuleId',
      ruleVersionId: 'RuleVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchCopyFlag: 'boolean',
      consoleRuleId: 'number',
      ruleId: 'string',
      ruleVersionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepCopyRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information
   */
  resultObject?: DeepCopyRuleResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DeepCopyRuleResponseBodyResultObject,
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

