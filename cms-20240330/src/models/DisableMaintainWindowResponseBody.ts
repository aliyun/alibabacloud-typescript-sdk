// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableMaintainWindowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the paused silence policy.
   * 
   * @example
   * 3ff3fbd0-8a0b-4b31-9b1c-8e3f0a2c5d71
   */
  maintainWindowId?: string;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID for troubleshooting and ticket tracking.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maintainWindowId: 'maintainWindowId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintainWindowId: 'string',
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

