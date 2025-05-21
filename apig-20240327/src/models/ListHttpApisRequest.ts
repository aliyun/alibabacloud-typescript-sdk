// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpApisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud-native API Gateway instance.
   * 
   * @example
   * gw-cq2avtllh****
   */
  gatewayId?: string;
  gatewayType?: string;
  /**
   * @remarks
   * The search keyword. You can fuzzy-search by API name or exact-search by API ID.
   * 
   * @example
   * test-
   */
  keyword?: string;
  /**
   * @remarks
   * The API name that is used for the search. In this case, exact search is performed.
   * 
   * @example
   * login
   */
  name?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-ahr5uil8raz0rq3b
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The API type. You can specify multiple types and separate them with a comma (,).
   * 
   * *   Http
   * *   Rest
   * *   WebSocket
   * *   HttpIngress
   * 
   * @example
   * Http,Rest
   */
  types?: string;
  withAPIsPublishedToEnvironment?: boolean;
  /**
   * @remarks
   * The consumer authentication policy in the specified environment in each returned API.
   * 
   * @example
   * env-xxx
   */
  withAuthPolicyInEnvironmentId?: string;
  /**
   * @remarks
   * Specifies whether authentication is enabled.
   * 
   * @example
   * true
   */
  withAuthPolicyList?: boolean;
  /**
   * @remarks
   * The authorization rules of the specified consumer in each returned API.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * The environment information.
   * 
   * @example
   * true
   */
  withEnvironmentInfo?: boolean;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-ctovu5mm1hksb4q8ln40
   */
  withEnvironmentInfoById?: string;
  /**
   * @remarks
   * The Ingress information.
   * 
   * @example
   * false
   */
  withIngressInfo?: boolean;
  /**
   * @remarks
   * The plug-in ID. You can use the returned value of this parameter to query the plug-in.
   * 
   * @example
   * pl-ct9qn3um1hktue8dqol0
   */
  withPluginAttachmentByPluginId?: string;
  withPolicyConfigs?: boolean;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      gatewayType: 'gatewayType',
      keyword: 'keyword',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      types: 'types',
      withAPIsPublishedToEnvironment: 'withAPIsPublishedToEnvironment',
      withAuthPolicyInEnvironmentId: 'withAuthPolicyInEnvironmentId',
      withAuthPolicyList: 'withAuthPolicyList',
      withConsumerInfoById: 'withConsumerInfoById',
      withEnvironmentInfo: 'withEnvironmentInfo',
      withEnvironmentInfoById: 'withEnvironmentInfoById',
      withIngressInfo: 'withIngressInfo',
      withPluginAttachmentByPluginId: 'withPluginAttachmentByPluginId',
      withPolicyConfigs: 'withPolicyConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      gatewayType: 'string',
      keyword: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      types: 'string',
      withAPIsPublishedToEnvironment: 'boolean',
      withAuthPolicyInEnvironmentId: 'string',
      withAuthPolicyList: 'boolean',
      withConsumerInfoById: 'string',
      withEnvironmentInfo: 'boolean',
      withEnvironmentInfoById: 'string',
      withIngressInfo: 'boolean',
      withPluginAttachmentByPluginId: 'string',
      withPolicyConfigs: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

