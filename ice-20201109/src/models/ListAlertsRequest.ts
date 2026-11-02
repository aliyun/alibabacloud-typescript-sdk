// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertsRequest extends $dara.Model {
  /**
   * @remarks
   * The alert type. Valid values:
   * - Scheduling Error: An error occurred while building the schedule.
   * - PlayBack Warning: An exception occurred while pulling the address when adding a source.
   * - info: Information.
   * 
   * @example
   * Scheduling Error
   */
  category?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2024-11-22T16:10:45Z
   */
  gmtEnd?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2024-11-21T16:10:45Z
   */
  gmtStart?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource ARN of the source or program.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<userId>:vodSource/mySourceLocation/MySource
   */
  resourceArn?: string;
  /**
   * @remarks
   * The sorting parameter. By default, items are sorted in descending order of creation time.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * Sorts items by modification time.
   * 
   * @example
   * asc
   */
  sortByModifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      gmtEnd: 'GmtEnd',
      gmtStart: 'GmtStart',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceArn: 'ResourceArn',
      sortBy: 'SortBy',
      sortByModifiedTime: 'SortByModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      gmtEnd: 'string',
      gmtStart: 'string',
      pageNo: 'number',
      pageSize: 'number',
      resourceArn: 'string',
      sortBy: 'string',
      sortByModifiedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

