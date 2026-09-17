// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client-generated request token. This parameter is used to ensure the idempotence of the request. The token must be unique across different requests and can contain up to 64 ASCII characters.
   * 
   * @example
   * TF-CreateRule-1652253755-aa33f762-7e99-4aee-bd27-d3370afa5625
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the event source.
   * 
   * @example
   * Filtering rule for MNS
   */
  description?: string;
  /**
   * @remarks
   * The ID of the MCP server bound to the agent.
   * 
   * @example
   * bGXX51ULuGl10xrr
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The name of the MCP server bound to the agent.
   * 
   * @example
   * eventhouse-agentbridge
   */
  mcpServerName?: string;
  /**
   * @remarks
   * The associated metadata.
   */
  metadataShrink?: string;
  /**
   * @remarks
   * The name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The prompt for the agent, such as "You are an IoT data analytics assistant..."
   * 
   * @example
   * 瑞士冻结马杜罗在瑞资产
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      mcpServerId: 'McpServerId',
      mcpServerName: 'McpServerName',
      metadataShrink: 'Metadata',
      name: 'Name',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      mcpServerId: 'string',
      mcpServerName: 'string',
      metadataShrink: 'string',
      name: 'string',
      prompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

