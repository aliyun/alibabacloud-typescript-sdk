// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetsPropertyItemResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 45
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetsPropertyItemResponseBodyPropertyItems extends $dara.Model {
  /**
   * @remarks
   * The number of servers related to the asset fingerprints.
   * 
   * @example
   * 23
   */
  count?: number;
  /**
   * @remarks
   * The endpoint.
   * 
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * localhost
   */
  domain?: string;
  middlewareName?: string;
  modelName?: string;
  /**
   * @remarks
   * The name of the module.
   * 
   * > This parameter is returned only when **Biz** is set to **lkm**.
   * 
   * @example
   * alihids
   */
  moduleName?: string;
  /**
   * @remarks
   * The path to the startup item.
   * 
   * > This parameter is returned only when **Biz** is set to **autorun**.
   * 
   * @example
   * C:/Program Files/****
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domain: 'Domain',
      middlewareName: 'MiddlewareName',
      modelName: 'ModelName',
      moduleName: 'ModuleName',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domain: 'string',
      middlewareName: 'string',
      modelName: 'string',
      moduleName: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetsPropertyItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: GetAssetsPropertyItemResponseBodyPageInfo;
  /**
   * @remarks
   * An array that consists of the aggregation information about asset fingerprints.
   */
  propertyItems?: GetAssetsPropertyItemResponseBodyPropertyItems[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 340D7FC4-D575-1661-8ACD-CFA7BE57****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: GetAssetsPropertyItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': GetAssetsPropertyItemResponseBodyPropertyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.propertyItems)) {
      $dara.Model.validateArray(this.propertyItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

