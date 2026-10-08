// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEmailVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The start time for querying email verification creation, represented as the number of milliseconds since 00:00 on January 1, 1970, UTC.
   * 
   * @example
   * 1522080000000
   */
  beginCreateTime?: number;
  /**
   * @remarks
   * The email address to query. You can upload only one email address at a time.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The end time for querying the creation of email verification, calculated as the number of milliseconds since 00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1522080000000
   */
  endCreateTime?: number;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:  
   * - **zh**: Chinese.  
   * - **en**: English.  
   * 
   * Default value is **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number for paging through the domain list. Default value is **1**. You can set this parameter based on your needs.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size for paging through the domain list. Default value is **500**, and the maximum value is **5000**. You can set this parameter based on your needs.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * User IP address. You can set it to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * Email verification status. Valid values:  
   * - **0**: Waiting for verification.  
   * - **1**: Verification succeeded.
   * 
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

