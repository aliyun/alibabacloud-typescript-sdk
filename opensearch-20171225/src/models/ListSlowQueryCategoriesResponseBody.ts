// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlowQueryCategoriesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The analysis status.
   * 
   * - PENDING: The analysis is being prepared.
   * 
   * - SUCCESS: The analysis is successful.
   * 
   * - RUNNING: The analysis is in progress.
   * 
   * - FAILED: The analysis failed.
   * 
   * - N/A: The analysis status is unknown.
   * 
   * @example
   * "PENDING"
   */
  analyzeStatus?: string;
  /**
   * @remarks
   * The end timestamp.
   * 
   * @example
   * 1589990340
   */
  end?: number;
  /**
   * @remarks
   * The start timestamp.
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
   * The request ID.
   * 
   * @example
   * 4406F40B-A0A2-9D5D-531F-3B6936567584
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data.
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

