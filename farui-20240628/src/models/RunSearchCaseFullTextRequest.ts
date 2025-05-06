// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchCaseFullTextRequestFilterCondition } from "./RunSearchCaseFullTextRequestFilterCondition";
import { RunSearchCaseFullTextRequestPageParam } from "./RunSearchCaseFullTextRequestPageParam";
import { RunSearchCaseFullTextRequestThread } from "./RunSearchCaseFullTextRequestThread";


export class RunSearchCaseFullTextRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  filterCondition?: RunSearchCaseFullTextRequestFilterCondition;
  /**
   * @remarks
   * This parameter is required.
   */
  pageParam?: RunSearchCaseFullTextRequestPageParam;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  queryKeywords?: string[];
  referLevel?: string;
  sortKeyAndDirection?: { [key: string]: string };
  thread?: RunSearchCaseFullTextRequestThread;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      filterCondition: 'filterCondition',
      pageParam: 'pageParam',
      query: 'query',
      queryKeywords: 'queryKeywords',
      referLevel: 'referLevel',
      sortKeyAndDirection: 'sortKeyAndDirection',
      thread: 'thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      filterCondition: RunSearchCaseFullTextRequestFilterCondition,
      pageParam: RunSearchCaseFullTextRequestPageParam,
      query: 'string',
      queryKeywords: { 'type': 'array', 'itemType': 'string' },
      referLevel: 'string',
      sortKeyAndDirection: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      thread: RunSearchCaseFullTextRequestThread,
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
    if(this.sortKeyAndDirection) {
      $dara.Model.validateMap(this.sortKeyAndDirection);
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

