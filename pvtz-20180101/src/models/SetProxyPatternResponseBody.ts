// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetProxyPatternResponseBody extends $dara.Model {
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
   * df2d03865266bd9842306db586d3****
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

