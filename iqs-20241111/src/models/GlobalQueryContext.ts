// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalQueryContextOriginalQuery extends $dara.Model {
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 1
   */
  page?: string;
  /**
   * @remarks
   * 查询关键字
   * 
   * @example
   * 特朗普关税最新消息
   */
  query?: string;
  /**
   * @remarks
   * 时间范围
   * 
   * @example
   * NoLimit
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      query: 'query',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'string',
      query: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalQueryContext extends $dara.Model {
  /**
   * @remarks
   * The initial query condition.
   */
  originalQuery?: GlobalQueryContextOriginalQuery;
  static names(): { [key: string]: string } {
    return {
      originalQuery: 'originalQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalQuery: GlobalQueryContextOriginalQuery,
    };
  }

  validate() {
    if(this.originalQuery && typeof (this.originalQuery as any).validate === 'function') {
      (this.originalQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

