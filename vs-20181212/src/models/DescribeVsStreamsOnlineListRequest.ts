// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsStreamsOnlineListRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time.
   * > - The time must be in UTC. Example: 2016-06-30T19:00:00Z.
   * > - The interval between EndTime and StartTime cannot exceed 30 days.
   * 
   * @example
   * 2016-06-30T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * - stream_name_desc: sorts by live stream name in descending order.
   * - stream_name_asc: sorts by live stream name in ascending order.
   * - publish_time_desc: sorts by stream ingest time in descending order.
   * - publish_time_asc: sorts by stream ingest time in ascending order. This is the default value.
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
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 3000.
   * 
   * Valid values: 1 to 3000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to use fuzzy match for the stream name. Valid values:
   * - fuzzy: fuzzy match.
   * - strict: exact match.
   * 
   * @example
   * fuzzy
   */
  queryType?: string;
  /**
   * @remarks
   * The start time.
   * > The time must be in UTC. Example: 2016-06-29T19:00:00Z.
   * 
   * @example
   * 2016-06-29T19:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name.
   * 
   * @example
   * xxxStream
   */
  streamName?: string;
  /**
   * @remarks
   * The stream type. Valid values:
   * - all: all streams. This is the default value.
   * - raw: raw streams.
   * - trans: transcoded streams.
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
      pageNum: 'PageNum',
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
      pageNum: 'number',
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

