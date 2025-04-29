// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessControlListsResponseBodyAcls } from "./DescribeAccessControlListsResponseBodyAcls";


export class DescribeAccessControlListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACLs.
   */
  acls?: DescribeAccessControlListsResponseBodyAcls;
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: DescribeAccessControlListsResponseBodyAcls,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.acls && typeof (this.acls as any).validate === 'function') {
      (this.acls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

