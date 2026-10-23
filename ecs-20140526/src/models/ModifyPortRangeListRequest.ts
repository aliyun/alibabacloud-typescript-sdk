// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPortRangeListRequestAddEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the port range. The description must be 2 to 32 characters in length, and cannot start with http:// or https://. Valid values of N: 0 to 200.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The port range. Valid values of N: 0 to 200. Limits:
   * 
   * - The number of entries cannot exceed the maximum entry capacity (`MaxEntries`).
   * 
   * - Duplicate `PortRange` values are not allowed.
   * 
   * - The value cannot be the same as the `RemoveEntry.N.PortRange` parameter value.
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
   * The port range. Valid values of N: 0 to 200. Limits:
   * 
   * - Duplicate `PortRange` values are not allowed.
   * 
   * - The value cannot be the same as the `AddEntry.N.PortRange` parameter value.
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
   * The array of port list entries to be added or modified.
   */
  addEntry?: ModifyPortRangeListRequestAddEntry[];
  /**
   * @remarks
   * Ensures the idempotence of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the port list. The description must be 2 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * This is description.
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the port list to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * prl-2ze9743****
   */
  portRangeListId?: string;
  /**
   * @remarks
   * The name of the port list. The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
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
   * The array of port list entries to be deleted.
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

