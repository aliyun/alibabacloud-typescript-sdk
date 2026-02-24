// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompliancePackTemplatesRequest extends $dara.Model {
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
   * The field used to filter the query results.
   * 
   * @example
   * LAW
   */
  filterType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type that is evaluated by the rules. If you specify this parameter, only the compliance pack templates that contain rules for the specified resource type are returned.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  /**
   * @remarks
   * The risk level of the rules in the compliance pack. Valid values:
   * 
   * - 1: high
   * - 2: medium
   * - 3: low
   * 
   * @example
   * 2
   */
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

