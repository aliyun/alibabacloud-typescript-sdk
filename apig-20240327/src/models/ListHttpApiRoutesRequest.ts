// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpApiRoutesRequest extends $dara.Model {
  /**
   * @remarks
   * The string that is used to filter routes based on consumer authentication rules. Only authorized APIs are returned.
   * 
   * @example
   * cas-xxx
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * The deployment state of the route.
   * 
   * Enumerated values:
   * 
   * *   Deploying: The route is being deployed.
   * *   DeployedWithChanges: The route is deployed and modified.
   * *   Undeploying: The route is being undeployed.
   * *   NotDeployed: The route is not deployed.
   * *   Deployed: The route is deployed.
   * *   UndeployFailed: The route failed to be undeployed.
   * *   DeployFailed: The route failed to be deployed.
   * 
   * @example
   * NotDeployed
   */
  deployStatuses?: string;
  /**
   * @remarks
   * Specifies to filter routes by domain ID.
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
  forDeploy?: boolean;
  /**
   * @remarks
   * The ID of the Cloud-native API Gateway instance.
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
   * The route name keyword for a fuzzy search.
   * 
   * @example
   * item
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
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
   * The route path keyword for a fuzzy search.
   * 
   * @example
   * /v1
   */
  pathLike?: string;
  /**
   * @remarks
   * The consumer authorization information in the response.
   * 
   * @example
   * true
   */
  withAuthPolicyInfo?: boolean;
  /**
   * @remarks
   * The authentication rules of the specified consumer in each route returned.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * The mounting information of the specified plug-in in each route returned.
   * 
   * @example
   * pl-xxx
   */
  withPluginAttachmentByPluginId?: string;
  static names(): { [key: string]: string } {
    return {
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

