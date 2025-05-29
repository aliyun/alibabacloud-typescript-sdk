// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePrefixListRequestEntry } from "./CreatePrefixListRequestEntry";
import { CreatePrefixListRequestTag } from "./CreatePrefixListRequestTag";


export class CreatePrefixListRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address family. Valid values:
   * 
   * *   IPv4
   * *   IPv6
   * 
   * This parameter is required.
   * 
   * @example
   * IPv4
   */
  addressFamily?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the prefix list. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The details of entries in the prefix list.
   */
  entry?: CreatePrefixListRequestEntry[];
  /**
   * @remarks
   * The maximum number of entries that the prefix list can contain. Valid values: 1 to 200.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxEntries?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the prefix list. The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). It must start with a letter and cannot start with `http://`, `https://`, `com.aliyun`, or `com.alibabacloud`.
   * 
   * This parameter is required.
   * 
   * @example
   * PrefixListNameSample
   */
  prefixListName?: string;
  /**
   * @remarks
   * The ID of the region in which to create the prefix list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the prefix list.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags to add to the prefix list.
   */
  tag?: CreatePrefixListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      addressFamily: 'AddressFamily',
      clientToken: 'ClientToken',
      description: 'Description',
      entry: 'Entry',
      maxEntries: 'MaxEntries',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      prefixListName: 'PrefixListName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFamily: 'string',
      clientToken: 'string',
      description: 'string',
      entry: { 'type': 'array', 'itemType': CreatePrefixListRequestEntry },
      maxEntries: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      prefixListName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreatePrefixListRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.entry)) {
      $dara.Model.validateArray(this.entry);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

