// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpApisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud-native API gateway.
   * 
   * @example
   * gw-cq2avtllh****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway type associated with the HTTP API. Valid values:
   * - API: cloud-native API gateway.
   * - AI: AI gateway.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The search keyword. Supports fuzzy match by API name or exact search by API ID.
   * 
   * @example
   * test-
   */
  keyword?: string;
  /**
   * @remarks
   * Searches by exact name match.
   * 
   * @example
   * login
   */
  name?: string;
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
   * The page size. Valid range: [1, 100]. Default value: 10.
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
   * The type of the HTTP API. You can specify multiple types separated by commas (,). Valid values:
   * - Http
   * - Rest
   * - WebSocket
   * - HttpIngress
   * 
   * @example
   * Http,Rest
   */
  types?: string;
  /**
   * @remarks
   * Specifies whether to return API information that has been published to the specified environment.
   * 
   * @example
   * true
   */
  withAPIsPublishedToEnvironment?: boolean;
  /**
   * @remarks
   * Specifies the environment ID. The response includes consumer authentication policy information for each API in the specified environment.
   * 
   * @example
   * env-xxx
   */
  withAuthPolicyInEnvironmentId?: string;
  /**
   * @remarks
   * Specifies whether permission authentication policies are enabled.
   * 
   * @example
   * true
   */
  withAuthPolicyList?: boolean;
  /**
   * @remarks
   * Specifies the consumer ID. The response includes the authorization rule list for the specified consumer for each API.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * The environment context.
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
   * Specifies whether to include ingress information.
   * 
   * @example
   * false
   */
  withIngressInfo?: boolean;
  /**
   * @remarks
   * The plug-in ID. Used to retrieve plug-in publishing information based on this plug-in ID.
   * 
   * @example
   * pl-ct9qn3um1hktue8dqol0
   */
  withPluginAttachmentByPluginId?: string;
  /**
   * @remarks
   * Specifies whether to include policy information.
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

