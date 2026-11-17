// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSM2CertRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * test-sm2
   */
  certName?: string;
  /**
   * @remarks
   * The content of the ShangMi certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * ***
   * -----END CERTIFICATE-----
   */
  encryptCertificate?: string;
  /**
   * @remarks
   * The content of the private key for the ShangMi certificate.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   * ***
   * -----END PRIVATE KEY-----
   */
  encryptPrivateKey?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The content of the signing certificate for the ShangMi certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * ***
   * -----END CERTIFICATE-----
   */
  signCertificate?: string;
  /**
   * @remarks
   * The content of the private key for the signing certificate of the ShangMi certificate.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   * ***
   * -----END PRIVATE KEY-----
   */
  signPrivateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      encryptCertificate: 'EncryptCertificate',
      encryptPrivateKey: 'EncryptPrivateKey',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      signCertificate: 'SignCertificate',
      signPrivateKey: 'SignPrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      encryptCertificate: 'string',
      encryptPrivateKey: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      signCertificate: 'string',
      signPrivateKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

