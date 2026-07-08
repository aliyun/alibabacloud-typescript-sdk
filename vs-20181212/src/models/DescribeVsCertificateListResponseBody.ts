// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsCertificateListResponseBodyCertificateListModelCertList extends $dara.Model {
  /**
   * @remarks
   * ID of the certificate.
   * 
   * @example
   * 6338888
   */
  certId?: number;
  /**
   * @remarks
   * Name of the certificate.
   * 
   * @example
   * cert-5391062
   */
  certName?: string;
  /**
   * @remarks
   * Common Name (CN) field in the certificate. Usually a domain name.
   * 
   * @example
   * example.aliyundoc.com
   */
  common?: string;
  /**
   * @remarks
   * Fingerprint of the certificate.
   * 
   * @example
   * 3EB2585309AE5C8F369****7CDA6A8F5CEC8B2D4
   */
  fingerprint?: string;
  /**
   * @remarks
   * Issuer of the certificate.
   * 
   * @example
   * xxxxCert Inc
   */
  issuer?: string;
  /**
   * @remarks
   * Timestamp.
   * 
   * @example
   * 1632462708
   */
  lastTime?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certName: 'CertName',
      common: 'Common',
      fingerprint: 'Fingerprint',
      issuer: 'Issuer',
      lastTime: 'LastTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      certName: 'string',
      common: 'string',
      fingerprint: 'string',
      issuer: 'string',
      lastTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponseBodyCertificateListModel extends $dara.Model {
  /**
   * @remarks
   * List of certificates.
   */
  certList?: DescribeVsCertificateListResponseBodyCertificateListModelCertList[];
  /**
   * @remarks
   * Number of certificates.
   * 
   * @example
   * 2
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: { 'type': 'array', 'itemType': DescribeVsCertificateListResponseBodyCertificateListModelCertList },
      count: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certList)) {
      $dara.Model.validateArray(this.certList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Certificate ID.
   */
  certificateListModel?: DescribeVsCertificateListResponseBodyCertificateListModel;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 6E310519-E035-51AB-80D4-C1CBECD39EB5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateListModel: 'CertificateListModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateListModel: DescribeVsCertificateListResponseBodyCertificateListModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certificateListModel && typeof (this.certificateListModel as any).validate === 'function') {
      (this.certificateListModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

