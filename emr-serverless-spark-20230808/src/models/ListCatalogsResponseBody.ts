// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogsResponseBodyCatalogs extends $dara.Model {
  /**
   * @remarks
   * alias
   * 
   * @example
   * alias
   */
  alias?: string;
  /**
   * @remarks
   * The data catalog ID.
   * 
   * @example
   * 15097**********
   */
  catalogId?: string;
  /**
   * @remarks
   * The data catalog type.
   * 
   * @example
   * HMS
   */
  catalogProvider?: string;
  /**
   * @remarks
   * Indicates whether the data catalog is the default data catalog.
   * 
   * @example
   * default_catalog
   */
  catalogType?: string;
  /**
   * @remarks
   * The environment type.
   */
  environments?: string[];
  /**
   * @remarks
   * The extra information.
   * 
   * @example
   * {"networkName":"hms","metastoreUrl":"thrift://metastore.example.com:9083"}
   */
  extras?: { [key: string]: string };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1760604889
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1760604889
   */
  gmtModified?: number;
  /**
   * @remarks
   * The resource owner ID.
   * 
   * @example
   * 15097**********
   */
  resourceOwnerId?: string;
  /**
   * @remarks
   * The workspace ID.
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
  /**
   * @remarks
   * The data catalogs.
   */
  catalogs?: ListCatalogsResponseBodyCatalogs[];
  /**
   * @remarks
   * The maximum number of records to return per request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next page token.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
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

