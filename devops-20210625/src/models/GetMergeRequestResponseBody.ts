// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMergeRequestResponseBodyResultAuthor extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 19927
   */
  id?: number;
  /**
   * @example
   * test-codeup
   */
  name?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * root-test-codeup
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      email: 'email',
      id: 'id',
      name: 'name',
      state: 'state',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      id: 'number',
      name: 'string',
      state: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestResponseBodyResultReviewers extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  hasCommented?: boolean;
  /**
   * @example
   * false
   */
  hasReviewed?: boolean;
  /**
   * @example
   * 90452
   */
  id?: number;
  /**
   * @example
   * test-codeup
   */
  name?: string;
  /**
   * @example
   * NOT_PASS
   */
  reviewOpinionStatus?: string;
  reviewTime?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * root-test-codeup
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      email: 'email',
      hasCommented: 'hasCommented',
      hasReviewed: 'hasReviewed',
      id: 'id',
      name: 'name',
      reviewOpinionStatus: 'reviewOpinionStatus',
      reviewTime: 'reviewTime',
      state: 'state',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      hasCommented: 'boolean',
      hasReviewed: 'boolean',
      id: 'number',
      name: 'string',
      reviewOpinionStatus: 'string',
      reviewTime: 'string',
      state: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestResponseBodyResultSubscribers extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 90452
   */
  id?: number;
  /**
   * @example
   * test-subscriber
   */
  name?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * test-subscriber
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      email: 'email',
      id: 'id',
      name: 'name',
      state: 'state',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      id: 'number',
      name: 'string',
      state: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestResponseBodyResultTodoListRequirementCheckItems extends $dara.Model {
  /**
   * @example
   * COMMENTS_CHECK
   */
  itemType?: string;
  /**
   * @example
   * true
   */
  pass?: boolean;
  static names(): { [key: string]: string } {
    return {
      itemType: 'itemType',
      pass: 'pass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemType: 'string',
      pass: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestResponseBodyResultTodoList extends $dara.Model {
  requirementCheckItems?: GetMergeRequestResponseBodyResultTodoListRequirementCheckItems[];
  static names(): { [key: string]: string } {
    return {
      requirementCheckItems: 'requirementCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requirementCheckItems: { 'type': 'array', 'itemType': GetMergeRequestResponseBodyResultTodoListRequirementCheckItems },
    };
  }

  validate() {
    if(Array.isArray(this.requirementCheckItems)) {
      $dara.Model.validateArray(this.requirementCheckItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  ahead?: number;
  /**
   * @example
   * true
   */
  allRequirementsPass?: boolean;
  author?: GetMergeRequestResponseBodyResultAuthor;
  /**
   * @example
   * 1
   */
  behind?: number;
  /**
   * @example
   * WEB
   */
  createFrom?: string;
  /**
   * @example
   * 2023-05-30T02:53:36Z
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * xxx
   */
  detailUrl?: string;
  /**
   * @example
   * 1
   */
  localId?: number;
  mergedRevision?: string;
  /**
   * @example
   * bca90244c4b749e0b109df52ac0eb570
   */
  mrBizId?: string;
  /**
   * @example
   * CODE_REVIEW
   */
  mrType?: string;
  /**
   * @example
   * 2369234
   */
  projectId?: number;
  reviewers?: GetMergeRequestResponseBodyResultReviewers[];
  /**
   * @example
   * test-merge-request
   */
  sourceBranch?: string;
  /**
   * @example
   * 2369234
   */
  sourceProjectId?: number;
  /**
   * @example
   * UNDER_REVIEW
   */
  status?: string;
  subscribers?: GetMergeRequestResponseBodyResultSubscribers[];
  /**
   * @example
   * true
   */
  supportMergeFastForwardOnly?: boolean;
  /**
   * @example
   * master
   */
  targetBranch?: string;
  /**
   * @example
   * 2369234
   */
  targetProjectId?: number;
  targetProjectNameWithNamespace?: string;
  /**
   * @example
   * orgId/test-group/test-target-repo
   */
  targetProjectPathWithNamespace?: string;
  title?: string;
  todoList?: GetMergeRequestResponseBodyResultTodoList;
  /**
   * @example
   * 2023-05-30T02:53:36Z
   */
  updateTime?: string;
  /**
   * @example
   * xxx
   */
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ahead: 'ahead',
      allRequirementsPass: 'allRequirementsPass',
      author: 'author',
      behind: 'behind',
      createFrom: 'createFrom',
      createTime: 'createTime',
      description: 'description',
      detailUrl: 'detailUrl',
      localId: 'localId',
      mergedRevision: 'mergedRevision',
      mrBizId: 'mrBizId',
      mrType: 'mrType',
      projectId: 'projectId',
      reviewers: 'reviewers',
      sourceBranch: 'sourceBranch',
      sourceProjectId: 'sourceProjectId',
      status: 'status',
      subscribers: 'subscribers',
      supportMergeFastForwardOnly: 'supportMergeFastForwardOnly',
      targetBranch: 'targetBranch',
      targetProjectId: 'targetProjectId',
      targetProjectNameWithNamespace: 'targetProjectNameWithNamespace',
      targetProjectPathWithNamespace: 'targetProjectPathWithNamespace',
      title: 'title',
      todoList: 'todoList',
      updateTime: 'updateTime',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ahead: 'number',
      allRequirementsPass: 'boolean',
      author: GetMergeRequestResponseBodyResultAuthor,
      behind: 'number',
      createFrom: 'string',
      createTime: 'string',
      description: 'string',
      detailUrl: 'string',
      localId: 'number',
      mergedRevision: 'string',
      mrBizId: 'string',
      mrType: 'string',
      projectId: 'number',
      reviewers: { 'type': 'array', 'itemType': GetMergeRequestResponseBodyResultReviewers },
      sourceBranch: 'string',
      sourceProjectId: 'number',
      status: 'string',
      subscribers: { 'type': 'array', 'itemType': GetMergeRequestResponseBodyResultSubscribers },
      supportMergeFastForwardOnly: 'boolean',
      targetBranch: 'string',
      targetProjectId: 'number',
      targetProjectNameWithNamespace: 'string',
      targetProjectPathWithNamespace: 'string',
      title: 'string',
      todoList: GetMergeRequestResponseBodyResultTodoList,
      updateTime: 'string',
      webUrl: 'string',
    };
  }

  validate() {
    if(this.author && typeof (this.author as any).validate === 'function') {
      (this.author as any).validate();
    }
    if(Array.isArray(this.reviewers)) {
      $dara.Model.validateArray(this.reviewers);
    }
    if(Array.isArray(this.subscribers)) {
      $dara.Model.validateArray(this.subscribers);
    }
    if(this.todoList && typeof (this.todoList as any).validate === 'function') {
      (this.todoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  result?: GetMergeRequestResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetMergeRequestResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

