// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaResponseBodyData extends $dara.Model {
  /**
   * @example
   * os_PayAsYouGoQuota_p
   */
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'nickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateQuotaResponseBody extends $dara.Model {
  data?: CreateQuotaResponseBodyData;
  /**
   * @example
   * 0bc520ad17171208978521777d742c
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateQuotaResponseBodyData,
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

