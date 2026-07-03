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
   * The gateway type filter. Valid values: **AI** and **API**.
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
   * The exact name to search for.
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
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
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
   * Specifies whether to return information about APIs published to the specified environment.
   * 
   * @example
   * true
   */
  withAPIsPublishedToEnvironment?: boolean;
  /**
   * @remarks
   * The environment ID. If specified, the response includes consumer authentication policy information for each API in the specified environment.
   * 
   * @example
   * env-xxx
   */
  withAuthPolicyInEnvironmentId?: string;
  /**
   * @remarks
   * Specifies whether authentication policies are enabled.
   * 
   * @example
   * true
   */
  withAuthPolicyList?: boolean;
  /**
   * @remarks
   * The consumer ID. If specified, the response includes the authorization rule list for the specified consumer for each API.
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
   * The plug-in ID. If specified, the response includes the plug-in publishing information for the specified plug-in.
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

