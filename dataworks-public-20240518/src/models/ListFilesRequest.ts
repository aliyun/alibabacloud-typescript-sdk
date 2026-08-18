// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesRequest extends $dara.Model {
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
   * The file name for exact match. The file name in the query result exactly matches this parameter value.
   * 
   * @example
   * ods_create.sql
   */
  exactFileName?: string;
  /**
   * @remarks
   * The path of the folder where the file is stored.
   * 
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  fileFolderPath?: string;
  /**
   * @remarks
   * The list of file IDs. The file IDs in the query result can only be a subset of this list. A maximum of 50 file IDs can be specified at a time.
   * 
   * @example
   * 78237,816123
   */
  fileIdIn?: string;
  /**
   * @remarks
   * The code type of the file.
   * 
   * Common codes and their corresponding file types include 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 97 (PAI), 98 (combined node), 99 (virtual node), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object check), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1002 (PAI internal node), 1089 (cross-tenant node), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment node), 1106 (foreach node), 1221 (PyODPS 3).
   * 
   * @example
   * 10,23
   */
  fileTypes?: string;
  /**
   * @remarks
   * The keyword of the file name. Fuzzy match is supported. You can enter a keyword to query all files whose names contain the keyword.
   * 
   * @example
   * ods
   */
  keyword?: string;
  /**
   * @remarks
   * The Alibaba Cloud ID of the user who last updated the file.
   * 
   * @example
   * 11233***
   */
  lastEditUser?: string;
  /**
   * @remarks
   * Specifies whether the query result includes the path of the folder where the file is stored.
   * 
   * @example
   * false
   */
  needAbsoluteFolderPath?: boolean;
  /**
   * @remarks
   * Specifies whether the query result includes the file content. For files with large content, network transmission latency may be significant.
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
   * The owner of the file.
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
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace ID.
   * 
   * You must specify either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace for this API call.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace name.
   * 
   * You must specify either this parameter or the ProjectId parameter to determine the DataWorks workspace for this API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The functional module to which the file belongs. Valid values:
   * 
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

