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
   * The consumer authorization rule ID. If specified, the response includes only routes that are authorized by the specified rule.
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
   * The domain name ID used to filter routes.
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
   * Specifies whether the query is for a deployment scenario.
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
   * The route name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * The route name for fuzzy match.
   * 
   * @example
   * item
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
   * The route path for fuzzy match.
   * 
   * @example
   * /v1
   */
  pathLike?: string;
  /**
   * @remarks
   * Specifies whether to include consumer authorization information in the response.
   * 
   * @example
   * true
   */
  withAuthPolicyInfo?: boolean;
  /**
   * @remarks
   * The consumer ID. If specified, the response includes the authorization rule list for the specified consumer in each route.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * The plug-in ID. If specified, the response includes the attachment information of the specified plug-in for each route.
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

