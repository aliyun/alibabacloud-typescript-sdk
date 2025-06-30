// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeZoneDnsGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6F1D541-E7A6-447A-A2B5-9F7A20B2A8FB
   */
  requestId?: string;
  /**
   * @remarks
   * The global ID of the zone.
   * 
   * @example
   * e0cff188756b1d4579b25e54b66cb830
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

