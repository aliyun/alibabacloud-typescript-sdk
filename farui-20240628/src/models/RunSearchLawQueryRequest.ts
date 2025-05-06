// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchLawQueryRequestFilterCondition } from "./RunSearchLawQueryRequestFilterCondition";
import { RunSearchLawQueryRequestPageParam } from "./RunSearchLawQueryRequestPageParam";
import { RunSearchLawQueryRequestThread } from "./RunSearchLawQueryRequestThread";


export class RunSearchLawQueryRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  filterCondition?: RunSearchLawQueryRequestFilterCondition;
  pageParam?: RunSearchLawQueryRequestPageParam;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  queryKeywords?: string[];
  thread?: RunSearchLawQueryRequestThread;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      filterCondition: 'filterCondition',
      pageParam: 'pageParam',
      query: 'query',
      queryKeywords: 'queryKeywords',
      thread: 'thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      filterCondition: RunSearchLawQueryRequestFilterCondition,
      pageParam: RunSearchLawQueryRequestPageParam,
      query: 'string',
      queryKeywords: { 'type': 'array', 'itemType': 'string' },
      thread: RunSearchLawQueryRequestThread,
    };
  }

  validate() {
    if(this.filterCondition && typeof (this.filterCondition as any).validate === 'function') {
      (this.filterCondition as any).validate();
    }
    if(this.pageParam && typeof (this.pageParam as any).validate === 'function') {
      (this.pageParam as any).validate();
    }
    if(Array.isArray(this.queryKeywords)) {
      $dara.Model.validateArray(this.queryKeywords);
    }
    if(this.thread && typeof (this.thread as any).validate === 'function') {
      (this.thread as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

