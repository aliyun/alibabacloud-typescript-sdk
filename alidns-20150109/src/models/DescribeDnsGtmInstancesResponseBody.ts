// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmInstancesResponseBodyGtmInstances } from "./DescribeDnsGtmInstancesResponseBodyGtmInstances";


export class DescribeDnsGtmInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Global Traffic Manager (GTM) instances.
   */
  gtmInstances?: DescribeDnsGtmInstancesResponseBodyGtmInstances[];
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 84314904-D047-4176-A0EC-256D7F68C7F5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 123
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      gtmInstances: 'GtmInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gtmInstances: { 'type': 'array', 'itemType': DescribeDnsGtmInstancesResponseBodyGtmInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.gtmInstances)) {
      $dara.Model.validateArray(this.gtmInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

