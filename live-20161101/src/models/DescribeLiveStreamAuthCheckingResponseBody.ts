// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamAuthCheckingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message returned if authentication failed.
   * 
   * @example
   * INVALID AUTH_KEY
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16F08B4E-14FD-5D72-AB2F-BAFA4C4D57F1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the authentication is passed.
   * 
   * - pass: The authentication is passed.
   * 
   * - false: The authentication failed.
   * 
   * @example
   * pass
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

