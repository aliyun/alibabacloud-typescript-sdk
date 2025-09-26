// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MCPServiceConfig } from "./McpserviceConfig";


export class MCPBackendConfig extends $dara.Model {
  scene?: string;
  services?: MCPServiceConfig[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': MCPServiceConfig },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

