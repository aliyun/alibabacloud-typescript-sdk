// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinitionPossibleValues extends $dara.Model {
  possibleValue?: string[];
  static names(): { [key: string]: string } {
    return {
      possibleValue: 'PossibleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      possibleValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.possibleValue)) {
      $dara.Model.validateArray(this.possibleValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinition extends $dara.Model {
  /**
   * @remarks
   * The default value of the custom parameter.
   * 
   * @example
   * https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest.rpm
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the custom parameter.
   * 
   * @example
   * Download path of the Cloud Assistant Agent installation package.
   */
  description?: string;
  /**
   * @remarks
   * The name of the custom parameter.
   * 
   * @example
   * DownloadUrl
   */
  parameterName?: string;
  /**
   * @remarks
   * The regular expression of the custom parameter.
   * 
   * @example
   * ^[a-zA-Z0-9_-]{4,32}$
   */
  patternRegex?: string;
  /**
   * @remarks
   * The valid values of the custom parameter of the enumeration type.
   */
  possibleValues?: DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinitionPossibleValues;
  /**
   * @remarks
   * Indicates whether the custom parameter is required. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      parameterName: 'ParameterName',
      patternRegex: 'PatternRegex',
      possibleValues: 'PossibleValues',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      parameterName: 'string',
      patternRegex: 'string',
      possibleValues: DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinitionPossibleValues,
      required: 'boolean',
    };
  }

  validate() {
    if(this.possibleValues && typeof (this.possibleValues as any).validate === 'function') {
      (this.possibleValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBodyCommandsCommandParameterDefinitions extends $dara.Model {
  parameterDefinition?: DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinition[];
  static names(): { [key: string]: string } {
    return {
      parameterDefinition: 'ParameterDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDefinition: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinition },
    };
  }

  validate() {
    if(Array.isArray(this.parameterDefinition)) {
      $dara.Model.validateArray(this.parameterDefinition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBodyCommandsCommandParameterNames extends $dara.Model {
  parameterName?: string[];
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.parameterName)) {
      $dara.Model.validateArray(this.parameterName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBodyCommandsCommandTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command.
   * 
   * @example
   * owner
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the command.
   * 
   * @example
   * zhangsan
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBodyCommandsCommandTags extends $dara.Model {
  tag?: DescribeCommandsResponseBodyCommandsCommandTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommandsCommandTagsTag },
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

export class DescribeCommandsResponseBodyCommands extends $dara.Model {
  command?: DescribeCommandsResponseBodyCommandsCommand[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommandsCommand },
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried commands.
   */
  commands?: DescribeCommandsResponseBodyCommands;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of commands.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: DescribeCommandsResponseBodyCommands,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.commands && typeof (this.commands as any).validate === 'function') {
      (this.commands as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

