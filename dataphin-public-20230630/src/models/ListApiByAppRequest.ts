// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiByAppRequestPageQuery extends $dara.Model {
  /**
   * @remarks
   * The application key.
   * >Notice: Deprecated. Use AppKeyStr instead.</notice>.
   * 
   * @example
   * 200000000
   * 
   * @deprecated
   */
  appKey?: number;
  /**
   * @remarks
   * The application key.
   * 
   * @example
   * APP_200000000
   */
  appKeyStr?: string;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * apiName
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appKeyStr: 'AppKeyStr',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      appKeyStr: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiByAppRequest extends $dara.Model {
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
   * The paged query parameters.
   * 
   * This parameter is required.
   */
  pageQuery?: ListApiByAppRequestPageQuery;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      pageQuery: 'PageQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      pageQuery: ListApiByAppRequestPageQuery,
    };
  }

  validate() {
    if(this.pageQuery && typeof (this.pageQuery as any).validate === 'function') {
      (this.pageQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

