// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChannelAlertsRequest extends $dara.Model {
  /**
   * @remarks
   * The alert type. Valid values:
   * - Scheduling Error: An error occurred while building the schedule.
   * - PlayBack Warning: An exception occurred when pulling the address while adding a source.
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
   * 2024-11-21T16:10:45Z
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ARN of the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<userId>:channel/myChannel
   */
  resourceArn?: string;
  /**
   * @remarks
   * Sorts the results by modification time.
   * 
   * @example
   * desc
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

