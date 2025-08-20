// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SegmentClothResponseBodyDataElements extends $dara.Model {
  classUrl?: { [key: string]: string };
  /**
   * @example
   * http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/clothingsegmentation-2020-06-17-16-54-40-688c84cbbd-hnqfq/2020-6-18/invi__015924459307821000041_IIVHoM.png?Expires=1592447730&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=Hy8pn3IQj8nuKN0LEaC57cee9L****
   */
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      classUrl: 'ClassUrl',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      imageURL: 'string',
    };
  }

  validate() {
    if(this.classUrl) {
      $dara.Model.validateMap(this.classUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentClothResponseBodyData extends $dara.Model {
  elements?: SegmentClothResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': SegmentClothResponseBodyDataElements },
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentClothResponseBody extends $dara.Model {
  data?: SegmentClothResponseBodyData;
  /**
   * @example
   * BCE049A3-FE69-41CF-A870-5970156388A7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SegmentClothResponseBodyData,
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

