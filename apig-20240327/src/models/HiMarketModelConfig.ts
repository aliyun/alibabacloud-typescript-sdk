// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketHttpRoute } from "./HiMarketHttpRoute";


export class HiMarketModelConfigModelAPIConfig extends $dara.Model {
  aiProtocols?: string[];
  modelCategory?: string;
  routes?: HiMarketHttpRoute[];
  static names(): { [key: string]: string } {
    return {
      aiProtocols: 'aiProtocols',
      modelCategory: 'modelCategory',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiProtocols: { 'type': 'array', 'itemType': 'string' },
      modelCategory: 'string',
      routes: { 'type': 'array', 'itemType': HiMarketHttpRoute },
    };
  }

  validate() {
    if(Array.isArray(this.aiProtocols)) {
      $dara.Model.validateArray(this.aiProtocols);
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

export class HiMarketModelConfig extends $dara.Model {
  modelAPIConfig?: HiMarketModelConfigModelAPIConfig;
  static names(): { [key: string]: string } {
    return {
      modelAPIConfig: 'modelAPIConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelAPIConfig: HiMarketModelConfigModelAPIConfig,
    };
  }

  validate() {
    if(this.modelAPIConfig && typeof (this.modelAPIConfig as any).validate === 'function') {
      (this.modelAPIConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

