// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiSearchResponseBodyHeaderQueryContext } from "./AiSearchResponseBodyHeaderQueryContext";


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

