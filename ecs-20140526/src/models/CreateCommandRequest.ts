// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommandRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that have all specified tags attached cannot exceed 1,000. If the resource count exceeds 1,000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command. Valid values of N: 1 to 20. The tag value can be an empty string.
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

export class CreateCommandRequest extends $dara.Model {
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
   * The Base64-encoded content of the command.
   * 
   * - The value of this parameter must be Base64-encoded, and the script content cannot exceed 18 KB in size after Base64 encoding.
   * - The command content supports custom parameters. To enable the custom parameter feature, set `EnableParameter=true`:
   *     - Custom parameters are defined by enclosing them in `{{}}`. Spaces and line breaks before and after the parameter name within `{{}}` are ignored.
   *     - The number of custom parameters cannot exceed 20.
   *     - Custom parameter names can contain letters (a-z, A-Z), digits (0-9), hyphens (-), and underscores (_). The acs:: prefix for specifying non-built-in environment parameters is not supported. Other characters are not supported. Parameter names are case-insensitive.
   *     - Each parameter name cannot exceed 64 bytes in length.
   * 
   * - You can specify built-in environment parameters as custom parameters. When the command is run, Cloud Assistant automatically replaces them with the corresponding values from the environment without requiring manual assignment. The following built-in environment parameters are supported:
   *     - `{{ACS::RegionId}}`: the region ID.
   *     - `{{ACS::AccountId}}`: the UID of the Alibaba Cloud account.
   *     - `{{ACS::InstanceId}}`: the instance ID. When a command is sent to multiple instances and you want to use `{{ACS::InstanceId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than:
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309
   *     - `{{ACS::InstanceName}}`: the instance name. When a command is sent to multiple instances and you want to use `{{ACS::InstanceName}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than:
   *         - Linux: 2.2.3.344
   *         - Windows: 2.1.3.344
   * 
   *     - `{{ACS::InvokeId}}`: the command execution ID. To use `{{ACS::InvokeId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than:
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309
   *      
   *     - `{{ACS::CommandId}}`: the command ID. When you run a command by calling the [RunCommand](https://help.aliyun.com/document_detail/141751.html) operation and want to use `{{ACS::CommandId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than:
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309.
   * 
   * This parameter is required.
   * 
   * @example
   * ZWNobyAxMjM=
   */
  commandContent?: string;
  /**
   * @remarks
   * The encoding mode of the command content (CommandContent). Valid values:
   * 
   * - PlainText: no encoding. The content is transmitted in plaintext.
   * 
   * - Base64: Base64 encoding.
   * 
   * Default value: Base64.
   * 
   * > If an invalid value is specified, it is treated as Base64.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The command description. All character sets are supported. The description cannot exceed 512 characters in length.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the command uses custom parameters.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The bootstrap program for script execution. The value cannot exceed 1 KB in length.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * The command name. All character sets are supported. The name cannot exceed 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
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
   * The ID of the resource group to which the command belongs.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateCommandRequestTag[];
  /**
   * @remarks
   * The maximum timeout period for the command to run on the ECS instance. Unit: seconds. If the command cannot be run for any reason, a timeout occurs. After the timeout, the command process is forcefully terminated by canceling the PID of the command.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The type of the command. Valid values: 
   * 
   * - RunBatScript: creates a Bat script to run on Windows instances.
   * - RunPowerShellScript: creates a PowerShell script to run on Windows instances.
   * - RunShellScript: creates a Shell script to run on Linux instances.
   * 
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The directory where the command is run on the ECS instance. The value cannot exceed 200 characters in length.
   * 
   * Default value: 
   * - Linux instances: the home directory of the root user, which is `/root`.  
   * - Windows instances: the directory where the Cloud Assistant Agent process is located, such as `C:\\Windows\\System32`.
   * 
   * > If you set this parameter to a different directory, make sure that the directory exists on the instance.
   * 
   * @example
   * /home/user
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandContent: 'CommandContent',
      contentEncoding: 'ContentEncoding',
      description: 'Description',
      enableParameter: 'EnableParameter',
      launcher: 'Launcher',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      timeout: 'Timeout',
      type: 'Type',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandContent: 'string',
      contentEncoding: 'string',
      description: 'string',
      enableParameter: 'boolean',
      launcher: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateCommandRequestTag },
      timeout: 'number',
      type: 'string',
      workingDir: 'string',
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

