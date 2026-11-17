// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpApiRoutesRequest extends $dara.Model {
  /**
   * @remarks
   * The backend service name. You can use this service name to filter routing.
   * 
   * @example
   * test-svc
   */
  backendServiceName?: string;
  /**
   * @remarks
   * The ID of the consumer authorization rule used to filter the API list. The API list in the response includes only authorized APIs.
   * 
   * @example
   * cas-xxx
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * The deployment statuses of the routes.
   * 
   * @example
   * NotDeployed
   */
  deployStatuses?: string;
  /**
   * @remarks
   * The domain name ID used to filter route information.
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
   * 
   * @deprecated
   */
  environmentId?: string;
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
   * The ID of the cloud-native API gateway.
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
   * The keyword used to perform a fuzzy search by route name.
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
   * The keyword used to perform a fuzzy search by route path.
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
   * Specifies whether to include the authorization rules of a specified consumer ID in each route entry in the response.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * Specifies whether to include the mount information of a specified plug-in ID in each route entry in the response.
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

