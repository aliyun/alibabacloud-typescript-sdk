// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveStreamBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can view the application name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The blocking type. Valid values: blacklist and whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * blacklist
   */
  blockType?: string;
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
   * The blocked region. If you specify multiple regions, such as CN and AS, separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * CN
   */
  locationList?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The time when the blocking ends. The time must be in UTC. If you do not specify this parameter, the blocking is valid for 7 days by default.
   * 
   * @example
   * 2016-06-29T19:00:00Z
   */
  releaseTime?: string;
  /**
   * @remarks
   * The name of the live stream. You can view the stream name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      blockType: 'BlockType',
      domainName: 'DomainName',
      locationList: 'LocationList',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      releaseTime: 'ReleaseTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      blockType: 'string',
      domainName: 'string',
      locationList: 'string',
      ownerId: 'number',
      regionId: 'string',
      releaseTime: 'string',
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

