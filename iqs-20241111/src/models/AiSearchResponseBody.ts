// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiSearchResponseBodyHeaderQueryContextOriginalQuery extends $dara.Model {
  industry?: string;
  page?: number;
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
      page: 'number',
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

export class AiSearchResponseBodyHeaderQueryContextRewrite extends $dara.Model {
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

export class AiSearchResponseBodyHeaderQueryContext extends $dara.Model {
  originalQuery?: AiSearchResponseBodyHeaderQueryContextOriginalQuery;
  rewrite?: AiSearchResponseBodyHeaderQueryContextRewrite;
  static names(): { [key: string]: string } {
    return {
      originalQuery: 'originalQuery',
      rewrite: 'rewrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalQuery: AiSearchResponseBodyHeaderQueryContextOriginalQuery,
      rewrite: AiSearchResponseBodyHeaderQueryContextRewrite,
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

export class AiSearchResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * on_common_search_end
   */
  event?: string;
  /**
   * @example
   * 988021f0-951a-43d0-ba4d-785359e7e7be
   */
  eventId?: string;
  queryContext?: AiSearchResponseBodyHeaderQueryContext;
  /**
   * @example
   * 1293
   */
  responseTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      eventId: 'eventId',
      queryContext: 'queryContext',
      responseTime: 'responseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventId: 'string',
      queryContext: AiSearchResponseBodyHeaderQueryContext,
      responseTime: 'number',
    };
  }

  validate() {
    if(this.queryContext && typeof (this.queryContext as any).validate === 'function') {
      (this.queryContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSearchResponseBody extends $dara.Model {
  header?: AiSearchResponseBodyHeader;
  /**
   * @example
   * {"header":{"eventId":"6f617de0-204f-406f-a9be-34779c06d498","event":"on_common_search_start","responseTime":120},"payload":"","requestId":"715d01a0-de7e-42c3-abca-b901fcd79b39"}
   */
  payload?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ECB2144C-E277-5434-80E6-12D26678D364
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: AiSearchResponseBodyHeader,
      payload: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

