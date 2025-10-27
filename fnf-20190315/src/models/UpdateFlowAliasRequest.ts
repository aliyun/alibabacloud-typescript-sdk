// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowAliasRequestRoutingConfigurations extends $dara.Model {
  /**
   * @example
   * 1
   */
  version?: string;
  /**
   * @example
   * 20
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowAliasRequest extends $dara.Model {
  /**
   * @example
   * example description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example-flow-name
   */
  flowName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alias name
   */
  name?: string;
  routingConfigurations?: UpdateFlowAliasRequestRoutingConfigurations[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flowName: 'FlowName',
      name: 'Name',
      routingConfigurations: 'RoutingConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flowName: 'string',
      name: 'string',
      routingConfigurations: { 'type': 'array', 'itemType': UpdateFlowAliasRequestRoutingConfigurations },
    };
  }

  validate() {
    if(Array.isArray(this.routingConfigurations)) {
      $dara.Model.validateArray(this.routingConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

