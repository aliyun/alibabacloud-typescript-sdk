// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterComponentsResponseBodyComponentsComponentCaptionLayerContent extends $dara.Model {
  /**
   * @remarks
   * The color of the text border.
   * 
   * Valid values: **0x000000 to 0xffffff**. If the value of this parameter is "", this parameter does not take effect.
   * 
   * @example
   * 0x000000
   */
  borderColor?: string;
  /**
   * @remarks
   * The normalized value of the width of the text border. The value of this parameter equals the border width divided by the font size.
   * 
   * The maximum width of the text border is **16**, even if the border width calculated based on this parameter is greater than **16**.
   * 
   * @example
   * 0
   */
  borderWidthNormalized?: number;
  /**
   * @remarks
   * The color of the text. Valid values: **0x000000 to 0xffffff**.
   * 
   * @example
   * 0x000000
   */
  color?: string;
  /**
   * @remarks
   * The font of the text, which is specified by the system. Valid values:
   * 
   * *   **KaiTi**
   * *   **AlibabaPuHuiTi-Regular**
   * *   **AlibabaPuHuiTi-Bold**
   * *   **NAlibabaPuHuiTi-Light**
   * *   **NotoSansHans-Regular**
   * *   **NotoSansHans-Bold**
   * *   **NotoSansHans-Light**
   * 
   * ****
   * 
   * @example
   * KaiTi
   */
  fontName?: string;
  /**
   * @remarks
   * The line spacing, which indicates the interval between every two lines.
   * 
   * @example
   * 0
   */
  lineSpaceNormalized?: number;
  /**
   * @remarks
   * The location ID of the component. If the value of the ComponentType parameter is caption, the LocationId parameter indicates the channel ID of the video source that is referenced by the component.
   * 
   * @example
   * RV01
   */
  locationId?: string;
  /**
   * @remarks
   * The offset between the presentation timestamps (PTS) of the subtitles and the audio.
   * 
   * Valid values: **-10000 to 10000**. Default value: **0**.
   * 
   * @example
   * 0
   */
  ptsOffset?: number;
  /**
   * @remarks
   * Indicates whether the source language of the subtitles is displayed. Valid values:
   * 
   * *   **true**: The source language is displayed.
   * *   **false**: The source language is not displayed.
   * 
   * @example
   * false
   */
  showSourceLan?: boolean;
  /**
   * @remarks
   * The normalized value of the font size of the subtitles. The value of this parameter equals the font size divided by the output height.``
   * 
   * The maximum font size of the subtitles is **1,024**, even if the font size calculated based on this parameter is greater than **1,024**. If the value of this parameter is **-1**, this parameter does not take effect.
   * 
   * @example
   * 0.1
   */
  sizeNormalized?: number;
  /**
   * @remarks
   * The source language of the audio in the video source. Valid values:
   * 
   * *   **en**: English
   * *   **cn**: Chinese
   * *   **es**: Spanish
   * *   **ru**: Russian
   * 
   * @example
   * cn
   */
  sourceLan?: string;
  /**
   * @remarks
   * The target language of the audio in the video source. Valid values:
   * 
   * *   **en**: English
   * *   **cn**: Chinese
   * *   **es**: Spanish
   * *   **ru**: Russian
   * 
   * @example
   * cn
   */
  targetLan?: string;
  /**
   * @remarks
   * The maximum number of words displayed in each line.
   * 
   * @example
   * 15
   */
  wordCountPerLine?: number;
  /**
   * @remarks
   * The word spacing, which indicates the interval between every two words.
   * 
   * @example
   * 0
   */
  wordSpaceNormalized?: number;
  /**
   * @remarks
   * The number of words displayed on the component. The value of this parameter can be specified based on the font size.
   * 
   * Valid values: **10 to 50**.
   * 
   * @example
   * 35
   */
  wordsCount?: number;
  static names(): { [key: string]: string } {
    return {
      borderColor: 'BorderColor',
      borderWidthNormalized: 'BorderWidthNormalized',
      color: 'Color',
      fontName: 'FontName',
      lineSpaceNormalized: 'LineSpaceNormalized',
      locationId: 'LocationId',
      ptsOffset: 'PtsOffset',
      showSourceLan: 'ShowSourceLan',
      sizeNormalized: 'SizeNormalized',
      sourceLan: 'SourceLan',
      targetLan: 'TargetLan',
      wordCountPerLine: 'WordCountPerLine',
      wordSpaceNormalized: 'WordSpaceNormalized',
      wordsCount: 'WordsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      borderColor: 'string',
      borderWidthNormalized: 'number',
      color: 'string',
      fontName: 'string',
      lineSpaceNormalized: 'number',
      locationId: 'string',
      ptsOffset: 'number',
      showSourceLan: 'boolean',
      sizeNormalized: 'number',
      sourceLan: 'string',
      targetLan: 'string',
      wordCountPerLine: 'number',
      wordSpaceNormalized: 'number',
      wordsCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBodyComponentsComponentComponentLayerPositionNormalizeds extends $dara.Model {
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

export class DescribeCasterComponentsResponseBodyComponentsComponentComponentLayer extends $dara.Model {
  /**
   * @remarks
   * The normalized value for heights of the elements in the layer. The widths of the elements are proportionally scaled based on this parameter.
   * 
   * If the value of this parameter is **0**, the elements in the layer are not scaled.
   * 
   * @example
   * 0.5
   */
  heightNormalized?: number;
  /**
   * @remarks
   * The normalized value of the position of the layer, in the format of `[x,y]`. Example: `[0,0]`.
   * 
   * >  The values of x and y need to be normalized.
   */
  positionNormalizeds?: DescribeCasterComponentsResponseBodyComponentsComponentComponentLayerPositionNormalizeds;
  /**
   * @remarks
   * The reference coordinates of the layer. Valid values:
   * 
   * *   **topLeft**: the upper-left corner
   * *   **topRight**: the upper-right corner
   * *   **bottomLeft**: the lower-left corner
   * *   **bottomRight**: the lower-right corner
   * 
   * @example
   * topLeft
   */
  positionRefer?: string;
  /**
   * @remarks
   * The transparency of the layer. Valid values: 0 to 255.
   * 
   * A value of **0** indicates that the layer is completely transparent. A value of **255** indicates that the layer is completely opaque.
   * 
   * @example
   * 200
   */
  transparency?: number;
  /**
   * @remarks
   * The normalized value for widths of the elements in the layer. The heights of the elements are proportionally scaled based on this parameter. If the value of this parameter is **0**, the elements in the layer are not scaled.
   * 
   * >  This parameter conflicts with the HeightNormalized parameter. If both of them are specified, only the HeightNormalized parameter takes effect. If only one of them is specified, the latest specified value is used.
   * 
   * @example
   * 0.5
   */
  widthNormalized?: number;
  static names(): { [key: string]: string } {
    return {
      heightNormalized: 'HeightNormalized',
      positionNormalizeds: 'PositionNormalizeds',
      positionRefer: 'PositionRefer',
      transparency: 'Transparency',
      widthNormalized: 'WidthNormalized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      heightNormalized: 'number',
      positionNormalizeds: DescribeCasterComponentsResponseBodyComponentsComponentComponentLayerPositionNormalizeds,
      positionRefer: 'string',
      transparency: 'number',
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

export class DescribeCasterComponentsResponseBodyComponentsComponentImageLayerContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the material from the media library.
   * 
   * @example
   * 6cf724c6ebfd4a59b5b3cec6f10d****
   */
  materialId?: string;
  static names(): { [key: string]: string } {
    return {
      materialId: 'MaterialId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeCasterComponentsResponseBodyComponentsComponentTextLayerContent extends $dara.Model {
  /**
   * @remarks
   * The color of the text border. Valid values: **0x000000 to 0xffffff**. If the value of this parameter is **""**, this parameter does not take effect.
   * 
   * @example
   * 0x000000
   */
  borderColor?: string;
  /**
   * @remarks
   * The normalized value of the width of the text border. The value of this parameter equals the border width divided by the font size.****
   * 
   * The maximum width of the text border is **16**, even if the border width calculated based on this parameter is greater than **16**.
   * 
   * @example
   * 0
   */
  borderWidthNormalized?: number;
  /**
   * @remarks
   * The color of the text. Valid values: **0x000000 to 0xffffff**.
   * 
   * @example
   * 0xff0000
   */
  color?: string;
  /**
   * @remarks
   * The font of the text, which is specified by the system. Valid values:
   * 
   * *   **KaiTi**
   * *   **AlibabaPuHuiTi-Regular**
   * *   **AlibabaPuHuiTi-Bold**
   * *   **NAlibabaPuHuiTi-Light**
   * *   **NotoSansHans-Regular**
   * *   **NotoSansHans-Bold**
   * *   **NotoSansHans-Light**
   * 
   * ****
   * 
   * @example
   * KaiTi
   */
  fontName?: string;
  /**
   * @remarks
   * The normalized value of the font size of the text.
   * 
   * The value of this parameter equals the font size divided by the output height.**** The maximum font size of the text is **1,024**, even if the font size calculated based on this parameter is greater than **1,024**. If the value of this parameter is **-1**, this parameter does not take effect.
   * 
   * @example
   * 16
   */
  sizeNormalized?: number;
  /**
   * @remarks
   * The content of the text.
   * 
   * @example
   * hello world
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      borderColor: 'BorderColor',
      borderWidthNormalized: 'BorderWidthNormalized',
      color: 'Color',
      fontName: 'FontName',
      sizeNormalized: 'SizeNormalized',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      borderColor: 'string',
      borderWidthNormalized: 'number',
      color: 'string',
      fontName: 'string',
      sizeNormalized: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBodyComponentsComponent extends $dara.Model {
  /**
   * @remarks
   * The information about the subtitle component.
   */
  captionLayerContent?: DescribeCasterComponentsResponseBodyComponentsComponentCaptionLayerContent;
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * 72d2ec7a-4cd7-4a01-974b-7cd53947****
   */
  componentId?: string;
  /**
   * @remarks
   * The information about the component layer, such as the size and layout.
   */
  componentLayer?: DescribeCasterComponentsResponseBodyComponentsComponentComponentLayer;
  /**
   * @remarks
   * The name of the component. By default, the name is the ID of the component.
   * 
   * @example
   * component_name
   */
  componentName?: string;
  /**
   * @remarks
   * The type of the component. Valid values:
   * 
   * *   **text**: a text component
   * *   **image**: an image component
   * *   **caption**: a caption component
   * 
   * @example
   * text
   */
  componentType?: string;
  /**
   * @remarks
   * The display effect for the component. Valid values:
   * 
   * *   **none**
   * *   **animateH**: horizontal scrolling
   * *   **animateV**: vertical scrolling
   * 
   * @example
   * animateV
   */
  effect?: string;
  /**
   * @remarks
   * The information about the image component. This parameter is returned only for image components.
   */
  imageLayerContent?: DescribeCasterComponentsResponseBodyComponentsComponentImageLayerContent;
  /**
   * @remarks
   * The location ID of the component.
   * 
   * Each location ID can be assigned to only one component and must be in the RC[Number] format. The values of this parameter are in ascending order, for example, from RC01 to RC12.
   * 
   * @example
   * RC01
   */
  locationId?: string;
  /**
   * @remarks
   * The information about the text component. This parameter is returned only for text components.
   */
  textLayerContent?: DescribeCasterComponentsResponseBodyComponentsComponentTextLayerContent;
  static names(): { [key: string]: string } {
    return {
      captionLayerContent: 'CaptionLayerContent',
      componentId: 'ComponentId',
      componentLayer: 'ComponentLayer',
      componentName: 'ComponentName',
      componentType: 'ComponentType',
      effect: 'Effect',
      imageLayerContent: 'ImageLayerContent',
      locationId: 'LocationId',
      textLayerContent: 'TextLayerContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captionLayerContent: DescribeCasterComponentsResponseBodyComponentsComponentCaptionLayerContent,
      componentId: 'string',
      componentLayer: DescribeCasterComponentsResponseBodyComponentsComponentComponentLayer,
      componentName: 'string',
      componentType: 'string',
      effect: 'string',
      imageLayerContent: DescribeCasterComponentsResponseBodyComponentsComponentImageLayerContent,
      locationId: 'string',
      textLayerContent: DescribeCasterComponentsResponseBodyComponentsComponentTextLayerContent,
    };
  }

  validate() {
    if(this.captionLayerContent && typeof (this.captionLayerContent as any).validate === 'function') {
      (this.captionLayerContent as any).validate();
    }
    if(this.componentLayer && typeof (this.componentLayer as any).validate === 'function') {
      (this.componentLayer as any).validate();
    }
    if(this.imageLayerContent && typeof (this.imageLayerContent as any).validate === 'function') {
      (this.imageLayerContent as any).validate();
    }
    if(this.textLayerContent && typeof (this.textLayerContent as any).validate === 'function') {
      (this.textLayerContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBodyComponents extends $dara.Model {
  component?: DescribeCasterComponentsResponseBodyComponentsComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': DescribeCasterComponentsResponseBodyComponentsComponent },
    };
  }

  validate() {
    if(Array.isArray(this.component)) {
      $dara.Model.validateArray(this.component);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The components.
   */
  components?: DescribeCasterComponentsResponseBodyComponents;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3be7ade8-d907-483c-b24a-0dad45******
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
      components: 'Components',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: DescribeCasterComponentsResponseBodyComponents,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.components && typeof (this.components as any).validate === 'function') {
      (this.components as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

