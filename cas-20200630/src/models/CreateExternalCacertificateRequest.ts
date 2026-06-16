// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExternalCACertificateRequestApiPassthroughExtensions extends $dara.Model {
  /**
   * @remarks
   * The extended key usages.
   */
  extendedKeyUsages?: string[];
  /**
   * @remarks
   * The certificate path length constraint. For an end-entity CA, set this parameter to 0. A value of 0 indicates the CA will issue end-entity certificates.
   * 
   * @example
   * 0
   */
  pathLenConstraint?: number;
  static names(): { [key: string]: string } {
    return {
      extendedKeyUsages: 'ExtendedKeyUsages',
      pathLenConstraint: 'PathLenConstraint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedKeyUsages: { 'type': 'array', 'itemType': 'string' },
      pathLenConstraint: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.extendedKeyUsages)) {
      $dara.Model.validateArray(this.extendedKeyUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalCACertificateRequestApiPassthroughSubject extends $dara.Model {
  /**
   * @remarks
   * The name of the CA certificate.
   * 
   * @example
   * Testing CA
   */
  commonName?: string;
  /**
   * @remarks
   * The two-letter country code (ISO 3166-1).
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The city or region.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The organization or company.
   * 
   * @example
   * Alibaba
   */
  organization?: string;
  /**
   * @remarks
   * The organizational subdivision, such as a department, team, project group, or branch.
   * 
   * @example
   * Cloud Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The state or province.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      country: 'Country',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      country: 'string',
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalCACertificateRequestApiPassthrough extends $dara.Model {
  /**
   * @remarks
   * Specifies the extensions for the CA certificate. If specified, these values override the corresponding extensions in the CSR or are added to the CA certificate.
   */
  extensions?: CreateExternalCACertificateRequestApiPassthroughExtensions;
  /**
   * @remarks
   * The subject information for the CA certificate. If specified, this value overwrites the SubjectDN from the CSR.
   */
  subject?: CreateExternalCACertificateRequestApiPassthroughSubject;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: CreateExternalCACertificateRequestApiPassthroughExtensions,
      subject: CreateExternalCACertificateRequestApiPassthroughSubject,
    };
  }

  validate() {
    if(this.extensions && typeof (this.extensions as any).validate === 'function') {
      (this.extensions as any).validate();
    }
    if(this.subject && typeof (this.subject as any).validate === 'function') {
      (this.subject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalCACertificateRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag\\"s key.
   * 
   * @example
   * database
   */
  key?: string;
  /**
   * @remarks
   * The tag\\"s value.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalCACertificateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies API parameters that override content from the CSR or add information to the CA certificate.
   */
  apiPassthrough?: CreateExternalCACertificateRequestApiPassthrough;
  certMaxTime?: number;
  /**
   * @remarks
   * The certificate signing request (CSR). The CSR can contain information such as the SubjectDN and custom extensions for the CA certificate. The CA generates the SubjectKeyIdentifier, AuthorityKeyIdentifier, and CRLDistributionPoints extensions, ignoring any corresponding values in the CSR.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----
   * MIIBczCCARgCAQAwgYoxFDASBgNVBAMMC2FsaXl1bi50ZXN0MQ0wCwYDVQQ
   * ...
   * vbIgMQIhAKHDWD6/WAMbtezAt4bysJ/BZIDz1jPWuUR5GV4TJ/mS
   * -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The ID of the external subordinate CA instance.
   * 
   * @example
   * cas_deposit-cn-1234abcd
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags to add to the certificate.
   */
  tags?: CreateExternalCACertificateRequestTags[];
  /**
   * @remarks
   * The certificate validity period. You can specify this using either relative or absolute time.
   * 
   * > Relative time: Supported units are year, month, and day.
   * 
   * - y - year
   * 
   * - m - month
   * 
   * - d - day
   * 
   * > Absolute time: Use GMT time in the `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"` format.
   * 
   * - To specify only the expiration time, use `$NotAfter`.
   * 
   * - To specify both the start and expiration times, use `$NotBefore/$NotAfter`.
   * 
   * @example
   * 10y
   */
  validity?: string;
  static names(): { [key: string]: string } {
    return {
      apiPassthrough: 'ApiPassthrough',
      certMaxTime: 'CertMaxTime',
      csr: 'Csr',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      validity: 'Validity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPassthrough: CreateExternalCACertificateRequestApiPassthrough,
      certMaxTime: 'number',
      csr: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateExternalCACertificateRequestTags },
      validity: 'string',
    };
  }

  validate() {
    if(this.apiPassthrough && typeof (this.apiPassthrough as any).validate === 'function') {
      (this.apiPassthrough as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

