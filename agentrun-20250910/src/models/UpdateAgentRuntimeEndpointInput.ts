// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RoutingConfiguration } from "./RoutingConfiguration";
import { ScalingConfig } from "./ScalingConfig";


export class UpdateAgentRuntimeEndpointInput extends $dara.Model {
  /**
   * @remarks
   * Agent runtime endpoint Name
   * 
   * @example
   * production-endpoint
   */
  agentRuntimeEndpointName?: string;
  /**
   * @remarks
   * 为 true 时删除该端点的弹性配置
   */
  deleteScalingConfig?: boolean;
  /**
   * @remarks
   * Description
   * 
   * @example
   * Updated endpoint configuration
   */
  description?: string;
  /**
   * @remarks
   * Whether to disable public network access for this endpoint
   */
  disablePublicNetworkAccess?: boolean;
  /**
   * @remarks
   * The Ingress configuration of the agent runtime endpoint, which supports weight assignment across multiple versions
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
   * Target Version of the agent runtime
   * 
   * @example
   * LATEST
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeEndpointName: 'agentRuntimeEndpointName',
      deleteScalingConfig: 'deleteScalingConfig',
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
      deleteScalingConfig: 'boolean',
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

