// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpRouteMcpServerInfoMcpRouteConfig } from "./HttpRouteMcpServerInfoMcpRouteConfig";


export class HttpRouteMcpServerInfo extends $dara.Model {
  createFromType?: string;
  importInstanceId?: string;
  importMcpServerId?: string;
  importNamespace?: string;
  mcpRouteConfig?: HttpRouteMcpServerInfoMcpRouteConfig;
  mcpServerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      createFromType: 'createFromType',
      importInstanceId: 'importInstanceId',
      importMcpServerId: 'importMcpServerId',
      importNamespace: 'importNamespace',
      mcpRouteConfig: 'mcpRouteConfig',
      mcpServerConfig: 'mcpServerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createFromType: 'string',
      importInstanceId: 'string',
      importMcpServerId: 'string',
      importNamespace: 'string',
      mcpRouteConfig: HttpRouteMcpServerInfoMcpRouteConfig,
      mcpServerConfig: 'string',
    };
  }

  validate() {
    if(this.mcpRouteConfig && typeof (this.mcpRouteConfig as any).validate === 'function') {
      (this.mcpRouteConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

