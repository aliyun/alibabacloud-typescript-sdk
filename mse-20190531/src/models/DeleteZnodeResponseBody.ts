// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteZnodeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of node data.
   * 
   * @example
   * cluster
   */
  data?: string;
  /**
   * @remarks
   * The node list information. Valid values:
   * - `true`: The information is returned successfully.
   * - `false`: The information fails to be returned.
   * 
   * @example
   * true
   */
  dir?: boolean;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * mse-bc1a29b0-160230875****-reg-center-0-1
   */
  name?: string;
  /**
   * @remarks
   * The node path.
   * 
   * @example
   * /
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dir: 'Dir',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dir: 'boolean',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZnodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data overview.
   */
  data?: DeleteZnodeResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC34E4A3-5F1C-4E40-86EA-02EDF967****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * - `true`: The request succeeded.
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteZnodeResponseBodyData,
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

