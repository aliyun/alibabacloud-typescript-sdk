// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceLoginAuditLogRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * >  The end time supports fuzzy match. Specify the time in the YYYY-MM-DD hh:mm:ss format. We recommend that you use the StartTime and EndTime parameters to specify a time range that does not exceed one day. This way, the returned entries can be displayed by page to increase query efficiency.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-18 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The alias of the user.
   * 
   * @example
   * test_OpUserName
   */
  opUserName?: string;
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
   * The number of entries to return on each page. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the database or instance whose logon records you want to query.
   * 
   * >  If SQL statements are executed at the instance level, you can set this parameter to an instance name. If SQL statements are executed at the database level, you can set this parameter to a database name.
   * 
   * @example
   * test_SearchName
   */
  searchName?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * >  The start time supports fuzzy match. Specify the time in the YYYY-MM-DD hh:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-18 11:00:00
   */
  startTime?: string;
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
      endTime: 'EndTime',
      opUserName: 'OpUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchName: 'SearchName',
      startTime: 'StartTime',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      opUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchName: 'string',
      startTime: 'string',
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

