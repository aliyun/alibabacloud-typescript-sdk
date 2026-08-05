// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterLayoutRequestAudioLayer extends $dara.Model {
  /**
   * @remarks
   * The fixed delay for the audio. This can be used for subtitle synchronization. Unit: milliseconds. Default value: **0**. Valid values: **0 to 5000**.
   * 
   * @example
   * 5000
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The audio channels that can be used as volume input. Valid values:
   * - **leftChannel**: left channel.
   * - **rightChannel**: right channel.
   * - **all** (default): both channels.
   * 
   * @example
   * all
   */
  validChannel?: string;
  /**
   * @remarks
   * The normalized height ratio of the Layer element. The width of the element is proportionally scaled based on this height. 
   * 
   * Default value: **0**, which indicates that the element is displayed at its original size.
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
   * The element fill mode. 
   * 
   * - **none** (default): no fill. The Layer settings are configured with the image as the target.
   * - **fit**: adaptive. The Layer settings are configured with the fill area (box) as the target. The image is scaled based on the original aspect ratio and centered within the fill area (box) using a long-edge alignment method. If the aspect ratio of the fill area does not match the image, the short edges are not filled (the lower Layer image is displayed. If no lower Layer is configured, the default black background is displayed).
   * 
   * @example
   * fit
   */
  fillMode?: string;
  /**
   * @remarks
   * The fixed delay for the video. This can be used for subtitle synchronization. Unit: milliseconds. Default value: **0**. Valid values: **0 to 5000**.
   * 
   * @example
   * 5000
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The normalized height ratio of the Layer element. 
   *           
   * - If the no-fill mode is used, the width of the element is proportionally scaled based on this height. Default value: **0**, which indicates that the image is displayed at its original size.
   * - If the adaptive mode is used, this field is required and must be greater than **0**. It specifies the normalized height ratio of the fill area (box).
   * 
   * @example
   * 1
   */
  heightNormalized?: number;
  /**
   * @remarks
   * The normalized position values `[x,y]` of the Layer element. Default value: `[0,0]`.
   * 
   * >Note: The x and y values must be normalized.
   * 
   * @example
   * 0.3
   */
  positionNormalized?: number[];
  /**
   * @remarks
   * The reference coordinate for the position of the element. Valid values:
   * - **topLeft** (default): top-left.
   * - **topRight**: top-right.
   * - **bottomLeft**: bottom-left.
   * - **bottomRight**: bottom-right.
   * - **center**: center.
   * - **topCenter**: top-center.
   * - **bottomCenter**: bottom-center.
   * - **leftCenter**: left-center.
   * - **rightCenter**: right-center.
   * 
   * @example
   * topLeft
   */
  positionRefer?: string;
  /**
   * @remarks
   * The normalized width ratio of the Layer element. 
   * 
   * - If the no-fill mode is used, the height of the element is proportionally scaled based on this width. Default value: **0**, which indicates that the image is displayed at its original size.
   * - If the adaptive mode is used, this field is required and must be greater than **0**. It specifies the normalized width ratio of the fill area (box).
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
   * The audio information.
   * 
   * This parameter is required.
   */
  audioLayer?: ModifyCasterLayoutRequestAudioLayer[];
  /**
   * @remarks
   * The location ID (LocationId) of the video resource element.
   * 
   * For the LocationId, see [Add a video source](https://help.aliyun.com/document_detail/2848020.html). The elements correspond to the VideoLayers elements in order.
   * 
   * This parameter is required.
   * 
   * @example
   * RV02
   */
  blendList?: string[];
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster operation](https://help.aliyun.com/document_detail/2848009.html), check the CasterId parameter returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, go to **ApsaraVideo Live console** > **Production Studio** > **Cloud Production Studio** to view the ID.
   * 
   * > The production studio name in the production studio list on the Cloud Production Studio page of the ApsaraVideo Live console is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The layout ID. If you added the production studio layout by calling the [AddCasterLayout operation](https://help.aliyun.com/document_detail/2848025.html), check the LayoutId parameter returned by the AddCasterLayout operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 21926b36-7dd2-4fde-ae25-51b5bc8e****
   */
  layoutId?: string;
  /**
   * @remarks
   * The location ID (LocationId) of the audio resource element.
   * 
   * For the LocationId, see [Add a video source](https://help.aliyun.com/document_detail/2848020.html). The elements correspond to the AudioLayers elements in order.
   * 
   * This parameter is required.
   * 
   * @example
   * RV02
   */
  mixList?: string[];
  ownerId?: number;
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
   * The video information.
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

