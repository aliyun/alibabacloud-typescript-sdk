// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSslCertsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The certificate algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 123
   */
  certId?: number;
  /**
   * @remarks
   * The certificate identifier used by APIG. Pass this value when creating or updating an HTTPS domain name.
   * 
   * @example
   * 22584627-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * example-cert
   */
  certName?: string;
  /**
   * @remarks
   * Indicates whether the certificate chain is complete.
   * 
   * @example
   * true
   */
  chainCompleted?: boolean;
  /**
   * @remarks
   * The certificate common name.
   * 
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The certificate domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The certificate issuer.
   * 
   * @example
   * DigiCert
   */
  issuer?: string;
  /**
   * @remarks
   * The expiration timestamp, in milliseconds.
   * 
   * @example
   * 1893456000000
   */
  notAfterTimestamp?: number;
  /**
   * @remarks
   * The effective period UNIX timestamp, in milliseconds.
   * 
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
  /**
   * @remarks
   * The error code. This field is typically empty when the request is successful.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The list of certificates.
   * 
   * @example
   * [...]
   */
  items?: ListSslCertsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. The value is `null` if no more pages are available.
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-123
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of certificates.
   * 
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

