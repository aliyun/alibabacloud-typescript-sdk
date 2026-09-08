// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentUploadParametersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AccessKeyId used for signing
   * 
   * @example
   * ****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * Expired At
   * 
   * @example
   * 1647313420
   */
  expireTime?: number;
  /**
   * @remarks
   * OSS file path
   * 
   * @example
   * ccc-test/blacklist.xlsx
   */
  filePath?: string;
  /**
   * @remarks
   * OSS host
   * 
   * @example
   * https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * Signature policy
   * 
   * @example
   * Permit
   */
  policy?: string;
  /**
   * @remarks
   * Signature
   * 
   * @example
   * zi31STIMtIfa/UN2l+6lww****
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expireTime: 'ExpireTime',
      filePath: 'FilePath',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expireTime: 'number',
      filePath: 'string',
      host: 'string',
      policy: 'string',
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

export class GetDocumentUploadParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: GetDocumentUploadParametersResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Response parameters.
   */
  params?: string[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 9FBA26B0-462B-4D77-B78F-AF35560DBC71
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDocumentUploadParametersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

