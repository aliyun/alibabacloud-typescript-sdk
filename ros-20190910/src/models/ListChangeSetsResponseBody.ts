// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChangeSetsResponseBodyChangeSets } from "./ListChangeSetsResponseBodyChangeSets";


export class ListChangeSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The change sets.
   */
  changeSets?: ListChangeSetsResponseBodyChangeSets[];
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
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of change sets returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      changeSets: 'ChangeSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSets: { 'type': 'array', 'itemType': ListChangeSetsResponseBodyChangeSets },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changeSets)) {
      $dara.Model.validateArray(this.changeSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

