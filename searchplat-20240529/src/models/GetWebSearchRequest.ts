// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebSearchRequestHistory extends $dara.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchRequest extends $dara.Model {
  contentType?: string;
  history?: GetWebSearchRequestHistory[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  queryRewrite?: boolean;
  topK?: number;
  way?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'content_type',
      history: 'history',
      query: 'query',
      queryRewrite: 'query_rewrite',
      topK: 'top_k',
      way: 'way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      history: { 'type': 'array', 'itemType': GetWebSearchRequestHistory },
      query: 'string',
      queryRewrite: 'boolean',
      topK: 'number',
      way: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

