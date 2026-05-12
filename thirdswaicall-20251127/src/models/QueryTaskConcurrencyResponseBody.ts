// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class QueryTaskConcurrencyResponseBodyData extends $dara.Model {
  /**
   * @example
   * 5
   */
  availableConcurrency?: number;
  /**
   * @example
   * 5
   */
  currentConcurrency?: number;
  /**
   * @example
   * 5
   */
  maxConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      availableConcurrency: 'AvailableConcurrency',
      currentConcurrency: 'CurrentConcurrency',
      maxConcurrency: 'MaxConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableConcurrency: 'number',
      currentConcurrency: 'number',
      maxConcurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskConcurrencyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryTaskConcurrencyResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 202BFA44-28D8-571E-B992-BA70F2E92FB0
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 1743387963
   */
  timestamp?: string;
  /**
   * @remarks
   * Trace ID。
   * 
   * @example
   * F47D4976-FC5A-5687-A890-B7923D3B429B
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTaskConcurrencyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      timestamp: 'string',
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

