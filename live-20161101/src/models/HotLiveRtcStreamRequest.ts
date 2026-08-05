// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotLiveRtcStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The application name of the live stream to prefetch.
   * 
   * This parameter is required.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The audio Msid.
   * 
   * This parameter is required.
   * 
   * @example
   * rts audio
   */
  audioMsid?: string;
  /**
   * @remarks
   * The duration to maintain the prefetch connection. Unit: milliseconds. The default value, 0, means the connection is always maintained.
   * 
   * @example
   * 0
   */
  connectionTimeout?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The custom timeout period for a timeout event. Unit: milliseconds.
   * 
   * @example
   * 100000
   */
  mediaTimeout?: string;
  ownerId?: number;
  /**
   * @remarks
   * The prefetch area. For more information, see the RegionCode lookup table.
   * 
   * > For regions within China, specify the corresponding code from the "Region codes for China" table. For all other regions, specify the country code.
   * >
   * > - If the CodeRegionHasNoNode error is returned after you specify a RegionCode, the corresponding area is not covered by L1 nodes and cannot be prefetched. In this case, specify a different RegionCode.
   * 
   * This parameter is required.
   * 
   * @example
   * ZHJ
   */
  regionCode?: string;
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
   * The name of the live stream to prefetch.
   * 
   * This parameter is required.
   * 
   * @example
   * stream
   */
  streamName?: string;
  /**
   * @remarks
   * The video Msid.
   * 
   * This parameter is required.
   * 
   * @example
   * rts video
   */
  videoMsid?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      audioMsid: 'AudioMsid',
      connectionTimeout: 'ConnectionTimeout',
      domainName: 'DomainName',
      mediaTimeout: 'MediaTimeout',
      ownerId: 'OwnerId',
      regionCode: 'RegionCode',
      regionId: 'RegionId',
      streamName: 'StreamName',
      videoMsid: 'VideoMsid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      audioMsid: 'string',
      connectionTimeout: 'string',
      domainName: 'string',
      mediaTimeout: 'string',
      ownerId: 'number',
      regionCode: 'string',
      regionId: 'string',
      streamName: 'string',
      videoMsid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

