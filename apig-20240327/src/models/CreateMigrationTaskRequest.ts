// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source ACK cluster. It must match the cluster in the IngressInfo of the API. Note: This parameter is required. If it is not provided, the API returns a 400 InvalidParameter.IsEmpty error.
   * 
   * @example
   * c-xxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The task description. It is stored in the database only when the task is created.
   * 
   * @example
   * migration from Nginx
   */
  description?: string;
  /**
   * @remarks
   * The ID of the destination environment. It must match the Ingress import environment of the API. Note: This parameter is required. If it is not provided, the API returns a 400 InvalidParameter.IsEmpty error. You can call ListEnvironments to query existing environment IDs. CreateEnvironment is deprecated.
   * 
   * @example
   * env-xxxx
   * 
   * @deprecated
   */
  environmentId?: string;
  /**
   * @remarks
   * The ID of the destination gateway to which migration traffic is switched.
   * 
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The ID of the HTTP API. The API must be imported as an Ingress type (HttpIngress) API. Note: This parameter is required. If it is not provided, the API returns a 400 InvalidParameter.IsEmpty error.
   * 
   * @example
   * api-xxxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * The Ingress class. It must match the API import configuration. Otherwise, an ingress class conflict error is reported.
   * 
   * @example
   * nginx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The migration type.
   * 
   * @example
   * Nginx Ingress
   */
  migrationType?: string;
  /**
   * @remarks
   * The watched namespace. It must match the API import configuration. Otherwise, a watchNamespace conflict error is reported.
   * 
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

