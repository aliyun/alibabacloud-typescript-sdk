// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamPushMetricDetailDataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. Specify the application name to query data at the stream granularity for the corresponding application.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * - The accelerated domain name to query. Only a single domain name can be queried. An error is returned if you specify multiple domain names.
   * - If you do not specify AppName or StreamName, data at the stream granularity for all streams under the specified accelerated domain name is returned without aggregation.
   * - If DomainName is specified and both AppName and StreamName are set to all, aggregate data at the stream granularity for all streams under the specified accelerated domain name is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the UTC time zone. The end time must be later than the start time, and the difference cannot exceed 1 day.
   * 
   * Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The paging query token. Each query returns a maximum of 5,000 rows of data. If the data to be queried exceeds 5,000 rows, the response includes the start index for the next query.
   * 
   * Pass this token in the request to continue querying data from the row after the last row returned in the previous query.
   * 
   * @example
   * UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=
   */
  nextPageToken?: string;
  ownerId?: number;
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
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the UTC time zone.
   * 
   * Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream. If you specify StreamName, data at the stream granularity is returned for the specified StreamName under the specified AppName. You must specify AppName when you specify StreamName.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      nextPageToken: 'NextPageToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      nextPageToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      startTime: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

