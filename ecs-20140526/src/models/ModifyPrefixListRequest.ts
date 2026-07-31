// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrefixListRequestAddEntry extends $dara.Model {
  /**
   * @remarks
   * The Classless Inter-Domain Routing (CIDR) block of the prefix list entry to add. Valid values of N: 0 to 200.
   * 
   * Take note of the following items:
   * - The total number of entries in the prefix list cannot exceed the maximum number of entries supported by the prefix list. You can invoke [DescribePrefixListAttributes](https://help.aliyun.com/document_detail/205872.html) to query the maximum number of entries supported by a specified prefix list.
   * - Duplicate CIDR blocks are not allowed in Settings.
   * - The value cannot be the same as the value of the `RemoveEntry.N.Cidr` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.2.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the prefix list entry. The description must be 2 to 32 characters in length and cannot start with `http://` or `https://`. Valid values of N: 0 to 200.
   * 
   * @example
   * Description Sample 01
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrefixListRequestRemoveEntry extends $dara.Model {
  /**
   * @remarks
   * The Classless Inter-Domain Routing (CIDR) block of the prefix list entry to delete. Valid values of N: 0 to 200.
   * 
   * Take note of the following items:
   * - Duplicate CIDR blocks are not allowed in Settings.
   * - The value cannot be the same as the value of the `AddEntry.N.Cidr` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrefixListRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix list entries to add.
   */
  addEntry?: ModifyPrefixListRequestAddEntry[];
  /**
   * @remarks
   * The description of the prefix list. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The prefix list ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The name of the prefix list. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with `http://`, `https://`, `com.aliyun`, or `com.alibabacloud`. It can contain letters, Chinese characters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * PrefixListNameSample
   */
  prefixListName?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The prefix list entries to delete.
   */
  removeEntry?: ModifyPrefixListRequestRemoveEntry[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addEntry: 'AddEntry',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      prefixListId: 'PrefixListId',
      prefixListName: 'PrefixListName',
      regionId: 'RegionId',
      removeEntry: 'RemoveEntry',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addEntry: { 'type': 'array', 'itemType': ModifyPrefixListRequestAddEntry },
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      prefixListId: 'string',
      prefixListName: 'string',
      regionId: 'string',
      removeEntry: { 'type': 'array', 'itemType': ModifyPrefixListRequestRemoveEntry },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addEntry)) {
      $dara.Model.validateArray(this.addEntry);
    }
    if(Array.isArray(this.removeEntry)) {
      $dara.Model.validateArray(this.removeEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

