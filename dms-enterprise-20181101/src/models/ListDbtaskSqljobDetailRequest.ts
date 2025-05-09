// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDBTaskSQLJobDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SQL task. You can call the [ListDBTaskSQLJob](https://help.aliyun.com/document_detail/207049.html) operation to query the SQL task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1276****
   */
  jobId?: number;
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
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
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

