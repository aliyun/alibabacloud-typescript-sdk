// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdbMySqlTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   **Success** is returned if the operation is successful.
   * *   An error message is returned if the operation fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7A7D49E3-5585-5DF8-B62C-75C46B4991DC
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schema?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * *   **true**: The operation is successful.
   * *   **false**: The operation fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The names of tables.
   */
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      schema: 'Schema',
      success: 'Success',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      schema: 'string',
      success: 'boolean',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

