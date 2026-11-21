// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNotifyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request, which is used for troubleshooting and ticket tracking.
   * 
   * @example
   * A1234567-1234-1234-1234-123456789012
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The UUID of the notification policy.
   * 
   * @example
   * np-12345678-1234-1234-1234-123456789012
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

