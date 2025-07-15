// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotLiveRtcStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The audio MSID.
   * 
   * This parameter is required.
   * 
   * @example
   * rts audio
   */
  audioMsid?: string;
  /**
   * @remarks
   * The duration for which the prefetch connection is maintained. Unit: milliseconds. Default value: 0, which specifies that the prefetch connection is always maintained.
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
   * The custom period after which a timeout event is triggered. Unit: milliseconds.
   * 
   * @example
   * 100000
   */
  mediaTimeout?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the region in which the live stream is prefetched. For more information, see the following tables that list available region codes.
   * 
   * >  Region codes include provincial codes for China and country codes for all countries.
   * 
   * This parameter is required.
   * 
   * @example
   * ZHJ
   */
  regionCode?: string;
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream that you want to prefetch.
   * 
   * This parameter is required.
   * 
   * @example
   * stream
   */
  streamName?: string;
  /**
   * @remarks
   * The video MSID.
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

