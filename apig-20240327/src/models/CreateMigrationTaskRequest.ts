// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrationTaskRequest extends $dara.Model {
  /**
   * @example
   * c-xxxxxx
   */
  clusterId?: string;
  /**
   * @example
   * migration from Nginx
   */
  description?: string;
  /**
   * @example
   * env-xxxx
   */
  environmentId?: string;
  /**
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @example
   * api-xxxx
   */
  httpApiId?: string;
  /**
   * @example
   * nginx
   */
  ingressClass?: string;
  /**
   * @example
   * Nginx Ingress
   */
  migrationType?: string;
  /**
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      description: 'description',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      httpApiId: 'httpApiId',
      ingressClass: 'ingressClass',
      migrationType: 'migrationType',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      httpApiId: 'string',
      ingressClass: 'string',
      migrationType: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

