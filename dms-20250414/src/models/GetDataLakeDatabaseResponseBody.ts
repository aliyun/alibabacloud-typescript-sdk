// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLDatabase } from "./Dldatabase";


export class GetDataLakeDatabaseResponseBody extends $dara.Model {
  database?: DLDatabase;
  /**
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @example
   * code: 404, can not find catalog, name : hive1 request id: FF737753-9641-1F51-AFDA-7DF54111****
   */
  errorMessage?: string;
  /**
   * @example
   * E5EE2B9E-2F95-57FA-B284-CB441CEE****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: DLDatabase,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.database && typeof (this.database as any).validate === 'function') {
      (this.database as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

