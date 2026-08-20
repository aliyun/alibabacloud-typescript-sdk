// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 54F10A2A-C3CF-59D4-810F-F18DDD93FE20
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The unique ID of the zone.
   * 
   * @example
   * 6fc186295683a131f63bb8b0cddc****
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

