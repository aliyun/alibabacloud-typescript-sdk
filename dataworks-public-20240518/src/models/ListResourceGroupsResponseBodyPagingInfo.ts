// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceGroupsResponseBodyPagingInfoResourceGroupList } from "./ListResourceGroupsResponseBodyPagingInfoResourceGroupList";


export class ListResourceGroupsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource groups returned.
   */
  resourceGroupList?: ListResourceGroupsResponseBodyPagingInfoResourceGroupList[];
  /**
   * @remarks
   * All data entries
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupList: 'ResourceGroupList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupList: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyPagingInfoResourceGroupList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupList)) {
      $dara.Model.validateArray(this.resourceGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

