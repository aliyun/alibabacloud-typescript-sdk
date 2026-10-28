// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The compute resource type of the resource group.
   * 
   * @example
   * Ecs
   */
  computingResourceProvider?: string;
  /**
   * @remarks
   * Specifies whether the resource group contains resources.
   */
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
   * - desc: descending order.
   * - asc: ascending order.
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of resource group IDs.
   * 
   * @example
   * rg123,rg456
   */
  resourceGroupIDs?: string;
  /**
   * @remarks
   * The list of resource types. Valid values:
   * 
   * - ECS: general compute resources.
   * - Lingjun: Lingjun AI compute resources.
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
   * The name of the field used for sorting. Valid values: DisplayName, GmtCreated, GmtModified, RegionID, Duration, PricingCycle, and PayType.
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
   * The version to search for.
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

