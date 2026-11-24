// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePortRangeListRequestEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the port range. The description must be 2 to 32 characters in length and cannot start with http:// or https://. Valid values of N: 0 to 200.
   * 
   * @example
   * Description information of Entry
   */
  description?: string;
  /**
   * @remarks
   * The port range. Valid values of N: 0 to 200.
   * 
   * - The number of entries cannot exceed the maximum number of entries (`MaxEntries`).
   * 
   * - The `PortRange` values in different entries must be unique.
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

export class CreatePortRangeListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the port list.
   * 
   * This parameter cannot be left empty or set to an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * key for PortRangeList
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the port list.
   * 
   * This parameter cannot be left empty but can be set to an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * value for PortRangeList
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

export class CreatePortRangeListRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotency of the request. You can generate the value on the client side and ensure that the value is unique across different requests. The **ClientToken** parameter supports only ASCII characters and can be up to 64 characters in length. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the port list. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * Description information of PortRangeList
   */
  description?: string;
  /**
   * @remarks
   * The array of port list entries.
   */
  entry?: CreatePortRangeListRequestEntry[];
  /**
   * @remarks
   * The maximum number of entries supported by the port list. This value cannot be changed after the port list is created. Valid values: 1 to 2000.
   * 
   * >Notice: When a port list is associated with a resource such as a security group, the rule quota is calculated based on the maximum number of entries rather than the actual number of entries. Set this parameter properly.
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
   * The name of the port list. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * PortRangeListNameSample
   */
  portRangeListName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the port list belongs.
   * 
   * @example
   * rg-aek3b6jzp66****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The array of tags bound to the port list. Array length: 0 to 20.
   */
  tag?: CreatePortRangeListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      entry: 'Entry',
      maxEntries: 'MaxEntries',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portRangeListName: 'PortRangeListName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      entry: { 'type': 'array', 'itemType': CreatePortRangeListRequestEntry },
      maxEntries: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      portRangeListName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreatePortRangeListRequestTag },
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

