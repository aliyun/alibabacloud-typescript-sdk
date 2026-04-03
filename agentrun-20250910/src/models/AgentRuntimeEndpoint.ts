// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RoutingConfiguration } from "./RoutingConfiguration";
import { ScalingStatus } from "./ScalingStatus";


export class AgentRuntimeEndpoint extends $dara.Model {
  /**
   * @example
   * acs:agentrun:cn-hangzhou:1760720386195983:runtime-endpoints/e56d483c-db80-4116-9ec4-25f16f5facfd
   */
  agentRuntimeEndpointArn?: string;
  /**
   * @example
   * are-1234567890abcdef
   */
  agentRuntimeEndpointId?: string;
  /**
   * @example
   * production-endpoint
   */
  agentRuntimeEndpointName?: string;
  /**
   * @example
   * ar-1234567890abcdef
   */
  agentRuntimeId?: string;
  /**
   * @example
   * Production endpoint for customer service agent
   */
  description?: string;
  /**
   * @remarks
   * 是否禁用该端点的公网访问
   */
  disablePublicNetworkAccess?: boolean;
  /**
   * @remarks
   * 智能体运行时端点的公网访问地址
   * 
   * @example
   * https://ar-1234567890abcdef.cn-hangzhou.agentrun.aliyuncs.com
   */
  endpointPublicUrl?: string;
  /**
   * @remarks
   * 智能体运行时端点的路由配置，支持多版本权重分配
   */
  routingConfiguration?: RoutingConfiguration;
  /**
   * @remarks
   * 端点的弹性伸缩状态，包括最小/目标/当前实例数及定时策略（复用 ScalingStatus）
   */
  scalingStatus?: ScalingStatus;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @example
   * Endpoint is active and ready
   */
  statusReason?: string;
  /**
   * @example
   * LATEST
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeEndpointArn: 'agentRuntimeEndpointArn',
      agentRuntimeEndpointId: 'agentRuntimeEndpointId',
      agentRuntimeEndpointName: 'agentRuntimeEndpointName',
      agentRuntimeId: 'agentRuntimeId',
      description: 'description',
      disablePublicNetworkAccess: 'disablePublicNetworkAccess',
      endpointPublicUrl: 'endpointPublicUrl',
      routingConfiguration: 'routingConfiguration',
      scalingStatus: 'scalingStatus',
      status: 'status',
      statusReason: 'statusReason',
      targetVersion: 'targetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeEndpointArn: 'string',
      agentRuntimeEndpointId: 'string',
      agentRuntimeEndpointName: 'string',
      agentRuntimeId: 'string',
      description: 'string',
      disablePublicNetworkAccess: 'boolean',
      endpointPublicUrl: 'string',
      routingConfiguration: RoutingConfiguration,
      scalingStatus: ScalingStatus,
      status: 'string',
      statusReason: 'string',
      targetVersion: 'string',
    };
  }

  validate() {
    if(this.routingConfiguration && typeof (this.routingConfiguration as any).validate === 'function') {
      (this.routingConfiguration as any).validate();
    }
    if(this.scalingStatus && typeof (this.scalingStatus as any).validate === 'function') {
      (this.scalingStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

