// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchCommitResponseBodyResultHighlightTextMap extends $dara.Model {
  /**
   * @example
   * df1b701cb0f3f7ca92320d49d31995821f2d045c
   */
  commitId?: string;
  commitMessage?: string;
  /**
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'commitId',
      commitMessage: 'commitMessage',
      organizationId: 'organizationId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      commitMessage: 'string',
      organizationId: 'string',
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

export class ListSearchCommitResponseBodyResultSourceAuthor extends $dara.Model {
  /**
   * @example
   * username@example.com
   */
  email?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
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

export class ListSearchCommitResponseBodyResultSource extends $dara.Model {
  author?: ListSearchCommitResponseBodyResultSourceAuthor;
  /**
   * @example
   * 2022-11-11 11:11:11
   */
  authorTime?: string;
  /**
   * @example
   * a748f5ecb17a93900d4808944bfcc96dc158ee2d
   */
  commitId?: string;
  commitMessage?: string;
  /**
   * @example
   * 61133b011bd96aa110f1b500
   */
  organizationId?: string;
  /**
   * @example
   * codeup/test-repo
   */
  repoPath?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      authorTime: 'authorTime',
      commitId: 'commitId',
      commitMessage: 'commitMessage',
      organizationId: 'organizationId',
      repoPath: 'repoPath',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: ListSearchCommitResponseBodyResultSourceAuthor,
      authorTime: 'string',
      commitId: 'string',
      commitMessage: 'string',
      organizationId: 'string',
      repoPath: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.author && typeof (this.author as any).validate === 'function') {
      (this.author as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchCommitResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 60d54f3daccf2bbd6659f3ad/gitlabhq/master/config/environments/test.rb
   */
  docId?: string;
  highlightTextMap?: ListSearchCommitResponseBodyResultHighlightTextMap;
  source?: ListSearchCommitResponseBodyResultSource;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      highlightTextMap: 'highlightTextMap',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      highlightTextMap: ListSearchCommitResponseBodyResultHighlightTextMap,
      source: ListSearchCommitResponseBodyResultSource,
    };
  }

  validate() {
    if(this.highlightTextMap && typeof (this.highlightTextMap as any).validate === 'function') {
      (this.highlightTextMap as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchCommitResponseBody extends $dara.Model {
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
  result?: ListSearchCommitResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
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
      result: { 'type': 'array', 'itemType': ListSearchCommitResponseBodyResult },
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

