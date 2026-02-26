// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiAccountResourceCountsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition. For more information, see `Supported filter parameters`.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The matching method.
   * 
   * Set the value to Equals, which indicates an exact match.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiAccountResourceCountsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition.
   */
  filter?: GetMultiAccountResourceCountsRequestFilter[];
  /**
   * @remarks
   * The dimension by which resources are queried. Valid values:
   * 
   * - ResourceType: resource type
   * 
   * - RegionId: region
   * 
   * - ResourceGroupId: resource group
   * 
   * > If this parameter is not configured, the total number of resources that meet the conditions is returned.
   * 
   * @example
   * ResourceType
   */
  groupByKey?: string;
  /**
   * @remarks
   * The search scope. Valid values:
   * 
   * - ID of a resource directory: Resources within the management account and all members of the resource directory are searched.
   * 
   * - ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched.
   * 
   * - ID of a folder: Resources within all members in the folder are searched.
   * 
   * - ID of a member: Resources within the member are searched.
   * 
   * For information about how to obtain the ID of a resource directory, the Root folder, a folder, or a member, see [GetResourceDirectory](https://help.aliyun.com/document_detail/159995.html), [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html), or [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      groupByKey: 'GroupByKey',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': GetMultiAccountResourceCountsRequestFilter },
      groupByKey: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

