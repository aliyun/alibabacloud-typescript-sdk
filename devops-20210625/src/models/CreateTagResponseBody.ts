// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagResponseBodyResultCommit extends $dara.Model {
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
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parentIds)) {
      $dara.Model.validateArray(this.parentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBodyResult extends $dara.Model {
  commit?: CreateTagResponseBodyResultCommit;
  /**
   * @example
   * 0e3b6aa5eab2b086b59fde74766b28d4e5faab0d
   */
  id?: string;
  message?: string;
  /**
   * @example
   * v1.0
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
      commit: CreateTagResponseBodyResultCommit,
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

export class CreateTagResponseBody extends $dara.Model {
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
  result?: CreateTagResponseBodyResult;
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
      result: CreateTagResponseBodyResult,
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

