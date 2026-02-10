// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayersAudioLayer extends $dara.Model {
  fixedDelayDuration?: number;
  validChannel?: string;
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
  fillMode?: string;
  fixedDelayDuration?: number;
  heightNormalized?: number;
  positionNormalizeds?: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayerPositionNormalizeds;
  positionRefer?: string;
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
  audioLayers?: DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayers;
  blendList?: DescribeCasterLayoutsResponseBodyLayoutsLayoutBlendList;
  layoutId?: string;
  mixList?: DescribeCasterLayoutsResponseBodyLayoutsLayoutMixList;
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

