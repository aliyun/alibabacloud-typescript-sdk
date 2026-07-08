// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsStreamsPublishListRequest extends $dara.Model {
  /**
   * @remarks
   * The application name of the live stream.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * Your domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time.
   * 
   * > - Use UTC format. Example: 2016-06-30T19:00:00Z
   * >
   * > - The interval between EndTime and StartTime must not exceed 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-30T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - stream_name_desc (sort by stream name in descending order)
   * 
   * - stream_name_asc (sort by stream name in ascending order)
   * 
   * - publish_time_desc (sort by publish time in descending order)
   * 
   * - publish_time_asc (sort by publish time in ascending order) (default)
   * 
   * @example
   * publish_time_asc
   */
  orderBy?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 3000.<br>
   * Valid values: 1 to 3000.<br>
   * 
   * @example
   * 3000
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to use fuzzy matching for the stream name. Valid values:
   * 
   * - fuzzy (fuzzy match)
   * 
   * - strict (exact match)
   * 
   * @example
   * fuzzy
   */
  queryType?: string;
  /**
   * @remarks
   * The start time.
   * 
   * > Use UTC format. Example: 2016-06-29T19:00:00Z
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-29T19:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The live stream name.
   * 
   * @example
   * xxxStream
   */
  streamName?: string;
  /**
   * @remarks
   * The stream type. Valid values:
   * 
   * - all (all streams) (default)
   * 
   * - raw (raw stream)
   * 
   * - trans (transcoded stream)
   * 
   * @example
   * all
   */
  streamType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      orderBy: 'OrderBy',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      startTime: 'StartTime',
      streamName: 'StreamName',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      orderBy: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      startTime: 'string',
      streamName: 'string',
      streamType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

