// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZoneVpcTreeResponseBodyZones } from "./DescribeZoneVpcTreeResponseBodyZones";


export class DescribeZoneVpcTreeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B07FBC3-3A53-4939-A3C6-2BDFE407BAB2
   */
  requestId?: string;
  /**
   * @remarks
   * The zones.
   */
  zones?: DescribeZoneVpcTreeResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZoneVpcTreeResponseBodyZones,
    };
  }

  validate() {
    if(this.zones && typeof (this.zones as any).validate === 'function') {
      (this.zones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

