// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLineagesResponseBodyPagingInfoLineages } from "./ListLineagesResponseBodyPagingInfoLineages";


export class ListLineagesResponseBodyPagingInfo extends $dara.Model {
  lineages?: ListLineagesResponseBodyPagingInfoLineages[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lineages: 'Lineages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineages: { 'type': 'array', 'itemType': ListLineagesResponseBodyPagingInfoLineages },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lineages)) {
      $dara.Model.validateArray(this.lineages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

