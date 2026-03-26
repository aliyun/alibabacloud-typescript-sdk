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
  defaultValue?: string;
  description?: string;
  parameterName?: string;
  patternRegex?: string;
  possibleValues?: DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinitionPossibleValues;
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
  tagKey?: string;
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
  category?: string;
  commandContent?: string;
  commandId?: string;
  creationTime?: string;
  description?: string;
  enableParameter?: boolean;
  invokeTimes?: number;
  latest?: boolean;
  launcher?: string;
  name?: string;
  parameterDefinitions?: DescribeCommandsResponseBodyCommandsCommandParameterDefinitions;
  parameterNames?: DescribeCommandsResponseBodyCommandsCommandParameterNames;
  provider?: string;
  resourceGroupId?: string;
  tags?: DescribeCommandsResponseBodyCommandsCommandTags;
  timeout?: number;
  type?: string;
  version?: number;
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

