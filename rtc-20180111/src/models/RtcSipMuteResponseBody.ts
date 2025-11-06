// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RtcSipMuteResponseBodyErrTracks extends $dara.Model {
  /**
   * @remarks
   * ErrMsg。
   * 
   * @example
   * participant does not existed.
   */
  errMsg?: string;
  /**
   * @example
   * 12
   */
  id?: string;
  /**
   * @remarks
   * OperationId。
   * 
   * @example
   * 12122121
   */
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      id: 'Id',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      id: 'string',
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RtcSipMuteResponseBody extends $dara.Model {
  errTracks?: RtcSipMuteResponseBodyErrTracks[];
  /**
   * @example
   * E7997404-5858-5C4D-94E4-33677412ACDC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errTracks: 'ErrTracks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errTracks: { 'type': 'array', 'itemType': RtcSipMuteResponseBodyErrTracks },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errTracks)) {
      $dara.Model.validateArray(this.errTracks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

