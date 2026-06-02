// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceCodeResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @example
   * 2026-01-01T10:11:12Z
   */
  mtime?: string;
  /**
   * @example
   * default
   */
  name?: string;
  /**
   * @example
   * 59
   */
  size?: number;
  /**
   * @example
   * ../abc.py
   */
  symlink?: string;
  static names(): { [key: string]: string } {
    return {
      isDir: 'IsDir',
      mtime: 'Mtime',
      name: 'Name',
      size: 'Size',
      symlink: 'Symlink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDir: 'boolean',
      mtime: 'string',
      name: 'string',
      size: 'number',
      symlink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceCodeResponseBodyData extends $dara.Model {
  list?: ListWorkspaceCodeResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListWorkspaceCodeResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceCodeResponseBody extends $dara.Model {
  data?: ListWorkspaceCodeResponseBodyData;
  /**
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * This record is being collected, please wait for a moment.
   */
  message?: string;
  /**
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListWorkspaceCodeResponseBodyData,
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

