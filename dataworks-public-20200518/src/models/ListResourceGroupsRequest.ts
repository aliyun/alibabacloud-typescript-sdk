// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the resource group. Valid values:
   * - default: public resource group.
   * - single: dedicated resource group.
   * 
   * @example
   * default
   */
  bizExtKey?: string;
  /**
   * @remarks
   * The keyword. Used for fuzzy matching of resource group names and resource group identifiers.
   * 
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * The type ID of the resource group to query. Valid values:
   * - 0: DataWorks
   * - 1: scheduling
   * - 2: MaxCompute
   * - 3: PAI
   * - 4: data integration
   * - 7: the purchase resource ID generated when you purchase a dedicated schedule resource group
   * - 9: dataService
   * - Default value: 1 (scheduling).
   * 
   * When the value represents an engine, the returned resource group list contains the resource groups created when you purchased that type of engine.
   * 
   * @example
   * 3
   */
  resourceGroupType?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzbn7pti3zfa
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListResourceGroupsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      bizExtKey: 'BizExtKey',
      keyword: 'Keyword',
      resourceGroupType: 'ResourceGroupType',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizExtKey: 'string',
      keyword: 'string',
      resourceGroupType: 'number',
      resourceManagerResourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListResourceGroupsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

