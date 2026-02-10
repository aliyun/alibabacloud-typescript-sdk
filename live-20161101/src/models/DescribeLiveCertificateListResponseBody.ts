// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveCertificateListResponseBodyCertificateListModelCertListCert extends $dara.Model {
  certId?: number;
  certName?: string;
  common?: string;
  fingerprint?: string;
  issuer?: string;
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

export class DescribeLiveCertificateListResponseBodyCertificateListModelCertList extends $dara.Model {
  cert?: DescribeLiveCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeLiveCertificateListResponseBodyCertificateListModelCertListCert },
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

export class DescribeLiveCertificateListResponseBodyCertificateListModel extends $dara.Model {
  certList?: DescribeLiveCertificateListResponseBodyCertificateListModelCertList;
  /**
   * @remarks
   * The number of certificates.
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
      certList: DescribeLiveCertificateListResponseBodyCertificateListModelCertList,
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

export class DescribeLiveCertificateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details.
   */
  certificateListModel?: DescribeLiveCertificateListResponseBodyCertificateListModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
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
      certificateListModel: DescribeLiveCertificateListResponseBodyCertificateListModel,
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

