// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEmailVerificationRequest extends $dara.Model {
  /**
   * @example
   * 1522080000000
   */
  beginCreateTime?: number;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 1522080000000
   */
  endCreateTime?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  /**
   * @example
   * 1
   */
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

