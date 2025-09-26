// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RoutingConfiguration } from "./RoutingConfiguration";


export class AgentRuntimeEndpoint extends $dara.Model {
  agentRuntimeEndpointArn?: string;
  agentRuntimeEndpointId?: string;
  agentRuntimeEndpointName?: string;
  agentRuntimeId?: string;
  description?: string;
  /**
   * @remarks
   * 智能体运行时端点的公网访问地址
   */
  endpointPublicUrl?: string;
  /**
   * @remarks
   * 智能体运行时端点的路由配置，支持多版本权重分配
   */
  routingConfiguration?: RoutingConfiguration;
  status?: string;
  statusReason?: string;
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

