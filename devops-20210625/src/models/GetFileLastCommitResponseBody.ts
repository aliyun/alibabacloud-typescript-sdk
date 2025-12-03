// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileLastCommitResponseBodyResultSignature extends $dara.Model {
  /**
   * @remarks
   * GPG密钥ID
   * 
   * @example
   * 34d2c47c7ce46a5c4639c5ffe208
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

export class GetFileLastCommitResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2022-08-08 18:09:09
   */
  authorDate?: string;
  /**
   * @example
   * username@example.com
   */
  authorEmail?: string;
  /**
   * @example
   * test-codeup
   */
  authorName?: string;
  /**
   * @example
   * 2022-03-18 15:00:02
   */
  committedDate?: string;
  /**
   * @example
   * username@example.com
   */
  committerEmail?: string;
  /**
   * @example
   * committer-codeup
   */
  committerName?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * ff4fb5ac6d1f44f452654336d2dba468ae6c8d04
   */
  id?: string;
  message?: string;
  parentIds?: string[];
  /**
   * @example
   * ff4fb5ac
   */
  shortId?: string;
  signature?: GetFileLastCommitResponseBodyResultSignature;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorDate: 'authorDate',
      authorEmail: 'authorEmail',
      authorName: 'authorName',
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
      authorDate: 'string',
      authorEmail: 'string',
      authorName: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: GetFileLastCommitResponseBodyResultSignature,
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

export class GetFileLastCommitResponseBody extends $dara.Model {
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
  result?: GetFileLastCommitResponseBodyResult;
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
      result: GetFileLastCommitResponseBodyResult,
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

