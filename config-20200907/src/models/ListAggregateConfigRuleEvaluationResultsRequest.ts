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
   * The compliance evaluation result. Valid values:
   * 
   * - COMPLIANT: The resource is compliant.
   * 
   * - NON_COMPLIANT: The resource is non-compliant.
   * 
   * - NOT_APPLICABLE: The rule does not apply to the resource.
   * 
   * - INSUFFICIENT_DATA: No data is available.
   * 
   * - IGNORED: The evaluation result is ignored.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain a rule ID, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * @example
   * cr-888f626622af00ae****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on a single page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is returned when the response is truncated. Use this token in the next request to retrieve the next page of results.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  regions?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource in the account group belongs.
   * 
   * > Specify this parameter or \\`ResourceOwnerId\\`. We recommend that you specify this parameter.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the resource belongs. Separate multiple resource group IDs with commas (,).
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
   * The resource type. Separate multiple resource types with commas (,).
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

