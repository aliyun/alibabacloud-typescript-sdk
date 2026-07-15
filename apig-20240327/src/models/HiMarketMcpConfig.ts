// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketDomain } from "./HiMarketDomain";


export class HiMarketMcpConfigMcpServerConfig extends $dara.Model {
  /**
   * @remarks
   * The list of associated domain names.
   */
  domains?: HiMarketDomain[];
  /**
   * @remarks
   * The path exposed by the MCP server.
   * 
   * @example
   * /mcp
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'domains',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': HiMarketDomain },
      path: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketMcpConfigMeta extends $dara.Model {
  /**
   * @remarks
   * The MCP protocol type.
   * 
   * @example
   * StreamableHTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketMcpConfig extends $dara.Model {
  /**
   * @remarks
   * The MCP Server configuration.
   */
  mcpServerConfig?: HiMarketMcpConfigMcpServerConfig;
  /**
   * @remarks
   * The MCP Server name.
   * 
   * @example
   * my-mcp-server
   */
  mcpServerName?: string;
  /**
   * @remarks
   * The metadata.
   */
  meta?: HiMarketMcpConfigMeta;
  /**
   * @remarks
   * The MCP tool definitions.
   * 
   * @example
   * [{\\"name\\":\\"search\\",\\"description\\":\\"搜索工具\\"}]
   */
  tools?: string;
  static names(): { [key: string]: string } {
    return {
      mcpServerConfig: 'mcpServerConfig',
      mcpServerName: 'mcpServerName',
      meta: 'meta',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerConfig: HiMarketMcpConfigMcpServerConfig,
      mcpServerName: 'string',
      meta: HiMarketMcpConfigMeta,
      tools: 'string',
    };
  }

  validate() {
    if(this.mcpServerConfig && typeof (this.mcpServerConfig as any).validate === 'function') {
      (this.mcpServerConfig as any).validate();
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

