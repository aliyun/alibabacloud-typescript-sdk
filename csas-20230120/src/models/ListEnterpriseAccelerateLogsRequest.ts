// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseAccelerateLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number displayed during paged queries. Value range: 1 to 10000.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Department.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * Endpoint.
   * 
   * @example
   * jfrog.cea.vwah.vwgroup.com
   */
  dstAddr?: string;
  /**
   * @remarks
   * End time, UNIX timestamp, in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1748422694
   */
  endTime?: number;
  /**
   * @remarks
   * The number of items per page for paged queries. Value range: 1 to 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Query mode. Only the DstAddr field supports the following modes:
   * 
   * - **Exact**: Term query
   * 
   * - **Fuzzy**: Fuzzy query
   * 
   * @example
   * Exact
   */
  searchMode?: string;
  /**
   * @remarks
   * Start time, UNIX timestamp, in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1748419094
   */
  startTime?: number;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * 张三
   */
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

