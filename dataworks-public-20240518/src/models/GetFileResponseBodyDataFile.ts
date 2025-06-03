// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataFile extends $dara.Model {
  /**
   * @remarks
   * The advanced configurations of the node.
   * 
   * This parameter is valid for an EMR node. This parameter corresponds to the Advanced Settings tab in the right-side navigation pane on the configuration tab of the node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * >  You cannot configure advanced parameters for EMR Shell nodes.
   * 
   * For information about the advanced parameters of each type of EMR node, see [Develop EMR tasks](https://help.aliyun.com/document_detail/473077.html).
   * 
   * @example
   * {\\"priority\\":\\"1\\",\\"ENABLE_SPARKSQL_JDBC\\":false,\\"FLOW_SKIP_SQL_ANALYZE\\":false,\\"queue\\":\\"default\\"}
   */
  advancedSettings?: string;
  /**
   * @remarks
   * Indicates whether the automatic parsing feature is enabled for the file. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter corresponds to the Automatic Parsing From Code Before Node Committing parameter that is displayed after you select Same Cycle in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * 1000001
   */
  bizId?: number;
  /**
   * @remarks
   * The ID of the workflow to which the file belongs.
   * 
   * @example
   * 1000001
   */
  businessId?: number;
  /**
   * @remarks
   * Indicates whether the latest code in the file is committed. Valid values: 0 and 1. The value 0 indicates that the latest code in the file is not committed. The value 1 indicates that the latest code in the file is committed.
   * 
   * @example
   * 0
   */
  commitStatus?: number;
  /**
   * @remarks
   * The name of the data source that is used to run the node that corresponds to the file.
   * 
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @remarks
   * The code in the file.
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
   * 1593879116000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used to create the file.
   * 
   * @example
   * 424732****
   */
  createUser?: string;
  /**
   * @remarks
   * The latest version number of the file.
   * 
   * @example
   * 3
   */
  currentVersion?: number;
  /**
   * @remarks
   * The status of the file. Valid values:
   * 
   * *   NORMAL: The file is not deleted.
   * *   RECYCLE_BIN: The file is stored in the recycle bin.
   * *   DELETED: The file is deleted.
   * 
   * @example
   * RECYCLE
   */
  deletedStatus?: string;
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * My first DataWorks file
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
   * The file ID.
   * 
   * @example
   * 100000001
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
   * The type of the code for the file. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * Indicates whether the resource file needs to be uploaded to MaxCompute. This parameter is returned only if the file is a MaxCompute resource file.
   * 
   * @example
   * true
   */
  isMaxCompute?: boolean;
  /**
   * @remarks
   * The time when the file was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593879116000
   */
  lastEditTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used to last modify the file.
   * 
   * @example
   * 424732****
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
   * 7775674356****
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
   * *   SKIP: The file is used for a dry-run node in DataStudio.
   * *   ADHOCQUERY: The file is used for an ad hoc query.
   * *   COMPONENT: The file is used for a script template.
   * 
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      autoParsing: 'AutoParsing',
      bizId: 'BizId',
      businessId: 'BusinessId',
      commitStatus: 'CommitStatus',
      connectionName: 'ConnectionName',
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      currentVersion: 'CurrentVersion',
      deletedStatus: 'DeletedStatus',
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
      advancedSettings: 'string',
      autoParsing: 'boolean',
      bizId: 'number',
      businessId: 'number',
      commitStatus: 'number',
      connectionName: 'string',
      content: 'string',
      createTime: 'number',
      createUser: 'string',
      currentVersion: 'number',
      deletedStatus: 'string',
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

