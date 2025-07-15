// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamPushMetricDetailDataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. The stream-level data of this application is returned.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * *   The accelerated domain name. You can specify only one domain name. If you specify multiple domain names, an error occurs.
   * *   If you do not specify the AppName and StreamName parameters, data of all streams under the specified domain name is returned. The data is not aggregated.
   * *   If you specify the DomainName parameter and set both the AppName and StreamName parameters to all, data of all streams in all applications under the specified domain name is aggregated and returned.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time, and the maximum time range that can be specified is one day. Specify the time in the ISO 8601 standard
   * 
   * in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * A pagination token. When you call this operation, up to 5,000 rows of data can be returned per query. If the number of rows exceeds 5,000, the response includes a pagination token that is used in the next request to retrieve a new page of results.
   * 
   * When you specify the token in the next query, data continues to be obtained from the end of the previous query.
   * 
   * @example
   * UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=
   */
  nextPageToken?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream. The data of the stream in the specified application is returned. If the StreamName parameter is specified, the AppName parameter must also be specified.
   * 
   * @example
   * test
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

