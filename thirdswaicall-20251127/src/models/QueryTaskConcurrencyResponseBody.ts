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
  code?: string;
  data?: QueryTaskConcurrencyResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  timestamp?: string;
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

