// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompliancePackTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package template.
   * 
   * @example
   * ct-d254ff4e06a300cf****
   */
  compliancePackTemplateId?: string;
  /**
   * @example
   * LAW
   */
  filterType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The types of the resources evaluated based on the rule. If you configure this parameter, only the rules that include the resource types in the compliance package template are returned.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  ruleRiskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      filterType: 'FilterType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceTypes: 'ResourceTypes',
      ruleRiskLevel: 'RuleRiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      filterType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceTypes: 'string',
      ruleRiskLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

