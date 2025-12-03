// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepositoryTagResponseBodyResultCommitSignature extends $dara.Model {
  /**
   * @example
   * ""
   */
  gpgKeyId?: string;
  /**
   * @example
   * verified
   */
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'gpgKeyId',
      verificationStatus: 'verificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBodyResultCommit extends $dara.Model {
  /**
   * @example
   * username@example.com
   */
  authorEmail?: string;
  authorName?: string;
  /**
   * @example
   * 2022-03-18 08:00:00
   */
  authoredDate?: string;
  /**
   * @example
   * 2022-03-18 09:00:00
   */
  committedDate?: string;
  /**
   * @example
   * username@example.com
   */
  committerEmail?: string;
  committerName?: string;
  /**
   * @example
   * 2022-03-18 10:00:00
   */
  createdAt?: string;
  /**
   * @example
   * e0297d8fb0393c833a8531e7cc8832739e3cba6d
   */
  id?: string;
  message?: string;
  parentIds?: string[];
  /**
   * @example
   * e0297d8f
   */
  shortId?: string;
  signature?: GetRepositoryTagResponseBodyResultCommitSignature;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorEmail: 'authorEmail',
      authorName: 'authorName',
      authoredDate: 'authoredDate',
      committedDate: 'committedDate',
      committerEmail: 'committerEmail',
      committerName: 'committerName',
      createdAt: 'createdAt',
      id: 'id',
      message: 'message',
      parentIds: 'parentIds',
      shortId: 'shortId',
      signature: 'signature',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: GetRepositoryTagResponseBodyResultCommitSignature,
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parentIds)) {
      $dara.Model.validateArray(this.parentIds);
    }
    if(this.signature && typeof (this.signature as any).validate === 'function') {
      (this.signature as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBodyResult extends $dara.Model {
  commit?: GetRepositoryTagResponseBodyResultCommit;
  /**
   * @example
   * 9a494e7b88ca35cde00579af2df4ab46136c022e
   */
  id?: string;
  message?: string;
  /**
   * @example
   * tag v1.0
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      commit: 'commit',
      id: 'id',
      message: 'message',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commit: GetRepositoryTagResponseBodyResultCommit,
      id: 'string',
      message: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.commit && typeof (this.commit as any).validate === 'function') {
      (this.commit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBody extends $dara.Model {
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
   * CE7353E3-F989-56A9-B97C-897ABBDB9A01
   */
  requestId?: string;
  result?: GetRepositoryTagResponseBodyResult;
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
      result: GetRepositoryTagResponseBodyResult,
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

