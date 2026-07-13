// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSslCertsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @example
   * 123
   */
  certId?: number;
  /**
   * @example
   * 22584627-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @example
   * example-cert
   */
  certName?: string;
  /**
   * @example
   * true
   */
  chainCompleted?: boolean;
  /**
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * DigiCert
   */
  issuer?: string;
  /**
   * @example
   * 1893456000000
   */
  notAfterTimestamp?: number;
  /**
   * @example
   * 1704067200000
   */
  notBeforeTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certId: 'CertId',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      chainCompleted: 'ChainCompleted',
      commonName: 'CommonName',
      domain: 'Domain',
      issuer: 'Issuer',
      notAfterTimestamp: 'NotAfterTimestamp',
      notBeforeTimestamp: 'NotBeforeTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certId: 'number',
      certIdentifier: 'string',
      certName: 'string',
      chainCompleted: 'boolean',
      commonName: 'string',
      domain: 'string',
      issuer: 'string',
      notAfterTimestamp: 'number',
      notBeforeTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSslCertsResponseBody extends $dara.Model {
  code?: string;
  items?: ListSslCertsResponseBodyItems[];
  maxResults?: number;
  message?: string;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @example
   * req-123
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListSslCertsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

