// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryTagsResponseBodyResultCommitSignature extends $dara.Model {
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

export class ListRepositoryTagsResponseBodyResultCommit extends $dara.Model {
  /**
   * @example
   * username@example.com
   */
  authorEmail?: string;
  authorName?: string;
  /**
   * @example
   * 2022-03-18 10:00:00
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
   * de02b625ba8488f92eb204bcb3773a40c1b4ddac
   */
  id?: string;
  message?: string;
  parentIds?: string[];
  /**
   * @example
   * de02b625
   */
  shortId?: string;
  signature?: ListRepositoryTagsResponseBodyResultCommitSignature;
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
      signature: ListRepositoryTagsResponseBodyResultCommitSignature,
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

export class ListRepositoryTagsResponseBodyResult extends $dara.Model {
  commit?: ListRepositoryTagsResponseBodyResultCommit;
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
      commit: ListRepositoryTagsResponseBodyResultCommit,
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

export class ListRepositoryTagsResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: ListRepositoryTagsResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListRepositoryTagsResponseBodyResult },
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

