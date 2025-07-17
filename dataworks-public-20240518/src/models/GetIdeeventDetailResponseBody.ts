// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow to which the file belongs.
   * 
   * @example
   * 74328
   */
  businessId?: number;
  /**
   * @remarks
   * The latest version number of the file.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The name of the data source with which the file is associated.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The ID of the folder to which the file belongs. You can call the [GetFolder](https://help.aliyun.com/document_detail/173952.html) operation to query the details of the file based on the folder ID.
   * 
   * @example
   * aldurie78l2falure
   */
  folderId?: string;
  /**
   * @remarks
   * The file owner.
   * 
   * @example
   * 7384234****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the do-while node or for-each node that corresponds to the file.
   * 
   * @example
   * 1234122
   */
  parentFileId?: number;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      currentVersion: 'CurrentVersion',
      dataSourceName: 'DataSourceName',
      folderId: 'FolderId',
      owner: 'Owner',
      parentFileId: 'ParentFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      currentVersion: 'number',
      dataSourceName: 'string',
      folderId: 'string',
      owner: 'string',
      parentFileId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList extends $dara.Model {
  /**
   * @remarks
   * The output name of the parent file on which the current file depends.
   * 
   * This parameter corresponds to the Output Name of Ancestor Node parameter under Parent Nodes in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project_root
   */
  input?: string;
  /**
   * @remarks
   * The mode of the configuration file dependency. Valid values:
   * 
   * *   MANUAL: Scheduling dependencies are manually configured.
   * *   AUTO: Scheduling dependencies are automatically parsed.
   * 
   * @example
   * MANUAL
   */
  parseType?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      parseType: 'ParseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      parseType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList extends $dara.Model {
  /**
   * @remarks
   * The output name of the current file.
   * 
   * This parameter corresponds to the Output Name parameter under Output Name of Current Node in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project.002_out
   */
  output?: string;
  /**
   * @remarks
   * The output table name of the current file.
   * 
   * This parameter corresponds to the Output Table Name parameter under Output Name of Current Node in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ods_user_info_d
   */
  refTableName?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      refTableName: 'RefTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      refTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The interval at which the node corresponding to the file is rerun. Unit: milliseconds.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The number of times that the node corresponding to the file can be rerun.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The cron expression that is used to schedule the node corresponding to the file.
   * 
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of the scheduling cycle of the node that corresponds to the file. Valid values: NOT_DAY and DAY. The value NOT_DAY indicates that the node is scheduled to run by minute or hour. The value DAY indicates that the node is scheduled to run by day, week, or month.
   * 
   * This parameter corresponds to the Scheduling Cycle parameter in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The ID of the node on which the node that corresponds to the file depends when the DependentType parameter is set to USER_DEFINE. Multiple IDs are separated by commas (,).
   * 
   * The value of this parameter is equivalent to the ID of the node that you specified after you select Other Nodes for Cross-Cycle Dependency (Original Previous-Cycle Dependency) in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 5,10,15,20
   */
  dependentNodeIdList?: string;
  /**
   * @remarks
   * The type of the cross-cycle scheduling dependency of the node. Valid values:
   * 
   * *   SELF: The instance generated for the node in the current cycle depends on the instance generated for the node in the previous cycle.
   * *   CHILD: The instance generated for the node in the current cycle depends on the instances generated for the descendant nodes at the nearest level of the node in the previous cycle.
   * *   USER_DEFINE: The instance generated for the node in the current cycle depends on the instances generated for one or more specified nodes in the previous cycle.
   * *   NONE: No cross-cycle scheduling dependency type is selected for the node.
   * 
   * @example
   * USER_DEFINE
   */
  dependentType?: string;
  /**
   * @remarks
   * The output information about the parent files on which the current file depends.
   */
  inputList?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList[];
  /**
   * @remarks
   * The output information about the current file.
   */
  outputList?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList[];
  /**
   * @remarks
   * The scheduling parameters of the node.
   * 
   * This parameter corresponds to the Scheduling Parameter section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information about the configurations of scheduling parameters, see [Configure scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @remarks
   * Indicates whether the node that corresponds to the file can be rerun. Valid values:
   * 
   * *   ALL_ALLOWED: The node can be rerun regardless of whether it is successfully run or fails to run.
   * *   FAILURE_ALLOWED: The node can be rerun only after it fails to run.
   * *   ALL_DENIED: The node cannot be rerun regardless of whether it is successfully run or fails to run.
   * 
   * This parameter corresponds to the Rerun parameter in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * The ID of the resource group that is used to run the node that corresponds to the file. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the available resource groups in the workspace.
   * 
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The scheduling type of the node. Valid values:
   * 
   * *   NORMAL: The node is an auto triggered node.
   * *   MANUAL: The node is a manually triggered node. Manually triggered nodes cannot be automatically triggered. They correspond to the nodes in the Manually Triggered Workflows pane.
   * *   PAUSE: The node is a paused node.
   * *   SKIP: The node is a dry-run node. Dry-run nodes are started as scheduled, but the system sets the status of the nodes to successful when it starts to run them.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      inputList: 'InputList',
      outputList: 'OutputList',
      paraValue: 'ParaValue',
      rerunMode: 'RerunMode',
      resourceGroupId: 'ResourceGroupId',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      inputList: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList },
      outputList: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList },
      paraValue: 'string',
      rerunMode: 'string',
      resourceGroupId: 'number',
      schedulerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputList)) {
      $dara.Model.validateArray(this.inputList);
    }
    if(Array.isArray(this.outputList)) {
      $dara.Model.validateArray(this.outputList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailCommittedFile extends $dara.Model {
  /**
   * @remarks
   * The type of the change to the file of the current version. Valid values: CREATE, UPDATE, and DELETE.
   * 
   * @example
   * UPDATE
   */
  changeType?: string;
  /**
   * @remarks
   * The description of the file version.
   * 
   * @example
   * Second version submission
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to generate the file of the current version.
   * 
   * @example
   * 7384234****
   */
  committor?: string;
  /**
   * @remarks
   * The code in the file of the current version.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 1234123
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * hello_dataworks.sql
   */
  fileName?: string;
  /**
   * @remarks
   * The details of the file.
   */
  filePropertyContent?: GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent;
  /**
   * @remarks
   * The file type. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * The scheduling properties of the node that corresponds to the file.
   */
  nodeConfiguration?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration;
  /**
   * @remarks
   * The ID of the node that is scheduled.
   * 
   * @example
   * 421429
   */
  nodeId?: number;
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
      changeType: 'ChangeType',
      comment: 'Comment',
      committor: 'Committor',
      content: 'Content',
      fileId: 'FileId',
      fileName: 'FileName',
      filePropertyContent: 'FilePropertyContent',
      fileType: 'FileType',
      nodeConfiguration: 'NodeConfiguration',
      nodeId: 'NodeId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      comment: 'string',
      committor: 'string',
      content: 'string',
      fileId: 'number',
      fileName: 'string',
      filePropertyContent: GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent,
      fileType: 'number',
      nodeConfiguration: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration,
      nodeId: 'number',
      useType: 'string',
    };
  }

  validate() {
    if(this.filePropertyContent && typeof (this.filePropertyContent as any).validate === 'function') {
      (this.filePropertyContent as any).validate();
    }
    if(this.nodeConfiguration && typeof (this.nodeConfiguration as any).validate === 'function') {
      (this.nodeConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailDeletedFile extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow to which the file belongs.
   * 
   * @example
   * 74328
   */
  businessId?: number;
  /**
   * @remarks
   * The code in the file of the current version.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The latest version number of the file.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The name of the data source with which the file is associated.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 1234123
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * hello_dataworks.sql
   */
  fileName?: string;
  /**
   * @remarks
   * The file type. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * The ID of the folder to which the file belongs. You can call the [GetFolder](https://help.aliyun.com/document_detail/173952.html) operation to query the details of the file based on the folder ID.
   * 
   * @example
   * aldurie78l2falure
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the node that is scheduled.
   * 
   * @example
   * 421429
   */
  nodeId?: number;
  /**
   * @remarks
   * The file owner.
   * 
   * @example
   * 7384234****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the do-while node or for-each node that corresponds to the file.
   * 
   * @example
   * 1234122
   */
  parentFileId?: number;
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
      businessId: 'BusinessId',
      content: 'Content',
      currentVersion: 'CurrentVersion',
      dataSourceName: 'DataSourceName',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      folderId: 'FolderId',
      nodeId: 'NodeId',
      owner: 'Owner',
      parentFileId: 'ParentFileId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      content: 'string',
      currentVersion: 'number',
      dataSourceName: 'string',
      fileId: 'number',
      fileName: 'string',
      fileType: 'number',
      folderId: 'string',
      nodeId: 'number',
      owner: 'string',
      parentFileId: 'number',
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

export class GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand extends $dara.Model {
  /**
   * @remarks
   * The code in the file of the current version.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The name of the data source with which the file is associated.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 1234123
   */
  fileId?: number;
  /**
   * @remarks
   * The file type. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataSourceName: 'DataSourceName',
      fileId: 'FileId',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSourceName: 'string',
      fileId: 'number',
      fileType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailTableModelColumns extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * ID
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * BIGINT
   */
  columnType?: string;
  /**
   * @remarks
   * The remarks of the column.
   * 
   * @example
   * ID
   */
  comment?: string;
  /**
   * @remarks
   * Indicates whether the column is a partition key column. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isPartitionColumn?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      comment: 'Comment',
      isPartitionColumn: 'IsPartitionColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnType: 'string',
      comment: 'string',
      isPartitionColumn: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailTableModel extends $dara.Model {
  /**
   * @remarks
   * The columns in the table.
   */
  columns?: GetIDEEventDetailResponseBodyEventDetailTableModelColumns[];
  /**
   * @remarks
   * The remarks of the table.
   * 
   * @example
   * A new table
   */
  comment?: string;
  /**
   * @remarks
   * The name of the data source to which the table belongs.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The environment in which the table is used. Valid values:
   * 
   * *   DEV
   * *   PROD
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The lifecycle of the table. Unit: day.
   * 
   * @example
   * 7
   */
  lifeCycle?: number;
  /**
   * @remarks
   * The path of the table.
   * 
   * @example
   * hdfs://path/to/object
   */
  location?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tb_hello
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      comment: 'Comment',
      dataSourceName: 'DataSourceName',
      env: 'Env',
      lifeCycle: 'LifeCycle',
      location: 'Location',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailTableModelColumns },
      comment: 'string',
      dataSourceName: 'string',
      env: 'string',
      lifeCycle: 'number',
      location: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetail extends $dara.Model {
  /**
   * @remarks
   * The data snapshot when the file is committed and deployed.
   * 
   * This parameter is valid only if the message type is IDE_FILE_SUBMIT_BEFORE or IDE_FILE_DEPLOY_BEFORE.
   */
  committedFile?: GetIDEEventDetailResponseBodyEventDetailCommittedFile;
  /**
   * @remarks
   * The data snapshot when the file is deleted. This parameter is valid only if the message type is IDE_FILE_DELETE_BEFORE.
   */
  deletedFile?: GetIDEEventDetailResponseBodyEventDetailDeletedFile;
  /**
   * @remarks
   * The data snapshot when the code in the file is run. This parameter is valid only if the message type is IDE_FILE_EXECUTE_BEFORE.
   */
  fileExecutionCommand?: GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand;
  /**
   * @remarks
   * The data snapshot when the table is committed and deployed. This parameter is valid only if the message type is IDE_TABLE_SUBMIT_BEFORE or IDE_TABLE_DEPLOY_BEFORE.
   */
  tableModel?: GetIDEEventDetailResponseBodyEventDetailTableModel;
  static names(): { [key: string]: string } {
    return {
      committedFile: 'CommittedFile',
      deletedFile: 'DeletedFile',
      fileExecutionCommand: 'FileExecutionCommand',
      tableModel: 'TableModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      committedFile: GetIDEEventDetailResponseBodyEventDetailCommittedFile,
      deletedFile: GetIDEEventDetailResponseBodyEventDetailDeletedFile,
      fileExecutionCommand: GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand,
      tableModel: GetIDEEventDetailResponseBodyEventDetailTableModel,
    };
  }

  validate() {
    if(this.committedFile && typeof (this.committedFile as any).validate === 'function') {
      (this.committedFile as any).validate();
    }
    if(this.deletedFile && typeof (this.deletedFile as any).validate === 'function') {
      (this.deletedFile as any).validate();
    }
    if(this.fileExecutionCommand && typeof (this.fileExecutionCommand as any).validate === 'function') {
      (this.fileExecutionCommand as any).validate();
    }
    if(this.tableModel && typeof (this.tableModel as any).validate === 'function') {
      (this.tableModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data snapshot that is generated when an extension point event is triggered.
   * 
   * The fields contained in data snapshots vary based on the types of the triggered extension point events. For more information, see the description of the fields.
   */
  eventDetail?: GetIDEEventDetailResponseBodyEventDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDetail: 'EventDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDetail: GetIDEEventDetailResponseBodyEventDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.eventDetail && typeof (this.eventDetail as any).validate === 'function') {
      (this.eventDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

