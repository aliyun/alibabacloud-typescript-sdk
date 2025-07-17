// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFoldersResponseBodyDataFolders extends $dara.Model {
  /**
   * @example
   * 2735c2****
   */
  folderId?: string;
  /**
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  folderPath?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponseBodyData extends $dara.Model {
  folders?: ListFoldersResponseBodyDataFolders[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: { 'type': 'array', 'itemType': ListFoldersResponseBodyDataFolders },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.folders)) {
      $dara.Model.validateArray(this.folders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponseBody extends $dara.Model {
  data?: ListFoldersResponseBodyData;
  /**
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 0000-ABCD-****
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
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFoldersResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

