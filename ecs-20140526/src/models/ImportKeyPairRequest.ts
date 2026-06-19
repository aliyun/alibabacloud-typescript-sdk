// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKeyPairRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the key pair. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the key pair. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length. It cannot contain http:// or https://.
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

export class ImportKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair. The name must be unique. The name must be 2 to 128 characters in length and must start with a letter or Chinese character. It cannot start with http:// or https://. The name can contain characters that are categorized as letter in Unicode, including letters, Chinese characters, and digits. The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The public key of the key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * ABC1234567
   */
  publicKeyBody?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the SSH key pair belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: ImportKeyPairRequestTag[];
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      ownerId: 'OwnerId',
      publicKeyBody: 'PublicKeyBody',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      ownerId: 'number',
      publicKeyBody: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': ImportKeyPairRequestTag },
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

