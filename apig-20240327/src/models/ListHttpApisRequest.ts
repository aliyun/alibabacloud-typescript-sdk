// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpApisRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include policy configurations.
   * 
   * @example
   * gw-cq2avtllh****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The API information.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The consumer authentication policy in the specified environment in each returned API.
   * 
   * @example
   * test-
   */
  keyword?: string;
  /**
   * @remarks
   * Specifies whether authentication is enabled.
   * 
   * @example
   * login
   */
  name?: string;
  /**
   * @remarks
   * The environment information.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * rg-ahr5uil8raz0rq3b
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Ingress information.
   * 
   * @example
   * Http,Rest
   */
  types?: string;
  /**
   * @remarks
   * Whether to return all APIs published to a specific environment
   * 
   * @example
   * true
   */
  withAPIsPublishedToEnvironment?: boolean;
  /**
   * @remarks
   * The gateway type to filter. Valid values: **AI** and **API**.
   * 
   * @example
   * env-xxx
   */
  withAuthPolicyInEnvironmentId?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * true
   */
  withAuthPolicyList?: boolean;
  /**
   * @remarks
   * The response body.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * true
   */
  withEnvironmentInfo?: boolean;
  /**
   * @remarks
   * The APIs.
   * 
   * @example
   * env-ctovu5mm1hksb4q8ln40
   */
  withEnvironmentInfoById?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * false
   */
  withIngressInfo?: boolean;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * pl-ct9qn3um1hktue8dqol0
   */
  withPluginAttachmentByPluginId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * false
   */
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

