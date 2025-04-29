// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZonesResponseBodyZones } from "./DescribeZonesResponseBodyZones";


export class DescribeZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9324B68F-9863-5722-A0FD-0798E2B02A0E
   */
  requestId?: string;
  /**
   * @remarks
   * The zones available in the current region.
   * 
   * @example
   * {\\"Zone\\": [{\\"ZoneId\\": \\"cn-hangzhou-i\\"}]}
   */
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZonesResponseBodyZones,
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

