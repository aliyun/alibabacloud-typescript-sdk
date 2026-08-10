// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistogramsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The start time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * The time interval follows the left-closed, right-open principle. The interval includes the start time but excludes the end time. If the values of from and to are the same, the interval is invalid and the function returns an error.
   * 
   * @example
   * 1409529600
   */
  from?: number;
  /**
   * @remarks
   * The end time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * The time interval follows the left-closed, right-open principle. The interval includes the start time but excludes the end time. If the values of from and to are the same, the interval is invalid and the function returns an error.
   * 
   * @example
   * 1409569200
   */
  to?: number;
  /**
   * @remarks
   * The number of logs queried in the subinterval.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether the query results in the subinterval are complete.
   * 
   * Complete: The query is complete and the returned results are complete.
   * 
   * Incomplete: The query is complete but the returned results are incomplete. Repeat the request to obtain complete results.
   * 
   * @example
   * Complete
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      to: 'to',
      count: 'count',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
      count: 'number',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistogramsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHistogramsResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': GetHistogramsResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

