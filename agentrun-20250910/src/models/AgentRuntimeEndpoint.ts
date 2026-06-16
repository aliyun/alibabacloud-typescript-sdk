// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RoutingConfiguration } from "./RoutingConfiguration";
import { ScalingStatus } from "./ScalingStatus";


export class AgentRuntimeEndpoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the agent runtime endpoint.
   * 
   * @example
   * acs:agentrun:cn-hangzhou:1760720386195983:runtime-endpoints/e56d483c-db80-4116-9ec4-25f16f5facfd
   */
  agentRuntimeEndpointArn?: string;
  /**
   * @remarks
   * The unique identifier of the agent runtime endpoint.
   * 
   * @example
   * are-1234567890abcdef
   */
  agentRuntimeEndpointId?: string;
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
   * The unique identifier of the agent runtime.
   * 
   * @example
   * ar-1234567890abcdef
   */
  agentRuntimeId?: string;
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
   * If `true`, public access for this endpoint is disabled.
   */
  disablePublicNetworkAccess?: boolean;
  /**
   * @remarks
   * The public access address for the agent runtime endpoint.
   * 
   * @example
   * https://ar-1234567890abcdef.cn-hangzhou.agentrun.aliyuncs.com
   */
  endpointPublicUrl?: string;
  /**
   * @remarks
   * The configuration for weight-based routing across multiple agent versions.
   */
  routingConfiguration?: RoutingConfiguration;
  /**
   * @remarks
   * 端点的弹性伸缩状态，包括最小/目标/当前实例数及定时策略（复用 ScalingStatus）
   */
  scalingStatus?: ScalingStatus;
  /**
   * @remarks
   * The current status of the agent runtime endpoint.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The reason for the current status of the endpoint.
   * 
   * @example
   * Endpoint is active and ready
   */
  statusReason?: string;
  /**
   * @remarks
   * The agent version that the endpoint targets.
   * 
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

