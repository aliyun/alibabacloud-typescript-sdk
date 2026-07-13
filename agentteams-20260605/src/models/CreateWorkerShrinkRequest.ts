// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkerShrinkRequest extends $dara.Model {
  agentType?: string;
  agents?: string;
  channelsShrink?: string;
  clientToken?: string;
  credentialsShrink?: string;
  deployType?: string;
  groupsShrink?: string;
  instanceId?: string;
  limitConfigShrink?: string;
  mcpServersShrink?: string;
  modelShrink?: string;
  name?: string;
  skillsShrink?: string;
  soul?: string;
  subagentsShrink?: string;
  templateShrink?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      agents: 'Agents',
      channelsShrink: 'Channels',
      clientToken: 'ClientToken',
      credentialsShrink: 'Credentials',
      deployType: 'DeployType',
      groupsShrink: 'Groups',
      instanceId: 'InstanceId',
      limitConfigShrink: 'LimitConfig',
      mcpServersShrink: 'McpServers',
      modelShrink: 'Model',
      name: 'Name',
      skillsShrink: 'Skills',
      soul: 'Soul',
      subagentsShrink: 'Subagents',
      templateShrink: 'Template',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      agents: 'string',
      channelsShrink: 'string',
      clientToken: 'string',
      credentialsShrink: 'string',
      deployType: 'string',
      groupsShrink: 'string',
      instanceId: 'string',
      limitConfigShrink: 'string',
      mcpServersShrink: 'string',
      modelShrink: 'string',
      name: 'string',
      skillsShrink: 'string',
      soul: 'string',
      subagentsShrink: 'string',
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

