// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiMcpServerResponseBodyUrls extends $dara.Model {
  /**
   * @remarks
   * The connection information for the streamable HTTP protocol. This is the recommended protocol.
   * 
   * @example
   * https://mcpserverinner-pre.cn-zhangjiakou.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/mcp
   */
  mcp?: string;
  /**
   * @remarks
   * The connection information for the Server-Sent Events (SSE) protocol.
   * 
   * @example
   * https://mcpserverinner-pre.cn-zhangjiakou.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/sse
   */
  sse?: string;
  /**
   * @remarks
   * The endpoint of the streamable HTTP protocol in a VPC.
   * 
   * @example
   * https://openapi-mcp-cn.vpc-proxy.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/mcp
   */
  vpcMcp?: string;
  /**
   * @remarks
   * The endpoint of the SSE protocol in a VPC.
   * 
   * @example
   * https://openapi-mcp-cn.vpc-proxy.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/sse
   */
  vpcSse?: string;
  static names(): { [key: string]: string } {
    return {
      mcp: 'mcp',
      sse: 'sse',
      vpcMcp: 'vpcMcp',
      vpcSse: 'vpcSse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcp: 'string',
      sse: 'string',
      vpcMcp: 'string',
      vpcSse: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiMcpServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the successfully created API MCP service.
   * 
   * @example
   * v6ZZ7ftCzEILW***
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
  /**
   * @remarks
   * The connection information for the API MCP service.
   */
  urls?: CreateApiMcpServerResponseBodyUrls;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      requestId: 'requestId',
      urls: 'urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
      urls: CreateApiMcpServerResponseBodyUrls,
    };
  }

  validate() {
    if(this.urls && typeof (this.urls as any).validate === 'function') {
      (this.urls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

