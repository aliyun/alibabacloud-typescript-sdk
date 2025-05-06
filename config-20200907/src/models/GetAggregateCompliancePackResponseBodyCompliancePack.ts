// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateCompliancePackResponseBodyCompliancePackConfigRules } from "./GetAggregateCompliancePackResponseBodyCompliancePackConfigRules";
import { GetAggregateCompliancePackResponseBodyCompliancePackScope } from "./GetAggregateCompliancePackResponseBodyCompliancePackScope";
import { GetAggregateCompliancePackResponseBodyCompliancePackTags } from "./GetAggregateCompliancePackResponseBodyCompliancePackTags";


export class GetAggregateCompliancePackResponseBodyCompliancePack extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account to which the compliance package belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * @example
   * The name of the compliance package.
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the compliance package template.
   * 
   * @example
   * ct-5f26ff4e06a300c4****
   */
  compliancePackTemplateId?: string;
  /**
   * @remarks
   * The rules in the compliance package.
   */
  configRules?: GetAggregateCompliancePackResponseBodyCompliancePackConfigRules[];
  /**
   * @remarks
   * The timestamp when the compliance package was created. Unit: milliseconds.
   * 
   * @example
   * 1624243657000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the compliance package.
   * 
   * @example
   * The description of the compliance package.
   */
  description?: string;
  /**
   * @remarks
   * The risk level of the resources that are not compliant with the rules in the compliance package. Valid values:
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
   * The evaluation scope of the compliance package.
   */
  scope?: GetAggregateCompliancePackResponseBodyCompliancePackScope;
  /**
   * @remarks
   * The status of the compliance package. Valid values:
   * 
   * *   ACTIVE: The compliance package was normal.
   * *   CREATING: The compliance package was being created.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetAggregateCompliancePackResponseBodyCompliancePackTags[];
  /**
   * @remarks
   * The information about the current compliance package template. The rules in the template do not contain custom function rules. You can quickly create the same compliance package for other accounts or account groups based on the template information.
   * 
   * @example
   * {
   *   "configRuleTemplates": [
   *     {
   *       "configRuleName": "OSS-test-name",
   *       "scope": {
   *         "complianceResourceTypes": [
   *           "ACS::OSS::Bucket"
   *         ]
   *       },
   *       "description": "test-description",
   *       "source": {
   *         "owner": "ALIYUN",
   *         "identifier": "oss-bucket-referer-xxx",
   *         "sourceDetails": [
   *           {
   *             "messageType": "ConfigurationItemChangeNotification"
   *           }
   *         ]
   *       },
   *       "inputParameters": {
   *         "allowEmptyReferer": "true",
   *         "allowReferers": "http://www.aliyun.com"
   *       }
   *     }
   *   ]
   * }
   */
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRules: 'ConfigRules',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      riskLevel: 'RiskLevel',
      scope: 'Scope',
      status: 'Status',
      tags: 'Tags',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRules: { 'type': 'array', 'itemType': GetAggregateCompliancePackResponseBodyCompliancePackConfigRules },
      createTimestamp: 'number',
      description: 'string',
      riskLevel: 'number',
      scope: GetAggregateCompliancePackResponseBodyCompliancePackScope,
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetAggregateCompliancePackResponseBodyCompliancePackTags },
      templateContent: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configRules)) {
      $dara.Model.validateArray(this.configRules);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
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

