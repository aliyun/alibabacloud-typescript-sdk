// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPhysicalDatabaseResponseBodyDatabase } from "./GetPhysicalDatabaseResponseBodyDatabase";


export class GetPhysicalDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the physical database.
   */
  database?: GetPhysicalDatabaseResponseBodyDatabase;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
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
      database: GetPhysicalDatabaseResponseBodyDatabase,
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

