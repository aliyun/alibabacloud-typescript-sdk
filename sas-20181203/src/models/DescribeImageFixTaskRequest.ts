// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageFixTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the results to return. Default value: **1**, which indicates that the results start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end timestamp of the repair task that you want to query. Unit: milliseconds.
   * 
   * @example
   * 1635575219000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of entries per page in a paginated query. Default value: **20**, which indicates that up to 20 entries are returned per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start timestamp of the repair task that you want to query. Unit: milliseconds.
   * 
   * @example
   * 1634725571000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the image repair task that you want to query. Valid values:
   * 
   * - **1**: Repairing
   * - **2**: Repaired
   * - **3**: Repair failed
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

