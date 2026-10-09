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
   * The certificate path length constraint. For an EndEntity CA, this value must be set to 0, which means the current CA certificate is used to issue end entity certificates.
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
   * The name of the current CA certificate.
   * 
   * @example
   * Testing CA
   */
  commonName?: string;
  /**
   * @remarks
   * The country. Uses the ISO 3166-1 two-letter country code.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The city or locality.
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
   * The organizational unit within the organization, such as a department, team, project group, or branch.
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
   * The CA certificate extensions. If this value is specified, it overrides the extension values in the CSR or adds them to the CA certificate extensions.
   */
  extensions?: CreateExternalCACertificateRequestApiPassthroughExtensions;
  /**
   * @remarks
   * The subject information of the CA certificate. If this value is specified, it overrides the SubjectDN in the CSR.
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
   * The tag key.
   * 
   * @example
   * database
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * Overrides CSR content or adds content to the CA certificate through API parameters.
   */
  apiPassthrough?: CreateExternalCACertificateRequestApiPassthrough;
  /**
   * @remarks
   * The maximum validity period for issued certificates, as specified by the certMaxTime of the CA. Unit: days.
   * 
   * @example
   * 30
   */
  certMaxTime?: number;
  /**
   * @remarks
   * The certificate signing request. The CSR can contain the SubjectDN and custom extensions of the CA certificate. The SubjectKeyIdentifier, AuthorityKeyIdentifier, and CRLDistributionPoints certificate extensions are generated by the CA, and the values in the CSR are ignored.
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
   * The instance ID of the external subordinate CA instance to activate.
   * 
   * @example
   * cas_deposit-cn-1234abcd
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateExternalCACertificateRequestTags[];
  /**
   * @remarks
   * The certificate validity period. Both relative time and absolute time are supported.
   * 
   * > Relative time: Supports the units of year, month, and day.
   * 
   * - Year - y
   * - Month - m
   * - Day - d
   * 
   * > Absolute time: Uses GMT time. Format: `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"`
   * 
   * - Specify the end time - `$NotAfter`
   * - Specify the start time and end time - `$NotBefore/$NotAfter`
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

