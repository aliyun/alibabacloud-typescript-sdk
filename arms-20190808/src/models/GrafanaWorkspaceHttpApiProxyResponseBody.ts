// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceHttpApiProxyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * []
   */
  data?: any;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * C21AB7CF-B7AF-410F-BD61-82D1567F****
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
      data: 'any',
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

