// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStatsEventRecordsResponseBodyResultResult extends $dara.Model {
  /**
   * @example
   * 4
   */
  cnt?: string;
  /**
   * @example
   * Info
   */
  level?: string;
  /**
   * @example
   * Executed
   */
  status?: string;
  /**
   * @example
   * UserOperator
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cnt: 'cnt',
      level: 'level',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnt: 'string',
      level: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatsEventRecordsResponseBodyResult extends $dara.Model {
  result?: ListStatsEventRecordsResponseBodyResultResult[];
  /**
   * @example
   * 6
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListStatsEventRecordsResponseBodyResultResult },
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatsEventRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  result?: ListStatsEventRecordsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListStatsEventRecordsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

