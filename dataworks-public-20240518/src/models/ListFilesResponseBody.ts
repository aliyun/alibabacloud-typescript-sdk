// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesResponseBodyDataFiles extends $dara.Model {
  /**
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  absoluteFolderPath?: string;
  /**
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @example
   * 300000
   */
  bizId?: number;
  /**
   * @example
   * 300000
   */
  businessId?: number;
  /**
   * @example
   * 1
   */
  commitStatus?: number;
  /**
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @example
   * 1593950832000
   */
  createTime?: number;
  /**
   * @example
   * 382762****
   */
  createUser?: string;
  /**
   * @example
   * 2
   */
  currentVersion?: number;
  /**
   * @example
   * my test datastudio file
   */
  fileDescription?: string;
  /**
   * @example
   * 2735c2****
   */
  fileFolderId?: string;
  /**
   * @example
   * 10000001
   */
  fileId?: number;
  /**
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @example
   * false
   */
  isMaxCompute?: boolean;
  /**
   * @example
   * 1593950832000
   */
  lastEditTime?: number;
  /**
   * @example
   * 382762****
   */
  lastEditUser?: string;
  /**
   * @example
   * 300001
   */
  nodeId?: number;
  /**
   * @example
   * 3872572****
   */
  owner?: string;
  /**
   * @example
   * -1
   */
  parentId?: number;
  /**
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      absoluteFolderPath: 'AbsoluteFolderPath',
      autoParsing: 'AutoParsing',
      bizId: 'BizId',
      businessId: 'BusinessId',
      commitStatus: 'CommitStatus',
      connectionName: 'ConnectionName',
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      currentVersion: 'CurrentVersion',
      fileDescription: 'FileDescription',
      fileFolderId: 'FileFolderId',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      isMaxCompute: 'IsMaxCompute',
      lastEditTime: 'LastEditTime',
      lastEditUser: 'LastEditUser',
      nodeId: 'NodeId',
      owner: 'Owner',
      parentId: 'ParentId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absoluteFolderPath: 'string',
      autoParsing: 'boolean',
      bizId: 'number',
      businessId: 'number',
      commitStatus: 'number',
      connectionName: 'string',
      content: 'string',
      createTime: 'number',
      createUser: 'string',
      currentVersion: 'number',
      fileDescription: 'string',
      fileFolderId: 'string',
      fileId: 'number',
      fileName: 'string',
      fileType: 'number',
      isMaxCompute: 'boolean',
      lastEditTime: 'number',
      lastEditUser: 'string',
      nodeId: 'number',
      owner: 'string',
      parentId: 'number',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBodyData extends $dara.Model {
  files?: ListFilesResponseBodyDataFiles[];
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
      files: 'Files',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListFilesResponseBodyDataFiles },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBody extends $dara.Model {
  data?: ListFilesResponseBodyData;
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
      data: ListFilesResponseBodyData,
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

