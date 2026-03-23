// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunRCCommandShrinkRequest extends $dara.Model {
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
  instanceIdsShrink?: string;
  keepCommand?: boolean;
  launcher?: string;
  name?: string;
  parametersShrink?: string;
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
  resourceTagsShrink?: string;
  tagsShrink?: string;
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
      instanceIdsShrink: 'InstanceIds',
      keepCommand: 'KeepCommand',
      launcher: 'Launcher',
      name: 'Name',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      repeatMode: 'RepeatMode',
      resourceGroupId: 'ResourceGroupId',
      resourceTagsShrink: 'ResourceTags',
      tagsShrink: 'Tags',
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
      instanceIdsShrink: 'string',
      keepCommand: 'boolean',
      launcher: 'string',
      name: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      repeatMode: 'string',
      resourceGroupId: 'string',
      resourceTagsShrink: 'string',
      tagsShrink: 'string',
      terminationMode: 'string',
      timeout: 'number',
      type: 'string',
      username: 'string',
      windowsPasswordName: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

