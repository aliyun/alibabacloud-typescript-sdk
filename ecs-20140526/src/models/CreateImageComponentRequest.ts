// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageComponentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. The tag key cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with acs:. The tag value cannot contain http:// or https://.
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

export class CreateImageComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The component type. Image build components and test components are supported.
   * 
   * Valid values:
   * - Build
   * - Test
   * 
   * Default value: Build.
   * > Build components can be used only in build templates, and test components can be used only in test templates.
   * 
   * @example
   * Build
   */
  componentType?: string;
  /**
   * @remarks
   * The component version number. This parameter is used together with the component name. The format is major.minor.patch, where all values are non-negative integers.
   * 
   * Default value: (x+1).0.0, where x is the current maximum major version number of the component.
   * 
   * @example
   * 1.0.0
   */
  componentVersion?: string;
  /**
   * @remarks
   * The component content. The content consists of multiple commands and cannot exceed 16 KB. For more information about supported commands and command formats, see [Commands supported by Image Builder](https://help.aliyun.com/document_detail/200206.html).
   * 
   * @example
   * Tasks:
   *   - Name: HelloWorld
   *     Action: RunShellCommand
   *     Properties:
   *       commandContent: echo hello world
   */
  content?: string;
  /**
   * @remarks
   * The description. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The component name. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. The name cannot start with http:// or https://. The name can contain letters, Chinese characters, digits, colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * > If you do not specify `Name`, the `ImageComponentId` return value is used by default.
   * 
   * @example
   * testComponent
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The operating system supported by the component.
   * 
   * Valid values:
   * - Linux
   * - Windows
   * 
   * Default value: Linux.
   * 
   * @example
   * Linux
   */
  systemType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateImageComponentRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      componentType: 'ComponentType',
      componentVersion: 'ComponentVersion',
      content: 'Content',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      systemType: 'SystemType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      componentType: 'string',
      componentVersion: 'string',
      content: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      systemType: 'string',
      tag: { 'type': 'array', 'itemType': CreateImageComponentRequestTag },
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

