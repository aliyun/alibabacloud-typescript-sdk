// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ErasePersonResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://algo-app-isr-lab-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/remove-person/2020-10-29_10%3A59%3A21.421276_img19.png?Expires=1603970961&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=9lBakx0r6FOssTEYTcKs5pk8ta****
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErasePersonResponseBody extends $dara.Model {
  data?: ErasePersonResponseBodyData;
  /**
   * @example
   * 2FEDA495-9A5D-48B5-8922-98A4FE01D381
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
      data: ErasePersonResponseBodyData,
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

