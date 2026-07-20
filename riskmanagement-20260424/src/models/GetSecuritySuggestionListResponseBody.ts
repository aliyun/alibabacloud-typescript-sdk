// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecuritySuggestionListResponseBodyDataConfigRuleListComplianceObject extends $dara.Model {
  /**
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
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
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
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
   * @example
   * env
   */
  key?: string;
  /**
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
   * @example
   * 1625772519123804
   */
  accountId?: number;
  /**
   * @example
   * OOS
   */
  automationType?: string;
  /**
   * @example
   * {count=1, complianceType=NON_COMPLIANT}
   */
  compliance?: string;
  complianceObject?: GetSecuritySuggestionListResponseBodyDataConfigRuleListComplianceObject;
  /**
   * @example
   * acs:config::100931896542****:rule/cr-fdc8626622af00f9****
   */
  configRuleArn?: string;
  /**
   * @example
   * cr-bqa2f25bc5ce00af6323
   */
  configRuleId?: string;
  /**
   * @example
   * The name of the rule.
   */
  configRuleName?: string;
  /**
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  createBy?: GetSecuritySuggestionListResponseBodyDataConfigRuleListCreateBy;
  /**
   * @example
   * The description of the rule.
   */
  description?: string;
  /**
   * @example
   * ACS::EIP::EipAddress
   */
  resourceTypesScope?: string;
  /**
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @example
   * eip-bandwidth-limit
   */
  sourceIdentifier?: string;
  /**
   * @example
   * ALIYUN
   */
  sourceOwner?: string;
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
  configRuleList?: GetSecuritySuggestionListResponseBodyDataConfigRuleList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetSecuritySuggestionListResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 855FCC89-0B13-5FC0-AAD2-120878081C1C
   */
  requestId?: string;
  /**
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

