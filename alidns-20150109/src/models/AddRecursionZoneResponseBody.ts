// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRecursionZoneResponseBody extends $dara.Model {
  /**
   * @example
   * 51899B6F-04A5-5B96-977D-340673091ACA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Zone ID。
   * 
   * @example
   * 173671468000011
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
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

