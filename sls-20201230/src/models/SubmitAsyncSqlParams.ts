// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAsyncSqlParamsExtensions extends $dara.Model {
  /**
   * @example
   * 30000
   */
  maxRunTime?: number;
  /**
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
  extensions?: SubmitAsyncSqlParamsExtensions;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1627268100
   */
  from?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job: IT | select name, age, gender from log
   */
  query?: string;
  /**
   * @remarks
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

