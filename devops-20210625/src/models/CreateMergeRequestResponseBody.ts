// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMergeRequestResponseBodyResultAuthor extends $dara.Model {
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
   * 19230
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
   * test-codeup-nickname
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

export class CreateMergeRequestResponseBodyResultReviewers extends $dara.Model {
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
   * false
   */
  hasReviewed?: boolean;
  /**
   * @example
   * 7905
   */
  id?: number;
  /**
   * @example
   * codeup
   */
  name?: string;
  /**
   * @example
   * PASS
   */
  reviewOpinionStatus?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * root-codeup
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      email: 'email',
      hasReviewed: 'hasReviewed',
      id: 'id',
      name: 'name',
      reviewOpinionStatus: 'reviewOpinionStatus',
      state: 'state',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      hasReviewed: 'boolean',
      id: 'number',
      name: 'string',
      reviewOpinionStatus: 'string',
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

export class CreateMergeRequestResponseBodyResultSubscribers extends $dara.Model {
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
   * 10092
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

export class CreateMergeRequestResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2
   */
  ahead?: number;
  /**
   * @example
   * true
   */
  allRequirementsPass?: boolean;
  author?: CreateMergeRequestResponseBodyResultAuthor;
  /**
   * @example
   * 0
   */
  behind?: number;
  /**
   * @example
   * WEB
   */
  createFrom?: string;
  /**
   * @example
   * 2023-06-02T03:41:22Z
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
  reviewers?: CreateMergeRequestResponseBodyResultReviewers[];
  /**
   * @example
   * sourceBranch
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
  subscribers?: CreateMergeRequestResponseBodyResultSubscribers[];
  /**
   * @example
   * true
   */
  supportMergeFastForwardOnly?: boolean;
  /**
   * @example
   * targetBranch
   */
  targetBranch?: string;
  /**
   * @example
   * 2369234
   */
  targetProjectId?: number;
  title?: string;
  /**
   * @example
   * 2023-06-02T03:41:22Z
   */
  updateTime?: string;
  /**
   * @example
   * https://codeup.aliyun.com/xxx/test/test
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
      title: 'title',
      updateTime: 'updateTime',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ahead: 'number',
      allRequirementsPass: 'boolean',
      author: CreateMergeRequestResponseBodyResultAuthor,
      behind: 'number',
      createFrom: 'string',
      createTime: 'string',
      description: 'string',
      detailUrl: 'string',
      localId: 'number',
      mrBizId: 'string',
      mrType: 'string',
      projectId: 'number',
      reviewers: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultReviewers },
      sourceBranch: 'string',
      sourceProjectId: 'number',
      status: 'string',
      subscribers: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultSubscribers },
      supportMergeFastForwardOnly: 'boolean',
      targetBranch: 'string',
      targetProjectId: 'number',
      title: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
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
  result?: CreateMergeRequestResponseBodyResult;
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
      result: CreateMergeRequestResponseBodyResult,
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

