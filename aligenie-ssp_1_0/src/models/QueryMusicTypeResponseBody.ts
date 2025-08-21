// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMusicTypeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  musicType?: number;
  /**
   * @example
   * xx
   */
  musicTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicType: 'number',
      musicTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMusicTypeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  message?: string;
  /**
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
   */
  requestId?: string;
  result?: QueryMusicTypeResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': QueryMusicTypeResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

