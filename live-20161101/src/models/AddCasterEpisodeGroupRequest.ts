// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterEpisodeGroupRequestItem extends $dara.Model {
  /**
   * @remarks
   * The name of the episode.
   * 
   * @example
   * episode1
   */
  itemName?: string;
  /**
   * @remarks
   * The URL of the VOD file.
   * 
   * If you query the input sources of the production studio by calling the [DescribeCasterVideoResources](https://help.aliyun.com/document_detail/2848023.html) operation, check the value of the response parameter VodUrl to obtain the URL.
   * 
   * >  This parameter takes effect only when the input source is a video file that is not from the media library.\\
   * The video file can be in the MP4, FLV, or TS format.
   * 
   * @example
   * http://learn.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****.flv?auth_key=1608953344-0-0-53f0758162964516ac850f2ddc3f****
   */
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      itemName: 'ItemName',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemName: 'string',
      vodUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The callback URL.
   * 
   * If you query the configurations of the production studio by calling the [DescribeCasterConfig](https://help.aliyun.com/document_detail/2848011.html) operation, check the value of the response parameter CallbackUrl to obtain the URL.
   * 
   * This parameter is required.
   * 
   * @example
   * http://developer.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-53f0758162964516ac850f2ddc3f****
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 8751ad99-2ddb-4aac-ad44-84b21102****
   */
  clientToken?: string;
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
   * The list of episodes.
   * 
   * This parameter is required.
   */
  item?: AddCasterEpisodeGroupRequestItem[];
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The number of times the episode list repeats after the first playback is complete. Valid values:
   * 
   * *   **0**: indicates that the episode list is played only once.
   * *   **-1**: indicates that the episode list is played in loop mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  repeatNum?: number;
  /**
   * @remarks
   * The custom standby URL.
   * 
   * If this parameter is empty, the ingest address corresponding to the output address automatically generated by Alibaba Cloud will be used by default.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://guide.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-53f0758162964516ac850f2ddc3f****
   */
  sideOutputUrl?: string;
  /**
   * @remarks
   * The time when the episode list starts to play. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-03-06T19:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      clientToken: 'ClientToken',
      domainName: 'DomainName',
      item: 'Item',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      repeatNum: 'RepeatNum',
      sideOutputUrl: 'SideOutputUrl',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      clientToken: 'string',
      domainName: 'string',
      item: { 'type': 'array', 'itemType': AddCasterEpisodeGroupRequestItem },
      ownerId: 'number',
      regionId: 'string',
      repeatNum: 'number',
      sideOutputUrl: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

