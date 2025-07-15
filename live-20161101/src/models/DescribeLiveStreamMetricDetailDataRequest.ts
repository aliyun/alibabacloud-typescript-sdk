// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamMetricDetailDataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application for which you want to query the monitoring data of streams.
   * 
   * >  If you specify the StreamName parameter, you must also specify the AppName parameter.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * *   The accelerated domain name. You can specify only one domain name. If you specify multiple domain names, an error occurs.
   * *   If you do not specify the AppName and StreamName parameters, monitoring data of all streams for the domain name is returned.
   * *   If you leave this parameter empty, monitoring data of streams under all domain names is returned.
   * *   If you specify the DomainName parameter and set both the AppName and StreamName parameters to all, monitoring data of all streams in all applications under the specified domain name is returned.
   * *   When you specify the DomainName parameter, make sure that the domain name is a domain name used for live streaming and that you have the permissions on the domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time, and the maximum time range that can be specified is one day. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The token used to query data by page. Up to 5,000 rows of data can be returned per query. If the number of rows exceeds 5,000, a token that determines the start point of the next query is provided in the response. If you specify this parameter, data continues to be obtained from the end of the previous query.
   * 
   * @example
   * UjsM9x3aVcJi9a0-ArwJUTTC67CIBKLw*****
   */
  nextPageToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The streaming protocol. Valid values: **flv**, **hls**, **rtmp**, **rts**, and **p2p**.
   * 
   * You can specify multiple protocols. Separate multiple protocols with commas (,). However, data over multiple protocols is not aggregated and is returned based on the stream.
   * 
   * @example
   * flv
   */
  protocol?: string;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the stream. The stream must belong to the application that is specified by the AppName parameter.
   * 
   * >  If you specify the StreamName parameter, you must also specify the AppName parameter.
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
      protocol: 'Protocol',
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
      protocol: 'string',
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

