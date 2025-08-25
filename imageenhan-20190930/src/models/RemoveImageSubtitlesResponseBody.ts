// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveImageSubtitlesResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/image-desubtitle/2020-03-23-08/02%3A50-e8af2ea3-bddc-4ec8-b21c-493ee687465e.jpg?Expires=1584952370&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=qVnfWZJ2QtI9NRWQ410FsEFioq****
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

export class RemoveImageSubtitlesResponseBody extends $dara.Model {
  data?: RemoveImageSubtitlesResponseBodyData;
  /**
   * @example
   * 939B2103-EE28-4F2D-9773-9A37AD00E5B7
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
      data: RemoveImageSubtitlesResponseBodyData,
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

