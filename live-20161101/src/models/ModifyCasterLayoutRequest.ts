// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterLayoutRequestAudioLayer extends $dara.Model {
  /**
   * @remarks
   * The fixed delay of the audio layer. This parameter is used to synchronize the audio with subtitles. Unit: milliseconds. Default value: **0**. Valid values: **0 to 5000**.
   * 
   * @example
   * 5000
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
   * The normalized value of the height of the audio layer. The width of the audio layer is proportionally scaled based on this parameter.
   * 
   * The default value is **0**, which indicates that the audio layer is not scaled.
   * 
   * @example
   * 1
   */
  volumeRate?: number;
  static names(): { [key: string]: string } {
    return {
      fixedDelayDuration: 'FixedDelayDuration',
      validChannel: 'ValidChannel',
      volumeRate: 'VolumeRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyCasterLayoutRequestVideoLayer extends $dara.Model {
  /**
   * @remarks
   * The scaling mode of the video layer. Valid values:
   * 
   * *   **none** (default): indicates that the video layer is not scaled. The video layer is displayed based on its original size.
   * *   **fit**: indicates that the video layer is adapted to the fill area. In this case, the video layer is scaled proportionally, with its original aspect ratio retained. The video layer is placed in the center, with its longer sides aligned with the fill area. If the aspect ratio of the video layer is different from that of the fill area, the content of the lower layer is displayed alongside the shorter sides. If there is no lower layer, black bars are displayed instead.
   * 
   * @example
   * fit
   */
  fillMode?: string;
  /**
   * @remarks
   * The fixed delay of the video layer. This parameter is used to synchronize the video with subtitles. Unit: milliseconds. Default value: **0**. Valid values: **0 to 5000**.
   * 
   * @example
   * 5000
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The normalized value of the height of the video layer.
   * 
   * *   If the FillMode parameter of the video layer is set to none, the width of the video layer is proportionally scaled based on this parameter. The default value is **0**, which indicates that the video layer is not scaled.
   * *   If the FillMode parameter of the video layer is set to fit, the value of this parameter is greater than **0**.
   * 
   * @example
   * 1
   */
  heightNormalized?: number;
  /**
   * @remarks
   * The normalized value of the position of the video layer, in the format of `[x,y]`. Default value: `[0,0]`.
   * 
   * >  The values of x and y are normalized.
   * 
   * @example
   * 0.3
   */
  positionNormalized?: number[];
  /**
   * @remarks
   * The reference coordinates of the video layer. Valid values:
   * 
   * *   **topLeft** (default): the upper-left corner
   * *   **topRight**: the upper-right corner
   * *   **bottomLeft**: the lower-left corner
   * *   **bottomRight**: the lower-right corner
   * *   **center**: the center
   * *   **topCenter**: the upper center
   * *   **bottomCenter**: the lower center
   * *   **leftCenter**: the left center
   * *   **rightCenter**: the right center
   * 
   * @example
   * topLeft
   */
  positionRefer?: string;
  /**
   * @remarks
   * The normalized value of the width of the video layer.
   * 
   * *   If the FillMode parameter of the video layer is set to none, the height of the video layer is proportionally scaled based on this parameter. The default value is **0**, which indicates that the video layer is not scaled.
   * *   If the FillMode parameter of the video layer is set to fit, the value of this parameter is greater than **0**.
   * 
   * @example
   * 1
   */
  widthNormalized?: number;
  static names(): { [key: string]: string } {
    return {
      fillMode: 'FillMode',
      fixedDelayDuration: 'FixedDelayDuration',
      heightNormalized: 'HeightNormalized',
      positionNormalized: 'PositionNormalized',
      positionRefer: 'PositionRefer',
      widthNormalized: 'WidthNormalized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillMode: 'string',
      fixedDelayDuration: 'number',
      heightNormalized: 'number',
      positionNormalized: { 'type': 'array', 'itemType': 'number' },
      positionRefer: 'string',
      widthNormalized: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.positionNormalized)) {
      $dara.Model.validateArray(this.positionNormalized);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The audio layers.
   * 
   * This parameter is required.
   */
  audioLayer?: ModifyCasterLayoutRequestAudioLayer[];
  /**
   * @remarks
   * The location IDs of the video layers, which are in the same order as the video layers.
   * 
   * For more information, see [AddCasterVideoResource](https://help.aliyun.com/document_detail/2848020.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RV02
   */
  blendList?: string[];
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
   * The ID of the layout. If the layout was added by calling the [AddCasterLayout](https://help.aliyun.com/document_detail/2848025.html) operation, check the value of the response parameter LayoutId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 21926b36-7dd2-4fde-ae25-51b5bc8e****
   */
  layoutId?: string;
  /**
   * @remarks
   * The location IDs of the audio layers, which are in the same order as the audio layers.
   * 
   * For more information, see [AddCasterVideoResource](https://help.aliyun.com/document_detail/2848020.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RV02
   */
  mixList?: string[];
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The video layers.
   * 
   * This parameter is required.
   */
  videoLayer?: ModifyCasterLayoutRequestVideoLayer[];
  static names(): { [key: string]: string } {
    return {
      audioLayer: 'AudioLayer',
      blendList: 'BlendList',
      casterId: 'CasterId',
      layoutId: 'LayoutId',
      mixList: 'MixList',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      videoLayer: 'VideoLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayer: { 'type': 'array', 'itemType': ModifyCasterLayoutRequestAudioLayer },
      blendList: { 'type': 'array', 'itemType': 'string' },
      casterId: 'string',
      layoutId: 'string',
      mixList: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      videoLayer: { 'type': 'array', 'itemType': ModifyCasterLayoutRequestVideoLayer },
    };
  }

  validate() {
    if(Array.isArray(this.audioLayer)) {
      $dara.Model.validateArray(this.audioLayer);
    }
    if(Array.isArray(this.blendList)) {
      $dara.Model.validateArray(this.blendList);
    }
    if(Array.isArray(this.mixList)) {
      $dara.Model.validateArray(this.mixList);
    }
    if(Array.isArray(this.videoLayer)) {
      $dara.Model.validateArray(this.videoLayer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

