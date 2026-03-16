// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RoutingConfiguration } from "./RoutingConfiguration";


export class UpdateAgentRuntimeEndpointInput extends $dara.Model {
  /**
   * @example
   * production-endpoint
   */
  agentRuntimeEndpointName?: string;
  /**
   * @example
   * Updated endpoint configuration
   */
  description?: string;
  /**
   * @remarks
   * 是否禁用该端点的公网访问
   */
  disablePublicNetworkAccess?: boolean;
  /**
   * @remarks
   * 智能体运行时端点的路由配置，支持多版本权重分配
   * 
   * @example
   * {}
   */
  routingConfiguration?: RoutingConfiguration;
  /**
   * @remarks
   * 智能体运行时的目标版本
   * 
   * @example
   * LATEST
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeEndpointName: 'agentRuntimeEndpointName',
      description: 'description',
      disablePublicNetworkAccess: 'disablePublicNetworkAccess',
      routingConfiguration: 'routingConfiguration',
      targetVersion: 'targetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeEndpointName: 'string',
      description: 'string',
      disablePublicNetworkAccess: 'boolean',
      routingConfiguration: RoutingConfiguration,
      targetVersion: 'string',
    };
  }

  validate() {
    if(this.routingConfiguration && typeof (this.routingConfiguration as any).validate === 'function') {
      (this.routingConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

