// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GenerateUploadFilePolicyForPartnerResponseBodyModule extends $dara.Model {
  /**
   * @example
   * LTAI5tQPEXqDVu7794Bvw2xM
   */
  accessId?: string;
  /**
   * @example
   * XXXXXXX
   */
  encodedPolicy?: string;
  /**
   * @example
   * 1719112842
   */
  expireTime?: number;
  /**
   * @example
   * website_partner_leads/website/xxxxxx/xxxxxx
   */
  fileDir?: string;
  /**
   * @example
   * //xx-xxx-partner.oss-cn-zhangjiakou.aliyuncs.com/
   */
  host?: string;
  /**
   * @example
   * https://msea-website-partner.oss-cn-zhangjiakou.aliyuncs.com/website_xxxx_party_leads/website/xxxx/xxxx/2024/06/25/website_partner_third_party_leads_01?Expires=1719868413&OSSAccessKeyId=LTAI5tAnyDDDDD&Signature=XXXX
   */
  ossUrl?: string;
  /**
   * @example
   * qQb34p8lIXcSFtog2y0H08bC0OI=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      encodedPolicy: 'EncodedPolicy',
      expireTime: 'ExpireTime',
      fileDir: 'FileDir',
      host: 'Host',
      ossUrl: 'OssUrl',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      encodedPolicy: 'string',
      expireTime: 'number',
      fileDir: 'string',
      host: 'string',
      ossUrl: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

