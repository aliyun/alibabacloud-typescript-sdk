// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowAliasRequestRoutingConfigurations extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  version?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
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

export class CreateFlowAliasRequest extends $dara.Model {
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
   * example-alias-name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routingConfigurations?: CreateFlowAliasRequestRoutingConfigurations[];
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
      routingConfigurations: { 'type': 'array', 'itemType': CreateFlowAliasRequestRoutingConfigurations },
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

