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

