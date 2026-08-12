// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecuritySuggestionListResponseBodyDataConfigRuleListComplianceObject extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation result of the rule. Valid values:
   * - **COMPLIANT**: Compliant.
   * - **NON_COMPLIANT**: Non-compliant.
   * - **NOT_APPLICABLE**: Not applicable.
   * - **INSUFFICIENT_DATA**: Insufficient data.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The number of evaluations corresponding to the summary result of the rule evaluation.
   * 
   * @example
   * 2
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecuritySuggestionListResponseBodyDataConfigRuleListCreateBy extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package to which the rule belongs.
   * 
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The compliance package name.
   * 
   * @example
   * The name of the compliance package.
   */
  compliancePackName?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      compliancePackName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecuritySuggestionListResponseBodyDataConfigRuleListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the rule.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the rule.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecuritySuggestionListResponseBodyDataConfigRuleList extends $dara.Model {
  /**
   * @remarks
   * The ID of the account to which the rule belongs.
   * 
   * @example
   * 1625772519123804
   */
  accountId?: number;
  /**
   * @remarks
   * The remediation type. Only OOS (CloudOps Orchestration Service) is supported.
   * 
   * @example
   * OOS
   */
  automationType?: string;
  /**
   * @remarks
   * The aggregated compliance result of the rule.
   * 
   * @example
   * {count=1, complianceType=NON_COMPLIANT}
   */
  compliance?: string;
  /**
   * @remarks
   * The aggregated compliance result of the rule.
   */
  complianceObject?: GetSecuritySuggestionListResponseBodyDataConfigRuleListComplianceObject;
  /**
   * @remarks
   * The ARN of the rule.
   * 
   * @example
   * acs:config::100931896542****:rule/cr-fdc8626622af00f9****
   */
  configRuleArn?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-bqa2f25bc5ce00af6323
   */
  configRuleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * The name of the rule.
   */
  configRuleName?: string;
  /**
   * @remarks
   * The rule running status. Valid values:
   * - **ACTIVE**: Active.
   * - **DELETING**: Being deleted.
   * - **EVALUATING**: Being evaluated.
   * - **INACTIVE**: Inactive.
   * 
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @remarks
   * The information about the rule creator.
   */
  createBy?: GetSecuritySuggestionListResponseBodyDataConfigRuleListCreateBy;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * The description of the rule.
   */
  description?: string;
  /**
   * @remarks
   * The resource type scope. Multiple resource types are separated by commas (,).
   * 
   * @example
   * ACS::EIP::EipAddress
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The risk level of the rule. Valid values:
   * 
   * - **1**: High risk.
   * - **2**: Medium risk.
   * - **3**: Low risk.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The rule identifier.
   * 
   * - If the rule uses a managed rule, this parameter is the managed rule name.
   * 
   * - If the rule uses a custom function, this parameter is the function ARN.
   * 
   * @example
   * eip-bandwidth-limit
   */
  sourceIdentifier?: string;
  /**
   * @remarks
   * The owner of the rule source. Valid values:
   * - **CUSTOM_FC**: Custom rule.
   * - **ALIYUN**: Rule template.
   * 
   * @example
   * ALIYUN
   */
  sourceOwner?: string;
  /**
   * @remarks
   * The tags of the rule.
   */
  tags?: GetSecuritySuggestionListResponseBodyDataConfigRuleListTags[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      automationType: 'AutomationType',
      compliance: 'Compliance',
      complianceObject: 'ComplianceObject',
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      createBy: 'CreateBy',
      description: 'Description',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      automationType: 'string',
      compliance: 'string',
      complianceObject: GetSecuritySuggestionListResponseBodyDataConfigRuleListComplianceObject,
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      createBy: GetSecuritySuggestionListResponseBodyDataConfigRuleListCreateBy,
      description: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tags: { 'type': 'array', 'itemType': GetSecuritySuggestionListResponseBodyDataConfigRuleListTags },
    };
  }

  validate() {
    if(this.complianceObject && typeof (this.complianceObject as any).validate === 'function') {
      (this.complianceObject as any).validate();
    }
    if(this.createBy && typeof (this.createBy as any).validate === 'function') {
      (this.createBy as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecuritySuggestionListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of rules.
   */
  configRuleList?: GetSecuritySuggestionListResponseBodyDataConfigRuleList[];
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 51
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleList: 'ConfigRuleList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleList: { 'type': 'array', 'itemType': GetSecuritySuggestionListResponseBodyDataConfigRuleList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configRuleList)) {
      $dara.Model.validateArray(this.configRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecuritySuggestionListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * - **200**: Success.
   * - **Other (400, 500)**: Failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: GetSecuritySuggestionListResponseBodyData;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 855FCC89-0B13-5FC0-AAD2-120878081C1C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call was successful.         
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSecuritySuggestionListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

