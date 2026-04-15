// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlowEndpointRoutingConfig } from "./FlowEndpointRoutingConfig";


export class FlowEndpoint extends $dara.Model {
  /**
   * @remarks
   * 工作流端点的创建时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 工作流端点的描述信息
   * 
   * @example
   * Production endpoint for flow
   */
  description?: string;
  /**
   * @remarks
   * 工作流端点的全局唯一资源名称
   * 
   * @example
   * acs:agentrun:cn-hangzhou:1760720386195983:workspaces/ws-xxx/flows/flow-xxx/endpoints/fe-xxx
   */
  flowEndpointArn?: string;
  /**
   * @remarks
   * 工作流端点的唯一标识符
   * 
   * @example
   * fe-1234567890abcdef
   */
  flowEndpointId?: string;
  /**
   * @remarks
   * 工作流端点的名称
   * 
   * @example
   * my-flow-endpoint
   */
  flowEndpointName?: string;
  /**
   * @remarks
   * 工作流的唯一标识符
   * 
   * @example
   * flow-1234567890abcdef
   */
  flowId?: string;
  /**
   * @remarks
   * 工作流端点最后一次更新的时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * 工作流端点的版本路由配置
   * 
   * @example
   * []
   */
  routingConfiguration?: FlowEndpointRoutingConfig[];
  /**
   * @remarks
   * 工作流端点指向的目标版本号
   * 
   * @example
   * 1
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      flowEndpointArn: 'flowEndpointArn',
      flowEndpointId: 'flowEndpointId',
      flowEndpointName: 'flowEndpointName',
      flowId: 'flowId',
      lastUpdatedAt: 'lastUpdatedAt',
      routingConfiguration: 'routingConfiguration',
      targetVersion: 'targetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      flowEndpointArn: 'string',
      flowEndpointId: 'string',
      flowEndpointName: 'string',
      flowId: 'string',
      lastUpdatedAt: 'string',
      routingConfiguration: { 'type': 'array', 'itemType': FlowEndpointRoutingConfig },
      targetVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routingConfiguration)) {
      $dara.Model.validateArray(this.routingConfiguration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

