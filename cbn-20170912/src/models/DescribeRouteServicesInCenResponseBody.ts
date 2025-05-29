// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteServicesInCenResponseBodyRouteServiceEntries } from "./DescribeRouteServicesInCenResponseBodyRouteServiceEntries";


export class DescribeRouteServicesInCenResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * 196C99CA-6997-5951-9721-AE89720DF856
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the cloud services.
   */
  routeServiceEntries?: DescribeRouteServicesInCenResponseBodyRouteServiceEntries;
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
      requestId: 'RequestId',
      routeServiceEntries: 'RouteServiceEntries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeServiceEntries: DescribeRouteServicesInCenResponseBodyRouteServiceEntries,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routeServiceEntries && typeof (this.routeServiceEntries as any).validate === 'function') {
      (this.routeServiceEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

