// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamMetricDetailDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. Specify this parameter to query stream-level data for a specific application.
   * 
   * > If you specify StreamName, you must also specify AppName.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * - The accelerated domain name to query. Only a single domain name can be queried at a time. An error is returned if multiple domain names are specified.
   * - If AppName and StreamName are not specified, stream-level data for all streams under the domain name is returned.
   * - If the domain name is left empty, aggregate data for all accelerated domain names under the account is returned.
   * - If DomainName is specified and both AppName and StreamName are set to all, aggregate data for the specified accelerated domain name is returned.
   * - When you specify DomainName, make sure the domain name is a live streaming domain and the user calling this operation has the required permissions on the domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time, and the difference cannot exceed 1 day. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The paged query token. A maximum of 5,000 rows of data can be returned per query. If the data to query exceeds 5,000 rows, the response includes the starting index for the next paging request. Pass this token in the request to continue querying data from where the previous query ended.
   * 
   * @example
   * UjsM9x3aVcJi9a0-ArwJUTTC67CIBKLw*****
   */
  nextPageToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The stream protocol. Valid values: **flv**, **hls**, **rtmp**, **rts**, and **p2p**.
   * 
   * You can query data for multiple protocols by separating them with commas (,). Data for multiple protocols is not aggregated and is output at the stream level.
   * 
   * > The **rts** option queries Real-Time Streaming (RTS) streams that use the ARTC protocol.
   * > - When using rts, you may need to additionally collect statistics for the xxx_AliRTS-opus transcoding stream. This is because when playing an RTS stream on the web, a transcoding stream with the _AliRTS-opus suffix appended to the stream name is automatically generated. For more information, see [RTS sub-second latency automatic transcoding](https://help.aliyun.com/document_detail/2948703.html).
   * 
   * @example
   * flv
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name. Specify this parameter together with AppName to return stream-level data.
   * 
   * > If you specify StreamName, you must also specify AppName.
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

