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
   * The end of the time range to query.
   * 
   * > - Specify the time in the UTC format. Example: 2016-06-30T19:00:00Z.
   * >
   * > - The time range between EndTime and StartTime cannot exceed 30 days.
   * 
   * @example
   * 2016-06-30T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * - stream_name_desc: sorts by stream name in descending order.
   * 
   * - stream_name_asc: sorts by stream name in ascending order.
   * 
   * - publish_time_desc: sorts by ingest time in descending order.
   * 
   * - publish_time_asc (default): sorts by ingest time in ascending order.
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
   * Specifies whether to perform a fuzzy match for the stream name. Valid values:
   * 
   * - fuzzy: fuzzy match
   * 
   * - strict: exact match
   * 
   * @example
   * fuzzy
   */
  queryType?: string;
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * > Specify the time in the UTC format. Example: 2016-06-29T19:00:00Z.
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
   * 
   * - all (default): all streams
   * 
   * - raw: raw streams
   * 
   * - trans: transcoded streams
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

