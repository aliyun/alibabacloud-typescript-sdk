// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseExpiredInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Indicates whether the instance was released:
   * 
   * - **true**: Successful.
   * 
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  releaseStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9EC1DB0F-EE53-5D36-B5DA-71CB******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      releaseStatus: 'ReleaseStatus',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      releaseStatus: 'string',
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

