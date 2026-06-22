// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncAssetTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: 1, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end timestamp of the IDC scan task to query. Unit: milliseconds.
   * 
   * @example
   * 1662430077000
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start timestamp of the IDC scan task to query. Unit: milliseconds.
   * 
   * @example
   * 1652063828796
   */
  startTime?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * IDC_PROBE_SCAN***
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      startTime: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

