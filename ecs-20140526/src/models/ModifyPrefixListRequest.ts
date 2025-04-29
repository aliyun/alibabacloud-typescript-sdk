// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyPrefixListRequestAddEntry } from "./ModifyPrefixListRequestAddEntry";
import { ModifyPrefixListRequestRemoveEntry } from "./ModifyPrefixListRequestRemoveEntry";


export class ModifyPrefixListRequest extends $dara.Model {
  /**
   * @remarks
   * The entries to be added to the prefix list.
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
   * The ID of the prefix list.
   * 
   * This parameter is required.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The name of the prefix list. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://`, `https://`, `com.aliyun`, or `com.alibabacloud`. The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * PrefixListNameSample
   */
  prefixListName?: string;
  /**
   * @remarks
   * The region ID of the prefix list. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The entries to be deleted from the prefix list.
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

