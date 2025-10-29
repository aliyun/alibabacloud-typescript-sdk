// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RoutingConfiguration } from "./RoutingConfiguration";


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
      endpointPublicUrl: 'endpointPublicUrl',
      routingConfiguration: 'routingConfiguration',
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
      endpointPublicUrl: 'string',
      routingConfiguration: RoutingConfiguration,
      status: 'string',
      statusReason: 'string',
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

