// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesResponseBodyDataFiles extends $dara.Model {
  /**
   * @remarks
   * The path to the folder where the file is located.
   * 
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  absoluteFolderPath?: string;
  /**
   * @remarks
   * Specifies whether automatic parsing is enabled for the file. Valid values:
   * 
   * *   true: The file automatically parses code.
   * *   false: The file does not automatically parse code.
   * 
   * This parameter corresponds to Analyze Code when you set Dependencies to Same Cycle in the scheduling configuration of a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * The ID of the workflow to which the file belongs. This parameter is deprecated. Use the BusinessId parameter instead.
   * 
   * @example
   * 300000
   */
  bizId?: number;
  /**
   * @remarks
   * The ID of the workflow to which the file belongs.
   * 
   * @example
   * 300000
   */
  businessId?: number;
  /**
   * @remarks
   * The current commit status of the file. Valid values: 0 (the latest code is not committed) and 1 (the latest code is committed).
   * 
   * @example
   * 1
   */
  commitStatus?: number;
  /**
   * @remarks
   * The data source name used by the task.
   * 
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @remarks
   * This parameter is deprecated. You can call the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation to query this information.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The timestamp (in milliseconds) when the file was created.
   * 
   * @example
   * 1593950832000
   */
  createTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the file creator.
   * 
   * @example
   * 382762****
   */
  createUser?: string;
  /**
   * @remarks
   * The latest version of the file.
   * 
   * @example
   * 2
   */
  currentVersion?: number;
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * my test datastudio file
   */
  fileDescription?: string;
  /**
   * @remarks
   * The ID of the folder where the file is located.
   * 
   * @example
   * 2735c2****
   */
  fileFolderId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 10000001
   */
  fileId?: number;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * The file type. Different file types have different code. For more information, see [DataWorks node types](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * If the current file is a MaxCompute resource file, this parameter specifies whether the resource file needs to be uploaded to MaxCompute.
   * 
   * You only need to configure this parameter when the file is a MaxCompute resource file.
   * 
   * @example
   * false
   */
  isMaxCompute?: boolean;
  /**
   * @remarks
   * The timestamp (in milliseconds) when the file was last modified.
   * 
   * @example
   * 1593950832000
   */
  lastEditTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who last updated the file.
   * 
   * @example
   * 382762****
   */
  lastEditUser?: string;
  /**
   * @remarks
   * The ID of the scheduling task generated in the scheduling system after the file is committed.
   * 
   * @example
   * 300001
   */
  nodeId?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the file owner.
   * 
   * @example
   * 3872572****
   */
  owner?: string;
  /**
   * @remarks
   * If the current file is an internal file of a combined node, this parameter specifies the ID of the corresponding combined node file.
   * 
   * @example
   * -1
   */
  parentId?: number;
  /**
   * @remarks
   * The functional module to which the file belongs. Valid values:
   * 
   * *   NORMAL: Data Studio
   * *   MANUAL: Manually triggered node
   * *   MANUAL_BIZ: Manually triggered workflow
   * *   SKIP: Dry-run scheduling in Data Studio
   * *   ADHOCQUERY: Ad hoc query
   * *   COMPONENT: Component management
   * 
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
  /**
   * @remarks
   * The file details.
   */
  files?: ListFilesResponseBodyDataFiles[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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
  /**
   * @remarks
   * The response details.
   */
  data?: ListFilesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
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
   * The request ID. Use this ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded. Valid values:
   * 
   * *   true
   * *   false
   * 
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

