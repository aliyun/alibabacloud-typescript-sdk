// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsRequest extends $dara.Model {
  /**
   * @example
   * Ecs
   */
  computingResourceProvider?: string;
  hasResource?: boolean;
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  name?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resourceGroupIDs?: string;
  /**
   * @example
   * Lingjun
   */
  resourceType?: string;
  /**
   * @example
   * false
   */
  showAll?: boolean;
  /**
   * @example
   * DisplayName
   */
  sortBy?: string;
  /**
   * @example
   * Creating
   */
  status?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

