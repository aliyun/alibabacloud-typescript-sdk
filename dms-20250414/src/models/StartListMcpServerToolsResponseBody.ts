// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartListMcpServerToolsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The temporary session ID for this detection. After the startup succeeds, use this value to call GetListMcpServerToolsResult to poll for the result.
   * 
   * @example
   * 1vw***6wr
   */
  sessionId?: string;
  /**
   * @remarks
   * The UNIX timestamp at which the server started the detection, in milliseconds.
   * 
   * @example
   * 1785819600000
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      startTimestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartListMcpServerToolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the asynchronous detection startup. Only StartTimestamp may be returned if the resources are still being provisioned.
   */
  data?: StartListMcpServerToolsResponseBodyData;
  /**
   * @remarks
   * The return code. The value success is returned if the request was successful. An error code is returned if the request failed.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if a system-level request failure occurs.
   * 
   * @example
   * agent status=wait_resource_running
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate this call.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: The request was successful.
   * - false: The request failed.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StartListMcpServerToolsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

