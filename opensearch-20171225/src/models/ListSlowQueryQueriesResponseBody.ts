// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlowQueryQueriesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The information about the optimization suggestion.
   * 
   * @example
   * no data
   */
  appQuery?: string;
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
   * The ID of the optimization suggestion.
   * 
   * @example
   * 0
   */
  index?: number;
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
      appQuery: 'appQuery',
      end: 'end',
      index: 'index',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appQuery: 'string',
      end: 'number',
      index: 'number',
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

export class ListSlowQueryQueriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB250CA0-ACFD-C5DE-17CD-01445BFE8AE5
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   */
  result?: ListSlowQueryQueriesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListSlowQueryQueriesResponseBodyResult,
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

