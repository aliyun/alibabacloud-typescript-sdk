// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchLawQueryRequestFilterCondition extends $dara.Model {
  lawName?: string;
  static names(): { [key: string]: string } {
    return {
      lawName: 'lawName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lawName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchLawQueryRequestPageParam extends $dara.Model {
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

export class RunSearchLawQueryRequestThreadMessages extends $dara.Model {
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

export class RunSearchLawQueryRequestThread extends $dara.Model {
  messages?: RunSearchLawQueryRequestThreadMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunSearchLawQueryRequestThreadMessages },
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

