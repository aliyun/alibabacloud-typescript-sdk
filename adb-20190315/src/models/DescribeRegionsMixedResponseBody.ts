// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionsMixedResponseBodyRegions } from "./DescribeRegionsMixedResponseBodyRegions";


export class DescribeRegionsMixedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried regions.
   */
  regions?: DescribeRegionsMixedResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2E9450FF-F8AD-54C6-B3C3-009FBD7C0700
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
      regions: DescribeRegionsMixedResponseBodyRegions,
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

