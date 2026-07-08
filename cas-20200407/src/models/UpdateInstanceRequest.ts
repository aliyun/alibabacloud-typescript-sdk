// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values for N: **1** to **20**. If you specify this value, it cannot be an empty string.
   * 
   * It can contain up to 64 characters. It cannot start with `aliyun` or `acs:`, and it cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values for N: **1** to **20**. If you specify this value, it can be an empty string.
   * 
   * It can contain up to 128 characters. It cannot start with `aliyun` or `acs:`, and it cannot contain `http://` or `https://`.
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
   * Whether to enable automatic management.
   * 
   * - enable: enabled
   * 
   * - disable: disabled
   * 
   * @example
   * enable
   */
  autoReissue?: string;
  /**
   * @remarks
   * The name of the instance. When issuing a certificate, this value serves as the default certificate name.
   * 
   * @example
   * 123
   */
  certificateName?: string;
  /**
   * @remarks
   * The city where the company or organization of the certificate requester is located. Required when generating a CSR for a DV certificate. Default value: Beijing.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * The company information ID. Required for OV and EV certificates. Otherwise, you cannot call ApplyCertificate to request a certificate.
   * 
   * @example
   * 44211
   */
  companyId?: number;
  /**
   * @remarks
   * The list of contact IDs. You must specify at least one contact. Otherwise, you cannot call ApplyCertificate to request a certificate.
   */
  contactIdList?: number[];
  /**
   * @remarks
   * The country or region code of the certificate organization. For example, CN represents China, and US represents the United States. Required when generating a CSR for a DV certificate. Default value: CN.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The CSR content. You can generate a CSR using OpenSSL or Keytool. For more information, see [How to create a CSR file](https://help.aliyun.com/document_detail/42218.html).
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The domain name to bind to the certificate. Requirements are as follows:
   * 
   * - Supports single domain names or wildcard domain names (for example, `*.aliyundoc.com`).
   * 
   * - Supports multiple domain names. Separate multiple domain names with commas (,). The first domain determines whether a free domain is included.
   * 
   * >Notice: 
   * 
   * If you bind multiple domain names to the certificate, this parameter is required. This parameter and the **Csr** parameter cannot both be empty. If you set both parameters, the system uses the **CN** field value from the **Csr** as the domain name for the certificate.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * The CSR generation method. Default value: online.
   * 
   * - online: The system generates the CSR. The Csr field is ignored.
   * 
   * - upload: You upload the CSR. The Csr field is required.
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
   * The certificate algorithm. Default value: RSA_2048.
   * 
   * - **RSA_2048**
   * 
   * - **RSA_3072**
   * 
   * - **RSA_4096**
   * 
   * - **ECC_256**
   * 
   * - **SM2**
   * 
   * @example
   * RSA_2048
   */
  keyAlgorithm?: string;
  /**
   * @remarks
   * The province or region where the company is located. Required when generating a CSR for a DV certificate. Default value: Beijing.
   * 
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: UpdateInstanceRequestTags[];
  /**
   * @remarks
   * The certificate validation method.
   * 
   * - DNS: DNS validation using TXT or CNAME records.
   * 
   * - HTTP: File-based validation.
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

