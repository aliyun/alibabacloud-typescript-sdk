// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFaqResponseBodyFaqHits extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 30000055639
   */
  categoryId?: number;
  /**
   * @remarks
   * The creation time (UTC).
   * 
   * @example
   * 2022-04-02T03:09:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 18453
   */
  createUserId?: number;
  /**
   * @remarks
   * The creator\\"s username.
   * 
   * @example
   * test01
   */
  createUserName?: string;
  /**
   * @remarks
   * The effective status of the FAQ. This status is determined by the StartDate and EndDate parameters.
   * 
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @remarks
   * A list of matched similar titles.
   */
  hitSimilarTitles?: string[];
  /**
   * @remarks
   * A list of matched answers.
   */
  hitSolutions?: string[];
  /**
   * @remarks
   * The FAQ ID.
   * 
   * @example
   * 30002145804
   */
  knowledgeId?: number;
  /**
   * @remarks
   * The modification time (UTC).
   * 
   * @example
   * 2022-04-02T03:09:30Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The modifier ID.
   * 
   * @example
   * 18453
   */
  modifyUserId?: number;
  /**
   * @remarks
   * The modifier\\"s username.
   * 
   * @example
   * test01
   */
  modifyUserName?: string;
  /**
   * @remarks
   * The FAQ status.
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The title of the FAQ.
   * 
   * @example
   * 测试标题
   */
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
  /**
   * @remarks
   * The list of matching FAQs.
   */
  faqHits?: SearchFaqResponseBodyFaqHits[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E45491D5-7E0A-42C6-9B21-91D1066B1475
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matched entries.
   * 
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

