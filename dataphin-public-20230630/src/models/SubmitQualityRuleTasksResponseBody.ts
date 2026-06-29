// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQualityRuleTasksResponseBodySubmitResult extends $dara.Model {
  /**
   * @remarks
   * Rule task IDs, returned in the test run scenario
   */
  ruleTaskIdList?: number[];
  /**
   * @remarks
   * Monitoring object task IDs, returned in non-test run scenarios
   */
  watchTaskIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      ruleTaskIdList: 'RuleTaskIdList',
      watchTaskIdList: 'WatchTaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTaskIdList: { 'type': 'array', 'itemType': 'number' },
      watchTaskIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleTaskIdList)) {
      $dara.Model.validateArray(this.ruleTaskIdList);
    }
    if(Array.isArray(this.watchTaskIdList)) {
      $dara.Model.validateArray(this.watchTaskIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityRuleTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Backend response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP response code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Details of the backend response exception
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Execution result
   */
  submitResult?: SubmitQualityRuleTasksResponseBodySubmitResult;
  /**
   * @remarks
   * Whether the request was successful
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      submitResult: 'SubmitResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      submitResult: SubmitQualityRuleTasksResponseBodySubmitResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.submitResult && typeof (this.submitResult as any).validate === 'function') {
      (this.submitResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

