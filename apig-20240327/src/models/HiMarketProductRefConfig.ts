// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketProductRefConfigApigRefConfig extends $dara.Model {
  agentApiId?: string;
  agentApiName?: string;
  mcpRouteId?: string;
  mcpServerId?: string;
  mcpServerName?: string;
  modelApiId?: string;
  modelApiName?: string;
  static names(): { [key: string]: string } {
    return {
      agentApiId: 'agentApiId',
      agentApiName: 'agentApiName',
      mcpRouteId: 'mcpRouteId',
      mcpServerId: 'mcpServerId',
      mcpServerName: 'mcpServerName',
      modelApiId: 'modelApiId',
      modelApiName: 'modelApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentApiId: 'string',
      agentApiName: 'string',
      mcpRouteId: 'string',
      mcpServerId: 'string',
      mcpServerName: 'string',
      modelApiId: 'string',
      modelApiName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketProductRefConfig extends $dara.Model {
  apigRefConfig?: HiMarketProductRefConfigApigRefConfig;
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      apigRefConfig: 'apigRefConfig',
      gatewayId: 'gatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apigRefConfig: HiMarketProductRefConfigApigRefConfig,
      gatewayId: 'string',
    };
  }

  validate() {
    if(this.apigRefConfig && typeof (this.apigRefConfig as any).validate === 'function') {
      (this.apigRefConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

