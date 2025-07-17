// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGrafanaResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates a successful request, whereas others indicate a failed request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * delete success.
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 771DC66C-C5E0-59BC-A983-DD18FEE9EFFA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
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

