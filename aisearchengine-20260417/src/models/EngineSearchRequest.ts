// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class EngineSearchRequestQuery extends $dara.Model {
  /**
   * @example
   * ["24234111","12423525"]
   */
  excludeIds?: string[];
  /**
   * @example
   * ["https://paperreview.oss-cn-hangzhou.aliyuncs.com/59dd424f-97ed-4855-942e-c961f1f5b67e.jpeg"]
   */
  imageUrls?: string[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ["梅花图片"]
   */
  texts?: string[];
  static names(): { [key: string]: string } {
    return {
      excludeIds: 'excludeIds',
      imageUrls: 'imageUrls',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      texts: 'texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeIds: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pageNo: 'number',
      pageSize: 'number',
      texts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludeIds)) {
      $dara.Model.validateArray(this.excludeIds);
    }
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineSearchRequestRecall extends $dara.Model {
  /**
   * @example
   * false
   */
  closeRecallAsr?: boolean;
  /**
   * @example
   * true
   */
  needMergeSegments?: boolean;
  static names(): { [key: string]: string } {
    return {
      closeRecallAsr: 'closeRecallAsr',
      needMergeSegments: 'needMergeSegments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closeRecallAsr: 'boolean',
      needMergeSegments: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineSearchRequestUser extends $dara.Model {
  /**
   * @example
   * "123456"
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 507218
   */
  appId?: string;
  /**
   * @example
   * false
   */
  grey?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: EngineSearchRequestQuery;
  recall?: EngineSearchRequestRecall;
  /**
   * @example
   * 2e95ef4fbc28437db5008a910bd392a4
   */
  sessionId?: string;
  /**
   * @example
   * 507218
   */
  strategyId?: string;
  user?: EngineSearchRequestUser;
  /**
   * @example
   * 默认1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      grey: 'grey',
      query: 'query',
      recall: 'recall',
      sessionId: 'sessionId',
      strategyId: 'strategyId',
      user: 'user',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      grey: 'boolean',
      query: EngineSearchRequestQuery,
      recall: EngineSearchRequestRecall,
      sessionId: 'string',
      strategyId: 'string',
      user: EngineSearchRequestUser,
      version: 'string',
    };
  }

  validate() {
    if(this.query && typeof (this.query as any).validate === 'function') {
      (this.query as any).validate();
    }
    if(this.recall && typeof (this.recall as any).validate === 'function') {
      (this.recall as any).validate();
    }
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

