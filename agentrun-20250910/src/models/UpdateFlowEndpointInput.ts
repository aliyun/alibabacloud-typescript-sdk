// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlowEndpointRoutingConfig } from "./FlowEndpointRoutingConfig";


export class UpdateFlowEndpointInput extends $dara.Model {
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
   * Specifies whether to disable public network access for the flow endpoint.
   */
  disablePublicNetworkAccess?: boolean;
  /**
   * @remarks
   * The unique name of the flow endpoint.
   * 
   * @example
   * my-flow-endpoint
   */
  flowEndpointName?: string;
  /**
   * @remarks
   * The routing configuration that defines traffic distribution for the flow endpoint.
   * 
   * @example
   * []
   */
  routingConfiguration?: FlowEndpointRoutingConfig[];
  /**
   * @remarks
   * The target version for the flow endpoint.
   * 
   * @example
   * 1
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      disablePublicNetworkAccess: 'disablePublicNetworkAccess',
      flowEndpointName: 'flowEndpointName',
      routingConfiguration: 'routingConfiguration',
      targetVersion: 'targetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disablePublicNetworkAccess: 'boolean',
      flowEndpointName: 'string',
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

