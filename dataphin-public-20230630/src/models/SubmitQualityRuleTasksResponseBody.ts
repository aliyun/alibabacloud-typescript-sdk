// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQualityRuleTasksResponseBodySubmitResult extends $dara.Model {
  /**
   * @remarks
   * The rule task IDs. Returned in test run scenarios.
   */
  ruleTaskIdList?: number[];
  /**
   * @remarks
   * The monitored object task IDs. Returned in non-test run scenarios.
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
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
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
   * The execution result.
   */
  submitResult?: SubmitQualityRuleTasksResponseBodySubmitResult;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

