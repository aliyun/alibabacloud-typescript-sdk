// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The provider of the compute resources.
   * 
   * @example
   * Ecs
   */
  computingResourceProvider?: string;
  hasResource?: boolean;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `desc`: descending.
   * 
   * - `asc`: ascending.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceGroupIDs?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - `ECS`: ECS.
   * 
   * - `Lingjun`: Lingjun intelligent computing resources.
   * 
   * @example
   * Lingjun
   */
  resourceType?: string;
  /**
   * @remarks
   * Specifies whether to return all results.
   * 
   * @example
   * false
   */
  showAll?: boolean;
  /**
   * @remarks
   * The field to sort by. Valid values include: `DisplayName`, `GmtCreated`, `GmtModified`, `RegionID`, `Duration`, `PricingCycle`, and `PayType`.
   * 
   * @example
   * DisplayName
   */
  sortBy?: string;
  /**
   * @remarks
   * The status of the resource group.
   * 
   * @example
   * Creating
   */
  status?: string;
  /**
   * @remarks
   * The version to filter by.
   * 
   * @example
   * 1.0
   */
  versions?: string;
  static names(): { [key: string]: string } {
    return {
      computingResourceProvider: 'ComputingResourceProvider',
      hasResource: 'HasResource',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupIDs: 'ResourceGroupIDs',
      resourceType: 'ResourceType',
      showAll: 'ShowAll',
      sortBy: 'SortBy',
      status: 'Status',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingResourceProvider: 'string',
      hasResource: 'boolean',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupIDs: 'string',
      resourceType: 'string',
      showAll: 'boolean',
      sortBy: 'string',
      status: 'string',
      versions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

