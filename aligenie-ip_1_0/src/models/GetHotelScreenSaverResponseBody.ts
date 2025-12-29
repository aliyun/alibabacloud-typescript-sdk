// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelScreenSaverResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://ailabs.alibabausercontent.com/platform/3d4fe6d66ec49d9789635f66627f0339/welcome_audios/976210a6532150f49c2677a8b7dbc105/l6fspbhd.jpg
   */
  picUrl?: string;
  /**
   * @example
   * common-weather
   */
  styleCode?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      styleCode: 'StyleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      styleCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5F0467E1-19F2-1757-B6D0-B79917BA2E81
   */
  requestId?: string;
  result?: GetHotelScreenSaverResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetHotelScreenSaverResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

