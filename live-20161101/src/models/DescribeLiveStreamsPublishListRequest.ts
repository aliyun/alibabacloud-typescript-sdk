// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsPublishListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The ingest domain or main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The time range specified by the StartTime and EndTime parameters cannot exceed 30 days.
   * 
   * Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * *   **stream_name_desc**: sorts the entries in descending order by stream name.
   * *   **stream_name_asc**: sorts the entries in ascending order by stream name.
   * *   **publish_time_desc**: sorts the entries in descending order by stream ingest time.
   * *   **publish_time_asc** (default): sorts the entries in ascending order by stream ingest time.
   * 
   * @example
   * publish_time_desc
   */
  orderBy?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 3000**. Default value: **2000**.
   * 
   * @example
   * 1500
   */
  pageSize?: number;
  /**
   * @remarks
   * The mode in which stream names are matched. Valid values:
   * 
   * *   **fuzzy** (default): fuzzy match
   * *   **strict**: exact match
   * 
   * @example
   * fuzzy
   */
  queryType?: string;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The type of the streams to query. Valid values:
   * 
   * *   An empty value****: source streams
   * *   **all**: all streams
   * *   **trans**: transcoded streams
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
      regionId: 'RegionId',
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
      regionId: 'string',
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

