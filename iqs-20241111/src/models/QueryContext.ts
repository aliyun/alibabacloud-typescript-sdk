// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContextOriginalQuery extends $dara.Model {
  industry?: string;
  page?: string;
  query?: string;
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
  enabled?: boolean;
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
  originalQuery?: QueryContextOriginalQuery;
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

