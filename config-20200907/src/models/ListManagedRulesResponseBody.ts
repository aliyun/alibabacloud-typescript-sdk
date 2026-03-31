// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedRulesResponseBodyManagedRulesManagedRuleListScope extends $dara.Model {
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

export class ListManagedRulesResponseBodyManagedRulesManagedRuleList extends $dara.Model {
  /**
   * @remarks
   * The name of the managed rule.
   * 
   * @example
   * test-rule-name
   */
  configRuleName?: string;
  /**
   * @remarks
   * The description of the managed rule.
   * 
   * @example
   * The description of the test rule.
   */
  description?: string;
  /**
   * @remarks
   * The URL of the topic that describes how the managed rule remediates the incompliant configurations.
   * 
   * @example
   * https://example.aliyundoc.com
   */
  helpUrls?: string;
  /**
   * @remarks
   * The unique identifier of the managed rule.
   * 
   * @example
   * cdn-domain-https-enabled
   */
  identifier?: string;
  /**
   * @remarks
   * The classification description of the managed rule.
   */
  labels?: string[];
  /**
   * @remarks
   * The ID of the remediation template.
   * 
   * @example
   * ACS-CDN-SetDomainServerCertificate
   */
  remediationTemplateIdentifier?: string;
  /**
   * @remarks
   * The name of the remediation template.
   * 
   * @example
   * Configure encryption rules for OSS buckets
   */
  remediationTemplateName?: string;
  /**
   * @remarks
   * The risk level of the resources that do not comply with the rule. Valid values:
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
  scope?: ListManagedRulesResponseBodyManagedRulesManagedRuleListScope;
  /**
   * @remarks
   * Indicates whether precheck is supported. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  supportPreviewManagedRule?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      helpUrls: 'HelpUrls',
      identifier: 'Identifier',
      labels: 'Labels',
      remediationTemplateIdentifier: 'RemediationTemplateIdentifier',
      remediationTemplateName: 'RemediationTemplateName',
      riskLevel: 'RiskLevel',
      scope: 'Scope',
      supportPreviewManagedRule: 'SupportPreviewManagedRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleName: 'string',
      description: 'string',
      helpUrls: 'string',
      identifier: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      remediationTemplateIdentifier: 'string',
      remediationTemplateName: 'string',
      riskLevel: 'number',
      scope: ListManagedRulesResponseBodyManagedRulesManagedRuleListScope,
      supportPreviewManagedRule: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesResponseBodyManagedRules extends $dara.Model {
  /**
   * @remarks
   * The details of the managed rule.
   */
  managedRuleList?: ListManagedRulesResponseBodyManagedRulesManagedRuleList[];
  /**
   * @remarks
   * The page number.
   * 
   * Page start from page 1.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values: 1 to 500.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      managedRuleList: 'ManagedRuleList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleList: { 'type': 'array', 'itemType': ListManagedRulesResponseBodyManagedRulesManagedRuleList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.managedRuleList)) {
      $dara.Model.validateArray(this.managedRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The managed rules.
   */
  managedRules?: ListManagedRulesResponseBodyManagedRules;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B3E605AB-63D5-1EE0-BFA6-0BAC247B0461
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managedRules: 'ManagedRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRules: ListManagedRulesResponseBodyManagedRules,
      requestId: 'string',
    };
  }

  validate() {
    if(this.managedRules && typeof (this.managedRules as any).validate === 'function') {
      (this.managedRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

