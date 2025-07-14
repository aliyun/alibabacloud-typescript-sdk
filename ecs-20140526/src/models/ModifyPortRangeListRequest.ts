// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPortRangeListRequestAddEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the port range in entry N. The description must be 2 to 32 characters in length and cannot start with http:// or https://. Valid values of N: 0 to 200.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The port range in entry N. Valid values of N: 0 to 200. Take note of the following limits:
   * 
   * *   The total number of entries in the port list cannot exceed the `MaxEntries` value.
   * *   `PortRange` in different entries cannot be duplicated.
   * *   The value of this parameter cannot be the same as the value of `RemoveEntry.N.PortRange`.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      portRange: 'PortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPortRangeListRequestRemoveEntry extends $dara.Model {
  /**
   * @remarks
   * The port range in entry N. Valid values of N: 0 to 200. Take note of the following limits:
   * 
   * *   `PortRange` in different entries cannot be duplicated.
   * *   The value of this parameter cannot be the same as the value of `AddEntry.N.PortRange`.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  static names(): { [key: string]: string } {
    return {
      portRange: 'PortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPortRangeListRequest extends $dara.Model {
  /**
   * @remarks
   * The entries that you want to add or modify for the port list.
   */
  addEntry?: ModifyPortRangeListRequestAddEntry[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the port list. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * This is description.
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the port list.
   * 
   * This parameter is required.
   * 
   * @example
   * prl-2ze9743****
   */
  portRangeListId?: string;
  /**
   * @remarks
   * The name of the port list. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * PortRangeListNameSample
   */
  portRangeListName?: string;
  /**
   * @remarks
   * The region ID of the port list. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The entries that you want to remove from the port list.
   */
  removeEntry?: ModifyPortRangeListRequestRemoveEntry[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addEntry: 'AddEntry',
      clientToken: 'ClientToken',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portRangeListId: 'PortRangeListId',
      portRangeListName: 'PortRangeListName',
      regionId: 'RegionId',
      removeEntry: 'RemoveEntry',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addEntry: { 'type': 'array', 'itemType': ModifyPortRangeListRequestAddEntry },
      clientToken: 'string',
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portRangeListId: 'string',
      portRangeListName: 'string',
      regionId: 'string',
      removeEntry: { 'type': 'array', 'itemType': ModifyPortRangeListRequestRemoveEntry },
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

