// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkerShrinkRequest extends $dara.Model {
  agents?: string;
  channelsShrink?: string;
  clientToken?: string;
  credentialsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  limitConfigShrink?: string;
  mcpServersShrink?: string;
  modelShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  skillsShrink?: string;
  soul?: string;
  templateShrink?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      channelsShrink: 'Channels',
      clientToken: 'ClientToken',
      credentialsShrink: 'Credentials',
      instanceId: 'InstanceId',
      limitConfigShrink: 'LimitConfig',
      mcpServersShrink: 'McpServers',
      modelShrink: 'Model',
      name: 'Name',
      skillsShrink: 'Skills',
      soul: 'Soul',
      templateShrink: 'Template',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: 'string',
      channelsShrink: 'string',
      clientToken: 'string',
      credentialsShrink: 'string',
      instanceId: 'string',
      limitConfigShrink: 'string',
      mcpServersShrink: 'string',
      modelShrink: 'string',
      name: 'string',
      skillsShrink: 'string',
      soul: 'string',
      templateShrink: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

