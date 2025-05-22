// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadFilePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * OSSAccessKeyId
   * 
   * @example
   * hObpgEXoca42qH3V
   */
  accessId?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyMS0xMi0wNlQwNjoxOTowMi40MjdaIiwiY29uZGl0aW9ucyI6W1siZXEiLCIkYnVja2V0IiwibXNlYS1jYWlzaHVpIl1dfQ==
   */
  encodedPolicy?: string;
  /**
   * @example
   * 1638169824405
   */
  expireTime?: string;
  /**
   * @example
   * company_apply_card/company_change_city/1577930895198750/1638170049657
   */
  fileDir?: string;
  /**
   * @example
   * https://
   */
  fileUrl?: string;
  /**
   * @remarks
   * OSS Endpoint。
   * 
   * @example
   * //companyapply.oss-cn-zhangjiakou.aliyuncs.com/
   */
  host?: string;
  /**
   * @example
   * EB809CAB-82F7-5843-A42F-356770CD4914
   */
  requestId?: string;
  /**
   * @example
   * jykxhmskIF24sLlxc1GafU/eQMU=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      encodedPolicy: 'EncodedPolicy',
      expireTime: 'ExpireTime',
      fileDir: 'FileDir',
      fileUrl: 'FileUrl',
      host: 'Host',
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      encodedPolicy: 'string',
      expireTime: 'string',
      fileDir: 'string',
      fileUrl: 'string',
      host: 'string',
      requestId: 'string',
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

