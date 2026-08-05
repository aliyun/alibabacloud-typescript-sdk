// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsPublishListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs. You can view AppName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The ingest domain or streamer streaming domain.
   * > - When you specify DomainName, make sure that the domain name is a live streaming domain name and that the user calling this operation has the permissions to operate on the specified domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The interval between EndTime and StartTime cannot exceed 30 days.
   * 
   * Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
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
   * - **stream_name_desc**: sorts by live stream name in descending order.
   * - **stream_name_asc**: sorts by live stream name in ascending order.
   * - **publish_time_desc**: sorts by stream ingest time in descending order.
   * - **publish_time_asc** (default): sorts by stream ingest time in ascending order.
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
   * The page size. Valid values: **1 to 3000**. Default value: **2000**.
   * 
   * @example
   * 1500
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to use fuzzy match for the stream name. Valid values:
   * - **fuzzy** (default): fuzzy match.
   * - **strict**: exact match.
   * 
   * @example
   * fuzzy
   */
  queryType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of stream ingest.
   * 
   * Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name. You can view StreamName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The stream type. Valid values:
   * 
   * - **Not specified**: queries raw streams.
   * - **all**: queries all streams.
   * - **trans**: queries transcoded streams.
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

