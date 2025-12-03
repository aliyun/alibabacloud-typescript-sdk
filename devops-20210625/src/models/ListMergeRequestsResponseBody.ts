// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMergeRequestsResponseBodyResultAuthor extends $dara.Model {
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

export class ListMergeRequestsResponseBodyResultLabels extends $dara.Model {
  color?: string;
  description?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'color',
      description: 'description',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultReviewers extends $dara.Model {
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
  hasReviewed?: boolean;
  /**
   * @example
   * 43127
   */
  id?: number;
  /**
   * @example
   * test-review-user
   */
  name?: string;
  reviewOpinionStatus?: string;
  reviewTime?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * approved
   */
  status?: string;
  /**
   * @example
   * root-test-review-user
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
      status: 'status',
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
      status: 'string',
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

export class ListMergeRequestsResponseBodyResultSubscribers extends $dara.Model {
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
   * 1876119
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
   * root-test-subscriber
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

export class ListMergeRequestsResponseBodyResult extends $dara.Model {
  author?: ListMergeRequestsResponseBodyResultAuthor;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * WEB
   */
  creationMethod?: string;
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
  id?: number;
  /**
   * @example
   * 1
   */
  iid?: number;
  labels?: ListMergeRequestsResponseBodyResultLabels[];
  /**
   * @example
   * 2
   */
  localId?: number;
  mergedRevision?: string;
  /**
   * @example
   * bca90244c4b749e0b109df52ac0eb570
   */
  mrBizId?: string;
  nameWithNamespace?: string;
  /**
   * @example
   * true
   */
  newMergeRequestIdentifier?: boolean;
  /**
   * @example
   * UNDER_REVIEW
   */
  newVersionState?: string;
  /**
   * @example
   * 2369234
   */
  projectId?: number;
  reviewers?: ListMergeRequestsResponseBodyResultReviewers[];
  /**
   * @example
   * test-merge-source-branch
   */
  sourceBranch?: string;
  /**
   * @example
   * 2876119
   */
  sourceProjectId?: number;
  /**
   * @example
   * BRANCH
   */
  sourceType?: string;
  /**
   * @example
   * git@xxx:xxx/test/test.git
   */
  sshUrl?: string;
  /**
   * @example
   * opened
   */
  state?: string;
  subscribers?: ListMergeRequestsResponseBodyResultSubscribers[];
  /**
   * @example
   * true
   */
  supportMergeFFOnly?: boolean;
  /**
   * @example
   * test-merge-target-branch
   */
  targetBranch?: string;
  /**
   * @example
   * 2876119
   */
  targetProjectId?: number;
  /**
   * @example
   * BRANCH
   */
  targetType?: string;
  title?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  updatedAt?: string;
  /**
   * @example
   * ""
   */
  webUrl?: string;
  /**
   * @example
   * false
   */
  workInProgress?: boolean;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      createdAt: 'createdAt',
      creationMethod: 'creationMethod',
      description: 'description',
      detailUrl: 'detailUrl',
      id: 'id',
      iid: 'iid',
      labels: 'labels',
      localId: 'localId',
      mergedRevision: 'mergedRevision',
      mrBizId: 'mrBizId',
      nameWithNamespace: 'nameWithNamespace',
      newMergeRequestIdentifier: 'newMergeRequestIdentifier',
      newVersionState: 'newVersionState',
      projectId: 'projectId',
      reviewers: 'reviewers',
      sourceBranch: 'sourceBranch',
      sourceProjectId: 'sourceProjectId',
      sourceType: 'sourceType',
      sshUrl: 'sshUrl',
      state: 'state',
      subscribers: 'subscribers',
      supportMergeFFOnly: 'supportMergeFFOnly',
      targetBranch: 'targetBranch',
      targetProjectId: 'targetProjectId',
      targetType: 'targetType',
      title: 'title',
      updatedAt: 'updatedAt',
      webUrl: 'webUrl',
      workInProgress: 'workInProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: ListMergeRequestsResponseBodyResultAuthor,
      createdAt: 'string',
      creationMethod: 'string',
      description: 'string',
      detailUrl: 'string',
      id: 'number',
      iid: 'number',
      labels: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultLabels },
      localId: 'number',
      mergedRevision: 'string',
      mrBizId: 'string',
      nameWithNamespace: 'string',
      newMergeRequestIdentifier: 'boolean',
      newVersionState: 'string',
      projectId: 'number',
      reviewers: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultReviewers },
      sourceBranch: 'string',
      sourceProjectId: 'number',
      sourceType: 'string',
      sshUrl: 'string',
      state: 'string',
      subscribers: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultSubscribers },
      supportMergeFFOnly: 'boolean',
      targetBranch: 'string',
      targetProjectId: 'number',
      targetType: 'string',
      title: 'string',
      updatedAt: 'string',
      webUrl: 'string',
      workInProgress: 'boolean',
    };
  }

  validate() {
    if(this.author && typeof (this.author as any).validate === 'function') {
      (this.author as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
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

export class ListMergeRequestsResponseBody extends $dara.Model {
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
   * @remarks
   * Id of the request
   * 
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: ListMergeRequestsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

