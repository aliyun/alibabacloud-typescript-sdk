// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeSourcesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the compute source is bound to a project.
   */
  bindProject?: boolean;
  /**
   * @remarks
   * The keyword used for filtering.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the compute source.
   * 
   * @example
   * MaxCompute
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindProject: 'BindProject',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindProject: 'boolean',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
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

export class ListComputeSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListComputeSourcesRequestListQuery;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListComputeSourcesRequestListQuery,
      opTenantId: 'number',
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

