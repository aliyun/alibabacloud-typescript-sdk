// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPersistentAppInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-0bxls9m9arax6****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The list of persistent session IDs.
   * 
   * **if can be null:**
   * false
   */
  appInstancePersistentIds?: string[];
  /**
   * @remarks
   * The page number of the query results to display. Minimum value: **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page. Maximum value: **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstancePersistentIds: 'AppInstancePersistentIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstancePersistentIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInstancePersistentIds)) {
      $dara.Model.validateArray(this.appInstancePersistentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

