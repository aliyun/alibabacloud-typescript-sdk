// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendFileRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag for file sending. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count with this tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count with all the specified tags attached cannot exceed 1,000. If the resource count exceeds 1,000, call [ListTagResources](https://help.aliyun.com/document_detail/110425.html) to query the resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag for file sending. Valid values of N: 1 to 20. The tag value can be an empty string.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The content of the file. The file content cannot exceed 32 KB after Base64 encoding.
   * 
   * - If `ContentType` is set to `PlainText`, this parameter specifies the plain text content.
   * - If `ContentType` is set to `Base64`, this parameter specifies the Base64-encoded content.
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
   * - Base64: Base64-encoded.
   * 
   * Default value: PlainText.
   * 
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the file. The full character set is supported. The description cannot exceed 512 characters in length.
   * 
   * @example
   * This is a test file.
   */
  description?: string;
  /**
   * @remarks
   * The group of the file. This parameter takes effect only on Linux instances. Default value: root. The value cannot exceed 64 characters in length.
   * 
   * > If you specify a different user group, make sure that the user group exists on the instance.
   * 
   * @example
   * test
   */
  fileGroup?: string;
  /**
   * @remarks
   * The permissions on the file. This parameter takes effect only on Linux instances. You can configure this parameter in the same way as you run the chmod command.
   * 
   * Default value: 0644, which indicates that the owner has read and write permissions, and the group and other users have read-only permissions.
   * 
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @remarks
   * The owner of the file. This parameter takes effect only on Linux instances. Default value: root. The value cannot exceed 64 characters in length.
   * 
   * > If you specify a different user, make sure that the user exists on the instance.
   * 
   * @example
   * test
   */
  fileOwner?: string;
  /**
   * @remarks
   * The IDs of the ECS instances to which you want to send the file. You can specify up to 50 instance IDs. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp185dy2o3o6n****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The name of the file. The full character set is supported. The name cannot exceed 255 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to overwrite a file with the same name in the destination directory. Valid values:
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
   * The region ID of the target ECS instances. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group for file sending. If you specify this parameter:
   * 
   * - The ECS instances specified by InstanceId must belong to this resource group.
   * 
   * - You can filter file sending results by specifying this parameter when you call [DescribeSendFileResults](https://help.aliyun.com/document_detail/184117.html).
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
  tag?: SendFileRequestTag[];
  /**
   * @remarks
   * The destination directory on the target ECS instances where the file is sent. If the directory does not exist, it is automatically created. The directory path cannot exceed 255 characters in length.
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
   * - A timeout may occur when the file cannot be sent due to a process issue, a missing module, or a missing Cloud Assistant Agent.
   * - If the specified timeout period is less than 10 seconds, the system automatically sets the timeout period to 10 seconds to ensure successful delivery.
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

