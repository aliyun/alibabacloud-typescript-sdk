// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribleCertListResponseBodyCertList extends $dara.Model {
  certIdentifier?: string;
  /**
   * @example
   * www.aliyun.com
   */
  common?: string;
  /**
   * @example
   * false
   */
  domainRelated?: boolean;
  /**
   * @example
   * 2020-09-23
   */
  endDate?: string;
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * DigiCert Inc
   */
  issuer?: string;
  /**
   * @example
   * testCertName
   */
  name?: string;
  /**
   * @example
   * 2019-09-24
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      common: 'Common',
      domainRelated: 'DomainRelated',
      endDate: 'EndDate',
      id: 'Id',
      issuer: 'Issuer',
      name: 'Name',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      common: 'string',
      domainRelated: 'boolean',
      endDate: 'string',
      id: 'number',
      issuer: 'string',
      name: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleCertListResponseBody extends $dara.Model {
  certList?: DescribleCertListResponseBodyCertList[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: { 'type': 'array', 'itemType': DescribleCertListResponseBodyCertList },
      requestId: 'string',
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

