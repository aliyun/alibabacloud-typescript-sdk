// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCasterSceneAudioRequestAudioLayer extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the features provided by the 3A audio algorithm. This parameter consists of the following fields:
   * 
   * - **enableAgc**: (Optional) Specifies whether to enable the automatic gain control (AGC) feature of the 3A algorithm. Valid values: **0** (disabled, default) and **1** (enabled).
   * 
   * - **enableAns**: (Optional) Specifies whether to enable the intelligent noise reduction feature of the 3A algorithm. Valid values: **0** (disabled, default) and **1** (enabled).
   * 
   * - **ansMode**: (Optional) The mode of the intelligent noise reduction feature. This field is active only when **enableAns** is set to **1**. Valid values: **0** (speech noise reduction, default) and **1** (music noise reduction).
   * 
   * > For better noise reduction, set ansMode to 1.
   * 
   * - **enableBeautify**: (Optional) Specifies whether to enable voice beautification. Valid values: **0** (disabled, default) and **1** (enabled).
   * 
   * - **voiceBeautifyMode**: (Optional) The voice beautification mode. This field is active only when **enableBeautify** is set to **1**. Valid values: **0** (magnetic male voice, default) and **1** (fresh female voice).
   * 
   * @example
   * {   "enableAgc":0,   "enableAns":1 }
   */
  filter?: string;
  /**
   * @remarks
   * The fixed latency of the audio layer. This parameter is used to synchronize the audio with captions.
   * 
   * Unit: milliseconds. Valid values: 0 to **5000**. Default value: **0**.
   * 
   * @example
   * 0
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The sound channels that are used for volume input. Valid values:
   * 
   * - **leftChannel**: the left sound channel.
   * 
   * - **rightChannel**: the right sound channel.
   * 
   * - **all** (default): both sound channels.
   * 
   * @example
   * all
   */
  validChannel?: string;
  /**
   * @remarks
   * The volume multiplier for the audio stream. Valid values: 0 to **10.0**. Default value: **1.0**.
   * 
   * - **1.0**: The original volume is used.
   * 
   * - A value less than **1** decreases the volume.
   * 
   * - A value greater than **1** increases the volume.
   * 
   * @example
   * 1
   */
  volumeRate?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      fixedDelayDuration: 'FixedDelayDuration',
      validChannel: 'ValidChannel',
      volumeRate: 'VolumeRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      fixedDelayDuration: 'number',
      validChannel: 'string',
      volumeRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCasterSceneAudioRequest extends $dara.Model {
  /**
   * @remarks
   * The audio configurations.
   */
  audioLayer?: UpdateCasterSceneAudioRequestAudioLayer[];
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, you can obtain the ID from the CasterId parameter in the response.
   * 
   * - If you create a production studio in the LIVE console, go to the **LIVE Console** > **Production Studio** > **Cloud Production Studio** page to view the ID.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is the ID of the production studio.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the AFV mode. If you leave this parameter empty, the last configuration is retained. Valid values:
   * 
   * - **0**: audio mixing mode.
   * 
   * - **1**: audio-follows-video mode.
   * 
   * @example
   * 1
   */
  followEnable?: number;
  /**
   * @remarks
   * The list of associated location IDs. The order of the location IDs must be the same as the order of the audio layers.
   * 
   * @example
   * RV01
   */
  mixList?: string[];
  ownerId?: number;
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
   * The ID of the scene. If you query the list of scenes in a production studio by calling the [DescribeCasterScenes](https://help.aliyun.com/document_detail/2848039.html) operation, you can obtain the ID from the ComponentId parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e1****
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      audioLayer: 'AudioLayer',
      casterId: 'CasterId',
      followEnable: 'FollowEnable',
      mixList: 'MixList',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayer: { 'type': 'array', 'itemType': UpdateCasterSceneAudioRequestAudioLayer },
      casterId: 'string',
      followEnable: 'number',
      mixList: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audioLayer)) {
      $dara.Model.validateArray(this.audioLayer);
    }
    if(Array.isArray(this.mixList)) {
      $dara.Model.validateArray(this.mixList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

