// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDBTaskSQLJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SQL task group. You can call the [GetStructSyncJobDetail](https://help.aliyun.com/document_detail/206160.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1324235
   */
  DBTaskGroupId?: number;
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
   * > : To view the ID of the tenant, log on to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskGroupId: 'DBTaskGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskGroupId: 'number',
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

