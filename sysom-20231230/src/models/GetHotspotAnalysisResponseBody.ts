// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * "AliYunDun:1657494 process (1657494): Based on the provided hot spot call stack information, the hot spot is mainly concentrated on `__nanosleep_nocancel` and the related system call `SyS_nanosleep`, which indicates that the process is waiting for a specific time interval. This is usually caused by long sleep periods or high-frequency timed operations in the application, such as scheduled tasks and heartbeat detection.\\n\\nThe application code uses `nanosleep` to implement precise delay control when it needs to periodically perform certain checks or wait for external events. To optimize this situation, consider the following approaches:\\n- Evaluate whether the frequency of scheduled tasks can be reduced.\\n- Use condition variables instead of simple sleep waits to respond to faster event triggers.\\n- If it is an I/O-intensive operation wait, consider optimizing the I/O path or improving I/O efficiency. Use the IO diagnostic tool on the SysOM platform to further locate specific I/O bottlenecks."
   */
  data?: string;
  /**
   * @remarks
   * The response message.
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
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
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

