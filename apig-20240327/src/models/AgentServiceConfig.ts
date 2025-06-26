// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentServiceConfigDashScopeConfig } from "./AgentServiceConfigDashScopeConfig";
import { AgentServiceConfigDifyConfig } from "./AgentServiceConfigDifyConfig";


export class AgentServiceConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://dashscope.aliyuncs.com/api/v1
   */
  address?: string;
  dashScopeConfig?: AgentServiceConfigDashScopeConfig;
  difyConfig?: AgentServiceConfigDifyConfig;
  enableHealthCheck?: boolean;
  protocols?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      dashScopeConfig: 'dashScopeConfig',
      difyConfig: 'difyConfig',
      enableHealthCheck: 'enableHealthCheck',
      protocols: 'protocols',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      dashScopeConfig: AgentServiceConfigDashScopeConfig,
      difyConfig: AgentServiceConfigDifyConfig,
      enableHealthCheck: 'boolean',
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
    };
  }

  validate() {
    if(this.dashScopeConfig && typeof (this.dashScopeConfig as any).validate === 'function') {
      (this.dashScopeConfig as any).validate();
    }
    if(this.difyConfig && typeof (this.difyConfig as any).validate === 'function') {
      (this.difyConfig as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

