// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules } from "./ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules";


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

