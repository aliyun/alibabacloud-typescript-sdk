// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMusicTypeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Ringtone type ID
   * 
   * @example
   * 1
   */
  musicType?: number;
  /**
   * @remarks
   * Name of the ringtone category
   * 
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
   * @remarks
   * Status code returned by the alarm service
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * error message
   * 
   * @example
   * 设备账号未关联
   */
  message?: string;
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
   */
  requestId?: string;
  /**
   * @remarks
   * List of ringtone types
   */
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

