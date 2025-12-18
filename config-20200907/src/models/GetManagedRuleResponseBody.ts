// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedRuleResponseBodyManagedRuleScope extends $dara.Model {
  /**
   * @remarks
   * The types of resources to which the managed rule applies.
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
   * The interval at which the rule is triggered. Valid values: Valid values:
   * 
   * *   One_Hour
   * *   Three_Hours
   * *   Six_Hours
   * *   Twelve_Hours
   * *   TwentyFour_Hours
   * 
   * @example
   * TwentyFour_Hours
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
   * *   ScheduledNotification: The rule is periodically triggered.
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
   * The details of the required input parameters for the managed rule.
   * 
   * @example
   * {}
   */
  compulsoryInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The name of the managed rule.
   * 
   * @example
   * cdn-domain-https-enabled
   */
  configRuleName?: string;
  /**
   * @remarks
   * The description of the managed rule.
   * 
   * @example
   * If HTTPS encryption is enabled for the CDN domain name, the configuration is considered compliant.
   */
  description?: string;
  /**
   * @remarks
   * The URL of the topic that provides guidance on remediation for the managed rule.
   * 
   * @example
   * https://example.aliyundoc.com
   */
  helpUrls?: string;
  /**
   * @remarks
   * The identifier of the managed rule.
   * 
   * @example
   * cdn-domain-https-enabled
   */
  identifier?: string;
  /**
   * @remarks
   * The tags of the managed rule.
   */
  labels?: string[];
  /**
   * @remarks
   * The details of the optional input parameters for the managed rule.
   * 
   * @example
   * {}
   */
  optionalInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The risk level of the managed rule. Valid values:
   * 
   * *   1: high
   * *   2: medium
   * *   3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The effective scope of the managed rule.
   */
  scope?: GetManagedRuleResponseBodyManagedRuleScope;
  /**
   * @remarks
   * The information about the trigger type of the managed rule.
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
   * The details of the managed rule.
   */
  managedRule?: GetManagedRuleResponseBodyManagedRule;
  /**
   * @remarks
   * The ID of the request.
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

