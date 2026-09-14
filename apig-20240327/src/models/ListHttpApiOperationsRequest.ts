// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpApiOperationsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the API operation list by a specific consumer authorization rule ID. Only authorized API operations are included in the response.
   * 
   * @example
   * cas-xxx
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * The authentication enable filter.
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
   * Filters API operations by HTTP method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * Filters API operations by exact name match.
   * 
   * @example
   * getUserInfo
   */
  name?: string;
  /**
   * @remarks
   * Filters API operations by name prefix.
   * 
   * @example
   * GetUser
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number. Starts from 1. Default value: 1.
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
   * Filters API operations by path prefix match.
   * 
   * @example
   * /v1
   */
  pathLike?: string;
  /**
   * @remarks
   * Includes the authorization rule list for the specified consumer in the specified environment ID in each API operation\\"s information in the response. You must also specify the withConsumerInfoById field.
   * 
   * @example
   * env-xxx
   */
  withConsumerInEnvironmentId?: string;
  /**
   * @remarks
   * Includes the authorization rule list for the specified consumer in the specified environment ID in each API operation\\"s information in the response. You must also specify the withConsumerInEnvironmentId field.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * The plug-in ID. Retrieves plug-in publish information based on this plug-in ID.
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

