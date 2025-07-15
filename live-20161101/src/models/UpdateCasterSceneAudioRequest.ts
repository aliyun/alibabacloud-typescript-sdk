// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCasterSceneAudioRequestAudioLayer extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the features provided by the audio 3A algorithms. This parameter consists of the following fields:
   * 
   * *   **enableAgc**: specifies whether to enable automatic gain control (AGC). This field is optional. Valid values: 0 and 1. **0** is the default value, which specifies that AGC is disabled. **1** specifies that AGC is enabled.
   * *   **enableAns**: specifies whether to enable active noise suppression (ANS). This field is optional. Valid values: 0 and 1. **0** is the default value, which specifies that ANS is disabled. **1** specifies that ANS is enabled.
   * *   **ansMode**: specifies the mode for ANS. This field is optional and takes effect only if you set **enableAns** to **1**. Valid values: 0 and 1. **0** is the default value, which specifies the speech noise reduction mode. **1** specifies the music noise reduction mode.
   * 
   * >  To ensure a better noise reduction effect, we recommend that you set ansMode to 1.
   * 
   * *   **enableBeautify**: specifies whether to enable voice change. This field is optional. Valid values: 0 and 1. **0** is the default value, which specifies that voice change is disabled. **1** specifies that voice change is enabled.
   * *   **voiceBeautifyMode**: specifies the mode for voice change. This field is optional and takes effect only if you set **enableBeautify** to **1**. Valid values: 0 and 1. **0** is the default value, which specifies the magnetic male voice mode. **1** specifies the fresh female voice mode.
   * 
   * @example
   * {   "enableAgc":0,   "enableAns":1 }
   */
  filter?: string;
  /**
   * @remarks
   * The fixed delay of the audio layer. This parameter is used to synchronize the audio with subtitles.
   * 
   * Unit: milliseconds. Valid values: **0 to 5000**. Default value: **0**.
   * 
   * @example
   * 0
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The sound channels that are used for volume input in the audio layer. Valid values:
   * 
   * *   **leftChannel**: the left channel
   * *   **rightChannel**: the right channel
   * *   **all** (default): both the left and right channels
   * 
   * @example
   * all
   */
  validChannel?: string;
  /**
   * @remarks
   * The multiple of the original volume at which the audio layer plays audio. Valid values: **0 to 10.0**. Default value: **1.0**.
   * 
   * *   **1.0**: specifies that the audio layer plays audio at the original volume.
   * *   A value smaller than **1**: specifies that the audio layer plays audio at a volume that is less than the original volume.
   * *   A value greater than **1**: specifies that the audio layer plays audio at a volume that is more than the original volume.
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
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The audio mode. By default, the AFV mode is used. If you do not specify this parameter, the scene retains the last configuration. Valid values:
   * 
   * *   **0**: the audio mixing mode.
   * *   **1**: the AFV mode.
   * 
   * @example
   * 1
   */
  followEnable?: number;
  /**
   * @remarks
   * The location IDs of the audio layers, which are in the same order as the audio layers.
   * 
   * @example
   * RV01
   */
  mixList?: string[];
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the scene. If you call the [DescribeCasterScenes](https://help.aliyun.com/document_detail/2848039.html) operation to query scenes of the production studio, check the value of the response parameter ComponentId to obtain the ID.
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

