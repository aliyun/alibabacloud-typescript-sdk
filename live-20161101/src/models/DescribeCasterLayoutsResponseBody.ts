// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayersAudioLayer extends $dara.Model {
  /**
   * @remarks
   * The fixed delay of the audio layer. This parameter is used to synchronize the audio with subtitles.
   * 
   * Unit: milliseconds. Default value: **0**. Valid values: **0 to 5000**.
   * 
   * @example
   * 20
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
   * >  The default value is **0**, which indicates that the audio layer is not scaled.
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

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayers extends $dara.Model {
  audioLayer?: DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayersAudioLayer[];
  static names(): { [key: string]: string } {
    return {
      audioLayer: 'AudioLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayer: { 'type': 'array', 'itemType': DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayersAudioLayer },
    };
  }

  validate() {
    if(Array.isArray(this.audioLayer)) {
      $dara.Model.validateArray(this.audioLayer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutBlendList extends $dara.Model {
  locationId?: string[];
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.locationId)) {
      $dara.Model.validateArray(this.locationId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutMixList extends $dara.Model {
  locationId?: string[];
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.locationId)) {
      $dara.Model.validateArray(this.locationId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayerPositionNormalizeds extends $dara.Model {
  position?: number[];
  static names(): { [key: string]: string } {
    return {
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      position: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.position)) {
      $dara.Model.validateArray(this.position);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayer extends $dara.Model {
  /**
   * @remarks
   * The scaling mode of the video layer. Valid values:
   * 
   * *   **none** (default): specifies that the video layer is not scaled. The video layer is displayed based on its original size.
   * *   **fit**: specifies that the video layer is adapted to the fill area. The video layer is displayed based on the fill area. In this case, the video layer is scaled proportionally, with its original aspect ratio retained. The video layer is placed in the center, with its longer sides aligned with the fill area. If the aspect ratio of the video layer is different from that of the fill area, the content of the lower layer is displayed alongside the shorter sides. If there is no lower layer, black bars are displayed instead.
   * 
   * @example
   * fit
   */
  fillMode?: string;
  /**
   * @remarks
   * The fixed delay of the video layer. This parameter is used to synchronize the video with subtitles.
   * 
   * Unit: milliseconds. Default value: **0**. Valid values: **0 to 5000**.
   * 
   * @example
   * 20
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
   * 0.5
   */
  heightNormalized?: number;
  /**
   * @remarks
   * The normalized value of the position of the video layer, in the format of `[x,y]`. Default value: `[0,0]`.
   * 
   * >  The values of x and y are normalized.
   */
  positionNormalizeds?: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayerPositionNormalizeds;
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
   * *   If the FillMode parameter of the video layer is set to none, the height of the video layer is scaled based on this parameter. The default value is **0**, which indicates that the video layer is not scaled.
   * *   If the FillMode parameter of the video layer is set to fit, the value of this parameter is greater than **0**.
   * 
   * @example
   * 0.5
   */
  widthNormalized?: number;
  static names(): { [key: string]: string } {
    return {
      fillMode: 'FillMode',
      fixedDelayDuration: 'FixedDelayDuration',
      heightNormalized: 'HeightNormalized',
      positionNormalizeds: 'PositionNormalizeds',
      positionRefer: 'PositionRefer',
      widthNormalized: 'WidthNormalized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillMode: 'string',
      fixedDelayDuration: 'number',
      heightNormalized: 'number',
      positionNormalizeds: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayerPositionNormalizeds,
      positionRefer: 'string',
      widthNormalized: 'number',
    };
  }

  validate() {
    if(this.positionNormalizeds && typeof (this.positionNormalizeds as any).validate === 'function') {
      (this.positionNormalizeds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayers extends $dara.Model {
  videoLayer?: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayer[];
  static names(): { [key: string]: string } {
    return {
      videoLayer: 'VideoLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoLayer: { 'type': 'array', 'itemType': DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayer },
    };
  }

  validate() {
    if(Array.isArray(this.videoLayer)) {
      $dara.Model.validateArray(this.videoLayer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayout extends $dara.Model {
  /**
   * @remarks
   * The configurations of the audio layers.
   */
  audioLayers?: DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayers;
  /**
   * @remarks
   * The location IDs of the video layers, which are in the same order as the video layers.
   */
  blendList?: DescribeCasterLayoutsResponseBodyLayoutsLayoutBlendList;
  /**
   * @remarks
   * The ID of the layout.
   * 
   * @example
   * 72d2ec7a-4cd7-4a01-974b-7cd53947****
   */
  layoutId?: string;
  /**
   * @remarks
   * The location IDs of the audio layers, which are in the same order as the audio layers.
   */
  mixList?: DescribeCasterLayoutsResponseBodyLayoutsLayoutMixList;
  /**
   * @remarks
   * The configurations of the video layers, which are in the default array sequence.
   */
  videoLayers?: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayers;
  static names(): { [key: string]: string } {
    return {
      audioLayers: 'AudioLayers',
      blendList: 'BlendList',
      layoutId: 'LayoutId',
      mixList: 'MixList',
      videoLayers: 'VideoLayers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayers: DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayers,
      blendList: DescribeCasterLayoutsResponseBodyLayoutsLayoutBlendList,
      layoutId: 'string',
      mixList: DescribeCasterLayoutsResponseBodyLayoutsLayoutMixList,
      videoLayers: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayers,
    };
  }

  validate() {
    if(this.audioLayers && typeof (this.audioLayers as any).validate === 'function') {
      (this.audioLayers as any).validate();
    }
    if(this.blendList && typeof (this.blendList as any).validate === 'function') {
      (this.blendList as any).validate();
    }
    if(this.mixList && typeof (this.mixList as any).validate === 'function') {
      (this.mixList as any).validate();
    }
    if(this.videoLayers && typeof (this.videoLayers as any).validate === 'function') {
      (this.videoLayers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayouts extends $dara.Model {
  layout?: DescribeCasterLayoutsResponseBodyLayoutsLayout[];
  static names(): { [key: string]: string } {
    return {
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layout: { 'type': 'array', 'itemType': DescribeCasterLayoutsResponseBodyLayoutsLayout },
    };
  }

  validate() {
    if(Array.isArray(this.layout)) {
      $dara.Model.validateArray(this.layout);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The layouts.
   */
  layouts?: DescribeCasterLayoutsResponseBodyLayouts;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * The normalized value of the width of the video layer image.
   * 
   * *   If the FillMode parameter of the video layer is set to none, the height of the video image is scaled based on this parameter. The default value is **0**, which indicates that the video image is displayed in the original size.
   * *   If the FillMode parameter of the video layer is set to fit, the value of the parameter is greater than **0**.
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      layouts: 'Layouts',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layouts: DescribeCasterLayoutsResponseBodyLayouts,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.layouts && typeof (this.layouts as any).validate === 'function') {
      (this.layouts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

