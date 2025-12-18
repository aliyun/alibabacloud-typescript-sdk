// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateRecommendManagedRulesRequest extends $dara.Model {
  /**
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @example
   * lb-t4nbowvtbkss7t326****
   */
  excludeResourceIdsScope?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
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

