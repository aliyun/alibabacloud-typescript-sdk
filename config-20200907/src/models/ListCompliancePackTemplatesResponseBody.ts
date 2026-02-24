// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter for the managed rule.
   * 
   * @example
   * necessity
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter for the managed rule.
   * 
   * @example
   * asap
   */
  parameterValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required for the managed rule. Valid values:
   * 
   * - true: The parameter is required.
   * - false: The parameter is not required.
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
   * The parameters of the managed rule.
   */
  configRuleParameters?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters[];
  /**
   * @remarks
   * The description of the control. This parameter is returned only for compliance packs that are created based on a regulation.
   * 
   * @example
   * e) Possible known vulnerabilities should be found and remedied in a timely manner after adequate testing and evaluation.\\nf) It shall be able to detect intrusion into important nodes and provide an alarm in case of serious intrusion events.
   */
  controlDescription?: string;
  /**
   * @remarks
   * The ID of the control.
   * 
   * > This parameter appears only for regulatory compliance packages.
   * 
   * @example
   * 8.1.4.4
   */
  controlId?: string;
  /**
   * @remarks
   * Indicates whether the rule can be quickly enabled. Valid values:
   * 
   * - true: The rule can be quickly enabled.
   * - false: The rule cannot be quickly enabled.
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
   * If no vulnerabilities that are of the specified type and severity level and to be fixed exist on the running ECS instances that are protected by Security Center, the configuration is considered compliant. This rule does not apply to ECS instances that are not in the running state.
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the managed rule.
   * 
   * @example
   * ecs-instance-updated-security-vul
   */
  managedRuleIdentifier?: string;
  /**
   * @remarks
   * The name of the managed rule.
   * 
   * @example
   * ecs-instance-updated-security-vul
   */
  managedRuleName?: string;
  /**
   * @remarks
   * The resource types that are evaluated by the rule.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The risk level of the managed rule. Valid values:
   * 
   * - 1: high
   * - 2: medium
   * - 3: low
   * 
   * @example
   * 2
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
   * The ID of the compliance pack template.
   * 
   * @example
   * ct-5f26ff4e06a300c4****
   */
  compliancePackTemplateId?: string;
  /**
   * @remarks
   * The name of the compliance pack template.
   * 
   * @example
   * ClassifiedProtectionPreCheck
   */
  compliancePackTemplateName?: string;
  /**
   * @remarks
   * A list of default rules in the compliance pack.
   */
  configRules?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules[];
  /**
   * @remarks
   * The description of the compliance pack.
   * 
   * @example
   * Checks the compliance of Alibaba Cloud resources based on the specific requirements of MLPS 2.0 Level 3.
   */
  description?: string;
  /**
   * @remarks
   * The classification labels of the compliance pack.
   * 
   * @example
   * Regulation
   */
  labels?: string;
  /**
   * @remarks
   * The UNIX timestamp when the compliance pack was last updated.
   * 
   * @example
   * 1747983081
   */
  lastUpdate?: number;
  /**
   * @remarks
   * The risk level of the rules in the compliance pack. Valid values:
   * 
   * - 1: high
   * - 2: medium
   * - 3: low
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
   * A list of compliance pack templates.
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of compliance pack templates.
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
   * The details of the compliance pack templates.
   */
  compliancePackTemplatesResult?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult;
  /**
   * @remarks
   * The ID of the request.
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

