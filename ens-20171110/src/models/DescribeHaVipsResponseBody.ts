// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHaVipsResponseBodyHaVips } from "./DescribeHaVipsResponseBodyHaVips";


export class DescribeHaVipsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the HAVIPs.
   */
  haVips?: DescribeHaVipsResponseBodyHaVips[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
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
   * AAE90880-4970-4D81-A534-A6C0F3631F74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 49
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      haVips: 'HaVips',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVips: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVips },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.haVips)) {
      $dara.Model.validateArray(this.haVips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

