// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateConnectionToOtherZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParam
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid Parameter.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 65BDA532-28AF-4122-AA39-B382721EEE64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

