// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedRulesResponseBodyManagedRulesManagedRuleListScope extends $dara.Model {
  /**
   * @remarks
   * The types of resources that are evaluated based on the rule template.
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
   * The URL of the document that provides remediation guidance.
   * 
   * @example
   * https://example.aliyundoc.com
   */
  helpUrls?: string;
  /**
   * @remarks
   * The unique identifier of the rule template.
   * 
   * @example
   * cdn-domain-https-enabled
   */
  identifier?: string;
  /**
   * @remarks
   * The list of labels of the rule template.
   */
  labels?: string[];
  /**
   * @remarks
   * The identifier of the supported remediation template.
   * 
   * @example
   * ACS-CDN-SetDomainServerCertificate
   */
  remediationTemplateIdentifier?: string;
  /**
   * @remarks
   * The name of the supported remediation template.
   * 
   * @example
   * 开启CDN域名HTTPS监听
   */
  remediationTemplateName?: string;
  /**
   * @remarks
   * The risk level of the rule. Valid values:
   * 
   * - 1: high
   * 
   * - 2: medium
   * 
   * - 3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The effective scope of the rule template.
   */
  scope?: ListManagedRulesResponseBodyManagedRulesManagedRuleListScope;
  /**
   * @remarks
   * Indicates whether the rule supports dry runs. Valid values:
   * 
   * - true: The rule supports dry runs.
   * 
   * - false: The rule does not support dry runs.
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
   * The details of the rule templates.
   */
  managedRuleList?: ListManagedRulesResponseBodyManagedRulesManagedRuleList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * The value must be greater than or equal to 1.
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
   * The total number of rule templates.
   * 
   * @example
   * 21
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
   * The rule templates.
   */
  managedRules?: ListManagedRulesResponseBodyManagedRules;
  /**
   * @remarks
   * The request ID.
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

