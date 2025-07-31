// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiByAppRequestPageQuery extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 10121101
   */
  appKey?: number;
  /**
   * @example
   * apiName
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

