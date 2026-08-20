// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetProxyPatternResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 0417DC19-11A0-5597-8717-2F705DE88925
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

