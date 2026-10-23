// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrefixListRequestEntry extends $dara.Model {
  /**
   * @remarks
   * The Classless Inter-Domain Routing of the prefix list entry. Valid values of N: 0 to 200. Precautions:
   * 
   * - The number of entries in the prefix list cannot exceed the maximum number of entries (`MaxEntries`).
   * - The type of the Classless Inter-Domain Routing in an entry is determined by the address family. A prefix list cannot contain both IPv4 and IPv6 Classless Inter-Domain Routing.
   * - Classless Inter-Domain Routing in multiple entries cannot be duplicate. For example, you cannot specify two Settings such as 192.168.1.0/24.
   * - You can specify a single IP address in the Settings, and the system automatically transforms it into a Classless Inter-Domain Routing. For example, if you specify 192.168.1.100 in the Settings, the system automatically transforms it into 192.168.1.100/32.
   * - If you use an IPv6 Classless Inter-Domain Routing, the system automatically transforms it into a zero-compressed format and transforms letters to lowercase. For example, if you specify 2001:0DB8:0000:0000:0000:0000:0000:0000/32 in the Settings, the system automatically transforms it into 2001:db8::/32.
   * 
   * For more information about Classless Inter-Domain Routing, see [What is CIDR](~~185311#598efe6ef1v00~~).
   * 
   * Default value: empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the prefix list entry. The description must be 2 to 32 characters in length, and cannot start with `http://` or `https://`. Valid values of N: 0 to 200.
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

export class CreatePrefixListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the prefix list. Valid values of N: 1 to 20. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the prefix list. Valid values of N: 1 to 20. This parameter can be an empty string.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`.
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

export class CreatePrefixListRequest extends $dara.Model {
  /**
   * @remarks
   * The address family of the prefix list. Valid values:
   * 
   * - IPv4.
   * - IPv6.
   * 
   * This parameter is required.
   * 
   * @example
   * IPv4
   */
  addressFamily?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the prefix list. The description must be 2 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The prefix list entry information.
   */
  entry?: CreatePrefixListRequestEntry[];
  /**
   * @remarks
   * The maximum number of entries supported by the prefix list. Valid values: 1 to 200.
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
   * The name of the prefix list. The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It cannot start with `http://`, `https://`, `com.aliyun`, or `com.alibabacloud`. It can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * PrefixListNameSample
   */
  prefixListName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the prefix list belongs.
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

