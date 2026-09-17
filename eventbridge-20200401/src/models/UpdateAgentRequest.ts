// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentRequestMetadataAttachments extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the bound metadata object.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:12345:eventhouse/system-rocketmq/namespace/rmq-cn-xxx/table/order
   */
  arn?: string;
  /**
   * @remarks
   * The object type of the attached metadata.
   * 
   * @example
   * inner-resource/event-table
   */
  mimeType?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      mimeType: 'MimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      mimeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentRequestMetadata extends $dara.Model {
  /**
   * @remarks
   * The bound metadata objects.
   */
  attachments?: UpdateAgentRequestMetadataAttachments[];
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': UpdateAgentRequestMetadataAttachments },
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentRequest extends $dara.Model {
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
  metadata?: UpdateAgentRequestMetadata;
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
      metadata: 'Metadata',
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
      metadata: UpdateAgentRequestMetadata,
      name: 'string',
      prompt: 'string',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

