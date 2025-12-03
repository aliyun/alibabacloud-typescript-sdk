// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadServerCertificateRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1 to 20**. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` and `acs:`.
   * 
   * @example
   * TestValue
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

export class UploadServerCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * AliCloud certificate ID.
   * 
   * @example
   * 775****
   */
  aliCloudCertificateId?: string;
  /**
   * @remarks
   * AliCloud certificate name.
   * 
   * @example
   * cloudcertificate
   */
  aliCloudCertificateName?: string;
  /**
   * @remarks
   * The region ID of AliCloud certificate.
   * 
   * @example
   * cn-hangzhou
   */
  aliCloudCertificateRegionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MIIEogIB****** -----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rto****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The server certificate to be uploaded.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIGDTCC****** -----END CERTIFICATE-----
   */
  serverCertificate?: string;
  /**
   * @remarks
   * The name of the server certificate.
   * 
   * The name must be 1 to 80 characters in length. It must start with an English letter. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * mycert01
   */
  serverCertificateName?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: UploadServerCertificateRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aliCloudCertificateId: 'AliCloudCertificateId',
      aliCloudCertificateName: 'AliCloudCertificateName',
      aliCloudCertificateRegionId: 'AliCloudCertificateRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateKey: 'PrivateKey',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificate: 'ServerCertificate',
      serverCertificateName: 'ServerCertificateName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCloudCertificateId: 'string',
      aliCloudCertificateName: 'string',
      aliCloudCertificateRegionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateKey: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificate: 'string',
      serverCertificateName: 'string',
      tag: { 'type': 'array', 'itemType': UploadServerCertificateRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

