// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpApiOperationsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters API operations by a specific consumer authorization rule ID. The response includes only authorized API operations.
   * 
   * @example
   * cas-xxx
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * Specifies whether to enable the authentication filter.
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
   * The ID of the gateway used to filter API operations.
   * 
   * @example
   * gw-001
   */
  gatewayId?: string;
  /**
   * @remarks
   * Filters API operations by HTTP method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * Searches for API operations by exact name.
   * 
   * @example
   * getUserInfo
   */
  name?: string;
  /**
   * @remarks
   * Searches for API operations by name prefix.
   * 
   * @example
   * GetUser
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Searches for API operations by path prefix.
   * 
   * @example
   * /v1
   */
  pathLike?: string;
  /**
   * @remarks
   * The ID of the environment. The response includes the list of authorization rules for the specified consumer in this environment for each API operation. You must also specify the withConsumerInfoById parameter.
   * 
   * @example
   * env-xxx
   */
  withConsumerInEnvironmentId?: string;
  /**
   * @remarks
   * The ID of the consumer. The response includes the list of authorization rules for this consumer in the specified environment for each API operation. You must also specify the withConsumerInEnvironmentId parameter.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * The ID of the plugin. Retrieves the plugin release information based on this plugin ID.
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

