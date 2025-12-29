// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWelcomeTextAndMusicResponseBodyResult extends $dara.Model {
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * http://ailabsaicloudservice.alicdn.com/tmp/a.wav
   */
  musicUrl?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicUrl: 'MusicUrl',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicUrl: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetWelcomeTextAndMusicResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: GetWelcomeTextAndMusicResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

