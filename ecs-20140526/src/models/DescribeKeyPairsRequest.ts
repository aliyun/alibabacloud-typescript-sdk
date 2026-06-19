// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKeyPairsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the key pair. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1000. If you use multiple tags to filter resources, the resource count of resources that are attached with all specified tags cannot exceed 1000. If the resource count exceeds 1000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the key pair. Valid values of N: 1 to 20.
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

export class DescribeKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include PublicKey in the response.
   * Default value: false.
   * 
   * @example
   * false
   */
  includePublicKey?: boolean;
  /**
   * @remarks
   * The fingerprint of the key pair. The fingerprint uses the message-digest algorithm 5 (MD5) based on the public key fingerprint format defined in RFC 4716. For more information, see [RFC 4716](https://tools.ietf.org/html/rfc4716).
   * 
   * @example
   * ABC1234567
   */
  keyPairFingerPrint?: string;
  /**
   * @remarks
   * The name of the key pair. You can use regular expressions for fuzzy search, with the asterisk (*) to match child table expressions. Examples:
   * 
   * - `*SshKey`: searches for key pair names that end with SshKey, including SshKey.
   * - `SshKey*`: searches for key pair names that start with SshKey, including SshKey.
   * - `*SshKey*`: searches for key pair names that contain SshKey, including SshKey.
   * - `SshKey`: exact match of SshKey.
   * 
   * @example
   * *SshKey*
   */
  keyPairName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the key pair list. Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in paging queries. Settings: Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the key pairs. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the key pairs belong. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * >Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-amnhr7u7c7hj****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeKeyPairsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      includePublicKey: 'IncludePublicKey',
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairName: 'KeyPairName',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includePublicKey: 'boolean',
      keyPairFingerPrint: 'string',
      keyPairName: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeKeyPairsRequestTag },
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

