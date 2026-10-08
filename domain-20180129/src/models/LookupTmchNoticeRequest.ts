// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupTmchNoticeRequest extends $dara.Model {
  /**
   * @remarks
   * The trademark claim key. Call the [CheckDomainSunriseClaim](https://help.aliyun.com/document_detail/97210.htm?spm=a2c4g.11186623.0.0.4aec615fTVPYjt) operation to obtain this key.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017092100/8/2/1/kDfu9htHGEx_y-LJ3XSlKMZ70000020001
   */
  claimKey?: string;
  /**
   * @remarks
   * The language of the error messages that are returned by the API. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The user\\"s IP address. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      claimKey: 'ClaimKey',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimKey: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

