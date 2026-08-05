// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterLayoutRequestAudioLayer extends $dara.Model {
  /**
   * @remarks
   * The fixed latency for the audio layer. Use this parameter to synchronize the audio with captions. Unit: milliseconds. Default value: 0. Valid values: **0** to **5000**.
   * 
   * @example
   * 5000
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The sound channels that are used for audio input. Valid values:
   * 
   * - **leftChannel**: Left channel.
   * 
   * - **rightChannel**: Right channel.
   * 
   * - **all** (default): Both channels.
   * 
   * @example
   * all
   */
  validChannel?: string;
  /**
   * @remarks
   * The volume multiplication factor for the audio stream. Valid values: 0 to **10.0**.
   * 
   * - **1.0** (default): The original volume is used.
   * 
   * - A value less than **1** decreases the volume.
   * 
   * - A value greater than **1** increases the volume.
   * 
   * @example
   * 1.0
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

export class AddCasterLayoutRequestVideoLayer extends $dara.Model {
  /**
   * @remarks
   * The fill mode of the element. Valid values:
   * 
   * - **none** (default): No scaling. The video is displayed in its original size.
   * 
   * - **fit**: The video is scaled to fit the fill area while maintaining its aspect ratio. The video is centered in the fill area. If the aspect ratio of the fill area is different from that of the video, the area along the shorter edge is not filled. This area displays the video of the underlying layer. If no underlying layer is configured, this area is black.
   * 
   * @example
   * fit
   */
  fillMode?: string;
  /**
   * @remarks
   * The fixed latency for the video layer. Use this parameter to synchronize the video with captions. Unit: milliseconds. Default value: 0. Valid values: **0** to **5000**.
   * 
   * @example
   * 5000
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The normalized height of the layer.
   * 
   * - If you set FillMode to none, the width of the layer is scaled in proportion to the height. The default value is **0**. A value of 0 indicates that the video is displayed in its original size.
   * 
   * - If you set FillMode to fit, this parameter is required and its value must be greater than **0**. The value specifies the normalized height of the fill area.
   * 
   * @example
   * 1
   */
  heightNormalized?: number;
  /**
   * @remarks
   * The position of the video layer. The value is a normalized coordinate `[x,y]`. Default value: `[0,0]`.
   * 
   * Note: The x and y coordinates must be normalized.
   * 
   * @example
   * 0.3
   */
  positionNormalized?: number[];
  /**
   * @remarks
   * The reference point for the position of the layer. Valid values:
   * 
   * - **topLeft** (default): Top-left.
   * 
   * - **topRight**: Top-right.
   * 
   * - **bottomLeft**: Bottom-left.
   * 
   * - **bottomRight**: Bottom-right.
   * 
   * - **center**: Center.
   * 
   * - **topCenter**: Top-center.
   * 
   * - **bottomCenter**: Bottom-center.
   * 
   * - **leftCenter**: Left-center.
   * 
   * - **rightCenter**: Right-center.
   * 
   * @example
   * topLeft
   */
  positionRefer?: string;
  /**
   * @remarks
   * The normalized width of the layer.
   * 
   * - If you set FillMode to none, the height of the layer is scaled in proportion to the width. The default value is **0**. A value of 0 indicates that the video is displayed in its original size.
   * 
   * - If you set FillMode to fit, this parameter is required and its value must be greater than **0**. The value specifies the normalized width of the fill area.
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

export class AddCasterLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The audio layouts.
   * 
   * This parameter is required.
   */
  audioLayer?: AddCasterLayoutRequestAudioLayer[];
  /**
   * @remarks
   * The location IDs of the video sources. The order of the location IDs corresponds to the order of the video layers specified in the **VideoLayer** parameter. For more information about location IDs, see [AddCasterVideoResource](https://help.aliyun.com/document_detail/2848020.html).
   * 
   * For LocationId, see [Add a video source](https://help.aliyun.com/document_detail/2848020.html). This ID corresponds to the order of the VideoLayers elements.
   * 
   * This parameter is required.
   * 
   * @example
   * RV01
   */
  blendList?: string[];
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, the CasterId is returned in the response.
   * 
   * - If you create a production studio in the LIVE console, go to **Production Studio** > **Cloud Production Studio** to view the name of the production studio.
   * 
   * > The name of the production studio on the Cloud Production Studio page is the ID of the production studio.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The location IDs of the audio sources. The order of the location IDs corresponds to the order of the audio layers specified in the **AudioLayer** parameter. For more information about location IDs, see [AddCasterVideoResource](https://help.aliyun.com/document_detail/2848020.html).
   * 
   * For \\`LocationId\\`, see [Add a video source](https://help.aliyun.com/document_detail/2848020.html). It corresponds to the order of the \\`AudioLayers\\` elements.
   * 
   * This parameter is required.
   * 
   * @example
   * RV01
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
   * The video layouts.
   * 
   * This parameter is required.
   */
  videoLayer?: AddCasterLayoutRequestVideoLayer[];
  static names(): { [key: string]: string } {
    return {
      audioLayer: 'AudioLayer',
      blendList: 'BlendList',
      casterId: 'CasterId',
      mixList: 'MixList',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      videoLayer: 'VideoLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayer: { 'type': 'array', 'itemType': AddCasterLayoutRequestAudioLayer },
      blendList: { 'type': 'array', 'itemType': 'string' },
      casterId: 'string',
      mixList: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      videoLayer: { 'type': 'array', 'itemType': AddCasterLayoutRequestVideoLayer },
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

