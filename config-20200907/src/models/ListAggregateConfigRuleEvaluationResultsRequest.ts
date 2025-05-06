// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateConfigRuleEvaluationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-b1e6626622af00cb****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListAggregateCompliancePacks](https://help.aliyun.com/document_detail/262059.html).
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
   * *   NOT_APPLICABLE: The rule does not apply to your resource.
   * *   INSUFFICIENT_DATA: No data is available.
   * *   IGNORED: The resource is ignored during compliance evaluation.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to query the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * @example
   * cr-888f626622af00ae****
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
   * The ID of the region whose resources you want to evaluate. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  regions?: string;
  /**
   * @remarks
   * Member accountId to which the resource to be queried belongs.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The ID of the resource group whose resources you want to evaluate. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aek2cqyzvuj****
   */
  resourceGroupIds?: string;
  /**
   * @deprecated
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resources that you want to evaluate. Separate multiple resource types with commas (,).
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regions: 'Regions',
      resourceAccountId: 'ResourceAccountId',
      resourceGroupIds: 'ResourceGroupIds',
      resourceOwnerId: 'ResourceOwnerId',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
      complianceType: 'string',
      configRuleId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regions: 'string',
      resourceAccountId: 'number',
      resourceGroupIds: 'string',
      resourceOwnerId: 'number',
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

