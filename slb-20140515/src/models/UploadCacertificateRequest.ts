// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCACertificateRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag key cannot be an empty string. The tag key can be up to 128 characters in length, and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string. The tag value must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * FinanceJoshua
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

export class UploadCACertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  CACertificate?: string;
  /**
   * @remarks
   * The CA certificate name.
   * 
   * @example
   * mycacert01
   */
  CACertificateName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the CA certificates.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2401682.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rto*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * UploadCACertificate
   */
  tag?: UploadCACertificateRequestTag[];
  static names(): { [key: string]: string } {
    return {
      CACertificate: 'CACertificate',
      CACertificateName: 'CACertificateName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificate: 'string',
      CACertificateName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': UploadCACertificateRequestTag },
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

