// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContextOriginalQuery extends $dara.Model {
  /**
   * @remarks
   * The industry classification of the original request.
   * 
   * @example
   * medical
   */
  industry?: string;
  /**
   * @remarks
   * The page number of the original request.
   * 
   * @example
   * 1
   */
  page?: string;
  /**
   * @remarks
   * The query content of the original request.
   * 
   * @example
   * Apsara Conference
   */
  query?: string;
  /**
   * @remarks
   * The time range of the original request. Valid values: OneDay, OneWeek, OneMonth, OneYear, and NoLimit.
   * 
   * @example
   * NoLimit
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
      page: 'page',
      query: 'query',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
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

export class QueryContextRewrite extends $dara.Model {
  /**
   * @remarks
   * Specifies whether query rewrite is enabled.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The rewritten time range. An empty value indicates that no rewrite is performed or the rewrite result is the same as the original result.
   * 
   * @example
   * OneYear
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
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

export class QueryContext extends $dara.Model {
  /**
   * @remarks
   * The initial query condition.
   */
  originalQuery?: QueryContextOriginalQuery;
  /**
   * @remarks
   * The query rewrite information.
   */
  rewrite?: QueryContextRewrite;
  static names(): { [key: string]: string } {
    return {
      originalQuery: 'originalQuery',
      rewrite: 'rewrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalQuery: QueryContextOriginalQuery,
      rewrite: QueryContextRewrite,
    };
  }

  validate() {
    if(this.originalQuery && typeof (this.originalQuery as any).validate === 'function') {
      (this.originalQuery as any).validate();
    }
    if(this.rewrite && typeof (this.rewrite as any).validate === 'function') {
      (this.rewrite as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

