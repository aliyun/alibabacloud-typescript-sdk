// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAtiAgentRegisterInfoRequestEndpoints extends $dara.Model {
  /**
   * @remarks
   * The actual service address of the agent endpoint, which is the HTTPS entry point where the agent runs online. This is a required field with a maximum of 500 characters.
   * 
   * Example: https://my-agent.example.com/mcp
   * 
   * After a caller discovers this agent through DNS, it can use this URL to initiate a connection directly. This is the address where the agent is actually online.
   * 
   * @example
   * https://www.example.com/mcp
   */
  agentUrl?: string;
  /**
   * @remarks
   * An optional URL that points to the metadata description file of the agent (typically in JSON format). This allows other agents or clients to automatically discover the agent capabilities before connecting, including:
   * - Functions supported by the agent
   * - Input/output formats
   * - Version information
   * - Other capability declarations
   * 
   * @example
   * // https://my-agent.example.com/.well-known/agent.json
   * {
   *   "name": "智能客服助手",
   *   "version": "1.2.0",
   *   "protocol": "MCP",
   *   "description": "提供产品咨询、订单查询、售后服务的智能客服Agent",
   *   "capabilities": {
   *     "tools": [
   *       { "name": "order_query", "description": "查询订单状态" },
   *       { "name": "product_search", "description": "搜索产品信息" },
   *       { "name": "refund_request", "description": "发起退款申请" }
   *     ],
   *     "resources": [
   *       { "uri": "faq://knowledge-base", "description": "FAQ知识库" }
   *     ]
   *   },
   *   "endpoint": {
   *     "url": "https://my-agent.example.com/mcp",
   *     "transport": ["STREAMABLE-HTTP", "SSE"]
   *   },
   *   "policy": {
   *     "authentication": "mTLS",
   *     "rateLimit": "100/min"
   *   }
   * }
   */
  metadataUrl?: string;
  /**
   * @remarks
   * The communication protocol standard that the agent endpoint follows. This determines how the invoker interacts with the agent.
   * 
   * Valid values:
   * - MCP: Model Context Protocol, an agent tool invocation protocol developed by Anthropic.
   * - A2A: Agent-to-Agent Protocol, a cross-agent communication protocol developed by Google.
   * - OpenAPI: Standard RESTful API specification (Swagger/OpenAPI).
   * 
   * When other agents or clients see this protocol identity, they know which method to use to communicate with the agent. For example, MCP uses the MCP SDK, A2A uses the A2A SDK, and OpenAPI uses standard HTTP requests.
   * 
   * @example
   * A2A
   */
  protocol?: string;
  /**
   * @remarks
   * The transport methods.
   * 
   * @example
   * STREAMABLE-HTTP
   */
  transports?: string[];
  static names(): { [key: string]: string } {
    return {
      agentUrl: 'AgentUrl',
      metadataUrl: 'MetadataUrl',
      protocol: 'Protocol',
      transports: 'Transports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUrl: 'string',
      metadataUrl: 'string',
      protocol: 'string',
      transports: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.transports)) {
      $dara.Model.validateArray(this.transports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAtiAgentRegisterInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the agent capabilities.
   * 
   * @example
   * 支付服务
   */
  agentDescription?: string;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试Agent
   */
  agentDisplayName?: string;
  /**
   * @remarks
   * The endpoint domain name through which the agent provides services.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  agentHost?: string;
  /**
   * @remarks
   * The version of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.1
   */
  agentVersion?: string;
  /**
   * @remarks
   * Provides idempotency. Within 3 minutes, the same value takes effect only once.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The endpoint information of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"EndpointValue\\":\\"http://www.baidu.com\\",\\"EndpointType\\":\\"http\\"}]
   */
  endpoints?: CreateAtiAgentRegisterInfoRequestEndpoints[];
  /**
   * @remarks
   * The ID of the verified registrant. Obtain this ID by invoking the identity verification API operation or from the ATS console.
   * 
   * This parameter is required.
   * 
   * @example
   * 2072277378616354816
   */
  registrantId?: string;
  static names(): { [key: string]: string } {
    return {
      agentDescription: 'AgentDescription',
      agentDisplayName: 'AgentDisplayName',
      agentHost: 'AgentHost',
      agentVersion: 'AgentVersion',
      clientToken: 'ClientToken',
      endpoints: 'Endpoints',
      registrantId: 'RegistrantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDescription: 'string',
      agentDisplayName: 'string',
      agentHost: 'string',
      agentVersion: 'string',
      clientToken: 'string',
      endpoints: { 'type': 'array', 'itemType': CreateAtiAgentRegisterInfoRequestEndpoints },
      registrantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

