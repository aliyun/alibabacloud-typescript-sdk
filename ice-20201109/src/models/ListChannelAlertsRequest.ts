// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChannelAlertsRequest extends $dara.Model {
  /**
   * @remarks
   * The alert type.
   */
  category?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2024-11-21T16:10:45Z
   */
  gmtEnd?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2024-11-21T16:10:45Z
   */
  gmtStart?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The sorting order by modification time. Valid values: asc and desc.
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

