// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceCodeResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the object is a directory.
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * The modification time of the file.
   * 
   * The time is in the ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is returned only for files.
   * 
   * @example
   * 2026-01-01T10:11:12Z
   */
  mtime?: string;
  /**
   * @remarks
   * The name of the file or directory.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 59
   */
  size?: number;
  /**
   * @remarks
   * The target of the symlink.
   * 
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
  /**
   * @remarks
   * An array of objects representing the files and directories.
   */
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
  /**
   * @remarks
   * The data returned in the response.
   */
  data?: ListWorkspaceCodeResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * This record is being collected, please wait for a moment.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

