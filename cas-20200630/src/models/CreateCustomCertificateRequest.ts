// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage extends $dara.Model {
  /**
   * @remarks
   * The original name of the parameter is NonRepudiation.
   * 
   * @example
   * false
   */
  contentCommitment?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used for data encryption.
   * 
   * @example
   * false
   */
  dataEncipherment?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used only for data decryption.
   * 
   * @example
   * false
   */
  decipherOnly?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used for digital signing. If you set this parameter to true, the private key of the certificate can be used to generate digital signatures, and the public key of the certificate can be used to verify digital signatures.
   * 
   * @example
   * true
   */
  digitalSignature?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used only for data encryption.
   * 
   * @example
   * false
   */
  encipherOnly?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used for key agreement.
   * 
   * @example
   * false
   */
  keyAgreement?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used for data encipherment.
   * 
   * @example
   * false
   */
  keyEncipherment?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used for non-repudiation. This parameter is renamed ContentCommitment in the X.509 standard.
   * 
   * @example
   * false
   */
  nonRepudiation?: boolean;
  static names(): { [key: string]: string } {
    return {
      contentCommitment: 'ContentCommitment',
      dataEncipherment: 'DataEncipherment',
      decipherOnly: 'DecipherOnly',
      digitalSignature: 'DigitalSignature',
      encipherOnly: 'EncipherOnly',
      keyAgreement: 'KeyAgreement',
      keyEncipherment: 'KeyEncipherment',
      nonRepudiation: 'NonRepudiation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentCommitment: 'boolean',
      dataEncipherment: 'boolean',
      decipherOnly: 'boolean',
      digitalSignature: 'boolean',
      encipherOnly: 'boolean',
      keyAgreement: 'boolean',
      keyEncipherment: 'boolean',
      nonRepudiation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughExtensionsSubjectAlternativeNames extends $dara.Model {
  /**
   * @remarks
   * The type of the alias. Valid values:
   * 
   * *   rfc822Name: email address
   * *   dNSName: domain name
   * *   uniformResourceIdentifier: URI
   * *   iPAddress: IP address
   * 
   * This parameter is required.
   * 
   * @example
   * dNSName
   */
  type?: string;
  /**
   * @remarks
   * The alias that meets the requirement of a specified type.
   * 
   * @example
   * rfc822Name:
   * exmaple@certqa.cn
   * 
   * dNSName:
   * www.certqa.cn
   * 
   * uniformResourceIdentifier:
   * acs:ecs:regionid:15619224785*****:instance/i-bp1bzvz55uz27hf*****
   * 
   * iPAddress:
   * 127.0.0.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class CreateCustomCertificateRequestApiPassthroughExtensions extends $dara.Model {
  /**
   * @remarks
   * If it is a necessary parameter, the critical list contains the parameter name.
   */
  criticals?: string[];
  /**
   * @remarks
   * The extended key usage.
   */
  extendedKeyUsages?: string[];
  /**
   * @remarks
   * The key usage.
   */
  keyUsage?: CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage;
  /**
   * @remarks
   * The aliases of the entities.
   */
  subjectAlternativeNames?: CreateCustomCertificateRequestApiPassthroughExtensionsSubjectAlternativeNames[];
  static names(): { [key: string]: string } {
    return {
      criticals: 'Criticals',
      extendedKeyUsages: 'ExtendedKeyUsages',
      keyUsage: 'KeyUsage',
      subjectAlternativeNames: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criticals: { 'type': 'array', 'itemType': 'string' },
      extendedKeyUsages: { 'type': 'array', 'itemType': 'string' },
      keyUsage: CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage,
      subjectAlternativeNames: { 'type': 'array', 'itemType': CreateCustomCertificateRequestApiPassthroughExtensionsSubjectAlternativeNames },
    };
  }

  validate() {
    if(Array.isArray(this.criticals)) {
      $dara.Model.validateArray(this.criticals);
    }
    if(Array.isArray(this.extendedKeyUsages)) {
      $dara.Model.validateArray(this.extendedKeyUsages);
    }
    if(this.keyUsage && typeof (this.keyUsage as any).validate === 'function') {
      (this.keyUsage as any).validate();
    }
    if(Array.isArray(this.subjectAlternativeNames)) {
      $dara.Model.validateArray(this.subjectAlternativeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughSubjectCustomAttributes extends $dara.Model {
  /**
   * @remarks
   * Custom attribute type as:
   * 
   * - 2.5.4.6 : country
   * - 2.5.4.10 : organization
   * - 2.5.4.11 : organizational unit
   * - 2.5.4.12 : title
   * - 2.5.4.3 : common name
   * - 2.5.4.9 : street
   * - 2.5.4.5 : serial number
   * - 2.5.4.7 : locality
   * - 2.5.4.8 : state
   * - 1.3.6.1.4.1.37244.1.1 : Matter Operational Certificate - Node ID
   * - 1.3.6.1.4.1.37244.1.5 : Matter Operational Certificate - Fabric ID
   * - 1.3.6.1.4.1.37244.2.1 : Matter Device Attestation Certificate Vender ID (VID)
   * - 1.3.6.1.4.1.37244.2.2 : Matter Device Attestation Certificate Product ID (PID).
   * 
   * @example
   * 2.5.4.3
   */
  objectIdentifier?: string;
  /**
   * @remarks
   * Custom attribute value.
   * 
   * @example
   * Aliyun
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      objectIdentifier: 'ObjectIdentifier',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectIdentifier: 'string',
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

export class CreateCustomCertificateRequestApiPassthroughSubject extends $dara.Model {
  /**
   * @remarks
   * The common name of the certificate user.
   * 
   * @example
   * Bob
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country. The value is an alpha-2 country code that complies with the ISO 3166-1 standard. For more information about country codes, visit <https://www.iso.org/obp/ui/#search/code/>.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * Customize the Subject attributes of the certificate.
   */
  customAttributes?: CreateCustomCertificateRequestApiPassthroughSubjectCustomAttributes[];
  /**
   * @remarks
   * The name of the city in which the organization is located. The value can contain letters.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * XXX company
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department or branch in the organization.
   * 
   * @example
   * XXX department
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The name of the province or state in which the organization associated with the certificate is located.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      country: 'Country',
      customAttributes: 'CustomAttributes',
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
      customAttributes: { 'type': 'array', 'itemType': CreateCustomCertificateRequestApiPassthroughSubjectCustomAttributes },
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customAttributes)) {
      $dara.Model.validateArray(this.customAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthrough extends $dara.Model {
  /**
   * @remarks
   * The extensions of the certificate.
   */
  extensions?: CreateCustomCertificateRequestApiPassthroughExtensions;
  /**
   * @remarks
   * The serial number MUST be a positive integer assigned by the CA to each certificate.
   * 
   * @example
   * 16889526086333
   */
  serialNumber?: string;
  /**
   * @remarks
   * The name of the entity that uses the certificate.
   */
  subject?: CreateCustomCertificateRequestApiPassthroughSubject;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      serialNumber: 'SerialNumber',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: CreateCustomCertificateRequestApiPassthroughExtensions,
      serialNumber: 'string',
      subject: CreateCustomCertificateRequestApiPassthroughSubject,
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

export class CreateCustomCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The passthrough parameters.
   */
  apiPassthrough?: CreateCustomCertificateRequestApiPassthrough;
  /**
   * @remarks
   * The content of the CSR. You can generate a CSR by using the OpenSSL tool or the Keytool tool. For more information, see [How do I create a CSR file?](https://help.aliyun.com/document_detail/42218.html)
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----
   * MIIBczCCARgCAQAwgYoxFDASBgNVBAMMC2FsaXl1bi50ZXN0MQ0wCwYDVQQ
   * ...
   * ...
   * ...
   * vbIgMQIhAKHDWD6/WAMbtezAt4bysJ/BZIDz1jPWuUR5GV4TJ/mS
   * -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * include the CRL address.
   * 
   * - 0- No
   * - 1- Yes
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to immediately issue the certificate. Valid values:
   * 
   * *   0: asynchronously issues the certificate.
   * *   1: immediately issues the certificate.
   * *   2: immediately issues the certificate and returns the certificate chain.
   * 
   * @example
   * 0
   */
  immediately?: number;
  /**
   * @remarks
   * The identifier of the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ed4068c-6f1b-6deb-8e32-3f8439a851cb
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The validity period of the certificate. The value cannot exceed the validity period of the certificate instance. Relative time and absolute time are supported.
   * 
   * Units of relative time: year, month, and day.
   * 
   * *   Use y to specify years.
   * *   Use m to specify months.
   * *   Use d to specify days.
   * 
   * Absolute time: Use Greenwich Mean Time (GMT). Format: `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"`
   * 
   * *   Format of the end time: $NotAfter
   * *   Format of the start time and end time: $NotBefore/$NotAfter
   * 
   * This parameter is required.
   * 
   * @example
   * Relative time:
   *  ● 1y
   *  ● 3m
   *  ● 7d
   * Absolute time: 
   * ● 2006-01-02T15:04:05Z 
   * ● 2006-01-02T15:04:05Z/2023-03-09T17:48:13Z
   */
  validity?: string;
  static names(): { [key: string]: string } {
    return {
      apiPassthrough: 'ApiPassthrough',
      csr: 'Csr',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      parentIdentifier: 'ParentIdentifier',
      validity: 'Validity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPassthrough: CreateCustomCertificateRequestApiPassthrough,
      csr: 'string',
      enableCrl: 'number',
      immediately: 'number',
      parentIdentifier: 'string',
      validity: 'string',
    };
  }

  validate() {
    if(this.apiPassthrough && typeof (this.apiPassthrough as any).validate === 'function') {
      (this.apiPassthrough as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

