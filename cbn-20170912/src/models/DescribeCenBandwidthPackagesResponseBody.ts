// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages } from "./DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages";


export class DescribeCenBandwidthPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the bandwidth plan.
   */
  cenBandwidthPackages?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 9D7E2400-2755-4AF5-9B73-12565E4F73A0
   */
  requestId?: string;
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
      cenBandwidthPackages: 'CenBandwidthPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackages: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.cenBandwidthPackages && typeof (this.cenBandwidthPackages as any).validate === 'function') {
      (this.cenBandwidthPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

