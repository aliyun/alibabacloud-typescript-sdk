// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataImportSQLPreCheckDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ticket ID. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to query the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11****
   */
  orderId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumer?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * *   **SELECT**
   * *   **INSERT**
   * *   **DELETE**
   * *   **CREATE_TABLE**
   * 
   * > You can log on to the Data Management (DMS) console and choose **Security and Specifications** > **Operation Audit** in the top navigation bar to view more types of SQL statements.
   * 
   * @example
   * INSERT
   */
  sqlType?: string;
  /**
   * @remarks
   * The state of the ticket. If you leave this parameter empty, all the states are queried by default. Valid values:
   * 
   * *   **INIT**: The ticket is being initialized.
   * *   **RUNNING**: The ticket is in progress.
   * *   **SUCCESS**: The ticket is complete.
   * *   **TIMEOUT**: The ticket is skipped due to timeout.
   * *   **FAIL**: The ticket fails.
   * 
   * @example
   * SUCCESS
   */
  statusCode?: string;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      pageNumer: 'PageNumer',
      pageSize: 'PageSize',
      sqlType: 'SqlType',
      statusCode: 'StatusCode',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      pageNumer: 'number',
      pageSize: 'number',
      sqlType: 'string',
      statusCode: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

