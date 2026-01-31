// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequestTags extends $dara.Model {
  /**
   * @example
   * test
   */
  tagKey?: string;
  /**
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
   * @example
   * enable
   */
  autoReissue?: string;
  /**
   * @example
   * 123
   */
  certificateName?: string;
  /**
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @example
   * 44211
   */
  companyId?: number;
  contactIdList?: number[];
  /**
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @example
   * online
   */
  generateCsrMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cas-cn-68n1mm16****
   */
  instanceId?: string;
  /**
   * @example
   * RSA_2048
   */
  keyAlgorithm?: string;
  /**
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  tags?: UpdateInstanceRequestTags[];
  /**
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

