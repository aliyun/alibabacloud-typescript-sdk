// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAsyncSqlParamsExtensions extends $dara.Model {
  /**
   * @remarks
   * The maximum running time for the request in milliseconds. Maximum value: 600,000 (10 minutes). Default value: 600,000.
   * 
   * @example
   * 30000
   */
  maxRunTime?: number;
  /**
   * @remarks
   * Specifies whether to enable enhanced SQL. The default value is false.
   * 
   * @example
   * true
   */
  powerSql?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxRunTime: 'maxRunTime',
      powerSql: 'powerSql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRunTime: 'number',
      powerSql: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsyncSqlParams extends $dara.Model {
  /**
   * @remarks
   * Extensions.
   */
  extensions?: SubmitAsyncSqlParamsExtensions;
  /**
   * @remarks
   * The start of the query time range. This time is the log time specified when the log was written. The time range defined by the from and to parameters is left-inclusive and right-exclusive. This means the time range includes the start time but excludes the end time. If the from and to values are the same, the time range is invalid and the function returns an error. The value is a UNIX timestamp in seconds since 00:00:00 UTC on January 1, 1970.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268100
   */
  from?: number;
  /**
   * @remarks
   * The name of the logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The SQL statement to execute.
   * 
   * This parameter is required.
   * 
   * @example
   * job: IT | select name, age, gender from log
   */
  query?: string;
  /**
   * @remarks
   * The end of the query time range. This time is the log time specified when the log was written. The time range defined by the from and to parameters is left-inclusive and right-exclusive. This means the time range includes the start time but excludes the end time. If the from and to values are the same, the time range is invalid and the function returns an error. The value is a UNIX timestamp in seconds since 00:00:00 UTC on January 1, 1970.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268200
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      extensions: 'extensions',
      from: 'from',
      logstore: 'logstore',
      query: 'query',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: SubmitAsyncSqlParamsExtensions,
      from: 'number',
      logstore: 'string',
      query: 'string',
      to: 'number',
    };
  }

  validate() {
    if(this.extensions && typeof (this.extensions as any).validate === 'function') {
      (this.extensions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

