// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSDGResponseBodySDGs } from "./DescribeSdgresponseBodySdgs";


export class DescribeSDGResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * F3B261DD-3858-4D3C-877D-303ADF374600
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SDGs.
   */
  SDGs?: DescribeSDGResponseBodySDGs[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      SDGs: 'SDGs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      SDGs: { 'type': 'array', 'itemType': DescribeSDGResponseBodySDGs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.SDGs)) {
      $dara.Model.validateArray(this.SDGs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

