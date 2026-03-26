// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BoundConfiguration } from "./BoundConfiguration";
import { McpProxyConfiguration } from "./McpProxyConfiguration";


export class McpConfig extends $dara.Model {
  /**
   * @remarks
   * 工具的绑定配置，定义工具与 HTTP 路径和方法的映射关系
   */
  boundConfiguration?: BoundConfiguration;
  /**
   * @remarks
   * MCP 代理的详细配置，包括钩子函数等，用于在 MCP 请求处理过程中执行自定义逻辑
   */
  mcpProxyConfiguration?: McpProxyConfiguration;
  /**
   * @remarks
   * 是否启用 MCP 代理功能，启用后可以通过代理配置对 MCP 请求进行拦截和处理
   * 
   * @example
   * true
   */
  proxyEnabled?: boolean;
  /**
   * @remarks
   * 会话亲和性策略，用于控制请求的路由方式。NONE：无亲和性，MCP_SSE：基于 SSE 的会话亲和性，MCP_STREAMABLE：基于流式 HTTP 的会话亲和性
   * 
   * @example
   * MCP_STREAMABLE
   */
  sessionAffinity?: string;
  /**
   * @remarks
   * 会话亲和性的详细配置信息，JSON 格式字符串，包含会话保持的具体参数
   */
  sessionAffinityConfig?: string;
  static names(): { [key: string]: string } {
    return {
      boundConfiguration: 'boundConfiguration',
      mcpProxyConfiguration: 'mcpProxyConfiguration',
      proxyEnabled: 'proxyEnabled',
      sessionAffinity: 'sessionAffinity',
      sessionAffinityConfig: 'sessionAffinityConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundConfiguration: BoundConfiguration,
      mcpProxyConfiguration: McpProxyConfiguration,
      proxyEnabled: 'boolean',
      sessionAffinity: 'string',
      sessionAffinityConfig: 'string',
    };
  }

  validate() {
    if(this.boundConfiguration && typeof (this.boundConfiguration as any).validate === 'function') {
      (this.boundConfiguration as any).validate();
    }
    if(this.mcpProxyConfiguration && typeof (this.mcpProxyConfiguration as any).validate === 'function') {
      (this.mcpProxyConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

