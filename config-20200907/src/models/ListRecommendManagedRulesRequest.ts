// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecommendManagedRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The rule does not take effect on resources in the specified regions. The resources in the specified regions are not evaluated. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The rule does not take effect on resources in the specified resource groups. The resources in the specified resource groups are not evaluated. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rule does not take effect on the specified resources. The specified resources are not evaluated. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * 23642660635687****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Default value: 200.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the position from which to start the query. If this parameter is left empty, the query starts from the beginning.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The scope of region IDs. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The rule takes effect only on resources in the specified resource groups. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rule takes effect on the specified resources. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The managed rules that have been selected. Separate multiple rule identifiers with commas (,).
   * The system does not recommend managed rules that are of the same resource type as the selected managed rules.
   * 
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

