// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupMetricRulesResponseBodyResourcesAlertResult extends $dara.Model {
  /**
   * @remarks
   * The status code that is returned for the alert rule.
   * 
   * >  The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message that is returned for the alert rule.
   * 
   * @example
   * Metric not found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 456789
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * ECS_Rule1
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the alert rule was created. Valid value:
   * 
   * - true: The alert rule was created.
   * - false: The alert rule failed to be created.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      ruleId: 'string',
      ruleName: 'string',
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

export class CreateGroupMetricRulesResponseBodyResources extends $dara.Model {
  alertResult?: CreateGroupMetricRulesResponseBodyResourcesAlertResult[];
  static names(): { [key: string]: string } {
    return {
      alertResult: 'AlertResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertResult: { 'type': 'array', 'itemType': CreateGroupMetricRulesResponseBodyResourcesAlertResult },
    };
  }

  validate() {
    if(Array.isArray(this.alertResult)) {
      $dara.Model.validateArray(this.alertResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 461CF2CD-2FC3-4B26-8645-7BD27E7D0F1D
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the alert rules.
   */
  resources?: CreateGroupMetricRulesResponseBodyResources;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid value:
   * 
   * - true: The call is successful.
   * - false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resources: CreateGroupMetricRulesResponseBodyResources,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

