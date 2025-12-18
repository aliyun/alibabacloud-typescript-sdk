// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the input parameter of the managed rule.
   * 
   * @example
   * days
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the input parameter of the managed rule.
   * 
   * @example
   * 90
   */
  parameterValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required in the managed rule. Valid values:
   * 
   * *   true: required
   * *   false: optional
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules extends $dara.Model {
  /**
   * @remarks
   * The input parameter of the managed rule.
   */
  configRuleParameters?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters[];
  /**
   * @remarks
   * The description of the regulation. This parameter is available only for regulation compliance packages.
   * 
   * @example
   * No classic networks exist.
   */
  controlDescription?: string;
  /**
   * @remarks
   * The regulation ID.
   * 
   * >  This parameter is available only for regulation compliance packages.
   * 
   * @example
   * 3.1
   */
  controlId?: string;
  /**
   * @remarks
   * Indicates whether the rules are enabled together with the compliance package. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  defaultEnable?: boolean;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * If the expiration time of the SLB certificate is later than the specified number of days after the check time, the configuration is considered compliant. Default value: 90 days.
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the managed rule.
   * 
   * @example
   * slb-servercertificate-expired-check
   */
  managedRuleIdentifier?: string;
  /**
   * @remarks
   * The name of the managed rule.
   * 
   * @example
   * slb-servercertificate-expired-check
   */
  managedRuleName?: string;
  /**
   * @remarks
   * The types of the resources evaluated based on the rule.
   * 
   * @example
   * ACS::SLB::ServerCertificate
   */
  resourceTypesScope?: string;
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
  static names(): { [key: string]: string } {
    return {
      configRuleParameters: 'ConfigRuleParameters',
      controlDescription: 'ControlDescription',
      controlId: 'ControlId',
      defaultEnable: 'DefaultEnable',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      managedRuleName: 'ManagedRuleName',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleParameters: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters },
      controlDescription: 'string',
      controlId: 'string',
      defaultEnable: 'boolean',
      description: 'string',
      managedRuleIdentifier: 'string',
      managedRuleName: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configRuleParameters)) {
      $dara.Model.validateArray(this.configRuleParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package template.
   * 
   * @example
   * ct-d254ff4e06a300cf****
   */
  compliancePackTemplateId?: string;
  /**
   * @remarks
   * The name of the compliance package template.
   * 
   * @example
   * BestPracticesForResourceStability
   */
  compliancePackTemplateName?: string;
  /**
   * @remarks
   * The default rules in the compliance package.
   */
  configRules?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules[];
  /**
   * @remarks
   * The description of the compliance package.
   * 
   * @example
   * example-description
   */
  description?: string;
  /**
   * @remarks
   * The tag of the compliance package.
   * 
   * @example
   * tagKey-1
   */
  labels?: string;
  /**
   * @remarks
   * The time when the compliance package was last updated.
   * 
   * @example
   * 1663408308
   */
  lastUpdate?: number;
  /**
   * @remarks
   * The risk level of the managed rule in the compliance package. Valid values:
   * 
   * *   1: high
   * *   2: medium
   * *   3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      compliancePackTemplateName: 'CompliancePackTemplateName',
      configRules: 'ConfigRules',
      description: 'Description',
      labels: 'Labels',
      lastUpdate: 'LastUpdate',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      compliancePackTemplateName: 'string',
      configRules: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules },
      description: 'string',
      labels: 'string',
      lastUpdate: 'number',
      riskLevel: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configRules)) {
      $dara.Model.validateArray(this.configRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult extends $dara.Model {
  /**
   * @remarks
   * The compliance package templates.
   */
  compliancePackTemplates?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of the compliance package templates returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplates: 'CompliancePackTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplates: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.compliancePackTemplates)) {
      $dara.Model.validateArray(this.compliancePackTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the compliance package templates returned.
   */
  compliancePackTemplatesResult?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D67FC82F-25AE-4268-A94C-3348340748F9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplatesResult: 'CompliancePackTemplatesResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplatesResult: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.compliancePackTemplatesResult && typeof (this.compliancePackTemplatesResult as any).validate === 'function') {
      (this.compliancePackTemplatesResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

