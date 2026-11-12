// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The command content. Note the following items:
   * 
   * - Set `EnableParameter=true` to enable the custom parameter feature in the command content:
   * - Define custom parameters by enclosing them in `{{}}`. Spaces and line breaks before and after the parameter name within `{{}}` are ignored.
   * - The number of custom parameters cannot exceed 20.
   * - Custom parameter names can contain only letters (a-z, A-Z), digits (0-9), hyphens (-), and underscores (_). Other characters are not supported. Parameter names are case-insensitive.
   * - A single custom parameter name cannot exceed 64 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * ifconfig -s
   */
  commandContent?: string;
  /**
   * @remarks
   * Specifies whether the command contains custom parameters.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The instance ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the command execution.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The key-value pairs of custom parameters to pass in when the command contains custom parameters. For example, if the command content is `echo {{name}}`, you can use the `Parameters` parameter to pass in the key-value pair `{"name":"Jack"}`. The custom parameter automatically replaces the variable value `name`, and the actual command that runs is `echo Jack`.
   * 
   * The number of custom parameters ranges from 0 to 20. Note the following items:
   * 
   * - Keys cannot be empty strings and can contain up to 64 characters.
   * - Values can be empty strings.
   * - The set of custom parameter names must be a subset of the parameter set defined when the command was created. For parameters that are not passed in, you can use empty strings as substitutes.
   * 
   * Default value: empty, which indicates that this parameter is unset to disable custom parameters.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAI****************"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID. You can call [ListRegions](https://help.aliyun.com/document_detail/189315.html) to query the latest region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period for the command to run on the server instance. Unit: seconds.
   * 
   * When a command execution task times out, Command Assistant forcefully terminates the task process. Valid values: 10 to 86400 (24 hours).
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
   * - RunBatScript: Bat commands for Windows instances.
   * - RunPowerShellScript: PowerShell commands for Windows instances.
   * - RunShellScript: Shell commands for Linux instances.
   * 
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The password name of the user that runs the command on a Windows instance.
   * 
   * If you want to run a command as a non-default user (System) on a Windows instance, you must specify both WorkingUser and this parameter. To reduce the risk of password leaks, store the plaintext password in the parameter repository of CloudOps Orchestration Service and pass in only the password name here.
   * 
   * @example
   * axtSecretPassword
   */
  windowsPasswordName?: string;
  /**
   * @remarks
   * The custom execution path of the command. Default paths:
   * 
   * - Linux instances: The default execution path is the /root directory of the root user.
   * - Windows instances: The default execution path is the C:\\Windows\\system32 directory.
   * 
   * @example
   * /root
   */
  workingDir?: string;
  /**
   * @remarks
   * The user that you want to use to run the command on the simple application server instance. We recommend that you use a regular user to run commands to reduce security risks.
   * Default values:
   * 
   * - root: On Linux instances, commands are run as the root user by default.
   * 
   * - system: On Windows instances, commands are run as the system user by default.
   * 
   * @example
   * root
   */
  workingUser?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      enableParameter: 'EnableParameter',
      instanceId: 'InstanceId',
      name: 'Name',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      timeout: 'Timeout',
      type: 'Type',
      windowsPasswordName: 'WindowsPasswordName',
      workingDir: 'WorkingDir',
      workingUser: 'WorkingUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      enableParameter: 'boolean',
      instanceId: 'string',
      name: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      timeout: 'number',
      type: 'string',
      windowsPasswordName: 'string',
      workingDir: 'string',
      workingUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

