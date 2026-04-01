// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunRCCommandRequestResourceTags extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
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

export class RunRCCommandRequestTags extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
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

export class RunRCCommandRequest extends $dara.Model {
  /**
   * @example
   * ETnLKlblzczshOTUbOCziJZNwH****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZWNobyAxMjM=
   */
  commandContent?: string;
  /**
   * @example
   * ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****
   */
  containerId?: string;
  /**
   * @example
   * test-container
   */
  containerName?: string;
  /**
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * false
   */
  enableParameter?: boolean;
  frequency?: string;
  instanceIds?: string[];
  /**
   * @example
   * false
   */
  keepCommand?: boolean;
  /**
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @example
   * testName
   */
  name?: string;
  /**
   * @example
   * {"name":"Jack", "accessKey":"LTAI*************"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceTags?: RunRCCommandRequestResourceTags[];
  tags?: RunRCCommandRequestTags[];
  /**
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @example
   * test
   */
  username?: string;
  /**
   * @example
   * None
   */
  windowsPasswordName?: string;
  /**
   * @example
   * /home/user
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandContent: 'CommandContent',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      contentEncoding: 'ContentEncoding',
      description: 'Description',
      enableParameter: 'EnableParameter',
      frequency: 'Frequency',
      instanceIds: 'InstanceIds',
      keepCommand: 'KeepCommand',
      launcher: 'Launcher',
      name: 'Name',
      parameters: 'Parameters',
      regionId: 'RegionId',
      repeatMode: 'RepeatMode',
      resourceGroupId: 'ResourceGroupId',
      resourceTags: 'ResourceTags',
      tags: 'Tags',
      terminationMode: 'TerminationMode',
      timeout: 'Timeout',
      type: 'Type',
      username: 'Username',
      windowsPasswordName: 'WindowsPasswordName',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandContent: 'string',
      containerId: 'string',
      containerName: 'string',
      contentEncoding: 'string',
      description: 'string',
      enableParameter: 'boolean',
      frequency: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keepCommand: 'boolean',
      launcher: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      repeatMode: 'string',
      resourceGroupId: 'string',
      resourceTags: { 'type': 'array', 'itemType': RunRCCommandRequestResourceTags },
      tags: { 'type': 'array', 'itemType': RunRCCommandRequestTags },
      terminationMode: 'string',
      timeout: 'number',
      type: 'string',
      username: 'string',
      windowsPasswordName: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
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

