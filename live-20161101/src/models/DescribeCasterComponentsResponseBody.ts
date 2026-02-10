// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterComponentsResponseBodyComponentsComponentCaptionLayerContent extends $dara.Model {
  borderColor?: string;
  borderWidthNormalized?: number;
  color?: string;
  fontName?: string;
  lineSpaceNormalized?: number;
  locationId?: string;
  ptsOffset?: number;
  showSourceLan?: boolean;
  sizeNormalized?: number;
  sourceLan?: string;
  targetLan?: string;
  wordCountPerLine?: number;
  wordSpaceNormalized?: number;
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
  heightNormalized?: number;
  positionNormalizeds?: DescribeCasterComponentsResponseBodyComponentsComponentComponentLayerPositionNormalizeds;
  positionRefer?: string;
  transparency?: number;
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
  borderColor?: string;
  borderWidthNormalized?: number;
  color?: string;
  fontName?: string;
  sizeNormalized?: number;
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
  captionLayerContent?: DescribeCasterComponentsResponseBodyComponentsComponentCaptionLayerContent;
  componentId?: string;
  componentLayer?: DescribeCasterComponentsResponseBodyComponentsComponentComponentLayer;
  componentName?: string;
  componentType?: string;
  effect?: string;
  imageLayerContent?: DescribeCasterComponentsResponseBodyComponentsComponentImageLayerContent;
  locationId?: string;
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

