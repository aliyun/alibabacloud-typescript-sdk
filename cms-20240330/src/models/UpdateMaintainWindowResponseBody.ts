// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMaintainWindowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the updated silence policy.
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
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
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

