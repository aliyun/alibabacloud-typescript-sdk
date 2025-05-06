// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCompliancePackResponseBodyCompliancePackConfigRules } from "./GetCompliancePackResponseBodyCompliancePackConfigRules";
import { GetCompliancePackResponseBodyCompliancePackScope } from "./GetCompliancePackResponseBodyCompliancePackScope";
import { GetCompliancePackResponseBodyCompliancePackTags } from "./GetCompliancePackResponseBodyCompliancePackTags";


export class GetCompliancePackResponseBodyCompliancePack extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the compliance package belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-a8a8626622af0082****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * @example
   * example-pack-name
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
  configRules?: GetCompliancePackResponseBodyCompliancePackConfigRules[];
  /**
   * @remarks
   * The timestamp when the compliance package was created. Unit: milliseconds.
   * 
   * @example
   * 1624245766000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the compliance package.
   * 
   * @example
   * example-name
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
   * The resource group for which the compliance package took effect.
   */
  scope?: GetCompliancePackResponseBodyCompliancePackScope;
  /**
   * @remarks
   * The status of the compliance package. Valid values:
   * 
   * *   ACTIVE: The compliance package is normal.
   * *   CREATING: The compliance package is being created.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetCompliancePackResponseBodyCompliancePackTags[];
  /**
   * @remarks
   * The information about the current compliance package template. The rules in the template do not contain custom function rules. You can quickly create the same compliance package for other accounts or account groups based on the template information.
   * 
   * @example
   * {
   *     "configRuleTemplates": [
   *         {
   *             "configRuleName": "rule-example",
   *             "scope": {
   *                 "complianceResourceTypes": [
   *                     "ACS::ECS::Instance"
   *                 ]
   *             },
   *             "description": "",
   *             "source": {
   *                 "owner": "CUSTOM_CONFIGURATION",
   *                 "identifier": "acs-config-configuration",
   *                 "sourceDetails": [
   *                     {
   *                         "messageType": "ScheduledNotification",
   *                         "maximumExecutionFrequency": "Twelve_Hours"
   *                     },
   *                     {
   *                         "messageType": "ConfigurationItemChangeNotification"
   *                     }
   *                 ],
   *                 "conditions": "{\\"ComplianceConditions\\":\\"{\\\\\\"operator\\\\\\":\\\\\\"and\\\\\\",\\\\\\"children\\\\\\":[{\\\\\\"operator\\\\\\":\\\\\\"GreaterOrEquals\\\\\\",\\\\\\"featurePath\\\\\\":\\\\\\"$.Cpu\\\\\\",\\\\\\"featureSource\\\\\\":\\\\\\"CONFIGURATION\\\\\\",\\\\\\"desired\\\\\\":\\\\\\"2\\\\\\"}]}\\"}"
   *             },
   *             "inputParameters": {}
   *         },
   *         {
   *             "configRuleName": "name",
   *             "scope": {
   *                 "complianceResourceTypes": [
   *                     "ACS::OSS::Bucket"
   *                 ]
   *             },
   *             "description": "description-1",
   *             "source": {
   *                 "owner": "ALIYUN",
   *                 "identifier": "oss-bucket-referer-limit",
   *                 "sourceDetails": [
   *                     {
   *                         "messageType": "ConfigurationItemChangeNotification"
   *                     }
   *                 ]
   *             },
   *             "inputParameters": {
   *                 "allowEmptyReferer": "true",
   *                 "allowReferers": "http://www.aliyun.com"
   *             }
   *         }
   *     ]
   * }
   */
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
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
      compliancePackId: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRules: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackConfigRules },
      createTimestamp: 'number',
      description: 'string',
      riskLevel: 'number',
      scope: GetCompliancePackResponseBodyCompliancePackScope,
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackTags },
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

