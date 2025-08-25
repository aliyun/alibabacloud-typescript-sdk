// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImitatePhotoStyleResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/photo-style-imitation/7c4c0809-5e15-4ca7-84b3-ba16711e3255__5cb220200622-075203.jpg?Expires=1592814125&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=DNhhRFPbMBwpHCEhrLdL%2BBF%2BXs****
   */
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImitatePhotoStyleResponseBody extends $dara.Model {
  data?: ImitatePhotoStyleResponseBodyData;
  /**
   * @example
   * A880432B-6D9A-4EF4-B7B7-863F38A930D9
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
      data: ImitatePhotoStyleResponseBodyData,
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

