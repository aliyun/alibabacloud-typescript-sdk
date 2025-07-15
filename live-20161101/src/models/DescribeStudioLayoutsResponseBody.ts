// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStudioLayoutsResponseBodyStudioLayoutsBgImageConfig extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the material.
   * 
   * @example
   * k12kj31****
   */
  id?: string;
  /**
   * @remarks
   * The URL of the material.
   * 
   * @example
   * http://example.org
   */
  imageUrl?: string;
  /**
   * @remarks
   * The position ID.
   * 
   * @example
   * RV01
   */
  locationId?: string;
  /**
   * @remarks
   * The ID of the material in ApsaraVideo VOD.
   * 
   * @example
   * asdfas9df89asd8f9****
   */
  materialId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      imageUrl: 'ImageUrl',
      locationId: 'LocationId',
      materialId: 'MaterialId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      imageUrl: 'string',
      locationId: 'string',
      materialId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStudioLayoutsResponseBodyStudioLayoutsCommonConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel that is bound to the video resource.
   * 
   * @example
   * RV01
   */
  channelId?: string;
  /**
   * @remarks
   * The ID of the video resource.
   * 
   * @example
   * asdfasdfasdfasdfa****
   */
  videoResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      videoResourceId: 'VideoResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      videoResourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStudioLayoutsResponseBodyStudioLayoutsLayerOrderConfigList extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the resource.
   * 
   * @example
   * k12kj31****
   */
  id?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **background**: background material
   * *   **media**: multimedia material
   * 
   * @example
   * media
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStudioLayoutsResponseBodyStudioLayoutsMediaInputConfigList extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel that is bound to the video resource.
   * 
   * @example
   * RV01
   */
  channelId?: string;
  /**
   * @remarks
   * The fill type. Default value: none.
   * 
   * @example
   * none
   */
  fillMode?: string;
  /**
   * @remarks
   * The normalized value of the material height. The value indicates the ratio of the material height to the height of the background. Valid values: **0 to 1**.
   * 
   * @example
   * 0.4
   */
  heightNormalized?: number;
  /**
   * @remarks
   * The unique ID of the multimedia material.
   * 
   * @example
   * k12kj31****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the image in ApsaraVideo VOD.
   * 
   * @example
   * lkajsdfsa8fd89asd8****
   */
  imageMaterialId?: string;
  /**
   * @remarks
   * The sequence number of the multimedia material. This parameter is displayed on the frontend but not used in the operation logic.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The normalized value of the position of the material, in the format of [unk][x,y][unk]. Valid values of x and y: **0 to 1**. For example, [unk][0.1,0.2][unk] indicates that the material is horizontally offset by 10% and vertically offset by 20% towards the upper-left corner.
   */
  positionNormalized?: number[];
  /**
   * @remarks
   * The coordinate origin for the material. Default value: topLeft. topLeft indicates that the upper-left corner is used as the coordinate origin.
   * 
   * @example
   * topLeft
   */
  positionRefer?: string;
  /**
   * @remarks
   * The ID of the video resource.
   * 
   * @example
   * asdfasdfasdfasdfa****
   */
  videoResourceId?: string;
  /**
   * @remarks
   * The normalized value of the material width. The value indicates the ratio of the material width to the width of the background. Valid values: **0 to 1**.
   * 
   * @example
   * 0.4
   */
  widthNormalized?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      fillMode: 'FillMode',
      heightNormalized: 'HeightNormalized',
      id: 'Id',
      imageMaterialId: 'ImageMaterialId',
      index: 'Index',
      positionNormalized: 'PositionNormalized',
      positionRefer: 'PositionRefer',
      videoResourceId: 'VideoResourceId',
      widthNormalized: 'WidthNormalized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      fillMode: 'string',
      heightNormalized: 'number',
      id: 'string',
      imageMaterialId: 'string',
      index: 'number',
      positionNormalized: { 'type': 'array', 'itemType': 'number' },
      positionRefer: 'string',
      videoResourceId: 'string',
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

