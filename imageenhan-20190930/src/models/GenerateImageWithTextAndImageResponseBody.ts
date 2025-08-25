// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateImageWithTextAndImageResponseBodyData extends $dara.Model {
  imageUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      imageUrls: 'ImageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageWithTextAndImageResponseBody extends $dara.Model {
  data?: GenerateImageWithTextAndImageResponseBodyData;
  message?: string;
  /**
   * @example
   * 141fb6d1-28e8-4d93-8165-d966f7092e6a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateImageWithTextAndImageResponseBodyData,
      message: 'string',
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

