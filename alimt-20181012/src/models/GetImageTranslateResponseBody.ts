// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTranslateResponseBodyData extends $dara.Model {
  orc?: string;
  pictureEditor?: string;
  /**
   * @example
   * https://ae01.alicdn.com/kf/xxxxx.jpeg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      orc: 'Orc',
      pictureEditor: 'PictureEditor',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orc: 'string',
      pictureEditor: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetImageTranslateResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * A41F6E25-8520-4AF0-90EF-AF7E32840108
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetImageTranslateResponseBodyData,
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

