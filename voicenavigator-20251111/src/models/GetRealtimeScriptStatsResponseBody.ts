// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeScriptStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configured concurrency.
   * 
   * @example
   * 13
   */
  configuredConcurrency?: number;
  /**
   * @remarks
   * The time the statistics were collected, expressed as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1774881658931
   */
  statsTime?: number;
  /**
   * @remarks
   * The current concurrency.
   * 
   * @example
   * 10
   */
  usedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      configuredConcurrency: 'ConfiguredConcurrency',
      statsTime: 'StatsTime',
      usedConcurrency: 'UsedConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuredConcurrency: 'number',
      statsTime: 'number',
      usedConcurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeScriptStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The real-time script statistics.
   */
  data?: GetRealtimeScriptStatsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * A list of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * d74d6290-7cbe-4436-b5d7-014ebb0f4060
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRealtimeScriptStatsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

