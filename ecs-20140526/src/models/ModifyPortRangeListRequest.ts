// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPortRangeListRequestAddEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the port range. The description must be 2 to 32 characters in length and cannot start with http:// or https://. Valid values of N: 0 to 200.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The port range. Valid values of N: 0 to 200. Settings:
   * 
   * - The number of entries cannot exceed the maximum entry capacity (`MaxEntries`).
   * 
   * - You cannot specify duplicate values for `PortRange`.
   * 
   * - The value cannot be the same as the value of the `RemoveEntry.N.PortRange` parameter.
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
   * The port range. Valid values of N: 0 to 200. Settings:
   * 
   * - You cannot specify duplicate values for `PortRange`.
   * 
   * - The value cannot be the same as the value of the `AddEntry.N.PortRange` parameter.
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
   * The entries to add or modify in the port range list.
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
   * The description of the port range list. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * This is description.
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the port range list to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * prl-2ze9743****
   */
  portRangeListId?: string;
  /**
   * @remarks
   * The name of the port range list. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, Chinese characters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * PortRangeListNameSample
   */
  portRangeListName?: string;
  /**
   * @remarks
   * The region ID of the port range list. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The entries to delete from the port range list.
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

