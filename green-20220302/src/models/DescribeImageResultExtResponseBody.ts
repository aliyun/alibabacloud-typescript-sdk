// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageResultExtResponseBodyDataCustomImage extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 123456
   */
  imageId?: string;
  /**
   * @remarks
   * The image library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * The image library name.
   * 
   * @example
   * 图库123
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataPublicFigure extends $dara.Model {
  /**
   * @remarks
   * Identified person coding information.
   * 
   * @example
   * yzazhzou
   */
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataTextInImageCustomTexts extends $dara.Model {
  /**
   * @remarks
   * Custom words, multiple words separated by commas.
   * 
   * @example
   * aaa,bbb
   */
  keyWords?: string;
  /**
   * @remarks
   * Custom library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * Custom library name.
   * 
   * @example
   * test
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataTextInImage extends $dara.Model {
  /**
   * @remarks
   * When a custom text library is hit, the custom library ID, custom library name, and custom word are returned.
   */
  customTexts?: DescribeImageResultExtResponseBodyDataTextInImageCustomTexts[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrDatas?: string[];
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   */
  riskWords?: string[];
  static names(): { [key: string]: string } {
    return {
      customTexts: 'CustomTexts',
      ocrDatas: 'OcrDatas',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTexts: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataTextInImageCustomTexts },
      ocrDatas: { 'type': 'array', 'itemType': 'string' },
      riskWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customTexts)) {
      $dara.Model.validateArray(this.customTexts);
    }
    if(Array.isArray(this.ocrDatas)) {
      $dara.Model.validateArray(this.ocrDatas);
    }
    if(Array.isArray(this.riskWords)) {
      $dara.Model.validateArray(this.riskWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If a custom image library is hit, information about the hit custom image library is returned.
   */
  customImage?: DescribeImageResultExtResponseBodyDataCustomImage[];
  /**
   * @remarks
   * Person information list.
   */
  publicFigure?: DescribeImageResultExtResponseBodyDataPublicFigure[];
  /**
   * @remarks
   * Returns the text information in the hit image.
   */
  textInImage?: DescribeImageResultExtResponseBodyDataTextInImage;
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      publicFigure: 'PublicFigure',
      textInImage: 'TextInImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataCustomImage },
      publicFigure: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataPublicFigure },
      textInImage: DescribeImageResultExtResponseBodyDataTextInImage,
    };
  }

  validate() {
    if(Array.isArray(this.customImage)) {
      $dara.Model.validateArray(this.customImage);
    }
    if(Array.isArray(this.publicFigure)) {
      $dara.Model.validateArray(this.publicFigure);
    }
    if(this.textInImage && typeof (this.textInImage as any).validate === 'function') {
      (this.textInImage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeImageResultExtResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeImageResultExtResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

