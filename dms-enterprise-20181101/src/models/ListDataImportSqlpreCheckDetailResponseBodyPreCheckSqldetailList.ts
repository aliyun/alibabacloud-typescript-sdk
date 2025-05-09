// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataImportSQLPreCheckDetailResponseBodyPreCheckSQLDetailList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the precheck of the SQL statement was skipped. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  skip?: boolean;
  /**
   * @remarks
   * The SQL ID, which indicates the sequence number of the SQL statement. The number starts with 1.
   * 
   * @example
   * 1
   */
  sqlId?: number;
  /**
   * @remarks
   * The type of the SQL statement, such as DELETE, UPDATE, or ALTER_TABLE.
   * 
   * @example
   * INSERT
   */
  sqlType?: string;
  /**
   * @remarks
   * The state of the ticket. Valid values:
   * 
   * *   **INIT**: The ticket was being initialized.
   * *   **RUNNING**: The ticket was in progress.
   * *   **SUCCESS**: The ticket was complete.
   * *   **TIMEOUT**: The ticket was skipped due to timeout.
   * *   **FAIL**: The ticket failed.
   * 
   * @example
   * SUCCESS
   */
  statusCode?: string;
  static names(): { [key: string]: string } {
    return {
      skip: 'Skip',
      sqlId: 'SqlId',
      sqlType: 'SqlType',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skip: 'boolean',
      sqlId: 'number',
      sqlType: 'string',
      statusCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

