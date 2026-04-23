// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodCertificateListResponseBodyCertificateListModelCertListCert extends $dara.Model {
  algorithm?: string;
  certId?: number;
  certIdentifier?: string;
  certName?: string;
  common?: string;
  createTime?: number;
  domainMatchCert?: boolean;
  endTime?: number;
  fingerprint?: string;
  instanceId?: string;
  issuer?: string;
  lastTime?: number;
  signAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certId: 'CertId',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      common: 'Common',
      createTime: 'CreateTime',
      domainMatchCert: 'DomainMatchCert',
      endTime: 'EndTime',
      fingerprint: 'Fingerprint',
      instanceId: 'InstanceId',
      issuer: 'Issuer',
      lastTime: 'LastTime',
      signAlgorithm: 'SignAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certId: 'number',
      certIdentifier: 'string',
      certName: 'string',
      common: 'string',
      createTime: 'number',
      domainMatchCert: 'boolean',
      endTime: 'number',
      fingerprint: 'string',
      instanceId: 'string',
      issuer: 'string',
      lastTime: 'number',
      signAlgorithm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodCertificateListResponseBodyCertificateListModelCertList extends $dara.Model {
  cert?: DescribeVodCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeVodCertificateListResponseBodyCertificateListModelCertListCert },
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

export class DescribeVodCertificateListResponseBodyCertificateListModel extends $dara.Model {
  certList?: DescribeVodCertificateListResponseBodyCertificateListModelCertList;
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
      certList: DescribeVodCertificateListResponseBodyCertificateListModelCertList,
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

export class DescribeVodCertificateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about each certificate.
   */
  certificateListModel?: DescribeVodCertificateListResponseBodyCertificateListModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FC0E34AC-0239-44A7-****-800DE522C8DA
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
      certificateListModel: DescribeVodCertificateListResponseBodyCertificateListModel,
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

