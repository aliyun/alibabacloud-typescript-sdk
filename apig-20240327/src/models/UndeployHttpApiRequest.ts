// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UndeployHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cqsmtellhtgvo***
   */
  environmentId?: string;
  /**
   * @remarks
   * Gateway ID.
   * 
   * @example
   * gw-cq7l5s5lhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * op-d4favr6m1hk***
   */
  operationId?: string;
  /**
   * @remarks
   * The route ID. You must specify this parameter when you unpublish the route of an HTTP API.
   * 
   * @example
   * hr-cr82undlhtgrle***
   */
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      operationId: 'operationId',
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      gatewayId: 'string',
      operationId: 'string',
      routeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

