// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartProcessInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code that is returned by the backend server.
   * 
   * @example
   * 1400009
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * {\\"sessionBizId\\": \\"sc-dc85644dba1c8c63\\", \\"bizId\\": \\"st-aeed3b0d4f87418a9a9dcbd757477658\\", \\"gmtCreated\\": \\"Thu Sep 12 02:28:45 UTC 2024\\"}
   */
  data?: any;
  /**
   * @remarks
   * Indicates whether the workflow fails to be run manually.
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
   * The description of the returned code.
   * 
   * @example
   * No permission for resource action
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
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

