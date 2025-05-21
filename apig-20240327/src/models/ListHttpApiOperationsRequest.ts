// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpApiOperationsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter the operation list based on a specific consumer authorization rule ID, and the interface list in the response only contains authorized operations.
   * 
   * @example
   * cas-xxx
   */
  consumerAuthorizationRuleId?: string;
  forDeploy?: boolean;
  gatewayId?: string;
  /**
   * @remarks
   * List interfaces by Method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * Search operations by exact name.
   * 
   * @example
   * getUserInfo
   */
  name?: string;
  /**
   * @remarks
   * Search operations by name prefix.
   * 
   * @example
   * GetUser
   */
  nameLike?: string;
  /**
   * @remarks
   * Page number, starting from 1, default is 1 if not specified.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, valid range [1, 100], default is 10 if not specified.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Search operations by path prefix.
   * 
   * @example
   * /v1
   */
  pathLike?: string;
  /**
   * @remarks
   * Each operation information in the response carries a list of authorization rules for the specified consumer under the specified environment ID. The withConsumerInEnvironmentId field needs to be additionally specified.
   * 
   * @example
   * env-xxx
   */
  withConsumerInEnvironmentId?: string;
  /**
   * @remarks
   * Each operation information in the response carries a list of authorization rules for the specified consumer under the specified environment ID. The withConsumerInEnvironmentId field needs to be additionally specified.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * Plugin ID, use this plugin ID to retrieve the plugin release information.
   * 
   * @example
   * pl-xxx
   */
  withPluginAttachmentByPluginId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerAuthorizationRuleId: 'consumerAuthorizationRuleId',
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

