// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserInfoResponseBody extends $dara.Model {
  aliyunId?: string;
  nickName?: string;
  phone?: string;
  requestId?: string;
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      nickName: 'NickName',
      phone: 'Phone',
      requestId: 'RequestId',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      nickName: 'string',
      phone: 'string',
      requestId: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

