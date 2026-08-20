// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeAgentUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. A failure returns a backend error code (ERR.* / InvalidParameter.*).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error description. This is empty when the call succeeds.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of records successfully revoked in this call.
   * 
   * @example
   * 1
   */
  revokedCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      revokedCount: 'revokedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      revokedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

