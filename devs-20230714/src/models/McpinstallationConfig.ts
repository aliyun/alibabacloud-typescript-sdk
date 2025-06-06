// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MCPServerInstallationConfig } from "./McpserverInstallationConfig";


export class MCPInstallationConfig extends $dara.Model {
  mcpServers?: MCPServerInstallationConfig;
  static names(): { [key: string]: string } {
    return {
      mcpServers: 'mcpServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServers: MCPServerInstallationConfig,
    };
  }

  validate() {
    if(this.mcpServers && typeof (this.mcpServers as any).validate === 'function') {
      (this.mcpServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

