// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRuleEvaluationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * @example
   * cp-f1e3326622af00cb****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The compliance evaluation result of the resource. Valid values:
   * 
   * *   COMPLIANT: The resource is evaluated as compliant.
   * *   NON_COMPLIANT: The resource is evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to the resources.
   * *   INSUFFICIENT_DATA: No data is available.
   * *   IGNORED: The resource is ignored during compliance evaluation.
   * 
   * @example
   * NON_COMPLIANT
   * 
   * **if can be null:**
   * true
   */
  complianceType?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * You can call the [ListConfigRules](https://help.aliyun.com/document_detail/169607.html) operation to obtain the rule ID.
   * 
   * @example
   * cr-cac56457e0d900d3****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The maximum number of entries to return in a request. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the resources that you want to evaluate reside. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  regions?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resources that you want to evaluate belong. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aek2indxn3g****
   */
  resourceGroupIds?: string;
  /**
   * @remarks
   * The type of the resources that you want to evaluate. Separate multiple resource types with commas (,).
   * 
   * @example
   * ACS::ECS::Instane
   */
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regions: 'Regions',
      resourceGroupIds: 'ResourceGroupIds',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      complianceType: 'string',
      configRuleId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regions: 'string',
      resourceGroupIds: 'string',
      resourceTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

