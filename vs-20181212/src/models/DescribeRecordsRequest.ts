// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Specify the end time for the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-24T00:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to use a private bucket.
   * 
   * @example
   * true
   */
  privateBucket?: boolean;
  /**
   * @remarks
   * The field to sort the records by. Valid value:
   * 
   * - Id (default)
   * 
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * - asc (ascending, default)
   * 
   * - desc (descending)
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @remarks
   * Query records by start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-22T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Query by stream ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  streamId?: string;
  /**
   * @remarks
   * The type of the recording record to query. Valid values:
   * 
   * - record (Recording)
   * 
   * - snapshot
   * 
   * This parameter is required.
   * 
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      privateBucket: 'PrivateBucket',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      startTime: 'StartTime',
      streamId: 'StreamId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      privateBucket: 'boolean',
      sortBy: 'string',
      sortDirection: 'string',
      startTime: 'string',
      streamId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

