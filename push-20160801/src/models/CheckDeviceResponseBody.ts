// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the device is active.
   * 
   * @example
   * true
   */
  available?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

