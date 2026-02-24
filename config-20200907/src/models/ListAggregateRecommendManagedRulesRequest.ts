// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateRecommendManagedRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The compliance package is invalid for resources in the specified region. The resources in the specified region are not evaluated. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The rule is invalid for resources in the specified resource group. The resources in the specified resource group are not evaluated. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rule is invalid for the specified resource. The specified resource is not evaluated. Separate multiple resource IDs with commas (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * lb-t4nbowvtbkss7t326****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Default value: 200.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. It indicates the position where the current query begins. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The rule is effective only for resources in the specified region. Separate multiple region IDs with commas (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The rule is effective only for resources in the specified resource group. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rule is effective for the specified resource. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The selected managed rules.
   * 
   * @example
   * ram-user-mfa-check-v2,ram-user-last-login-expired-check
   */
  selectedManagedRuleIdentifiers?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      selectedManagedRuleIdentifiers: 'SelectedManagedRuleIdentifiers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      selectedManagedRuleIdentifiers: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

