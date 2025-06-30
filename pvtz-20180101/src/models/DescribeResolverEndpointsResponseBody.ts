// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResolverEndpointsResponseBodyEndpoints } from "./DescribeResolverEndpointsResponseBodyEndpoints";


export class DescribeResolverEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoints.
   */
  endpoints?: DescribeResolverEndpointsResponseBodyEndpoints[];
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
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83D1682B-B69A-4060-9FA8-2907C2A35600
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of endpoints.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': DescribeResolverEndpointsResponseBodyEndpoints },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

