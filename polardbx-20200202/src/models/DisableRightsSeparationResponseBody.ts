// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableRightsSeparationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message. If the request is successful, "success" is returned. If the request fails, the corresponding error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE5D94E3-3C93-3594-95D9-AAED2A980915
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

