// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlowQueryCategoriesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The status of the analysis. Valid values:
   * 
   * *   PENDING: preparing
   * *   SUCCESS: succeeded
   * *   RUNNING: running
   * *   FAILED: failed
   * *   N/A: unknown
   * 
   * @example
   * "PENDING"
   */
  analyzeStatus?: string;
  /**
   * @remarks
   * The timestamp that indicates the end of the time range to query.
   * 
   * @example
   * 1589990340
   */
  end?: number;
  /**
   * @remarks
   * The timestamp that indicates the beginning of the time range to query.
   * 
   * @example
   * 1589986800
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      analyzeStatus: 'analyzeStatus',
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeStatus: 'string',
      end: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4406F40B-A0A2-9D5D-531F-3B6936567584
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned.
   */
  result?: ListSlowQueryCategoriesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListSlowQueryCategoriesResponseBodyResult,
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

