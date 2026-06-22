// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectClientEventDashboardRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page to return.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end timestamp of the query.
   * 
   * @example
   * 1656038940435
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The start timestamp of the query.
   * 
   * @example
   * 1648438617000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      endTime: 'number',
      pageSize: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

