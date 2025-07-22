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

export class GenerateUploadFilePolicyForPartnerResponseBody extends $dara.Model {
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * live
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  dynamicCode?: string;
  /**
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  /**
   * @example
   * 500
   */
  errorCode?: string;
  /**
   * @example
   * User not authorized to operate on the specified resource.
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  module?: GenerateUploadFilePolicyForPartnerResponseBodyModule;
  /**
   * @example
   * 6254E13A-A79F-5786-9C75-7590727342C9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: GenerateUploadFilePolicyForPartnerResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

