// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCommandsResponseBodyCommandsCommandParameterDefinitions } from "./DescribeCommandsResponseBodyCommandsCommandParameterDefinitions";
import { DescribeCommandsResponseBodyCommandsCommandParameterNames } from "./DescribeCommandsResponseBodyCommandsCommandParameterNames";
import { DescribeCommandsResponseBodyCommandsCommandTags } from "./DescribeCommandsResponseBodyCommandsCommandTags";


export class DescribeCommandsResponseBodyCommandsCommand extends $dara.Model {
  /**
   * @remarks
   * The category of the common command.
   * 
   * @example
   * “”
   */
  category?: string;
  /**
   * @remarks
   * The content of the command, which is Base64-encoded.
   * 
   * *   If ContentEncoding is set to PlainText in the request, the original command content is returned.
   * *   If ContentEncoding is set to Base64 in the request, the Base64-encoded command content is returned.
   * 
   * @example
   * Y2QgL3Jvb3Q=
   */
  commandContent?: string;
  /**
   * @remarks
   * The command ID.
   * 
   * @example
   * c-hz01272yr52****
   */
  commandId?: string;
  /**
   * @remarks
   * The time when the command was created.
   * 
   * @example
   * 2020-11-17T06:52Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the custom parameter feature is enabled for the command.
   * 
   * @example
   * true
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The number of tasks created by using the command.
   * 
   * @example
   * 2
   */
  invokeTimes?: number;
  /**
   * @remarks
   * Indicates whether the common command is of the latest version. If multiple common commands from the same provider (`Provider`) belong to the same category and have the same name, these commands are different versions of the same command. This parameter is not returned for the Cloud Assistant commands that you created.
   * 
   * @example
   * true
   */
  latest?: boolean;
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
   * The name of the command.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The custom parameters of the command.
   */
  parameterDefinitions?: DescribeCommandsResponseBodyCommandsCommandParameterDefinitions;
  /**
   * @remarks
   * The custom parameter names that are parsed from the command content specified when the command was created. If the custom parameter feature is disabled, an empty list is returned.
   */
  parameterNames?: DescribeCommandsResponseBodyCommandsCommandParameterNames;
  /**
   * @remarks
   * The provider of the common command.
   * 
   * @example
   * AlibabaCloud.ECS.GuestOS
   */
  provider?: string;
  /**
   * @remarks
   * The ID of the resource group to which the command belongs.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the command.
   */
  tags?: DescribeCommandsResponseBodyCommandsCommandTags;
  /**
   * @remarks
   * The timeout period. Unit: seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The type of the command.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The version of the common command. If multiple common commands from the same provider (`Provider`) belong to the same category and have the same name, these commands are different versions of the same command. This parameter is not returned for the Cloud Assistant commands that you created.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The execution path of the command.
   * 
   * @example
   * /home/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      commandContent: 'CommandContent',
      commandId: 'CommandId',
      creationTime: 'CreationTime',
      description: 'Description',
      enableParameter: 'EnableParameter',
      invokeTimes: 'InvokeTimes',
      latest: 'Latest',
      launcher: 'Launcher',
      name: 'Name',
      parameterDefinitions: 'ParameterDefinitions',
      parameterNames: 'ParameterNames',
      provider: 'Provider',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      timeout: 'Timeout',
      type: 'Type',
      version: 'Version',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      commandContent: 'string',
      commandId: 'string',
      creationTime: 'string',
      description: 'string',
      enableParameter: 'boolean',
      invokeTimes: 'number',
      latest: 'boolean',
      launcher: 'string',
      name: 'string',
      parameterDefinitions: DescribeCommandsResponseBodyCommandsCommandParameterDefinitions,
      parameterNames: DescribeCommandsResponseBodyCommandsCommandParameterNames,
      provider: 'string',
      resourceGroupId: 'string',
      tags: DescribeCommandsResponseBodyCommandsCommandTags,
      timeout: 'number',
      type: 'string',
      version: 'number',
      workingDir: 'string',
    };
  }

  validate() {
    if(this.parameterDefinitions && typeof (this.parameterDefinitions as any).validate === 'function') {
      (this.parameterDefinitions as any).validate();
    }
    if(this.parameterNames && typeof (this.parameterNames as any).validate === 'function') {
      (this.parameterNames as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