export class DescribeStudioLayoutsResponseBodyStudioLayoutsScreenInputConfigListAudioConfig extends $dara.Model {
  /**
   * @remarks
   * The corresponding channel.
   * 
   * @example
   * 1
   */
  validChannel?: string;
  /**
   * @remarks
   * The volume.
   * 
   * @example
   * 1.0
   */
  volumeRate?: number;
  static names(): { [key: string]: string } {
    return {
      validChannel: 'ValidChannel',
      volumeRate: 'VolumeRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeStudioLayoutsResponseBodyStudioLayoutsScreenInputConfigList extends $dara.Model {
  /**
   * @remarks
   * The audio configurations.
   */
  audioConfig?: DescribeStudioLayoutsResponseBodyStudioLayoutsScreenInputConfigListAudioConfig;
  /**
   * @remarks
   * The ID of the channel that is bound to the video resource.
   * 
   * @example
   * RV01
   */
  channelId?: string;
  /**
   * @remarks
   * The color gamut for chroma key. Valid values:
   * 
   * *   **blue**
   * *   **green**
   * *   **auto**: automatic recognition
   * *   **complex**: background replacement
   * 
   * @example
   * green
   */
  color?: string;
  /**
   * @remarks
   * The normalized value of the height. The value indicates the ratio of the height of the keyed portrait to the height of the background. Valid values: **0 to 1**.
   * 
   * @example
   * 0.4
   */
  heightNormalized?: number;
  /**
   * @remarks
   * The unique ID of the chroma key source.
   * 
   * @example
   * k12kj31****
   */
  id?: string;
  /**
   * @remarks
   * The sequence number of the chroma key source. This parameter is displayed on the frontend but not used in the operation logic.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Indicates whether only audio exists.
   * 
   * @example
   * true
   */
  onlyAudio?: boolean;
  /**
   * @remarks
   * The portrait type. Valid values:
   * 
   * *   **0**: half body
   * *   **1**: full body
   * 
   * @example
   * 0
   */
  portraitType?: number;
  /**
   * @remarks
   * The x-coordinate of the material. Valid values: **0 to 1**. The upper-left corner is used as the coordinate origin for the material.
   * 
   * @example
   * 0.1
   */
  positionX?: string;
  /**
   * @remarks
   * The y-coordinate of the material. Valid values: **0 to 1**. The upper-left corner is used as the coordinate origin for the material.
   * 
   * @example
   * 0.2
   */
  positionY?: string;
  /**
   * @remarks
   * The ID of the video resource.
   * 
   * @example
   * asdfasdfasdfasdfa****
   */
  videoResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      audioConfig: 'AudioConfig',
      channelId: 'ChannelId',
      color: 'Color',
      heightNormalized: 'HeightNormalized',
      id: 'Id',
      index: 'Index',
      onlyAudio: 'OnlyAudio',
      portraitType: 'PortraitType',
      positionX: 'PositionX',
      positionY: 'PositionY',
      videoResourceId: 'VideoResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioConfig: DescribeStudioLayoutsResponseBodyStudioLayoutsScreenInputConfigListAudioConfig,
      channelId: 'string',
      color: 'string',
      heightNormalized: 'number',
      id: 'string',
      index: 'number',
      onlyAudio: 'boolean',
      portraitType: 'number',
      positionX: 'string',
      positionY: 'string',
      videoResourceId: 'string',
    };
  }

  validate() {
    if(this.audioConfig && typeof (this.audioConfig as any).validate === 'function') {
      (this.audioConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStudioLayoutsResponseBodyStudioLayouts extends $dara.Model {
  /**
   * @remarks
   * The background material configurations.
   */
  bgImageConfig?: DescribeStudioLayoutsResponseBodyStudioLayoutsBgImageConfig;
  /**
   * @remarks
   * The common layout configurations. This parameter is returned only for a common layout.
   */
  commonConfig?: DescribeStudioLayoutsResponseBodyStudioLayoutsCommonConfig;
  /**
   * @remarks
   * The layer sorting configurations.
   */
  layerOrderConfigList?: DescribeStudioLayoutsResponseBodyStudioLayoutsLayerOrderConfigList[];
  /**
   * @remarks
   * The ID of the layout.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  layoutId?: string;
  /**
   * @remarks
   * The name of the layout.
   * 
   * @example
   * 测试布局
   */
  layoutName?: string;
  /**
   * @remarks
   * The type of the layout. Valid values:
   * 
   * *   **common**
   * *   **studio**
   * 
   * @example
   * studio
   */
  layoutType?: string;
  /**
   * @remarks
   * The multimedia input configurations.
   */
  mediaInputConfigList?: DescribeStudioLayoutsResponseBodyStudioLayoutsMediaInputConfigList[];
  /**
   * @remarks
   * The input configurations for chroma key.
   */
  screenInputConfigList?: DescribeStudioLayoutsResponseBodyStudioLayoutsScreenInputConfigList[];
  static names(): { [key: string]: string } {
    return {
      bgImageConfig: 'BgImageConfig',
      commonConfig: 'CommonConfig',
      layerOrderConfigList: 'LayerOrderConfigList',
      layoutId: 'LayoutId',
      layoutName: 'LayoutName',
      layoutType: 'LayoutType',
      mediaInputConfigList: 'MediaInputConfigList',
      screenInputConfigList: 'ScreenInputConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgImageConfig: DescribeStudioLayoutsResponseBodyStudioLayoutsBgImageConfig,
      commonConfig: DescribeStudioLayoutsResponseBodyStudioLayoutsCommonConfig,
      layerOrderConfigList: { 'type': 'array', 'itemType': DescribeStudioLayoutsResponseBodyStudioLayoutsLayerOrderConfigList },
      layoutId: 'string',
      layoutName: 'string',
      layoutType: 'string',
      mediaInputConfigList: { 'type': 'array', 'itemType': DescribeStudioLayoutsResponseBodyStudioLayoutsMediaInputConfigList },
      screenInputConfigList: { 'type': 'array', 'itemType': DescribeStudioLayoutsResponseBodyStudioLayoutsScreenInputConfigList },
    };
  }

  validate() {
    if(this.bgImageConfig && typeof (this.bgImageConfig as any).validate === 'function') {
      (this.bgImageConfig as any).validate();
    }
    if(this.commonConfig && typeof (this.commonConfig as any).validate === 'function') {
      (this.commonConfig as any).validate();
    }
    if(Array.isArray(this.layerOrderConfigList)) {
      $dara.Model.validateArray(this.layerOrderConfigList);
    }
    if(Array.isArray(this.mediaInputConfigList)) {
      $dara.Model.validateArray(this.mediaInputConfigList);
    }
    if(Array.isArray(this.screenInputConfigList)) {
      $dara.Model.validateArray(this.screenInputConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStudioLayoutsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b9676b3
   */
  requestId?: string;
  /**
   * @remarks
   * The layout information.
   */
  studioLayouts?: DescribeStudioLayoutsResponseBodyStudioLayouts[];
  /**
   * @remarks
   * The total number of layouts.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      studioLayouts: 'StudioLayouts',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      studioLayouts: { 'type': 'array', 'itemType': DescribeStudioLayoutsResponseBodyStudioLayouts },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.studioLayouts)) {
      $dara.Model.validateArray(this.studioLayouts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

