// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterPrefixListAssociationResponseBodyPrefixLists } from "./ListTransitRouterPrefixListAssociationResponseBodyPrefixLists";


export class ListTransitRouterPrefixListAssociationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of prefix lists.
   */
  prefixLists?: ListTransitRouterPrefixListAssociationResponseBodyPrefixLists[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6005CA94-676E-1FEE-985E-7602EFAADD6A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      prefixLists: 'PrefixLists',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      prefixLists: { 'type': 'array', 'itemType': ListTransitRouterPrefixListAssociationResponseBodyPrefixLists },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prefixLists)) {
      $dara.Model.validateArray(this.prefixLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

