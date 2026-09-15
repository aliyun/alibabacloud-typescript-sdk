// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaintainWindowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted silence policy.
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
   * 8FDE2569-626B-5176-9844-28877A0D1C36
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

