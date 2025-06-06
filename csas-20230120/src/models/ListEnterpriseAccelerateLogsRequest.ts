// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseAccelerateLogsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  department?: string;
  dstAddr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1748422694
   */
  endTime?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  searchMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1748419094
   */
  startTime?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      department: 'Department',
      dstAddr: 'DstAddr',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      searchMode: 'SearchMode',
      startTime: 'StartTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      department: 'string',
      dstAddr: 'string',
      endTime: 'number',
      pageSize: 'number',
      searchMode: 'string',
      startTime: 'number',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

