// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLivePackageConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. The template applies only when this AppName matches the application name in the ingest URL. The AppName can be up to 255 characters and can contain digits, letters, hyphens (-), and underscores (_). It cannot start with a hyphen or an underscore. Set this parameter to an asterisk (\\*) to match all application names.
   * 
   * This parameter is required.
   * 
   * @example
   * AppName
   */
  appName?: string;
  /**
   * @remarks
   * The primary domain name for live streaming playback.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to ignore transcoded streams. Valid values:
   * 
   * - **true** (default): Ignore transcoded streams.
   * 
   * - **false**: Do not ignore transcoded streams.
   * 
   * @example
   * true
   */
  ignoreTranscode?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The duration of a part segment in milliseconds.
   * 
   * > This parameter is required if you set \\`Protocol\\` to \\`LLHLS_\\*\\`.
   * 
   * - If SegmentDuration is 1 s, the value can range from 100 to 500 ms.
   * 
   * - If SegmentDuration is 2 s, the value can range from 100 to 1000 ms.
   * 
   * @example
   * 350
   */
  partDuration?: number;
  /**
   * @remarks
   * The protocol and container format for live streaming. Valid values:
   * 
   * - **HLS_CMAF**
   * 
   * - **LLHLS_TS** (low latency)
   * 
   * - **LLHLS_CMAF** (low latency)
   * 
   * - **DASH_CMAF**
   * 
   * - **HLSDASH_CMAF**
   * 
   * This parameter is required.
   * 
   * @example
   * HLS_CMAF
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The segment duration in seconds.
   * 
   * - If you set Protocol to HLS_CMAF, the value can range from 1 to 10 s.
   * 
   * - If you set Protocol to LLHLS_\\*, the value can range from 1 to 2 s.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  segmentDuration?: number;
  /**
   * @remarks
   * The number of M3U8 segments. The value must be an integer from 3 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  segmentNum?: number;
  /**
   * @remarks
   * The stream name. The template applies only when this StreamName matches the stream name in the ingest URL. The StreamName can be up to 255 characters and can contain digits, letters, hyphens (-), and underscores (_). It cannot start with a hyphen or an underscore. Set this parameter to an asterisk (\\*) to match all stream names.
   * 
   * This parameter is required.
   * 
   * @example
   * StreamName
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      ignoreTranscode: 'IgnoreTranscode',
      ownerId: 'OwnerId',
      partDuration: 'PartDuration',
      protocol: 'Protocol',
      regionId: 'RegionId',
      segmentDuration: 'SegmentDuration',
      segmentNum: 'SegmentNum',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      ignoreTranscode: 'boolean',
      ownerId: 'number',
      partDuration: 'number',
      protocol: 'string',
      regionId: 'string',
      segmentDuration: 'number',
      segmentNum: 'number',
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

