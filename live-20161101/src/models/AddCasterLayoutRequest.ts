// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterLayoutRequestAudioLayer extends $dara.Model {
  /**
   * @remarks
   * The fixed delay of audio layer N. You can use this parameter to synchronize the audio with subtitles. Unit: milliseconds. Valid values: **0 to 5000**. Default value: **0**.
   * 
   * @example
   * 5000
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The valid voice channels of audio layer N. Valid values:
   * 
   * *   **leftChannel**: the left channel.
   * *   **rightChannel**: the right channel.
   * *   **all**: both the left and right channels. This is the default value.
   * 
   * @example
   * all
   */
  validChannel?: string;
  /**
   * @remarks
   * The multiples of the original volume at which audio layer N plays audio streams. Valid values: **0 to 10.0**.
   * 
   * *   The default value **1.0** indicates that audio layer N plays audio streams at the original volume.
   * *   A value smaller than **1.0** indicates that audio layer N plays audio streams at a lower volume than the original one.
   * *   A value greater than **1.0** indicates that audio layer N plays audio streams at a higher volume than the original one.
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
   * The scaling mode of video layer N. Valid values:
   * 
   * *   **none**: The image is not scaled to fill in the specified layout section. Set video layer N based on the image size of the video resource. This is the default value.
   * *   **fit**: The image is scaled with the original aspect ratio to fill in the specified layout section. Set video layer N based on the section size. The image is centered in the layout section with the long side of the image equaling that of the section. If the aspect ratio of the image is inconsistent with that of the section, the short side of the image may be shorter than that of the section. The area outside the image displays the next video layer or the background if no next video layer exists. By default, the background color is black.
   * 
   * @example
   * fit
   */
  fillMode?: string;
  /**
   * @remarks
   * The fixed delay of video layer N. You can use this parameter to synchronize the video with subtitles. Unit: milliseconds. Valid values: **0 to 5000**. Default value: **0**.
   * 
   * @example
   * 5000
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The normalized value of the height of the image of video layer N.
   * 
   * *   If the FillMode parameter of video layer N is set to none, the width of the video image is scaled based on this parameter. The default value is **0**, which indicates that the video image is displayed in the original size.
   * *   If the FillMode parameter of video layer N is set to fit, you must set this parameter to a value greater than **0**. In this case, the video image is scaled with the original aspect ratio to fill in the specified layout section based on this parameter.
   * 
   * @example
   * 1
   */
  heightNormalized?: number;
  /**
   * @remarks
   * The normalized value of the `[x,y]` coordinates of video layer N in the production studio. The default coordinates are `[0,0]`.
   * 
   * >  The coordinates indicate the location of video layer N in the production studio. Set this parameter to the normalized value of the coordinates.
   * 
   * @example
   * 0.3
   */
  positionNormalized?: number[];
  /**
   * @remarks
   * The reference coordinates of video layer N in the production studio. Valid values:
   * 
   * *   **topLeft**: the upper-left corner. This is the default value.
   * *   **topRight**: the upper-right corner.
   * *   **bottomLeft**: the lower-left corner.
   * *   **bottomRight**: the lower-right corner.
   * *   **center**: the center position.
   * *   **topCenter**: the upper center position.
   * *   **bottomCenter**: the lower center position.
   * *   **leftCenter**: the left center position.
   * *   **rightCenter**: the right center position.
   * 
   * @example
   * topLeft
   */
  positionRefer?: string;
  /**
   * @remarks
   * The normalized value of the width of the image of video layer N.
   * 
   * *   If the FillMode parameter of video layer N is set to none, the height of the video image is scaled based on this parameter. The default value is **0**, which indicates that the video image is displayed in the original size.
   * *   If the FillMode parameter of video layer N is set to fit, you must set this parameter to a value greater than **0**. In this case, the video image is scaled with the original aspect ratio to fill in the specified layout section based on this parameter.
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
   * Audio layout.
   * 
   * This parameter is required.
   */
  audioLayer?: AddCasterLayoutRequestAudioLayer[];
  /**
   * @remarks
   * The element represents the location ID of the video resource, i.e., LocationId. Refer to [Adding Video Source](https://help.aliyun.com/document_detail/60250.html) for LocationId, which corresponds in order with the VideoLayers elements.
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
   * If you create a production studio through the [CreateCaster](~~69338#doc-api-live-CreateCaster~~ "Creates a production studio.") interface, check the value of the CasterId parameter in the response.
   * 
   * If you create a production studio through the ApsaraVideo Live Console, log in to the console, then check the ID of the production studio through the following path:
   * 
   * Production Studios > Production Studio Management
   * 
   * >  The CasterId is reflected in the Name column on the Production Studio Management page.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The element represents the location ID of the audio resource, i.e., LocationId.
   * LocationId is referred to in [Adding Video Source](https://help.aliyun.com/document_detail/60250.html), and corresponds in order with the AudioLayers elements.
   * 
   * This parameter is required.
   * 
   * @example
   * RV01
   */
  mixList?: string[];
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * Video layout.
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

