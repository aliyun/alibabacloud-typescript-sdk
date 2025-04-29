// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPrivateDNSResponseBodyPrivateDNSList } from "./ListPrivateDnsresponseBodyPrivateDnslist";


export class ListPrivateDNSResponseBody extends $dara.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The internal domain name resolutions.
   */
  privateDNSList?: ListPrivateDNSResponseBodyPrivateDNSList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ016
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateDNSList: 'PrivateDNSList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      privateDNSList: { 'type': 'array', 'itemType': ListPrivateDNSResponseBodyPrivateDNSList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.privateDNSList)) {
      $dara.Model.validateArray(this.privateDNSList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

