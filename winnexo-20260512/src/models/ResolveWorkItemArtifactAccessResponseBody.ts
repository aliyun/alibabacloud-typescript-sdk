// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResolveWorkItemArtifactAccessResponseBody extends $dara.Model {
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
   * The short-term signed download URL of the artifact. You can send a GET request directly to this URL before it expires.
   * 
   * @example
   * example
   */
  downloadUrl?: string;
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
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      downloadUrl: 'downloadUrl',
      expiresAt: 'expiresAt',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadUrl: 'string',
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

