// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesRequest extends $dara.Model {
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
   * The exact file name. The file name in the query result must exactly match this parameter.
   * 
   * @example
   * ods_create.sql
   */
  exactFileName?: string;
  /**
   * @remarks
   * The path to the folder where the file is located.
   * 
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  fileFolderPath?: string;
  /**
   * @remarks
   * The list of file IDs. The file IDs in the query result must be a subset of this list. You can specify up to 50 file IDs at a time.
   * 
   * @example
   * 78237,816123
   */
  fileIdIn?: string;
  /**
   * @remarks
   * The code type of the file.
   * 
   * The code type of the file. Common code types and their corresponding file types include: 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 97 (PAI), 98 (Combined node), 99 (Virtual node), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (Real-time sync), 1002 (PAI internal node), 1089 (Cross-tenant node), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (Assignment node), 1106 (ForEach node), 1221 (PyODPS 3).
   * 
   * @example
   * 10,23
   */
  fileTypes?: string;
  /**
   * @remarks
   * The keyword for the file name. Fuzzy match is supported. You can enter a keyword to query all files that contain the keyword.
   * 
   * @example
   * ods
   */
  keyword?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who last updated the file.
   * 
   * @example
   * 11233***
   */
  lastEditUser?: string;
  /**
   * @remarks
   * Specifies whether the query result includes the path to the folder where the file is located.
   * 
   * @example
   * false
   */
  needAbsoluteFolderPath?: boolean;
  /**
   * @remarks
   * Specifies whether the query result includes the file content. For files with large content, network transmission delays may occur.
   * 
   * @example
   * false
   */
  needContent?: boolean;
  /**
   * @remarks
   * The ID of the scheduling node. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to obtain the node ID.
   * 
   * @example
   * 123541234
   */
  nodeId?: number;
  /**
   * @remarks
   * The ID of the file owner.
   * 
   * @example
   * 3726346****
   */
  owner?: string;
  /**
   * @remarks
   * The page number for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the ID.
   * 
   * You must configure either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The DataWorks workspace name. To obtain the workspace name, log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and navigate to the workspace configuration page.
   * 
   * You must specify either this parameter or ProjectId to identify the target DataWorks workspace for this API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
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
      commitStatus: 'CommitStatus',
      exactFileName: 'ExactFileName',
      fileFolderPath: 'FileFolderPath',
      fileIdIn: 'FileIdIn',
      fileTypes: 'FileTypes',
      keyword: 'Keyword',
      lastEditUser: 'LastEditUser',
      needAbsoluteFolderPath: 'NeedAbsoluteFolderPath',
      needContent: 'NeedContent',
      nodeId: 'NodeId',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitStatus: 'number',
      exactFileName: 'string',
      fileFolderPath: 'string',
      fileIdIn: 'string',
      fileTypes: 'string',
      keyword: 'string',
      lastEditUser: 'string',
      needAbsoluteFolderPath: 'boolean',
      needContent: 'boolean',
      nodeId: 'number',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
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

