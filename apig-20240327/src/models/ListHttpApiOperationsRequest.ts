// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpApiOperationsRequest extends $dara.Model {
  /**
   * @remarks
   * The consumer authorization rule ID used to filter the operation list. The response includes only operations that are authorized by the specified rule.
   * 
   * @example
   * cas-xxx
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * The authentication enablement filter.
   * 
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * Specifies whether the request is for a deployment scenario.
   * 
   * @example
   * true
   */
  forDeploy?: boolean;
  /**
   * @remarks
   * The gateway ID filter.
   * 
   * @example
   * gw-001
   */
  gatewayId?: string;
  /**
   * @remarks
   * Lists operations by HTTP method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * Searches for operations by exact name match.
   * 
   * @example
   * getUserInfo
   */
  name?: string;
  /**
   * @remarks
   * Searches for operations by name prefix.
   * 
   * @example
   * GetUser
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Searches for operations by path prefix match.
   * 
   * @example
   * /v1
   */
  pathLike?: string;
  /**
   * @remarks
   * The environment ID. When specified together with withConsumerInfoById, the response includes the authorization rule list of the specified consumer in the specified environment for each operation.
   * 
   * @example
   * env-xxx
   */
  withConsumerInEnvironmentId?: string;
  /**
   * @remarks
   * The consumer ID. When specified together with withConsumerInEnvironmentId, the response includes the authorization rule list of the specified consumer in the specified environment for each operation.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * The plugin ID used to retrieve plugin deployment information.
   * 
   * @example
   * pl-xxx
   */
  withPluginAttachmentByPluginId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerAuthorizationRuleId: 'consumerAuthorizationRuleId',
      enableAuth: 'enableAuth',
      forDeploy: 'forDeploy',
      gatewayId: 'gatewayId',
      method: 'method',
      name: 'name',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pathLike: 'pathLike',
      withConsumerInEnvironmentId: 'withConsumerInEnvironmentId',
      withConsumerInfoById: 'withConsumerInfoById',
      withPluginAttachmentByPluginId: 'withPluginAttachmentByPluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerAuthorizationRuleId: 'string',
      enableAuth: 'boolean',
      forDeploy: 'boolean',
      gatewayId: 'string',
      method: 'string',
      name: 'string',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pathLike: 'string',
      withConsumerInEnvironmentId: 'string',
      withConsumerInfoById: 'string',
      withPluginAttachmentByPluginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

