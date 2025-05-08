// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddServiceSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * duplicatedClusterAliasName
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * mse-100-007
   * 
   * @example
   * 63
   */
  data?: number;
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * mse-200-105
   * 
   * @example
   * You are not authorized to perform this operation. Action: mse:AddServiceSource, Resource: acs:mse:cn-hangzhou:1105471854403716:instance/gw-082c943a8c304e48a37a7a29a5ddeda7
   */
  message?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * D0DB055C-51F2-5BB2-82A6-CD8A3C6EE6BA
   */
  requestId?: string;
  /**
   * @remarks
   * duplicated cluster alias name
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      httpStatusCode: 'number',
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

