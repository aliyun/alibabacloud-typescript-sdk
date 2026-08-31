// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeClustersRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The keyword for filtering.
   * 
   * @example
   * cluster
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of records per page. The value must be greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of cluster versions.
   */
  typeVersionList?: string[];
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      typeVersionList: 'TypeVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      typeVersionList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.typeVersionList)) {
      $dara.Model.validateArray(this.typeVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListComputeClustersRequestListQuery;
  /**
   * @remarks
   * The maximum number of records to return in this response.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that no more results are available.
   * 
   * @example
   * fdccfa4f825bf506c591e285f1123403
   */
  nextToken?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListComputeClustersRequestListQuery,
      maxResults: 'number',
      nextToken: 'string',
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

