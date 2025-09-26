// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MCPBackendConfig } from "./McpbackendConfig";
import { MCPMatch } from "./Mcpmatch";


export class MCPAPI extends $dara.Model {
  backendConfig?: MCPBackendConfig;
  description?: string;
  exposedUriPath?: string;
  match?: MCPMatch;
  mcpStatisticsEnable?: boolean;
  protocol?: string;
  toolId?: string;
  toolsConfig?: string;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      description: 'description',
      exposedUriPath: 'exposedUriPath',
      match: 'match',
      mcpStatisticsEnable: 'mcpStatisticsEnable',
      protocol: 'protocol',
      toolId: 'toolId',
      toolsConfig: 'toolsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: MCPBackendConfig,
      description: 'string',
      exposedUriPath: 'string',
      match: MCPMatch,
      mcpStatisticsEnable: 'boolean',
      protocol: 'string',
      toolId: 'string',
      toolsConfig: 'string',
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

