// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**. If you specify this parameter, the value cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values of N: **1** to **20**. If you specify this parameter, the value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic hosting. Valid values:
   * - enable: Enabled.
   * - disable: Disabled.
   * 
   * @example
   * enable
   */
  autoReissue?: string;
  /**
   * @remarks
   * The name of the instance. When a certificate is issued, this name is used as the default name of the certificate.
   * 
   * @example
   * 123
   */
  certificateName?: string;
  /**
   * @remarks
   * The city where the company or organization of the certificate purchaser is located. This field is required when generating a CSR for a DV certificate. Default value: Beijing.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * The company information ID. This parameter is required for OV and EV certificates. Otherwise, you cannot call the ApplyCertificate operation to apply for a certificate.
   * 
   * @example
   * 44211
   */
  companyId?: number;
  /**
   * @remarks
   * The list of contact IDs. If a contact already exists, you do not need to specify this parameter. If no contact has been configured, specify at least one contact ID. Otherwise, you cannot call the ApplyCertificate operation to apply for a certificate.
   */
  contactIdList?: number[];
  /**
   * @remarks
   * The country or region code of the certificate organization. For example, CN indicates China and US indicates the United States. This field is required when generating a CSR for a DV certificate. Default value: CN.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The CSR content. You can use OpenSSL or Keytool to generate a CSR. For more information, see [How do I create a CSR file?](https://help.aliyun.com/document_detail/42218.html).
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The domain name to which the certificate is bound. Requirements:
   * 
   * - You can specify a single domain name or a wildcard domain name (for example, `*.aliyundoc.com`).
   * - You can specify multiple domain names. Separate multiple domain names with commas (,). Whether a free domain name is included is determined based on the first domain name.
   * 
   * >Notice:  
   * 
   * When the certificate is bound to multiple domain names, this parameter is required. This parameter and the **Csr** parameter cannot both be empty. If you specify both this parameter and the **Csr** parameter, the **CN** field value in the **Csr** parameter is used as the domain name to which the certificate is bound.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * The method used to generate the certificate signing request (CSR). Default value: online. Valid values:
   * - online: The system generates the CSR. The Csr parameter is ignored.
   * - upload: You upload the CSR. The Csr parameter is required.
   * 
   * @example
   * online
   */
  generateCsrMethod?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cas-cn-68n1mm16****
   */
  instanceId?: string;
  /**
   * @remarks
   * The certificate algorithm. Default value: RSA_2048. Valid values:
   * - **RSA_2048**
   * - **RSA_3072**
   * - **RSA_4096**
   * - **ECC_256**
   * - **SM2**
   * 
   * @example
   * RSA_2048
   */
  keyAlgorithm?: string;
  /**
   * @remarks
   * The province or region where the company is located. This field is required when generating a CSR for a DV certificate. Default value: Beijing.
   * 
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: UpdateInstanceRequestTags[];
  /**
   * @remarks
   * The validation method for the certificate application. Valid values:
   * - DNS: DNS validation, which uses TXT or CNAME records.
   * - HTTP: File validation.
   * 
   * @example
   * DNS
   */
  validationMethod?: string;
  static names(): { [key: string]: string } {
    return {
      autoReissue: 'AutoReissue',
      certificateName: 'CertificateName',
      city: 'City',
      companyId: 'CompanyId',
      contactIdList: 'ContactIdList',
      countryCode: 'CountryCode',
      csr: 'Csr',
      domain: 'Domain',
      generateCsrMethod: 'GenerateCsrMethod',
      instanceId: 'InstanceId',
      keyAlgorithm: 'KeyAlgorithm',
      province: 'Province',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      validationMethod: 'ValidationMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReissue: 'string',
      certificateName: 'string',
      city: 'string',
      companyId: 'number',
      contactIdList: { 'type': 'array', 'itemType': 'number' },
      countryCode: 'string',
      csr: 'string',
      domain: 'string',
      generateCsrMethod: 'string',
      instanceId: 'string',
      keyAlgorithm: 'string',
      province: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': UpdateInstanceRequestTags },
      validationMethod: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactIdList)) {
      $dara.Model.validateArray(this.contactIdList);
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

