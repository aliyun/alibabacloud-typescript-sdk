// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableNotifyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request, which is used for troubleshooting and ticket tracking.
   * 
   * @example
   * 70D52620-2609-1802-9788-6BC592C83F03
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The UUID of the notification policy on which the operation was performed.
   * 
   * @example
   * 04779a183add4f2ca06ab440f16cc580
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

