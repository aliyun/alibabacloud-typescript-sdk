// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGrafanaWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success. Other values indicate errors.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the Grafana workspace was deleted. Valid values:
   * - true: The workspace was deleted.
   * - false: The workspace failed to be deleted.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 27E653FA-5958-45BE-8AA9-14D884DC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The operation was successful.
   * - `false`: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to query the details of the call.
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

