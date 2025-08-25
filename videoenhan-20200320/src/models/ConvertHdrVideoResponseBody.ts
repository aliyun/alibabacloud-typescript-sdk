// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertHdrVideoResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-vd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/hdr-enhance/20-12-22/HaKDdTI48i2GQGy7_20-12-22-06-42-45.mp4?Expires=1608621178&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=SWc90T0JHg5eWc64x8GmYHKsvX****
   */
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoResponseBody extends $dara.Model {
  data?: ConvertHdrVideoResponseBodyData;
  message?: string;
  /**
   * @example
   * E0CF495F-E806-4B9C-B204-E1230608239D
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
      data: ConvertHdrVideoResponseBodyData,
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

