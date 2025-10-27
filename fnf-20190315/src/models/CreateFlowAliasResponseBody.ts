// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowAliasResponseBodyRoutingConfigurations extends $dara.Model {
  /**
   * @example
   * 1
   */
  version?: string;
  /**
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

export class CreateFlowAliasResponseBody extends $dara.Model {
  /**
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @example
   * example description
   */
  description?: string;
  /**
   * @example
   * example-flow-name
   */
  flowName?: string;
  /**
   * @example
   * exampe-alias-name
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * testRequestID
   */
  requestId?: string;
  routingConfigurations?: CreateFlowAliasResponseBodyRoutingConfigurations[];
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      flowName: 'FlowName',
      name: 'Name',
      requestId: 'RequestId',
      routingConfigurations: 'RoutingConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      flowName: 'string',
      name: 'string',
      requestId: 'string',
      routingConfigurations: { 'type': 'array', 'itemType': CreateFlowAliasResponseBodyRoutingConfigurations },
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

