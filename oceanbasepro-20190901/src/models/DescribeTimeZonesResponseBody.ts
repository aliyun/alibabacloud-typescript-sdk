// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTimeZonesResponseBodyTimeZones } from "./DescribeTimeZonesResponseBodyTimeZones";


export class DescribeTimeZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * DescribeTimeZones
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The description of the time zone.
   */
  timeZones?: DescribeTimeZonesResponseBodyTimeZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeZones: 'TimeZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeZones: DescribeTimeZonesResponseBodyTimeZones,
    };
  }

  validate() {
    if(this.timeZones && typeof (this.timeZones as any).validate === 'function') {
      (this.timeZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

