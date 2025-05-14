// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterInspectConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of disabled inspection items.
   */
  disabledCheckItems?: string[];
  /**
   * @remarks
   * Specifies whether to enable inspection.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The inspection schedule defined through the RFC5545 Recurrence Rule syntax. You must specify BYHOUR and BYMINUTE. Only FREQ=DAILY is supported. COUNT and UNTIL are not supported.
   * 
   * @example
   * FREQ=DAILY;BYHOUR=10;BYMINUTE=15
   */
  recurrence?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 49511F2D-D56A-5C24-B9AE-C8491E09B095
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      disabledCheckItems: 'disabledCheckItems',
      enabled: 'enabled',
      recurrence: 'recurrence',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabledCheckItems: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
      recurrence: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disabledCheckItems)) {
      $dara.Model.validateArray(this.disabledCheckItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

