// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * yourCertldentifier
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * yourCertName
   */
  certName?: string;
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * yourCertCommon
   */
  common?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * yourCertIssuer
   */
  issuer?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      common: 'Common',
      issuer: 'Issuer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      certName: 'string',
      common: 'string',
      issuer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList extends $dara.Model {
  cert?: DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert },
    };
  }

  validate() {
    if(Array.isArray(this.cert)) {
      $dara.Model.validateArray(this.cert);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSMCertificateListResponseBodyCertificateListModel extends $dara.Model {
  /**
   * @remarks
   * The list of certificates.
   */
  certList?: DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList;
  /**
   * @remarks
   * The number of certificates that are returned.
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
      certList: DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
    };
  }

  validate() {
    if(this.certList && typeof (this.certList as any).validate === 'function') {
      (this.certList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSMCertificateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the certificate information.
   */
  certificateListModel?: DescribeCdnSMCertificateListResponseBodyCertificateListModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC0E34AC-0239-44A7-AB0E-800DE522C8DC
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
      certificateListModel: DescribeCdnSMCertificateListResponseBodyCertificateListModel,
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

