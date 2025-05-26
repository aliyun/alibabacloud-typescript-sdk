// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIpfilterListResponseBodyData } from "./GetIpfilterListResponseBodyData";


export class GetIpfilterListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 84DD77C7-A091-5139-9530-2D1F7CCE59E0
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * Data records
   */
  data?: GetIpfilterListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: GetIpfilterListResponseBodyData,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

