// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The resource attachment ID.
   * 
   * @example
   * api-cuip2pum1hksng6oni3g
   */
  attachResourceId?: string;
  /**
   * @remarks
   * The resource attachment type.
   * 
   * - HttpApi: HttpApi.
   * - Operation: Operation of HttpApi.
   * - GatewayRoute: Gateway route.
   * - GatewayService: Gateway service.
   * - GatewayServicePort: Gateway service port.
   * - Domain: Gateway domain.
   * - Gateway: Gateway.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The gateway instance ID for filtering.
   * 
   * @example
   * gw-csrhgn6m1hkt65qbxxgg
   */
  gatewayId?: string;
  /**
   * @remarks
   * The instance type. Valid values: **AI** and **API**.
   * 
   * @example
   * AI
   */
  gatewayType?: string;
  /**
   * @remarks
   * Specifies whether to include built-in AI plug-ins in the returned results. Default: false.
   * 
   * @example
   * false
   */
  includeBuiltinAiGateway?: boolean;
  /**
   * @remarks
   * The page number to return. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The plug-in type ID for filtering.
   * 
   * @example
   * pls-dn82a9djd8z****
   */
  pluginClassId?: string;
  /**
   * @remarks
   * The plug-in type name for filtering.
   * 
   * @example
   * key-auth
   */
  pluginClassName?: string;
  /**
   * @remarks
   * Specifies whether the returned results should include plug-in attachment information corresponding to the attachResourceId.
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

