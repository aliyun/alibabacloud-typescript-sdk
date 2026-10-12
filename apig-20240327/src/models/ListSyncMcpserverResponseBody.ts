// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSyncMCPServerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of domain name IDs bound to the Nacos MCP export of the gateway, excluding the default domain name. If no configuration exists, an empty array [] is returned.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The list of synchronized (whitelisted) MCP server names, obtained from the AllowMcpServers field in the MCP Bridge registration configuration. If no configuration exists, an empty array [] is returned.
   */
  mcpServers?: string[];
  static names(): { [key: string]: string } {
    return {
      domainIds: 'domainIds',
      mcpServers: 'mcpServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIds: { 'type': 'array', 'itemType': 'string' },
      mcpServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(Array.isArray(this.mcpServers)) {
      $dara.Model.validateArray(this.mcpServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSyncMCPServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListSyncMCPServerResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 211B1C7E-DD93-58D3-AA4B-9B392B63258C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSyncMCPServerResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

