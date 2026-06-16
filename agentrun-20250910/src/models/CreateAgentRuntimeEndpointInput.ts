// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RoutingConfiguration } from "./RoutingConfiguration";
import { ScalingConfig } from "./ScalingConfig";


export class CreateAgentRuntimeEndpointInput extends $dara.Model {
  /**
   * @remarks
   * The name of the agent runtime endpoint.
   * 
   * @example
   * production-endpoint
   */
  agentRuntimeEndpointName?: string;
  /**
   * @remarks
   * The description of the agent runtime endpoint.
   * 
   * @example
   * Production endpoint for customer service agent
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable public network access for the endpoint.
   */
  disablePublicNetworkAccess?: boolean;
  /**
   * @remarks
   * The routing configuration for the agent runtime endpoint. This configuration distributes traffic to multiple versions based on weights.
   * 
   * @example
   * {}
   */
  routingConfiguration?: RoutingConfiguration;
  /**
   * @remarks
   * 端点的弹性伸缩配置，包括最小实例数和定时扩容策略（复用 ScalingConfig）
   */
  scalingConfig?: ScalingConfig;
  /**
   * @remarks
   * The target version of the agent runtime.
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
      scalingConfig: 'scalingConfig',
      targetVersion: 'targetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeEndpointName: 'string',
      description: 'string',
      disablePublicNetworkAccess: 'boolean',
      routingConfiguration: RoutingConfiguration,
      scalingConfig: ScalingConfig,
      targetVersion: 'string',
    };
  }

  validate() {
    if(this.routingConfiguration && typeof (this.routingConfiguration as any).validate === 'function') {
      (this.routingConfiguration as any).validate();
    }
    if(this.scalingConfig && typeof (this.scalingConfig as any).validate === 'function') {
      (this.scalingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

