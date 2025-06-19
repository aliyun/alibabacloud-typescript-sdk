// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourcesResponseBodyPagingInfoResources } from "./ListResourcesResponseBodyPagingInfoResources";


export class ListResourcesResponseBodyPagingInfo extends $dara.Model {
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried file resources.
   */
  resources?: ListResourcesResponseBodyPagingInfoResources[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 131
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyPagingInfoResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

