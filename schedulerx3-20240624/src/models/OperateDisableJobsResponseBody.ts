// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateDisableJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message. Contains error details if the request fails.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * A unique ID generated for this request. If you encounter an issue, provide this ID for troubleshooting.
   * 
   * @example
   * 29ED6209-5DE6-5E1D-89B0-B7B1D823A1BF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the request succeeded.
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

