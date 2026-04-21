// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketHttpRoute } from "./HiMarketHttpRoute";


export class HiMarketAgentConfigAgentAPIConfig extends $dara.Model {
  agentProtocols?: string[];
  routes?: HiMarketHttpRoute[];
  static names(): { [key: string]: string } {
    return {
      agentProtocols: 'agentProtocols',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProtocols: { 'type': 'array', 'itemType': 'string' },
      routes: { 'type': 'array', 'itemType': HiMarketHttpRoute },
    };
  }

  validate() {
    if(Array.isArray(this.agentProtocols)) {
      $dara.Model.validateArray(this.agentProtocols);
    }
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketAgentConfig extends $dara.Model {
  agentAPIConfig?: HiMarketAgentConfigAgentAPIConfig;
  static names(): { [key: string]: string } {
    return {
      agentAPIConfig: 'agentAPIConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAPIConfig: HiMarketAgentConfigAgentAPIConfig,
    };
  }

  validate() {
    if(this.agentAPIConfig && typeof (this.agentAPIConfig as any).validate === 'function') {
      (this.agentAPIConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

