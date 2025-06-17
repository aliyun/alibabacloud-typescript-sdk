// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnRegionAndIspResponseBodyIsps } from "./DescribeCdnRegionAndIspResponseBodyIsps";
import { DescribeCdnRegionAndIspResponseBodyRegions } from "./DescribeCdnRegionAndIspResponseBodyRegions";


export class DescribeCdnRegionAndIspResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ISPs.
   */
  isps?: DescribeCdnRegionAndIspResponseBodyIsps;
  /**
   * @remarks
   * The list of regions.
   */
  regions?: DescribeCdnRegionAndIspResponseBodyRegions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2387C335-932C-4E1E-862C-1C4363B6DE72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: DescribeCdnRegionAndIspResponseBodyIsps,
      regions: DescribeCdnRegionAndIspResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.isps && typeof (this.isps as any).validate === 'function') {
      (this.isps as any).validate();
    }
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

