// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlowEndpointRoutingConfig } from "./FlowEndpointRoutingConfig";


export class UpdateFlowEndpointInput extends $dara.Model {
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
   * 工作流端点的唯一标识名称
   * 
   * @example
   * my-flow-endpoint
   */
  flowEndpointName?: string;
  /**
   * @remarks
   * 工作流端点的版本路由配置，用于流量分配
   * 
   * @example
   * []
   */
  routingConfiguration?: FlowEndpointRoutingConfig[];
  /**
   * @remarks
   * 工作流端点的标签信息
   * 
   * @example
   * production
   */
  tags?: string[];
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
      description: 'description',
      flowEndpointName: 'flowEndpointName',
      routingConfiguration: 'routingConfiguration',
      tags: 'tags',
      targetVersion: 'targetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flowEndpointName: 'string',
      routingConfiguration: { 'type': 'array', 'itemType': FlowEndpointRoutingConfig },
      tags: { 'type': 'array', 'itemType': 'string' },
      targetVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routingConfiguration)) {
      $dara.Model.validateArray(this.routingConfiguration);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

