// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterEpisodeGroupContentRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request.
   * 
   * > The client generates this value. Make sure that the value is unique among different requests. The value can be up to 64 ASCII characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 8751ad99-2ddb-4aac-ad44-84b21102****
   */
  clientToken?: string;
  /**
   * @remarks
   * The properties of the episode in the production studio. This parameter is a JSON string. The parameter names are in upper camel case. The properties are described as follows:
   * 
   * - **CallbackUrl**: The webhook address.
   * 
   * - **SideOutputUrl**: The custom bypass output URL.
   * 
   * - **RepeatNum**: The number of times to loop the episode. A value of 0 means the episode does not loop. A value of -1 means the episode loops indefinitely.
   * 
   * - **StartTime**: The start time in UTC. The format is *yyyy-MM-dd*T*HH:mm:ss*Z.
   * 
   * - **DomainName**: The domain name.
   * 
   * - **Items**
   * 
   *   : The list of items in the episode.
   * 
   *   - **ItemName**: The item name.
   * 
   *   - **VodUrl**: The URL of the video-on-demand (VOD) file. This parameter is required only when the resource is a video file that has not been imported to the Material Library. The MP4, FLV, and TS formats are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * {"CallbackUrl":"http://example.aliyundoc.com/callBackLive","SideOutputUrl":"rtmp://guide.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****","DomainName":"developer.aliyundoc.com ","StartTime":"2018-03-26T16:00:00Z","RepeatNum":-1,"Items":[{"ItemName":"program1","VodUrl":"http://learn.aliyundoc.com"},{"ItemName":"program2","VodUrl":"http://demo.aliyundoc.com"}]}
   */
  content?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

