// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginClassesRequest extends $dara.Model {
  aliasLike?: string;
  /**
   * @example
   * InBound
   */
  direction?: string;
  /**
   * @example
   * true
   */
  excludeBuiltinAiProxy?: boolean;
  /**
   * @example
   * gw-d1j8tjum1hkhxxxxxxxx
   */
  gatewayId?: string;
  /**
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @example
   * false
   */
  installed?: boolean;
  /**
   * @example
   * oauth
   */
  nameLike?: string;
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
   * HigressOfficial
   */
  source?: string;
  /**
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

