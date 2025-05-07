// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableCrossRegionResponseBodyRegions } from "./DescribeAvailableCrossRegionResponseBodyRegions";


export class DescribeAvailableCrossRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of destination regions for cross-region backups.
   */
  regions?: DescribeAvailableCrossRegionResponseBodyRegions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 39265F46-EC77-4036-8AC4-F035F32F6BE2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeAvailableCrossRegionResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

