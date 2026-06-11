// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpApiRoutesRequest extends $dara.Model {
  /**
   * @example
   * test-svc
   */
  backendServiceName?: string;
  /**
   * @remarks
   * Filters the results, returning only routes authorized by the specified consumer authorization rule.
   * 
   * @example
   * cas-xxx
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * The deployment status of the route.
   * 
   * @example
   * NotDeployed
   */
  deployStatuses?: string;
  /**
   * @remarks
   * Filters routes by the specified domain ID.
   * 
   * @example
   * d-xxx
   */
  domainId?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cpqnr6tlhtgubc***
   */
  environmentId?: string;
  /**
   * @remarks
   * Set to `true` if the query is for a deployment scenario.
   * 
   * @example
   * true
   */
  forDeploy?: boolean;
  /**
   * @remarks
   * The cloud-native API gateway ID.
   * 
   * @example
   * gw-cpv4sqdl****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The route name. This parameter requires an exact match.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * Filters the results by route name using a fuzzy search.
   * 
   * @example
   * item
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number, starting from 1. Defaults to 1 if unspecified.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values are 1 to 100. Defaults to 10 if unspecified.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the results by route path using a fuzzy search.
   * 
   * @example
   * /v1
   */
  pathLike?: string;
  /**
   * @remarks
   * Set to `true` to include the consumer authorization policy in the response.
   * 
   * @example
   * true
   */
  withAuthPolicyInfo?: boolean;
  /**
   * @remarks
   * The consumer ID. If specified, the response includes the consumer\\"s associated authorization rules for each route.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * The plugin ID. If specified, the response includes the attachment information for this plugin for each route.
   * 
   * @example
   * pl-xxx
   */
  withPluginAttachmentByPluginId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServiceName: 'backendServiceName',
      consumerAuthorizationRuleId: 'consumerAuthorizationRuleId',
      deployStatuses: 'deployStatuses',
      domainId: 'domainId',
      environmentId: 'environmentId',
      forDeploy: 'forDeploy',
      gatewayId: 'gatewayId',
      name: 'name',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pathLike: 'pathLike',
      withAuthPolicyInfo: 'withAuthPolicyInfo',
      withConsumerInfoById: 'withConsumerInfoById',
      withPluginAttachmentByPluginId: 'withPluginAttachmentByPluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServiceName: 'string',
      consumerAuthorizationRuleId: 'string',
      deployStatuses: 'string',
      domainId: 'string',
      environmentId: 'string',
      forDeploy: 'boolean',
      gatewayId: 'string',
      name: 'string',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pathLike: 'string',
      withAuthPolicyInfo: 'boolean',
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

