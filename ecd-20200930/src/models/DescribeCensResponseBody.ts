// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCensResponseBodyCens } from "./DescribeCensResponseBodyCens";


export class DescribeCensResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the CEN instances.
   */
  cens?: DescribeCensResponseBodyCens[];
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
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of CEN instances returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cens: 'Cens',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cens: { 'type': 'array', 'itemType': DescribeCensResponseBodyCens },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cens)) {
      $dara.Model.validateArray(this.cens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

