// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChildInstanceRegionsResponseBodyRegions } from "./DescribeChildInstanceRegionsResponseBodyRegions";


export class DescribeChildInstanceRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of regions.
   */
  regions?: DescribeChildInstanceRegionsResponseBodyRegions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D5CEED59-36AA-47CC-9D81-16F71C46BD80
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
      regions: DescribeChildInstanceRegionsResponseBodyRegions,
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

