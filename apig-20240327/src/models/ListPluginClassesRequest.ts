// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginClassesRequest extends $dara.Model {
  /**
   * @remarks
   * The plug-in alias. Fuzzy match is supported.
   * 
   * @example
   * OAuth2 认证
   */
  aliasLike?: string;
  /**
   * @remarks
   * The inbound or outbound direction. Valid values:
   * - OutBound: outbound.
   * - InBound: inbound.
   * - Both: both directions.
   * 
   * @example
   * InBound
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to exclude built-in plug-ins.
   * 
   * @example
   * true
   */
  excludeBuiltinAiProxy?: boolean;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-d1j8tjum1hkhxxxxxxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway type filter. Currently, **AI** and **API** gateway types are supported.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * Specifies whether the plug-in is installed.
   * 
   * @example
   * false
   */
  installed?: boolean;
  /**
   * @remarks
   * The plug-in name. Fuzzy match is supported.
   * 
   * @example
   * oauth
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The plug-in source. Valid values:
   * - HigressOfficial: Higress official.
   * - HigressCommunity: Higress community.
   * - Custom: custom.
   * 
   * @example
   * HigressOfficial
   */
  source?: string;
  /**
   * @remarks
   * The plug-in type.
   * 
   * @example
   * Auth
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasLike: 'aliasLike',
      direction: 'direction',
      excludeBuiltinAiProxy: 'excludeBuiltinAiProxy',
      gatewayId: 'gatewayId',
      gatewayType: 'gatewayType',
      installed: 'installed',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      source: 'source',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasLike: 'string',
      direction: 'string',
      excludeBuiltinAiProxy: 'boolean',
      gatewayId: 'string',
      gatewayType: 'string',
      installed: 'boolean',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      source: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

