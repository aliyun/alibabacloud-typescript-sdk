// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesResponseBodyDataFiles extends $dara.Model {
  /**
   * @remarks
   * The path of the folder to which the file belongs.
   * 
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  absoluteFolderPath?: string;
  /**
   * @remarks
   * Specifies whether the automatic parsing feature is enabled for the file. Valid values:
   * 
   * *   true: The automatic parsing feature is enabled for the file.
   * *   false: The automatic parsing feature is not enabled for the file.
   * 
   * This parameter is equivalent to the Analyze Code parameter in the Dependencies section of the Properties panel in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * The ID of the workflow to which the file belongs. This parameter is deprecated and replaced by the BusinessId parameter.
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
   * Indicates whether the latest code in the file is committed. Valid values: 0 and 1. The value 0 indicates that the latest code in the file is not committed. The value 1 indicates that the latest code in the file is committed.
   * 
   * @example
   * 1
   */
  commitStatus?: number;
  /**
   * @remarks
   * The ID of the compute engine instance that is used to run the node that corresponds to the file.
   * 
   * @example
   * odps_first
   */
  connectionName?: string;
  /**
   * @remarks
   * This parameter is deprecated. You can call the [GetFile](~~173954#doc-api-dataworks-public-GetFile~~) operation to query the details of the file.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The time when the file was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593950832000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the file.
   * 
   * @example
   * 382762****
   */
  createUser?: string;
  /**
   * @remarks
   * The latest version number of the file.
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
   * The ID of the folder to which the file belongs.
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
   * The type of the code in the file. Valid values: 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 99 (zero load), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1089 (cross-tenant collaboration), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment), and 1221 (PyODPS 3).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * Indicates whether the file needs to be uploaded to MaxCompute if the file is a MaxCompute resource file.
   * 
   * This parameter is returned only if the file is a MaxCompute resource file.
   * 
   * @example
   * false
   */
  isMaxCompute?: boolean;
  /**
   * @remarks
   * The time when the file was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593950832000
   */
  lastEditTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to last modify the file.
   * 
   * @example
   * 38748246285727
   */
  lastEditUser?: string;
  /**
   * @remarks
   * The ID of the auto triggered node that is generated in the scheduling system after the file is committed.
   * 
   * @example
   * 300001
   */
  nodeId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the file owner.
   * 
   * @example
   * 3872572****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the node group file to which the current file belongs. This parameter is returned only if the current file is an inner file of the node group file.
   * 
   * @example
   * -1
   */
  parentId?: number;
  /**
   * @remarks
   * The module to which the file belongs. Valid values:
   * 
   * *   NORMAL: The file is used for DataStudio.
   * *   MANUAL: The file is used for a manually triggered node.
   * *   MANUAL_BIZ: The file is used for a manually triggered workflow.
   * *   SKIP: The files is used for a dry-run node in DataStudio.
   * *   ADHOCQUERY: The file is used for an ad hoc query.
   * *   COMPONENT: The file is used for a snippet.
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
   * The details of the files.
   */
  files?: ListFilesResponseBodyDataFiles[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * The files returned.
   */
  data?: ListFilesResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the ID.
   * 
   * @example
   * 0000-ABCD-EFG
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
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

