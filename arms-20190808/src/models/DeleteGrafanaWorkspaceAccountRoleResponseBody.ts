// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGrafanaWorkspaceAccountRoleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * {
   *         "RequestId": "01A079B0-7AA2-50A6-9A74-D89FE01432A5",
   *         "TraceId": "0a03282e17887480040532718e74b7",
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
   * 22614CC7-7EA5-576F-9536-28717A886EB1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 0a06dfe917788110578173646e4852
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

