// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCasterChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value returned in the response.
   * 
   * - If you create a production studio in the ApsaraVideo Live console, go to the **Production Studio** > **Cloud Production Studio** page to view the ID.
   * 
   * > The production studio name in the list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * The reference ID for the layout scene. You can set a maximum of one resource for each channel. The total number of channels is determined when you create the production studio. The format is \\`RV01\\` to \\`RV12\\`.
   * 
   * This parameter is required.
   * 
   * @example
   * RV01
   */
  channelId?: string;
  /**
   * @remarks
   * The facial retouching settings. Valid values: 0 (whole), 1 (skin smoothing), 2 (skin whitening), 3 (dark circle removal), and 4 (nasolabial fold removal).
   * 
   * @example
   * 0
   */
  faceBeauty?: string;
  ownerId?: number;
  /**
   * @remarks
   * The playback status. This parameter applies only to video files, not live streams. Valid values:
   * 
   * - **1** (default): Playback.
   * 
   * - **0**: Pause.
   * 
   * @example
   * 1
   */
  playStatus?: number;
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
   * The ID of the video source.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter applies only to video files, not live streams. The value must be greater than or equal to 0. It specifies the offset from the first frame at which to start reading the file. Unit: milliseconds (ms).
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

