// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAddressBookResponseBodyAcls } from "./DescribeAddressBookResponseBodyAcls";


export class DescribeAddressBookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the address book.
   */
  acls?: DescribeAddressBookResponseBodyAcls[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B36F150A-1E27-43AA-B72C-D2AC712F09DA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned address books.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAcls },
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acls)) {
      $dara.Model.validateArray(this.acls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

