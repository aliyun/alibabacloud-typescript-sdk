// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBandwidthPackagesResponseBodyBandwidthPackages } from "./DescribeBandwidthPackagesResponseBodyBandwidthPackages";


export class DescribeBandwidthPackagesResponseBody extends $dara.Model {
  bandwidthPackages?: DescribeBandwidthPackagesResponseBodyBandwidthPackages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackages: 'BandwidthPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackages: DescribeBandwidthPackagesResponseBodyBandwidthPackages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.bandwidthPackages && typeof (this.bandwidthPackages as any).validate === 'function') {
      (this.bandwidthPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

