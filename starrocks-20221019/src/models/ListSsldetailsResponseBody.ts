// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSSLDetailsResponseBodyData extends $dara.Model {
  /**
   * @example
   * starrocks-ssl
   */
  aliases?: string;
  /**
   * @example
   * true
   */
  customCert?: boolean;
  /**
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @example
   * true
   */
  isValid?: boolean;
  /**
   * @example
   * CN=fe-sr-cn-xxx123-internal.starrocks.aliyuncs.com, OU=Aliyun Big Data Platform EMR StarRocks, O=Aliyun, L=BJ, ST=CN, C=CN
   */
  issuerDN?: string;
  /**
   * @example
   * 1751010702000
   */
  notAfter?: number;
  /**
   * @example
   * 1751000702000
   */
  notBefore?: number;
  /**
   * @example
   * MIIJkAIBAzCCCVYGCSqGSIb3DQEHAaCCCUcEgglDMIIJPzCCA+8GCSqGSIb3DQEHBqCCA+AwggPc
   * AgEAMIID1QYJKoZIhvcNAQcBMBwGCiqGSIb3DQEMAQYwDgQI3e4V2eXgGFMCAggAgIIDqJ/L8sA
   * ......
   * AB3eKpMa7rQc==
   */
  sslCertificateText?: string;
  /**
   * @example
   * valid
   */
  status?: string;
  /**
   * @example
   * CN=fe-{clusterId}-internal.starrocks.aliyuncs.com, OU=Aliyun Big Data Platform EMR StarRocks, O=Aliyun, L=BJ, ST=CN, C=CN
   */
  subjectDN?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'Aliases',
      customCert: 'CustomCert',
      enableSSL: 'EnableSSL',
      isValid: 'IsValid',
      issuerDN: 'IssuerDN',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      sslCertificateText: 'SslCertificateText',
      status: 'Status',
      subjectDN: 'SubjectDN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: 'string',
      customCert: 'boolean',
      enableSSL: 'boolean',
      isValid: 'boolean',
      issuerDN: 'string',
      notAfter: 'number',
      notBefore: 'number',
      sslCertificateText: 'string',
      status: 'string',
      subjectDN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSSLDetailsResponseBody extends $dara.Model {
  data?: ListSSLDetailsResponseBodyData;
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSSLDetailsResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

