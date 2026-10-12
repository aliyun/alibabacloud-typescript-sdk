// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source ACK cluster. The value must be the same as the cluster specified in the IngressInfo of the API. Note: This parameter is actually required. If this parameter is not specified, the API returns 400 InvalidParameter.IsEmpty.
   * 
   * @example
   * c-xxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the task. The description is stored only when the task is created.
   * 
   * @example
   * migration from Nginx
   */
  description?: string;
  /**
   * @remarks
   * The ID of the destination environment. The value must be the same as the Ingress import environment of the API. Note: This parameter is actually required. If this parameter is not specified, the API returns 400 InvalidParameter.IsEmpty. You can call ListEnvironments to query existing environment IDs. CreateEnvironment has been deprecated.
   * 
   * @example
   * env-xxxx
   * 
   * @deprecated
   */
  environmentId?: string;
  /**
   * @remarks
   * The ID of the destination gateway to which traffic is migrated.
   * 
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The HTTP API ID. The API must have been imported as an Ingress type (HttpIngress) API. Note: This parameter is actually required. If this parameter is not specified, the API returns 400 InvalidParameter.IsEmpty.
   * 
   * @example
   * api-xxxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * The Ingress class. If specified, the value must be the same as the API import configuration. Otherwise, an ingress class conflict error is returned.
   * 
   * @example
   * nginx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The migration type.
   * [_single.params.body.props.migrationType.enum.Nginx Ingress]Nginx Ingress migration.
   * 
   * @example
   * Nginx Ingress
   */
  migrationType?: string;
  /**
   * @remarks
   * The watched namespace. If specified, the value must be the same as the API import configuration. Otherwise, a watchNamespace conflict error is returned.
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

