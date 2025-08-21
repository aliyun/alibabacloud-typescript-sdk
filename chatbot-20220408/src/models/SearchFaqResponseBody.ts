// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFaqResponseBodyFaqHits extends $dara.Model {
  /**
   * @example
   * 30000055639
   */
  categoryId?: number;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  createTime?: string;
  /**
   * @example
   * 18453
   */
  createUserId?: number;
  /**
   * @example
   * test01
   */
  createUserName?: string;
  /**
   * @example
   * 20
   */
  effectStatus?: number;
  hitSimilarTitles?: string[];
  hitSolutions?: string[];
  /**
   * @example
   * 30002145804
   */
  knowledgeId?: number;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  modifyTime?: string;
  /**
   * @example
   * 18453
   */
  modifyUserId?: number;
  /**
   * @example
   * test01
   */
  modifyUserName?: string;
  /**
   * @example
   * 3
   */
  status?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      effectStatus: 'EffectStatus',
      hitSimilarTitles: 'HitSimilarTitles',
      hitSolutions: 'HitSolutions',
      knowledgeId: 'KnowledgeId',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      effectStatus: 'number',
      hitSimilarTitles: { 'type': 'array', 'itemType': 'string' },
      hitSolutions: { 'type': 'array', 'itemType': 'string' },
      knowledgeId: 'number',
      modifyTime: 'string',
      modifyUserId: 'number',
      modifyUserName: 'string',
      status: 'number',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hitSimilarTitles)) {
      $dara.Model.validateArray(this.hitSimilarTitles);
    }
    if(Array.isArray(this.hitSolutions)) {
      $dara.Model.validateArray(this.hitSolutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaqResponseBody extends $dara.Model {
  faqHits?: SearchFaqResponseBodyFaqHits[];
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
  /**
   * @example
   * E45491D5-7E0A-42C6-9B21-91D1066B1475
   */
  requestId?: string;
  /**
   * @example
   * 1075
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      faqHits: 'FaqHits',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faqHits: { 'type': 'array', 'itemType': SearchFaqResponseBodyFaqHits },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.faqHits)) {
      $dara.Model.validateArray(this.faqHits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

