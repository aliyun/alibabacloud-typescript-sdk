// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommandRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that is added to the command. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length, and cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is added to the command. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. The tag value can be up to 64 characters in length, and cannot contain http:// or https://.
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
   * The content of the command. Take note of the following items:
   * 
   * - If you set the EnableParameter parameter to true, you can use custom parameters in the command content.
   * - Custom parameters are enclosed in braces ({{}}). Spaces and line breaks before and after the parameter names within the braces are ignored.
   * - You can specify a maximum of 20 custom parameters.
   * - A custom parameter name can contain only letters, digits, hyphens (-), and underscores (_). Parameter names are not case-sensitive.
   * - A custom parameter name cannot exceed 64 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * ifconfig -s
   */
  commandContent?: string;
  /**
   * @remarks
   * The description of the command. All characters are supported. The description cannot exceed 512 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the created command uses custom parameters.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The name of the command. All characters are supported. The name cannot exceed 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The region ID. You can call [ListRegions](https://help.aliyun.com/document_detail/189315.html) to query available regions.
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
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags.
   */
  tag?: CreateCommandRequestTag[];
  /**
   * @remarks
   * The timeout period for running the command on the instance, in seconds.
   * 
   * If the task that runs the command times out, Cloud Assistant forcibly terminates the task process. Valid values: 10 to 86400 (24 hours).
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The language type of the command. Valid values:
   * 
   * - RunBatScript: bat commands for Windows instances
   * - RunPowerShellScript: PowerShell commands for Windows instances
   * - RunShellScript: shell commands for Linux instances
   * 
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The directory in which the created command is run on the ECS instance.
   * 
   * Default value: 
   * - Linux instances: the home directory of the root user, which is /root.  
   * - Windows instances: the directory where the Cloud Assistant client process is located, such as C:\\Windows\\System32.
   * 
   * @example
   * /root/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      description: 'Description',
      enableParameter: 'EnableParameter',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      timeout: 'Timeout',
      type: 'Type',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      description: 'string',
      enableParameter: 'boolean',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

