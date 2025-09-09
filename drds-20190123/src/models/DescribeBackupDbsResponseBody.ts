// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupDbsResponseBodyDbNames extends $dara.Model {
  dbName?: string[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'dbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dbName)) {
      $dara.Model.validateArray(this.dbName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDbsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about a database.
   */
  dbNames?: DescribeBackupDbsResponseBodyDbNames;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 842DFA7F-B09B-42A2-B115-E684AE******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbNames: 'DbNames',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbNames: DescribeBackupDbsResponseBodyDbNames,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dbNames && typeof (this.dbNames as any).validate === 'function') {
      (this.dbNames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

