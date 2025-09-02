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
   * 
   * *   default (default): shared resource group
   * *   single: exclusive resource group
   * 
   * @example
   * default
   */
  bizExtKey?: string;
  /**
   * @remarks
   * The keyword that is used for fuzzy match by resource group name and identifier.
   * 
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * The type of the resource group that you want to query. Valid values:
   * 
   * *   0: DataWorks
   * *   1: scheduling
   * *   2: MaxCompute
   * *   3: Platform for AI (PAI)
   * *   4: Data Integration
   * *   7: exclusive resource group for scheduling (An ID is generated for the purchased resource when you purchase an exclusive resource group for scheduling.)
   * *   9: DataService Studio
   * *   Default value: 1
   * 
   * If the value indicates a compute engine, the resource groups to query are the ones that were created when you purchased the compute engine.
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
   * The tags.
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

