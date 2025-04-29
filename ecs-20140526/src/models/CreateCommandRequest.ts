// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCommandRequestTag } from "./CreateCommandRequestTag";


export class CreateCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded content of the command. Take note of the following items:
   * 
   * *   The value must be Base64-encoded and cannot exceed 18 KB in size.
   * 
   * *   You can use custom parameters in the command content. To enable the custom parameter feature, you must set `EnableParameter` to true.
   * 
   *     *   Custom parameters are defined in the `{{}}` format. Within `{{}}`, the spaces and line feeds before and after the parameter names are ignored.
   *     *   You can specify up to 20 custom parameters.
   *     *   A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). The name is case-insensitive. The ACS:: prefix cannot be used to specify non-built-in environment parameters.
   *     *   Each custom parameter name can be up to 64 bytes in length.
   * 
   * *   You can specify built-in environment parameters as custom parameters in a command. When you run the command, Cloud Assistant automatically uses the environment parameter values for the custom parameters. You can specify the following built-in environment variables:
   * 
   *     *   `{{ACS::RegionId}}`: the region ID.
   * 
   *     *   `{{ACS::AccountId}}`: the UID of the Alibaba Cloud account.
   * 
   *     *   `{{ACS::InstanceId}}`: the instance ID. If you want to run the command on multiple instances and specify `{{ACS::InstanceId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
   * 
   *         *   Linux: 2.2.3.309
   *         *   Windows: 2.1.3.309
   * 
   *     *   `{{ACS::InstanceName}}`: the instance name. If you want to run the command on multiple instances and specify `{{ACS::InstanceName}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
   * 
   *         *   Linux: 2.2.3.344
   *         *   Windows: 2.1.3.344
   * 
   *     *   `{{ACS::InvokeId}}`: the ID of the task. If you want to specify `{{ACS::InvokeId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
   * 
   *         *   Linux: 2.2.3.309
   *         *   Windows: 2.1.3.309
   * 
   *     *   `{{ACS::CommandId}}`: the command ID. If you want to call the [RunCommand](https://help.aliyun.com/document_detail/141751.html) operation to run the command and specify `{{ACS::CommandId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
   * 
   *         *   Linux: 2.2.3.309
   *         *   Windows: 2.1.3.309
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
   * *   PlainText: The command content is not encoded.
   * *   Base64: The command content is Base64-encoded.
   * 
   * Default value: Base64.
   * 
   * > If the specified value of this parameter is invalid, Base64 is used by default.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The description of the command. The description supports all character sets and can be up to 512 characters in length.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to use custom parameters in the command.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The launcher for script execution. The value cannot exceed 1 KB in length.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * The name of the command. The name supports all character sets and can be up to 128 characters in length.
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
   * The ID of the region in which to create the command. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the command.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags to add to the command.
   */
  tag?: CreateCommandRequestTag[];
  /**
   * @remarks
   * he maximum timeout period for the command execution on the instance. Unit: seconds. When a command that you created cannot be run, the command times out. When a command execution times out, Cloud Assistant Agent forcefully terminates the command process by canceling the PID. 
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * *   RunBatScript: batch commands. These commands are applicable to Windows instances.
   * *   RunPowerShellScript: PowerShell commands. These commands are applicable to Windows instances.
   * *   RunShellScript: shell commands. These commands are applicable to Linux instances.
   * 
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The execution path of the command on ECS instances. The value can be up to 200 characters in length.
   * 
   * Default values:
   * 
   * *   For Linux instance, the default value is the home directory of the root user, which is the `/root` directory.
   * *   For Windows instances, the default value is the directory where the Cloud Assistant Agent process resides, such as `C:\\Windows\\System32\\`.
   * 
   * >  If you set WorkingDir to a directory other than default ones, make sure that the directory exists on the instances.
   * 
   * @example
   * /root/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
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

