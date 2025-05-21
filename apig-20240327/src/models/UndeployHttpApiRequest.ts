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
  gatewayId?: string;
  operationId?: string;
  /**
   * @remarks
   * Route ID. This must be provided when publishing the route of an HTTP API.
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

