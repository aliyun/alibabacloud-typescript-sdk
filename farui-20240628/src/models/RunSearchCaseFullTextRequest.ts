// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchCaseFullTextRequestFilterCondition extends $dara.Model {
  caseNo?: string;
  caseTitle?: string;
  static names(): { [key: string]: string } {
    return {
      caseNo: 'caseNo',
      caseTitle: 'caseTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseNo: 'string',
      caseTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchCaseFullTextRequestPageParam extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchCaseFullTextRequestThreadMessages extends $dara.Model {
  content?: string;
  /**
   * @example
   * user
   */
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

export class RunSearchCaseFullTextRequestThread extends $dara.Model {
  messages?: RunSearchCaseFullTextRequestThreadMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunSearchCaseFullTextRequestThreadMessages },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

