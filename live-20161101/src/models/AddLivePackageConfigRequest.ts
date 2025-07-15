// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLivePackageConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. The value of this parameter must be the same as the application name that is specified in the ingest URL. Otherwise, the configuration does not take effect. The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). The name cannot start with a hyphen (-) or underscore (_). You can also specify an asterisk (\\*) as the value to match all applications.
   * 
   * This parameter is required.
   * 
   * @example
   * AppName
   */
  appName?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to ignore the transcoded stream. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  ignoreTranscode?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The part length. Unit: milliseconds.
   * 
   * *   If the value of SegmentDuration is 1, the valid values of this parameter are 100 to 500 and the default value of this parameter is 350.
   * *   If the value of SegmentDuration is 2, the valid values of this parameter are 100 to 1000 and the default value of this parameter is 700.
   * *   This parameter takes effect only if Protocol is set to LLHLS_TS or LLHLS_CMAF.
   * 
   * @example
   * 350
   */
  partDuration?: number;
  /**
   * @remarks
   * The streaming protocol and encapsulation format. Valid values:
   * 
   * *   **HLS_CMAF**
   * *   **LLHLS_TS** (low latency)
   * *   **LLHLS_CMAF** (low latency)
   * *   **DASH_CMAF**
   * *   **HLSDASH_CMAF**
   * 
   * This parameter is required.
   * 
   * @example
   * HLS_CMAF
   */
  protocol?: string;
  regionId?: string;
  /**
   * @remarks
   * The segment length. Unit: seconds.
   * 
   * *   If Protocol is set to HLS_CMAF: Valid values: 1 to 10. Default value: 5.
   * *   If Protocol is set to LLHLS_TS or LLHLS_CMAF: Valid values: 1 to 2. Default value: 1.
   * 
   * @example
   * 5
   */
  segmentDuration?: number;
  /**
   * @remarks
   * The number of segments.
   * 
   * *   Valid values: 3 to 10.
   * *   Default value: 3.
   * 
   * @example
   * 3
   */
  segmentNum?: number;
  /**
   * @remarks
   * The stream name. The value of this parameter must be the same as the stream name that is specified in the ingest URL. Otherwise, the configuration does not take effect. The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). The name cannot start with a hyphen (-) or underscore (_). You can also specify an asterisk (\\*) as the value to match all streams.
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

