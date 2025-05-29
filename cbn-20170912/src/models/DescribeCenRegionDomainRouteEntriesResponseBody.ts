// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries } from "./DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries";


export class DescribeCenRegionDomainRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of route entries.
   */
  cenRouteEntries?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries;
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
   * 004E99FB-E996-5777-888E-BA1D8F215407
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenRouteEntries: 'CenRouteEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteEntries: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.cenRouteEntries && typeof (this.cenRouteEntries as any).validate === 'function') {
      (this.cenRouteEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

