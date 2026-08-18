// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesResponseBodyDataFiles extends $dara.Model {
  /**
   * @remarks
   * The path of the folder where the file is stored.
   * 
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  absoluteFolderPath?: string;
  /**
   * @remarks
   * Indicates whether the automatic parsing feature is enabled for the file. Valid values:
   * 
   * - true: The file automatically parses code.
   * - false: The file does not automatically parse code.
   * 
   * This parameter corresponds to the "Code Parsing" option when you select "Same Cycle" in "Scheduling Configuration > Scheduling Dependencies" for a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * **[Deprecated]** The ID of the workflow to which the file belongs. This field is deprecated. Use the BusinessId field instead.
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
   * The current commit status of the file. Valid values: 0 (the latest code has not been committed) and 1 (the latest code has been committed).
   * 
   * @example
   * 1
   */
  commitStatus?: number;
  /**
   * @remarks
   * The name of the data source used when the task corresponding to the file is executed.
   * 
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You can call the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation to query file content.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The timestamp when the file was created, in milliseconds.
   * 
   * @example
   * 1593950832000
   */
  createTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud user ID of the file creator.
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
   * The ID of the folder where the file is stored.
   * 
   * @example
   * 2735c2****
   */
  fileFolderId?: string;
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * 10000001
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * The file type. Different file types have different codes. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * If the current file is a MaxCompute resource file, this field indicates whether the resource file needs to be uploaded to MaxCompute.
   * 
   * This parameter needs to be configured only when the file is a MaxCompute resource file.
   * 
   * @example
   * false
   */
  isMaxCompute?: boolean;
  /**
   * @remarks
   * The timestamp of the last file edit, in milliseconds.
   * 
   * @example
   * 1593950832000
   */
  lastEditTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud ID of the user who last updated the file.
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
   * The Alibaba Cloud user ID of the file owner.
   * 
   * @example
   * 3872572****
   */
  owner?: string;
  /**
   * @remarks
   * If the current file is an internal file of a combined node, this field indicates the ID of the corresponding combined node file.
   * 
   * @example
   * -1
   */
  parentId?: number;
  /**
   * @remarks
   * The functional module to which the file belongs. Valid values:
   * - NORMAL: DataStudio.
   * - MANUAL: manual node.
   * - MANUAL_BIZ: manual workflow.
   * - SKIP: dry-run scheduling in DataStudio.
   * - ADHOCQUERY: ad hoc query.
   * - COMPONENT: component management.
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
   * The page number of the returned data.
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
   * The total number of entries that meet the conditions.
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
   * The returned data details.
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
   * The request ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - true: The call was successful.
   * - false: The call failed.
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

