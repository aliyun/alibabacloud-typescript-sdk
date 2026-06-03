// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEmailVerificationRequest extends $dara.Model {
  beginCreateTime?: number;
  email?: string;
  endCreateTime?: number;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  userClientIp?: string;
  verificationStatus?: number;
  static names(): { [key: string]: string } {
    return {
      beginCreateTime: 'BeginCreateTime',
      email: 'Email',
      endCreateTime: 'EndCreateTime',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      userClientIp: 'UserClientIp',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCreateTime: 'number',
      email: 'string',
      endCreateTime: 'number',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      userClientIp: 'string',
      verificationStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

