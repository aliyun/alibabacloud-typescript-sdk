// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedRuleResponseBodyManagedRuleScope extends $dara.Model {
  /**
   * @remarks
   * The resource types for which the rule template is effective.
   */
  complianceResourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      complianceResourceTypes: 'ComplianceResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.complianceResourceTypes)) {
      $dara.Model.validateArray(this.complianceResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagedRuleResponseBodyManagedRuleSourceDetails extends $dara.Model {
  /**
   * @remarks
   * The execution period of the rule. Valid values:
   * 
   * - One_Hour: 1 hour.
   * 
   * - Three_Hours: 3 hours.
   * 
   * - Six_Hours: 6 hours.
   * 
   * - Twelve_Hours: 12 hours.
   * 
   * - TwentyFour_Hours: 24 hours.
   * 
   * @example
   * TwentyFour_Hours
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * - ConfigurationItemChangeNotification: The rule is triggered by a configuration change.
   * 
   * - ScheduledNotification: The rule is triggered periodically.
   * 
   * @example
   * ConfigurationItemChangeNotification
   */
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumExecutionFrequency: 'string',
      messageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagedRuleResponseBodyManagedRule extends $dara.Model {
  /**
   * @remarks
   * The information about the required input parameters for the rule template.
   * 
   * @example
   * {}
   */
  compulsoryInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The name of the rule template.
   * 
   * @example
   * CDN域名开启HTTPS加密
   */
  configRuleName?: string;
  /**
   * @remarks
   * The description of the rule template.
   * 
   * @example
   * CDN域名开启HTTPS协议加密，视为“合规”。
   */
  description?: string;
  /**
   * @remarks
   * The URL of the document that provides guidance on how to fix the issue.
   * 
   * @example
   * https://example.aliyundoc.com
   */
  helpUrls?: string;
  /**
   * @remarks
   * The identifier of the rule template.
   * 
   * @example
   * cdn-domain-https-enabled
   */
  identifier?: string;
  /**
   * @remarks
   * The labels of the rule template.
   */
  labels?: string[];
  /**
   * @remarks
   * The information about the optional input parameters for the rule template.
   * 
   * @example
   * {}
   */
  optionalInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The risk level of the rule template. Valid values:
   * 
   * - 1: high risk.
   * 
   * - 2: medium risk.
   * 
   * - 3: low risk.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The effective scope of the rule template.
   */
  scope?: GetManagedRuleResponseBodyManagedRuleScope;
  /**
   * @remarks
   * The trigger methods for the rule.
   */
  sourceDetails?: GetManagedRuleResponseBodyManagedRuleSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      compulsoryInputParameterDetails: 'CompulsoryInputParameterDetails',
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      helpUrls: 'HelpUrls',
      identifier: 'Identifier',
      labels: 'Labels',
      optionalInputParameterDetails: 'OptionalInputParameterDetails',
      riskLevel: 'RiskLevel',
      scope: 'Scope',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compulsoryInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      configRuleName: 'string',
      description: 'string',
      helpUrls: 'string',
      identifier: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      optionalInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      riskLevel: 'number',
      scope: GetManagedRuleResponseBodyManagedRuleScope,
      sourceDetails: { 'type': 'array', 'itemType': GetManagedRuleResponseBodyManagedRuleSourceDetails },
    };
  }

  validate() {
    if(this.compulsoryInputParameterDetails) {
      $dara.Model.validateMap(this.compulsoryInputParameterDetails);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.optionalInputParameterDetails) {
      $dara.Model.validateMap(this.optionalInputParameterDetails);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    if(Array.isArray(this.sourceDetails)) {
      $dara.Model.validateArray(this.sourceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagedRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the rule template.
   */
  managedRule?: GetManagedRuleResponseBodyManagedRule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E6DDC09-87C1-5310-A924-3491EAAE6F90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managedRule: 'ManagedRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRule: GetManagedRuleResponseBodyManagedRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.managedRule && typeof (this.managedRule as any).validate === 'function') {
      (this.managedRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

