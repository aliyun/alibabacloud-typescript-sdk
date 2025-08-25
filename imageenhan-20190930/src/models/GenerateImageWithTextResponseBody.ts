// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateImageWithTextResponseBodyData extends $dara.Model {
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

export class GenerateImageWithTextResponseBody extends $dara.Model {
  data?: GenerateImageWithTextResponseBodyData;
  message?: string;
  /**
   * @example
   * 7574ee8f-38a3-4b1e-9280-11c33ab46e51
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
      data: GenerateImageWithTextResponseBodyData,
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

