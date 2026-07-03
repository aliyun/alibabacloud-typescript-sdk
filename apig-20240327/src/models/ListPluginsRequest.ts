// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the attached resource.
   * 
   * @example
   * api-cuip2pum1hksng6oni3g
   */
  attachResourceId?: string;
  /**
   * @remarks
   * The type of the attachment point supported by the policy.
   * 
   * - HttpApi: HttpApi.
   * - Operation: Operation of HttpApi.
   * - GatewayRoute: gateway route.
   * - GatewayService: gateway service.
   * - GatewayServicePort: gateway service port.
   * - Domain: gateway domain name.
   * - Gateway: gateway.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The ID of the gateway instance used to filter results.
   * 
   * @example
   * gw-csrhgn6m1hkt65qbxxgg
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway type used to filter results. Valid values: **AI** and **API**.
   * 
   * @example
   * AI
   */
  gatewayType?: string;
  /**
   * @remarks
   * Specifies whether the response includes built-in AI plugins installed by the system. Default value: false.
   * 
   * @example
   * false
   */
  includeBuiltinAiGateway?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the plugin type used to filter results.
   * 
   * @example
   * pls-dn82a9djd8z****
   */
  pluginClassId?: string;
  /**
   * @remarks
   * The name of the plugin type used to filter results.
   * 
   * @example
   * key-auth
   */
  pluginClassName?: string;
  /**
   * @remarks
   * Specifies whether the response includes the plugin attachment information corresponding to attachResourceId.
   * 
   * @example
   * false
   */
  withAttachmentInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceType: 'attachResourceType',
      gatewayId: 'gatewayId',
      gatewayType: 'gatewayType',
      includeBuiltinAiGateway: 'includeBuiltinAiGateway',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pluginClassId: 'pluginClassId',
      pluginClassName: 'pluginClassName',
      withAttachmentInfo: 'withAttachmentInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceType: 'string',
      gatewayId: 'string',
      gatewayType: 'string',
      includeBuiltinAiGateway: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      pluginClassId: 'string',
      pluginClassName: 'string',
      withAttachmentInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

