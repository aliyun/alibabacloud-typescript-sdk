// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutResourceMetricRulesResponseBodyFailedListResultTargetResult extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 404
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBodyFailedListResultTarget extends $dara.Model {
  /**
   * @remarks
   * The alert rule that failed to be created.
   */
  result?: PutResourceMetricRulesResponseBodyFailedListResultTargetResult;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * a151cd6023eacee2f0978e03863cc1697c89508****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: PutResourceMetricRulesResponseBodyFailedListResultTargetResult,
      ruleId: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBodyFailedListResult extends $dara.Model {
  target?: PutResourceMetricRulesResponseBodyFailedListResultTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': PutResourceMetricRulesResponseBodyFailedListResultTarget },
    };
  }

  validate() {
    if(Array.isArray(this.target)) {
      $dara.Model.validateArray(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The alert rules that failed to be created for the resource.
   */
  failedListResult?: PutResourceMetricRulesResponseBodyFailedListResult;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15D1440E-BF24-5A41-93E4-36864635179E
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
      failedListResult: 'FailedListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failedListResult: PutResourceMetricRulesResponseBodyFailedListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.failedListResult && typeof (this.failedListResult as any).validate === 'function') {
      (this.failedListResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

