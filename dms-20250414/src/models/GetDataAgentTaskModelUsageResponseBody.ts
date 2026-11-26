// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentTaskModelUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The acceleration ratio, which is the speedup brought by the parallel execution of subtasks.
   * 
   * @example
   * 3.8
   */
  accelerationRatio?: number;
  /**
   * @remarks
   * The peak concurrency.
   * 
   * @example
   * 10
   */
  peakConcurrency?: number;
  /**
   * @remarks
   * The number of throttled sessions.
   * 
   * @example
   * 8
   */
  rateLimitedSessionCount?: number;
  /**
   * @remarks
   * The total queueing time for the large language model.
   * 
   * @example
   * 11220
   */
  totalLlmQueueDuration?: number;
  /**
   * @remarks
   * The total throttling duration of all sessions.
   * 
   * @example
   * 89
   */
  totalLlmWaitDuration?: number;
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 39
   */
  totalSessionCount?: number;
  /**
   * @remarks
   * The peak TPM within the query time range, which is the maximum number of tokens consumed per minute.
   * 
   * @example
   * 42000
   */
  peakTpm?: number;
  /**
   * @remarks
   * The total number of model calls within the query time range.
   * 
   * @example
   * 1280
   */
  totalCallCount?: number;
  /**
   * @remarks
   * The total number of tokens consumed within the query time range.
   * 
   * @example
   * 3560000
   */
  totalTokenConsumed?: number;
  /**
   * @remarks
   * The number of models used within the query time range.
   * 
   * @example
   * 5
   */
  usedModels?: number;
  static names(): { [key: string]: string } {
    return {
      accelerationRatio: 'AccelerationRatio',
      peakConcurrency: 'PeakConcurrency',
      rateLimitedSessionCount: 'RateLimitedSessionCount',
      totalLlmQueueDuration: 'TotalLlmQueueDuration',
      totalLlmWaitDuration: 'TotalLlmWaitDuration',
      totalSessionCount: 'TotalSessionCount',
      peakTpm: 'peakTpm',
      totalCallCount: 'totalCallCount',
      totalTokenConsumed: 'totalTokenConsumed',
      usedModels: 'usedModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationRatio: 'number',
      peakConcurrency: 'number',
      rateLimitedSessionCount: 'number',
      totalLlmQueueDuration: 'number',
      totalLlmWaitDuration: 'number',
      totalSessionCount: 'number',
      peakTpm: 'number',
      totalCallCount: 'number',
      totalTokenConsumed: 'number',
      usedModels: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAgentTaskModelUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The summary data of model usage for DataAgent analysis tasks.
   */
  data?: GetDataAgentTaskModelUsageResponseBodyData;
  /**
   * @remarks
   * The error code, which is returned when a request exception occurs.
   * 
   * @example
   * DMS-DA-40411
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message, which is returned when the call fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 67E910F2-***695C
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: string;
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
      data: GetDataAgentTaskModelUsageResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'string',
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

