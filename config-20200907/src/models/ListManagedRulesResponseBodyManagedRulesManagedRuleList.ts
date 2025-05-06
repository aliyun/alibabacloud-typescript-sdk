// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListManagedRulesResponseBodyManagedRulesManagedRuleListScope } from "./ListManagedRulesResponseBodyManagedRulesManagedRuleListScope";


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

