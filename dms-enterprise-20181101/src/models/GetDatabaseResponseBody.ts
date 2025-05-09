// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatabaseResponseBodyDatabase } from "./GetDatabaseResponseBodyDatabase";


export class GetDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the database.
   */
  database?: GetDatabaseResponseBodyDatabase;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An unknown error occurred.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3CDB8601-AD74-4A47-8114-08E08CD6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
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
      database: GetDatabaseResponseBodyDatabase,
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

