// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunRCCommandRequestResourceTags extends $dara.Model {
  key?: string;
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
  key?: string;
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
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commandContent?: string;
  containerId?: string;
  containerName?: string;
  /**
   * @example
   * PlainText
   */
  contentEncoding?: string;
  description?: string;
  enableParameter?: boolean;
  frequency?: string;
  instanceIds?: string[];
  keepCommand?: boolean;
  launcher?: string;
  name?: string;
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @example
   * Once
   */
  repeatMode?: string;
  resourceGroupId?: string;
  resourceTags?: RunRCCommandRequestResourceTags[];
  tags?: RunRCCommandRequestTags[];
  /**
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  timeout?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  username?: string;
  windowsPasswordName?: string;
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

