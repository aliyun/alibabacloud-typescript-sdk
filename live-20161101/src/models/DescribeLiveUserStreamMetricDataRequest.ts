// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUserStreamMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. Specify the application name to query stream-level data for the corresponding application. If `StreamName` is specified, `AppName` must also be specified.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain to query.
   * 
   * 
   * > Only a single domain name is supported. An error is returned if multiple domain names are specified. If the domain name is empty, aggregate data for all streaming domains under the user is queried. If `AppName` and `StreamName` are not specified, stream-level data for all streams under the domain is returned.
   * 
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time and the difference cannot exceed 1 day. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 5000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The stream protocol name. Specify the protocol name to query data for the corresponding protocol. Supported protocols: `flv`, `hls`, `rtmp`, `rts`, `p2p`. You can query data for multiple protocols by separating them with commas (,). Data for multiple protocols is not aggregated and is output at the stream level.
   * > The **rts** option queries Real-Time Streaming (RTS) streams using the ARTC protocol.
   * > - When using rts, you may need to additionally count the xxx_AliRTS-opus transcoding stream. This is because when playing an RTS stream on the web, a transcoding stream with the _AliRTS-opus suffix appended to the stream name is automatically generated, producing transcoding stream data. For more information, see [RTS sub-second latency automatic transcoding](https://help.aliyun.com/document_detail/2948703.html).
   * 
   * @example
   * flv
   */
  protocol?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name. If `StreamName` is specified, stream-level data for the specified `StreamName` under the specified `AppName` is returned. If `StreamName` is specified, `AppName` must also be specified.
   * 
   * @example
   * test.flv
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocol: 'Protocol',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      protocol: 'string',
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

