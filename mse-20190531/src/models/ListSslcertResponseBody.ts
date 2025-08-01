// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSSLCertResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the certificate expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 2021-04-01 02:35:12
   */
  afterDate?: string;
  /**
   * @remarks
   * The algorithm.
   * 
   * @example
   * test
   */
  algorithm?: string;
  /**
   * @remarks
   * The time when the certificate took effect. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 2031-03-30 02:35:12
   */
  beforeDate?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 1234
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * test.com
   */
  certName?: string;
  /**
   * @remarks
   * The domain name with which the certificate is associated.
   * 
   * @example
   * *.test.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the certificate expires. This value is a GMT timestamp.
   * 
   * @example
   * 2021-04-01 02:35:12
   */
  gmtAfter?: string;
  /**
   * @remarks
   * The time when the certificate took effect. This value is a GMT timestamp.
   * 
   * @example
   * 2031-03-30 02:35:12
   */
  gmtBefore?: string;
  /**
   * @remarks
   * The issuer of the certificate.
   * 
   * @example
   * test
   */
  issuer?: string;
  /**
   * @remarks
   * The SSL certificate.
   * 
   * @example
   * SSL
   */
  sans?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      gmtAfter: 'GmtAfter',
      gmtBefore: 'GmtBefore',
      issuer: 'Issuer',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'string',
      algorithm: 'string',
      beforeDate: 'string',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      gmtAfter: 'string',
      gmtBefore: 'string',
      issuer: 'string',
      sans: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSSLCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListSSLCertResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CAA9A229-141D-5FBA-AC5C-516C02026A11
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListSSLCertResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

