// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlowEndpointRoutingConfig } from "./FlowEndpointRoutingConfig";


export class FlowEndpoint extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp for the flow endpoint, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The description of the flow endpoint.
   * 
   * @example
   * Production endpoint for flow
   */
  description?: string;
  /**
   * @remarks
   * Set to true to disable public network access for this endpoint.
   */
  disablePublicNetworkAccess?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the flow endpoint.
   * 
   * @example
   * acs:agentrun:cn-hangzhou:1760720386195983:workspaces/ws-xxx/flows/flow-xxx/endpoints/fe-xxx
   */
  flowEndpointArn?: string;
  /**
   * @remarks
   * The unique identifier of the flow endpoint.
   * 
   * @example
   * fe-1234567890abcdef
   */
  flowEndpointId?: string;
  /**
   * @remarks
   * The name of the flow endpoint.
   * 
   * @example
   * my-flow-endpoint
   */
  flowEndpointName?: string;
  /**
   * @remarks
   * The unique identifier of the flow.
   * 
   * @example
   * flow-1234567890abcdef
   */
  flowId?: string;
  /**
   * @remarks
   * The last update timestamp for the flow endpoint, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * The routing configuration that distributes traffic to different versions of the flow.
   * 
   * @example
   * []
   */
  routingConfiguration?: FlowEndpointRoutingConfig[];
  /**
   * @remarks
   * The flow version targeted by the endpoint.
   * 
   * @example
   * 1
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      disablePublicNetworkAccess: 'disablePublicNetworkAccess',
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
      disablePublicNetworkAccess: 'boolean',
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

