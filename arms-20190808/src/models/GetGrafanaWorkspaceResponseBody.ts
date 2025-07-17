// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GrafanaWorkspace } from "./GrafanaWorkspace";


export class GetGrafanaWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned for the request. Valid values:
   * 
   * *   `2XX`: The request is successful.
   * *   `3XX`: A redirection message is returned.
   * *   `4XX`: The request is invalid.
   * *   `5XX`: A server error occurs.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the Grafana workspace.
   */
  data?: GrafanaWorkspace;
  /**
   * @remarks
   * The error message returned when the request parameters are invalid.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2C3F217B-9AAE-5D51-974D-48********
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. The ID is used to query the details of a request.
   * 
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
      data: GrafanaWorkspace,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

