// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Agents configuration.
   * 
   * @example
   * agents-demo
   */
  agents?: string;
  /**
   * @remarks
   * The list of channel configurations.
   * 
   * @example
   * [...]
   */
  channelsShrink?: string;
  /**
   * @remarks
   * The idempotency token that ensures the idempotence of the request.
   * 
   * @example
   * client-token-demo
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of credential bindings.
   * 
   * @example
   * [...]
   */
  credentialsShrink?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * inst-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * The quota configuration.
   * 
   * @example
   * {}
   */
  limitConfigShrink?: string;
  /**
   * @remarks
   * The list of MCP servers.
   * 
   * @example
   * [...]
   */
  mcpServersShrink?: string;
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * {}
   */
  modelShrink?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The list of skills.
   * 
   * @example
   * [...]
   */
  skillsShrink?: string;
  /**
   * @remarks
   * The Soul configuration.
   * 
   * @example
   * soul-demo
   */
  soul?: string;
  /**
   * @remarks
   * The template configuration.
   * 
   * @example
   * {}
   */
  templateShrink?: string;
  /**
   * @remarks
   * The Worker version number.
   * 
   * @example
   * v1.0.0
   */
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

