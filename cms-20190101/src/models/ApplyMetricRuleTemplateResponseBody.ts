// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyMetricRuleTemplateResponseBodyResourceAlertResults extends $dara.Model {
  /**
   * @remarks
   * The responses code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * alert rule is creating, please wait a few minutes.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * applyTemplate8ab74c6b-9f27-47ab-8841-de01dc08****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * test123
   */
  ruleName?: string;
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
      message: 'Message',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class ApplyMetricRuleTemplateResponseBodyResource extends $dara.Model {
  /**
   * @remarks
   * The details of the generated alert rule.
   */
  alertResults?: ApplyMetricRuleTemplateResponseBodyResourceAlertResults[];
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      alertResults: 'AlertResults',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertResults: { 'type': 'array', 'itemType': ApplyMetricRuleTemplateResponseBodyResourceAlertResults },
      groupId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertResults)) {
      $dara.Model.validateArray(this.alertResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F897F3C-020A-4993-95B4-63ABB84F83E6
   */
  requestId?: string;
  /**
   * @remarks
   * The resources that are affected by the alert rule.
   */
  resource?: ApplyMetricRuleTemplateResponseBodyResource;
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
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: ApplyMetricRuleTemplateResponseBodyResource,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

