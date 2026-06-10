// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaqResponseBodyOutlines extends $dara.Model {
  /**
   * @remarks
   * The related knowledge ID.
   * 
   * @example
   * 1000098002
   */
  connQuestionId?: number;
  /**
   * @remarks
   * The time the related question was created, in UTC.
   * 
   * @example
   * 2022-05-26T10:24:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time the related question was last modified, in UTC.
   * 
   * @example
   * 2022-05-26T18:12:02Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The relationship ID.
   * 
   * @example
   * 797
   */
  outlineId?: number;
  /**
   * @remarks
   * The related knowledge title.
   * 
   * @example
   * 测试关联问标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      connQuestionId: 'ConnQuestionId',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      outlineId: 'OutlineId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connQuestionId: 'number',
      createTime: 'string',
      modifyTime: 'string',
      outlineId: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaqResponseBodySimQuestions extends $dara.Model {
  /**
   * @remarks
   * The time the similar question was created, in UTC.
   * 
   * @example
   * 2022-05-26T10:24:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time the similar question was last modified, in UTC.
   * 
   * @example
   * 2022-05-29T03:55:07Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The similar question ID.
   * 
   * @example
   * 10000000581
   */
  simQuestionId?: number;
  /**
   * @remarks
   * The similar question title.
   * 
   * @example
   * 测试相似问标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      simQuestionId: 'SimQuestionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      simQuestionId: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaqResponseBodySolutions extends $dara.Model {
  /**
   * @remarks
   * The solution content.
   * 
   * @example
   * 测试答案内容
   */
  content?: string;
  /**
   * @remarks
   * The solution content type. Valid values: `0` (plain text) and `1` (rich text).
   * 
   * @example
   * 0
   */
  contentType?: number;
  /**
   * @remarks
   * The time the solution was created, in UTC.
   * 
   * @example
   * 2022-05-26T10:24:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time the solution was last modified, in UTC.
   * 
   * @example
   * 2022-05-29T07:07:13Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * A list of perspective codes.
   */
  perspectiveCodes?: string[];
  /**
   * @remarks
   * The plain text content of the solution.
   * 
   * @example
   * 测试答案内容
   */
  plainText?: string;
  /**
   * @remarks
   * The solution ID.
   * 
   * @example
   * 10000003071
   */
  solutionId?: number;
  /**
   * @remarks
   * A list of tag IDs.
   */
  tagIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      perspectiveCodes: 'PerspectiveCodes',
      plainText: 'PlainText',
      solutionId: 'SolutionId',
      tagIdList: 'TagIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'number',
      createTime: 'string',
      modifyTime: 'string',
      perspectiveCodes: { 'type': 'array', 'itemType': 'string' },
      plainText: 'string',
      solutionId: 'number',
      tagIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.perspectiveCodes)) {
      $dara.Model.validateArray(this.perspectiveCodes);
    }
    if(Array.isArray(this.tagIdList)) {
      $dara.Model.validateArray(this.tagIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaqResponseBody extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 30000055617
   */
  categoryId?: number;
  /**
   * @remarks
   * The time the knowledge was created, in UTC.
   * 
   * @example
   * 2020-11-30T03:03:37Z
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the knowledge.
   * 
   * @example
   * test01
   */
  createUserName?: string;
  /**
   * @remarks
   * The validity status of the knowledge, calculated based on `StartDate` and `EndDate`. Valid values: `20` (Active), `21` (Expired), and `22` (Pending).
   * 
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @remarks
   * The expiration time of the knowledge, in UTC.
   * 
   * @example
   * 2023-04-27T06:08:54Z
   */
  endDate?: string;
  /**
   * @remarks
   * The knowledge ID.
   * 
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  /**
   * @remarks
   * The time the knowledge was last modified, in UTC.
   * 
   * @example
   * 2020-12-02T06:35:50Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The user who last modified the knowledge.
   * 
   * @example
   * test01
   */
  modifyUserName?: string;
  /**
   * @remarks
   * A list of related questions.
   */
  outlines?: DescribeFaqResponseBodyOutlines[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8AD9FA10-7780-5E12-B701-13C928524F32
   */
  requestId?: string;
  /**
   * @remarks
   * A list of similar questions.
   */
  simQuestions?: DescribeFaqResponseBodySimQuestions[];
  /**
   * @remarks
   * A list of solutions.
   */
  solutions?: DescribeFaqResponseBodySolutions[];
  /**
   * @remarks
   * The effective start time of the knowledge, in UTC.
   * 
   * @example
   * 2022-04-27T07:04:39Z
   */
  startDate?: string;
  /**
   * @remarks
   * The knowledge status. Valid values: `-1` (Deleted and unpublished), `1` (Unpublished), `2` (Published), and `3` (Updated and unpublished).
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * A list of tag IDs associated with the knowledge.
   */
  tagIdList?: number[];
  /**
   * @remarks
   * The knowledge title.
   * 
   * @example
   * 测试标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      effectStatus: 'EffectStatus',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      modifyTime: 'ModifyTime',
      modifyUserName: 'ModifyUserName',
      outlines: 'Outlines',
      requestId: 'RequestId',
      simQuestions: 'SimQuestions',
      solutions: 'Solutions',
      startDate: 'StartDate',
      status: 'Status',
      tagIdList: 'TagIdList',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      createTime: 'string',
      createUserName: 'string',
      effectStatus: 'number',
      endDate: 'string',
      knowledgeId: 'number',
      modifyTime: 'string',
      modifyUserName: 'string',
      outlines: { 'type': 'array', 'itemType': DescribeFaqResponseBodyOutlines },
      requestId: 'string',
      simQuestions: { 'type': 'array', 'itemType': DescribeFaqResponseBodySimQuestions },
      solutions: { 'type': 'array', 'itemType': DescribeFaqResponseBodySolutions },
      startDate: 'string',
      status: 'number',
      tagIdList: { 'type': 'array', 'itemType': 'number' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    if(Array.isArray(this.simQuestions)) {
      $dara.Model.validateArray(this.simQuestions);
    }
    if(Array.isArray(this.solutions)) {
      $dara.Model.validateArray(this.solutions);
    }
    if(Array.isArray(this.tagIdList)) {
      $dara.Model.validateArray(this.tagIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

