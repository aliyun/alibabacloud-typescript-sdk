// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStructSyncJobAnalyzeResultRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the comparison. Valid values:
   * 
   * *   **CREATE_TABLE**: compares the created tables.
   * *   **ALTER_TABLE**: compares the modified tables.
   * *   **EQUAL_TABLE**: compares the identical tables.
   * *   **PASS_TABLE**: compares the tables that are skipped during schema synchronization.
   * *   **NOT_COMPARE**: does not compare tables.
   * 
   * @example
   * CREATE_TABLE
   */
  compareType?: string;
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 1342355
   */
  orderId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      compareType: 'CompareType',
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareType: 'string',
      orderId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

