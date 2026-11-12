// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandsResponseBodyCommandsParameterDefinitions extends $dara.Model {
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
   * Cloud Assistant Agent installation package path
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
   * The possible values of the enumeration-type custom parameter.
   */
  possibleValues?: string[];
  /**
   * @remarks
   * Indicates whether the custom parameter is required. Valid values:
   * 
   * - true: Required.
   * 
   * - false: Not required.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      parameterName: 'ParameterName',
      possibleValues: 'PossibleValues',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      parameterName: 'string',
      possibleValues: { 'type': 'array', 'itemType': 'string' },
      required: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.possibleValues)) {
      $dara.Model.validateArray(this.possibleValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBodyCommandsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command.
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

export class DescribeCommandsResponseBodyCommands extends $dara.Model {
  /**
   * @remarks
   * The command content.
   * 
   * @example
   * cat /etc/ssh/sshd_config
   */
  commandContent?: string;
  /**
   * @remarks
   * The command ID.
   * 
   * @example
   * c-gov1k1tqwi9****
   */
  commandId?: string;
  /**
   * @remarks
   * The time when the command was created. The time is displayed in UTC (Z) in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2023-01-05T06:38:53Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The command description.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether custom parameters are enabled for the command.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The command name.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The list of custom parameter details.
   */
  parameterDefinitions?: DescribeCommandsResponseBodyCommandsParameterDefinitions[];
  /**
   * @remarks
   * The list of custom parameter names parsed from CommandContent when the command was created. The list is returned in the List format. If the custom parameter feature is not enabled, an empty list is returned.
   */
  parameterNames?: string[];
  /**
   * @remarks
   * The provider of the command.
   * 
   * @example
   * User
   */
  provider?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the command.
   */
  tags?: DescribeCommandsResponseBodyCommandsTags[];
  /**
   * @remarks
   * The timeout period. Unit: seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The command type.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The execution path.
   * 
   * @example
   * /home
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandId: 'CommandId',
      creationTime: 'CreationTime',
      description: 'Description',
      enableParameter: 'EnableParameter',
      name: 'Name',
      parameterDefinitions: 'ParameterDefinitions',
      parameterNames: 'ParameterNames',
      provider: 'Provider',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      timeout: 'Timeout',
      type: 'Type',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandId: 'string',
      creationTime: 'string',
      description: 'string',
      enableParameter: 'boolean',
      name: 'string',
      parameterDefinitions: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommandsParameterDefinitions },
      parameterNames: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommandsTags },
      timeout: 'number',
      type: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterDefinitions)) {
      $dara.Model.validateArray(this.parameterDefinitions);
    }
    if(Array.isArray(this.parameterNames)) {
      $dara.Model.validateArray(this.parameterNames);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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
   * The commands.
   */
  commands?: DescribeCommandsResponseBodyCommands[];
  /**
   * @remarks
   * The page number of the command list.
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
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of commands.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommands },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

