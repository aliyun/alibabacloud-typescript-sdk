// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExternalCACertificateShrinkRequestTags extends $dara.Model {
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

export class CreateExternalCACertificateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies API parameters that override content from the CSR or add information to the CA certificate.
   */
  apiPassthroughShrink?: string;
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
  tags?: CreateExternalCACertificateShrinkRequestTags[];
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
      apiPassthroughShrink: 'ApiPassthrough',
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
      apiPassthroughShrink: 'string',
      certMaxTime: 'number',
      csr: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateExternalCACertificateShrinkRequestTags },
      validity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

