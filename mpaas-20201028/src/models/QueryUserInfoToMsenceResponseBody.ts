// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserInfoToMsenceResponseBodyMpaasUserInfoShareResponse extends $dara.Model {
  /**
   * @example
   * -
   */
  avatar?: string;
  /**
   * @example
   * 0
   */
  gender?: string;
  /**
   * @example
   * -
   */
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      gender: 'Gender',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      gender: 'string',
      nickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoToMsenceResponseBody extends $dara.Model {
  mpaasUserInfoShareResponse?: QueryUserInfoToMsenceResponseBodyMpaasUserInfoShareResponse;
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  resultCode?: string;
  /**
   * @example
   * SUCCESS
   */
  resultMsg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mpaasUserInfoShareResponse: 'MpaasUserInfoShareResponse',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpaasUserInfoShareResponse: QueryUserInfoToMsenceResponseBodyMpaasUserInfoShareResponse,
      requestId: 'string',
      resultCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.mpaasUserInfoShareResponse && typeof (this.mpaasUserInfoShareResponse as any).validate === 'function') {
      (this.mpaasUserInfoShareResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

