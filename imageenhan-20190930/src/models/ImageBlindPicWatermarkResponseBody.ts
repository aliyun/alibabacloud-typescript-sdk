// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBlindPicWatermarkResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://algo-app-taobao-mm-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/pixelai-portrait-beauty%2F2020_03_04%2F61f544a1a5004c88a2bf29452db494e9.jpeg?OSSAccessKeyId=LTAI4Fmdm1gQonFLrghJ****&Expires=158340****&Signature=Heet1ivG0xFP3YlO6usvd0pmrH****
   */
  logoURL?: string;
  /**
   * @example
   * http://algo-app-taobao-mm-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/pixelai-portrait-beauty%2F2020_03_04%2F61f544a1a5004c88a2bf29452db494e9.jpeg?OSSAccessKeyId=LTAI4Fmdm1gQonFLrghJ****&Expires=158340****&Signature=Heet1ivG0xFP3YlO6usvd0pmrH****
   */
  watermarkImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      logoURL: 'LogoURL',
      watermarkImageURL: 'WatermarkImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoURL: 'string',
      watermarkImageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBlindPicWatermarkResponseBody extends $dara.Model {
  data?: ImageBlindPicWatermarkResponseBodyData;
  /**
   * @example
   * DE7869E4-0ACE-4C02-8B98-540B49F49205
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
      data: ImageBlindPicWatermarkResponseBodyData,
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

