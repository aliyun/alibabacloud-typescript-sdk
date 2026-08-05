// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLivePackageConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The AppName must match the AppName in the ingest URL for the template to take effect. The AppName can be up to 255 characters in length and can contain digits, uppercase letters, lowercase letters, hyphens (-), and underscores (_). A hyphen or an underscore cannot be the first character. You can also set this parameter to a single asterisk (\\*) to match all AppNames.
   * 
   * This parameter is required.
   * 
   * @example
   * AppName
   */
  appName?: string;
  /**
   * @remarks
   * The live streaming domain name. This is the primary playback domain name.
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
   * The length of the part segment, in milliseconds.
   * 
   * - If SegmentDuration is 1 s, the valid values are 100 to 500. The default value is 350.
   * 
   * - If SegmentDuration is 2 s, the valid values are 100 to 1000. The default value is 700.
   * 
   * - This parameter is valid only when you set Protocol to LLHLS_\\*.
   * 
   * @example
   * 350
   */
  partDuration?: number;
  /**
   * @remarks
   * The live streaming protocol and container format. Valid values:
   * 
   * - **HLS_CMAF**
   * 
   * - **LLHLS_TS**
   *   (low latency)
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
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The segment length, in seconds.
   * 
   * - If you set Protocol to HLS_CMAF, the valid values are 1 to 10. The default value is 5.
   * 
   * - If you set Protocol to LLHLS_\\*, the valid values are 1 to 2. The default value is 1.
   * 
   * @example
   * 5
   */
  segmentDuration?: number;
  /**
   * @remarks
   * The number of M3U8 segments for live streaming.
   * 
   * - Valid values: 3 to 10.
   * 
   * - Default value: 3.
   * 
   * @example
   * 3
   */
  segmentNum?: number;
  /**
   * @remarks
   * The StreamName must match the StreamName in the ingest URL for the template to take effect. The StreamName can be up to 255 characters in length and can contain digits, uppercase letters, lowercase letters, hyphens (-), and underscores (_). A hyphen or an underscore cannot be the first character. You can also set this parameter to a single asterisk (\\*) to match all StreamNames.
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

