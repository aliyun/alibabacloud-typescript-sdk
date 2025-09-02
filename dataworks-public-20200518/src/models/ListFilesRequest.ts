// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The exact matching file name. The file name of the query result is exactly the same as this parameter.
   * 
   * @example
   * ods_create.sql
   */
  exactFileName?: string;
  /**
   * @remarks
   * The path of the folder to which files belong.
   * 
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  fileFolderPath?: string;
  /**
   * @remarks
   * The file ID list. The File ID set of the query result can only be a subset of the list. You can specify up to 50 fileids at a time.
   * 
   * @example
   * 78237,816123
   */
  fileIdIn?: string;
  /**
   * @remarks
   * The types of the code in the files.
   * 
   * Valid values: 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 97 (PAI), 98 (node group), 99 (zero load), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1002 (PAI inner node), 1089 (cross-tenant collaboration), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment), 1106 (for-each), and 1221 (PyODPS 3).
   * 
   * @example
   * 10,23
   */
  fileTypes?: string;
  /**
   * @remarks
   * The keyword in the file names. The keyword is used to perform a fuzzy match. You can specify a keyword to query all files whose names contain the keyword.
   * 
   * @example
   * ods
   */
  keyword?: string;
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
   * Whether the query result contains the path of the folder where the file is located.
   * 
   * @example
   * false
   */
  needAbsoluteFolderPath?: boolean;
  /**
   * @remarks
   * Whether the query results contain file content (for files with more content, there may be a long network transmission delay).
   * 
   * @example
   * false
   */
  needContent?: boolean;
  /**
   * @remarks
   * The ID of the node that is scheduled. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the ID of the node.
   * 
   * @example
   * 123541234
   */
  nodeId?: number;
  /**
   * @remarks
   * The owner of the files.
   * 
   * @example
   * 3726346****
   */
  owner?: string;
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the workspace ID.
   * 
   * You must configure either the ProjectId or ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the workspace name.
   * 
   * You must configure either the ProjectId or ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The module to which the files belong. Valid values:
   * 
   * *   NORMAL: The files are used for DataStudio.
   * *   MANUAL: The files are used for manually triggered nodes.
   * *   MANUAL_BIZ: The files are used for manually triggered workflows.
   * *   SKIP: The files are used for dry-run nodes in DataStudio.
   * *   ADHOCQUERY: The files are used for ad hoc queries.
   * *   COMPONENT: The files are used for snippets.
   * 
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
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

