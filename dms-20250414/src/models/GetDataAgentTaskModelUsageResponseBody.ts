// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentTaskModelUsageResponseBodyData extends $dara.Model {
  accelerationRatio?: number;
  rateLimitedSessionCount?: number;
  totalLlmWaitDuration?: number;
  totalSessionCount?: number;
  /**
   * @remarks
   * The peak TPM (tokens per minute) within the query time range, which is the maximum number of tokens consumed per minute.
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
      rateLimitedSessionCount: 'RateLimitedSessionCount',
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
      rateLimitedSessionCount: 'number',
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
   * The error code returned if the request failed.
   * 
   * @example
   * DMS-DA-40411
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
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

