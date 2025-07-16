// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * [{xxxxxx}]
   */
  imageData?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetImageTranslateTaskResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * xxxxxxx
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
      data: GetImageTranslateTaskResponseBodyData,
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

