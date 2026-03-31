// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecommendManagedRulesRequest extends $dara.Model {
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
   * 23642660635687****
   */
  excludeResourceIdsScope?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * IWBjqMYSy0is7zSMGu16****
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
   * ram-user-last-login-expired-check
   */
  selectedManagedRuleIdentifiers?: string;
  static names(): { [key: string]: string } {
    return {
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

