// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceDomainsResponseBodyInstanceDomains } from "./DescribeInstanceDomainsResponseBodyInstanceDomains";


export class DescribeInstanceDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names that are bound to the DNS instance.
   */
  instanceDomains?: DescribeInstanceDomainsResponseBodyInstanceDomains[];
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
   * The number of entries per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 68386699-8B9E-4D5B-BC4C-75A28F6C2A00
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned on all pages.
   * 
   * @example
   * 2
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      instanceDomains: 'InstanceDomains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDomains: { 'type': 'array', 'itemType': DescribeInstanceDomainsResponseBodyInstanceDomains },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceDomains)) {
      $dara.Model.validateArray(this.instanceDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

