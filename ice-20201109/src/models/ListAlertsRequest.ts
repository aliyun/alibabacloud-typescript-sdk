// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertsRequest extends $dara.Model {
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
   * 2024-11-22T16:10:45Z
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ARN of the source or program.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<userId>:vodSource/mySourceLocation/MySource
   */
  resourceArn?: string;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order. Valid values: asc and desc.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The sorting order by modification time. Valid values: asc and desc.
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

