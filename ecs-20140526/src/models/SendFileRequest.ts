// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendFileRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the file sending task. Valid values of N: 1 to 20. The tag key cannot be an empty string once specified.
   * 
   * If you use a single tag to filter resources, the returned resource count cannot exceed 1,000. If you use multiple tags to filter resources, the returned resource count for resources attached to all specified tags cannot exceed 1,000. If the resource count exceeds 1,000, you must call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the file sending task. Valid values of N: 1 to 20. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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

export class SendFileRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The content of the file. The file size cannot exceed 32 KB after Base64 encoding.
   * 
   * - When the `ContentType` parameter is set to `PlainText`, this field is plain text in plaintext format.
   * - When the `ContentType` parameter is set to `Base64`, this field is Base64-encoded text.
   * 
   * This parameter is required.
   * 
   * @example
   * #!/bin/bash  echo "Current User is :"  echo $(ps | grep "$$" | awk \\"{print $2}\\")  --------  oss://bucketName/objectName
   */
  content?: string;
  /**
   * @remarks
   * The content type of the file. Valid values:
   * - PlainText: plain text.
   * - Base64: Base64-encoded text.
   * 
   * Default value: PlainText.
   * 
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the file. All character sets are supported. The description cannot exceed 512 characters in length.
   * 
   * @example
   * This is a test file.
   */
  description?: string;
  /**
   * @remarks
   * The user group of the file. This parameter takes effect only on Linux instances. Default value: root. The value cannot exceed 64 characters in length.
   * 
   * > When using another user group, make sure that the user group exists on the instance.
   * 
   * @example
   * test
   */
  fileGroup?: string;
  /**
   * @remarks
   * The permissions of the file. This parameter takes effect only on Linux instances. The setting method is the same as that of the chmod command.
   * 
   * Default value: 0644, which indicates that the owner has read and write permissions, and the user group and other users have read-only permissions.
   * 
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @remarks
   * The owner of the file. This parameter takes effect only on Linux instances. Default value: root. The value cannot exceed 64 characters in length.
   * 
   * > When using another user, make sure that the user exists on the instance.
   * 
   * @example
   * test
   */
  fileOwner?: string;
  /**
   * @remarks
   * The list of ECS instances to which the file is sent. You can specify up to 50 ECS instance IDs. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * ["i-bp185dy2o3o6n****"]
   */
  instanceId?: string[];
  /**
   * @remarks
   * The name of the file. All character sets are supported. The name cannot exceed 255 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the file if a file with the same name already exists in the target directory. Valid values:
   * - true: Overwrite the file.
   * - false: Do not overwrite the file.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the target ECS instances. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the file sending task belongs. When this parameter is specified:
   * 
   * - The ECS instances specified by InstanceId must belong to this resource group.
   * 
   * - You can filter the corresponding file sending results by specifying this parameter (by calling [DescribeSendFileResults](https://help.aliyun.com/document_detail/184117.html)).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: SendFileRequestTag[];
  /**
   * @remarks
   * The folder on the target ECS instances where the file is sent. If the folder does not exist, automatic creation is performed. The folder path cannot exceed 255 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * /home
   */
  targetDir?: string;
  /**
   * @remarks
   * The timeout period for sending the file. Unit: seconds.
   * 
   * - A timeout occurs when the file cannot be sent due to process issues, missing modules, or a missing Cloud Assistant Agent.
   * - If the specified timeout period is less than 10 seconds, the system automatically sets it to 10 seconds to ensure successful sending.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      fileOwner: 'FileOwner',
      instanceId: 'InstanceId',
      name: 'Name',
      overwrite: 'Overwrite',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      targetDir: 'TargetDir',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: 'string',
      contentType: 'string',
      description: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      fileOwner: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      overwrite: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': SendFileRequestTag },
      targetDir: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
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

