// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginClassesRequest extends $dara.Model {
  /**
   * @remarks
   * The alias keyword for a fuzzy search.
   */
  aliasLike?: string;
  /**
   * @remarks
   * The traffic direction. Valid values: 
   * 
   * *   OutBound
   * *   InBound
   * *   Both
   * 
   * @example
   * InBound
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to exclude built-in plugins.
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
   * The instance type. Valid values: **AI** and **API**.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * Indicates whether the plugin is installed.
   * 
   * @example
   * false
   */
  installed?: boolean;
  /**
   * @remarks
   * The plugin name for a fuzzy search.
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
   * The plugin source. Valid values: 
   * 
   * *   HigressOfficial
   * *   HigressCommunity
   * *   Custom
   * 
   * @example
   * HigressOfficial
   */
  source?: string;
  /**
   * @remarks
   * The type of the plugin.
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

