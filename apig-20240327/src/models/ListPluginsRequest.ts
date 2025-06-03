// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsRequest extends $dara.Model {
  /**
   * @example
   * api-cuip2pum1hksng6oni3g
   */
  attachResourceId?: string;
  /**
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @example
   * gw-csrhgn6m1hkt65qbxxgg
   */
  gatewayId?: string;
  /**
   * @example
   * AI
   */
  gatewayType?: string;
  includeBuiltinAiGateway?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * pls-dn82a9djd8z****
   */
  pluginClassId?: string;
  /**
   * @example
   * key-auth
   */
  pluginClassName?: string;
  /**
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

