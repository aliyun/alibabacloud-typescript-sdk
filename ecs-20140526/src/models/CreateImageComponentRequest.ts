// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateImageComponentRequestTag } from "./CreateImageComponentRequestTag";


export class CreateImageComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The type of the image component. Only image building components and image test components are supported.
   * 
   * Valid values:
   * 
   * *   Build
   * *   Test
   * 
   * Default value: Build.
   * 
   * >  Image building components can be used only in image building templates. Image test components can be used only in image test templates.
   * 
   * @example
   * Build
   */
  componentType?: string;
  /**
   * @remarks
   * The version number of the image component, which is used together with the name of the image component. The version number is in the \\<major>.\\<minor>.\\<patch> format. Set \\<major>, \\<minor>, and \\<patch> to non-negative integers.
   * 
   * Default value: (x + 1).0.0, in which x is the maximum major version number of the image component.
   * 
   * @example
   * null
   */
  componentVersion?: string;
  /**
   * @remarks
   * The content of the image component. The image component consists of multiple commands. The command content cannot exceed 16 KB in size. For information about the commands supported by Image Builder and the formats of the commands, see [Commands supported by Image Builder](https://help.aliyun.com/document_detail/200206.html).
   * 
   * @example
   * RUN yum update -y
   */
  content?: string;
  /**
   * @remarks
   * The description. The description must be 2 to 256 characters in length and cannot start with [http:// or https://](http://https://。).
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The name of the image component. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * >  If you do not specify `Name`, the return value of `ImageComponentId` is used.
   * 
   * @example
   * testComponent
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the operating system supported by the image component.
   * 
   * Valid values:
   * 
   * *   Linux
   * *   Windows
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

