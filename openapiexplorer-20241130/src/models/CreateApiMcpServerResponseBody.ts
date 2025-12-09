// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiMcpServerResponseBodyUrls extends $dara.Model {
  /**
   * @example
   * https://mcpserverinner-pre.cn-zhangjiakou.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/mcp
   */
  mcp?: string;
  /**
   * @example
   * https://mcpserverinner-pre.cn-zhangjiakou.aliyuncs.com/accounts/xxxx/custom/xxx/id/xxxx/sse
   */
  sse?: string;
  vpcMcp?: string;
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
   * @example
   * v6ZZ7ftCzEILW***
   */
  id?: string;
  /**
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
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

