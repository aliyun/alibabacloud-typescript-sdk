// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResolveWorkItemAttachmentAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The short-term preview URL of the attachment. You can send a GET request to this URL before it expires.
   * 
   * @example
   * example
   */
  accessUrl?: string;
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The expiration time of the URL in ISO 8601 format.
   * 
   * @example
   * example
   */
  expiresAt?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessUrl: 'accessUrl',
      code: 'code',
      expiresAt: 'expiresAt',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessUrl: 'string',
      code: 'string',
      expiresAt: 'string',
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

