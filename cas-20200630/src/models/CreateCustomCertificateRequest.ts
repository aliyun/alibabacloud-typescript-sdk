// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage extends $dara.Model {
  /**
   * @remarks
   * Content commitment. Formerly known as NonRepudiation. Allows the certificate key to be used for content commitment.
   * 
   * @example
   * false
   */
  contentCommitment?: boolean;
  /**
   * @remarks
   * Data encipherment.
   * 
   * @example
   * false
   */
  dataEncipherment?: boolean;
  /**
   * @remarks
   * When KeyAgreement is true, this marks that the certificate key can only be used for decryption.
   * 
   * @example
   * false
   */
  decipherOnly?: boolean;
  /**
   * @remarks
   * Digital signature. Allows the private key of the certificate to be used for digital signatures and the public key to be used to verify digital signatures.
   * 
   * @example
   * true
   */
  digitalSignature?: boolean;
  /**
   * @remarks
   * When KeyAgreement is true, this marks that the certificate key can only be used for encryption.
   * 
   * @example
   * false
   */
  encipherOnly?: boolean;
  /**
   * @remarks
   * Key agreement.
   * 
   * @example
   * false
   */
  keyAgreement?: boolean;
  /**
   * @remarks
   * Key encipherment. Allows the certificate key to be used to encrypt other keys.
   * 
   * @example
   * false
   */
  keyEncipherment?: boolean;
  /**
   * @remarks
   * Non-repudiation. This has been renamed to ContentCommitment in the X.509 standard.
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
   * The following values are allowed:
   * 
   * - rfc822Name - Email address
   * 
   * - dNSName - Domain name
   * 
   * - uniformResourceIdentifier - Uniform Resource Identifier (URI)
   * 
   * - iPAddress - IP address
   * 
   * This parameter is required.
   * 
   * @example
   * dNSName
   */
  type?: string;
  /**
   * @remarks
   * A value that matches the specified Type.
   * 
   * @example
   * rfc822Name:
   * example.aliyundoc.com
   * 
   * dNSName:
   * learn.aliyundoc.com
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
   * If an extension is critical, its name is included in the criticals list.
   */
  criticals?: string[];
  /**
   * @remarks
   * The extended key usages.
   */
  extendedKeyUsages?: string[];
  /**
   * @remarks
   * The key usage.
   */
  keyUsage?: CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage;
  /**
   * @remarks
   * The subject alternative names (SANs) of the certificate.
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
   * The key of the custom property. It must comply with industry standards. Examples:
   * 
   * - 2.5.4.6: Country code
   * 
   * - 2.5.4.10: Organization
   * 
   * - 2.5.4.11: Organizational unit name
   * 
   * - 2.5.4.12: Title
   * 
   * - 2.5.4.3: Common name
   * 
   * - 2.5.4.9: Street
   * 
   * - 2.5.4.5: Serial number
   * 
   * - 2.5.4.7: Locality
   * 
   * - 2.5.4.8: State or province
   * 
   * - 1.3.6.1.4.1.37244.1.1: Matter certificate - Node ID
   * 
   * - 1.3.6.1.4.1.37244.1.5: Matter certificate - Fabric ID
   * 
   * - 1.3.6.1.4.1.37244.2.1: Matter certificate Vendor ID (VID)
   * 
   * - 1.3.6.1.4.1.37244.2.2: Matter certificate Product ID (PID)
   * 
   * @example
   * 2.5.4.3
   */
  objectIdentifier?: string;
  /**
   * @remarks
   * The value of the custom property.
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
   * 张三
   */
  commonName?: string;
  /**
   * @remarks
   * The country code. Use the two-letter country code from ISO 3166-1. For more information, see [ISO](https://www.iso.org/obp/ui/#search/code/).
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The custom subject properties of the certificate.
   */
  customAttributes?: CreateCustomCertificateRequestApiPassthroughSubjectCustomAttributes[];
  /**
   * @remarks
   * The name of the city where the organization is located. Chinese characters and letters are supported.
   * 
   * @example
   * 杭州市
   */
  locality?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * XXX公司
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department or branch within the organization.
   * 
   * @example
   * XXX部门
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The province or state where the organization is located.
   * 
   * @example
   * 浙江省
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
   * The certificate extensions.
   */
  extensions?: CreateCustomCertificateRequestApiPassthroughExtensions;
  /**
   * @remarks
   * The custom serial number of the certificate. Must be a long integer.
   * 
   * @example
   * 16889526086333
   */
  serialNumber?: string;
  /**
   * @remarks
   * The certificate subject.
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

export class CreateCustomCertificateRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
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

export class CreateCustomCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * Pass-through parameters.
   */
  apiPassthrough?: CreateCustomCertificateRequestApiPassthrough;
  /**
   * @remarks
   * The content of the CSR. You can generate a CSR using tools such as OpenSSL or Keytool. For more information, see [Create a CSR file](https://help.aliyun.com/document_detail/42218.html).
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
   * Specifies whether to include a CRL address.
   * 
   * - 0 - No
   * 
   * - 1 - Yes
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Obtain the certificate immediately.
   * 
   * - 0 - Issue the certificate asynchronously.
   * 
   * - 1 - Issue the certificate immediately.
   * 
   * - 2 - Issue the certificate immediately and return the CA certificate chain.
   * 
   * @example
   * 0
   */
  immediately?: number;
  /**
   * @remarks
   * The identifier of the CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ed4068c-6f1b-6deb-8e32-3f8439a851cb
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The ID of the resource group. You can obtain this ID by calling the [ListResources](https://help.aliyun.com/document_detail/2716559.html) operation.
   * 
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateCustomCertificateRequestTags[];
  /**
   * @remarks
   * The validity period of the certificate. This period cannot exceed the validity period of the instance. You can use relative time or absolute time.
   * 
   * Relative time: Supports years, months, and days.
   * 
   * - Year - y
   * 
   * - Month - m
   * 
   * - Day - d
   * 
   * Absolute time: Uses GMT. Format: `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"`
   * 
   * - Specify the end time - $NotAfter
   * 
   * - Specify the start and end times - $NotBefore/$NotAfter
   * 
   * This parameter is required.
   * 
   * @example
   * 相对时间：
   * ● 1y
   * ● 3m
   * ● 7d
   * 
   * 绝对时间：
   * ● 2006-01-02T15:04:05Z
   * ● 2006-01-02T15:04:05Z/2023-03-09T17:48:13Z
   */
  validity?: string;
  /**
   * @remarks
   * A custom identifier.
   * 
   * @example
   * XXX068c-6f1b-6deb-8e32-3f8439a8XXX
   */
  customIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      apiPassthrough: 'ApiPassthrough',
      csr: 'Csr',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      parentIdentifier: 'ParentIdentifier',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      validity: 'Validity',
      customIdentifier: 'customIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPassthrough: CreateCustomCertificateRequestApiPassthrough,
      csr: 'string',
      enableCrl: 'number',
      immediately: 'number',
      parentIdentifier: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateCustomCertificateRequestTags },
      validity: 'string',
      customIdentifier: 'string',
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

