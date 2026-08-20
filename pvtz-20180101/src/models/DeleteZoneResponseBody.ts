// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * E246E023-F2EB-4034-83F7-B13FCF31459C
   */
  requestId?: string;
  /**
   * @remarks
   * The unique ID of the zone.
   * 
   * @example
   * 0e41496f12da01311d314f17b801****
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

