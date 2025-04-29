// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKeyPairsRequestTag } from "./DescribeKeyPairsRequestTag";


export class DescribeKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include PublicKey in the response. Default value: false.
   * 
   * @example
   * false
   */
  includePublicKey?: boolean;
  /**
   * @remarks
   * The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see [RFC 4716](https://tools.ietf.org/html/rfc4716).
   * 
   * @example
   * ABC1234567
   */
  keyPairFingerPrint?: string;
  /**
   * @remarks
   * The name of the key pair. You can use the asterisk (\\*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
   * 
   * *   `*SshKey`: queries key pairs whose names end with SshKey, including the key pair named SshKey.
   * *   `SshKey*`: queries key pairs whose names start with SshKey, including the key pair named SshKey.
   * *   `*SshKey*`: queries key pairs whose names include SshKey, including the key pair named SshKey.
   * *   `SshKey`: queries the key pair named SshKey.
   * 
   * @example
   * *SshKey*
   */
  keyPairName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the key pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
   * 
   * >  Resources in the default resource group are displayed in the response regardless of how this parameter is set.
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

