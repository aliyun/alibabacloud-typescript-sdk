// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistogramsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range for the subinterval. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-01-01 00:00:00 UTC.
   * 
   * The time range is a left-closed, right-open interval. This means that the subinterval includes the start time but not the end time. If the values of from and to are the same, the interval is invalid and an error is returned.
   * 
   * @example
   * 1409529600
   */
  from?: number;
  /**
   * @remarks
   * The end of the time range for the subinterval. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-01-01 00:00:00 UTC.
   * 
   * The time range is a left-closed, right-open interval. This means that the subinterval includes the start time but not the end time. If the values of from and to are the same, the interval is invalid and an error is returned.
   * 
   * @example
   * 1409569200
   */
  to?: number;
  /**
   * @remarks
   * The number of logs that are found in the subinterval.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether the query result in the subinterval is complete.
   * 
   * Complete: The query is complete and the result is complete.
   * 
   * Incomplete: The query is complete but the result is incomplete. Send the request again to obtain the complete result.
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

