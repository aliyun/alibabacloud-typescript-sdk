// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AISearchQuery extends $dara.Model {
  card?: string;
  cardQuery?: string;
  page?: number;
  query?: string;
  searchEngine?: string;
  searchPlan?: string;
  sessionId?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      card: 'card',
      cardQuery: 'cardQuery',
      page: 'page',
      query: 'query',
      searchEngine: 'searchEngine',
      searchPlan: 'searchPlan',
      sessionId: 'sessionId',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      card: 'string',
      cardQuery: 'string',
      page: 'number',
      query: 'string',
      searchEngine: 'string',
      searchPlan: 'string',
      sessionId: 'string',
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

