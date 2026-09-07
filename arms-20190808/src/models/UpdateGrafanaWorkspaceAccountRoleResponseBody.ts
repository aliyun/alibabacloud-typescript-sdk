// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGrafanaWorkspaceAccountRoleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * {
   *         "RequestId": "01A079AC-E254-5148-8B38-948C909DD31B",
   *         "TraceId": "0a06dd2d17887477684538583ec77f",
   *         "Data": true,
   *         "Code": 200,
   *         "Success": true
   *     }
   */
  data?: boolean;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 5540BA0C-84FF-5D38-B7A9-D78B84C98C18
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * eac0a8048716731735000007137d000b
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

