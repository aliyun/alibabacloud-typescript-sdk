// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaqResponseBodyOutlines extends $dara.Model {
  /**
   * @example
   * 1000098002
   */
  connQuestionId?: number;
  /**
   * @example
   * 2022-05-26T10:24:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-05-26T18:12:02Z
   */
  modifyTime?: string;
  /**
   * @example
   * 797
   */
  outlineId?: number;
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
   * @example
   * 2022-05-26T10:24:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-05-29T03:55:07Z
   */
  modifyTime?: string;
  /**
   * @example
   * 10000000581
   */
  simQuestionId?: number;
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
  content?: string;
  /**
   * @example
   * 0
   */
  contentType?: number;
  /**
   * @example
   * 2022-05-26T10:24:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-05-29T07:07:13Z
   */
  modifyTime?: string;
  perspectiveCodes?: string[];
  plainText?: string;
  /**
   * @example
   * 10000003071
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      perspectiveCodes: 'PerspectiveCodes',
      plainText: 'PlainText',
      solutionId: 'SolutionId',
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
    };
  }

  validate() {
    if(Array.isArray(this.perspectiveCodes)) {
      $dara.Model.validateArray(this.perspectiveCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaqResponseBody extends $dara.Model {
  /**
   * @example
   * 30000055617
   */
  categoryId?: number;
  /**
   * @example
   * 2020-11-30T03:03:37Z
   */
  createTime?: string;
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
  /**
   * @example
   * 2023-04-27T06:08:54Z
   */
  endDate?: string;
  /**
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  /**
   * @example
   * 2020-12-02T06:35:50Z
   */
  modifyTime?: string;
  /**
   * @example
   * test01
   */
  modifyUserName?: string;
  outlines?: DescribeFaqResponseBodyOutlines[];
  /**
   * @example
   * 8AD9FA10-7780-5E12-B701-13C928524F32
   */
  requestId?: string;
  simQuestions?: DescribeFaqResponseBodySimQuestions[];
  solutions?: DescribeFaqResponseBodySolutions[];
  /**
   * @example
   * 2022-04-27T07:04:39Z
   */
  startDate?: string;
  /**
   * @example
   * 3
   */
  status?: number;
  tagIdList?: number[];
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

