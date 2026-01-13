// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogsResponseBodyCatalogs extends $dara.Model {
  /**
   * @example
   * alias
   */
  alias?: string;
  /**
   * @remarks
   * regionId。
   * 
   * @example
   * 15097**********
   */
  catalogId?: string;
  /**
   * @example
   * HMS
   */
  catalogProvider?: string;
  /**
   * @example
   * default_catalog
   */
  catalogType?: string;
  environments?: string[];
  extras?: { [key: string]: string };
  /**
   * @example
   * 1760604889
   */
  gmtCreate?: number;
  /**
   * @example
   * 1760604889
   */
  gmtModified?: number;
  /**
   * @example
   * 15097**********
   */
  resourceOwnerId?: string;
  /**
   * @remarks
   * 工作空间id。
   * 
   * @example
   * w-d2d82aa09155****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      catalogId: 'catalogId',
      catalogProvider: 'catalogProvider',
      catalogType: 'catalogType',
      environments: 'environments',
      extras: 'extras',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      resourceOwnerId: 'resourceOwnerId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      catalogId: 'string',
      catalogProvider: 'string',
      catalogType: 'string',
      environments: { 'type': 'array', 'itemType': 'string' },
      extras: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreate: 'number',
      gmtModified: 'number',
      resourceOwnerId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(this.extras) {
      $dara.Model.validateMap(this.extras);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogsResponseBody extends $dara.Model {
  catalogs?: ListCatalogsResponseBodyCatalogs[];
  /**
   * @remarks
   * 一次获取的最大记录数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 下一页TOKEN。
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * 记录总数。
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      catalogs: 'catalogs',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogs: { 'type': 'array', 'itemType': ListCatalogsResponseBodyCatalogs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.catalogs)) {
      $dara.Model.validateArray(this.catalogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

