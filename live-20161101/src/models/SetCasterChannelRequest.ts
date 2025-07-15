// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCasterChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the channel.
   * 
   * When channels are enabled, the layout references the channel IDs. You can specify up to one resource for a channel. The number of resources is limited by the number of the channels of the production studio. The value must be in the RV[Number] format, such as RV01 and RV12.
   * 
   * This parameter is required.
   * 
   * @example
   * RV01
   */
  channelId?: string;
  /**
   * @remarks
   * The face retouching effect. Valid values: 0 (all effects), 1 (skin smoothing), 2 (skin whitening), 3 (dark circles removal), and 4 (nasolabial folds removal).
   * 
   * @example
   * 0
   */
  faceBeauty?: string;
  ownerId?: number;
  /**
   * @remarks
   * The playback status. This parameter take effects for video files, but not for live streams. Valid values:
   * 
   * *   **1**: specifies that the video source is playing. This is the default value.
   * *   **0**: specifies that the playback of the video source is paused.
   * 
   * @example
   * 1
   */
  playStatus?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the video source.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
   */
  resourceId?: string;
  /**
   * @remarks
   * The offset of the position where the production studio starts reading the video source. The value must be greater than or equal to 0, indicating an offset from the first frame. This parameter take effects for video files, but not for live streams. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  seekOffset?: number;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      channelId: 'ChannelId',
      faceBeauty: 'FaceBeauty',
      ownerId: 'OwnerId',
      playStatus: 'PlayStatus',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      seekOffset: 'SeekOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      channelId: 'string',
      faceBeauty: 'string',
      ownerId: 'number',
      playStatus: 'number',
      regionId: 'string',
      resourceId: 'string',
      seekOffset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

