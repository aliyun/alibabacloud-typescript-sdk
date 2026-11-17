// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartProcessInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend return code for the API request.
   * 
   * @example
   * 1400009
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * null
   */
  data?: any;
  /**
   * @remarks
   * Specifies whether the manual workflow run failed.
   * 
   * @example
   * false
   */
  failed?: boolean;
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
   * The detailed description corresponding to the return code.
   * 
   * @example
   * No permission for resource action
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
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
      code: 'code',
      data: 'data',
      failed: 'failed',
      httpStatusCode: 'httpStatusCode',
      msg: 'msg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      failed: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
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

