// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAccountExistResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1990699401005016
   */
  accountId?: string;
  /**
   * @example
   * 01
   */
  nickName?: string;
  /**
   * @example
   * 1904635303738977
   */
  pk?: string;
  /**
   * @example
   * True
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      nickName: 'NickName',
      pk: 'Pk',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      nickName: 'string',
      pk: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountExistResponseBody extends $dara.Model {
  data?: CheckAccountExistResponseBodyData;
  /**
   * @example
   * UUID
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
      data: CheckAccountExistResponseBodyData,
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

