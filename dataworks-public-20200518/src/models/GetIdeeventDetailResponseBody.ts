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
   * The latest version of the file.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The unique identifier of the data source associated with the file.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The ID of the folder to which the file belongs. You can call the [GetFolder](https://help.aliyun.com/document_detail/173952.html) operation to query file details by folder ID.
   * 
   * @example
   * aldurie78l2falure
   */
  folderId?: string;
  /**
   * @remarks
   * The owner of the file.
   * 
   * @example
   * 7384234****
   */
  owner?: string;
  /**
   * @remarks
   * The node ID of the loop node or traversal node to which the file belongs.
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
   * The output name of the upstream file on which the file depends.
   * 
   * This parameter corresponds to the "Output Name of Upstream Node" in the "Schedule Configuration > Scheduling Dependencies > Depends On Upstream Nodes" setting of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project_root
   */
  input?: string;
  /**
   * @remarks
   * The method used to configure file dependencies. Valid values:
   * - MANUAL: manual configuration.
   * - AUTO: automatic parsing.
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
   * The output name of the file.
   * 
   * This parameter corresponds to the "Output Name" in the "Schedule Configuration > Scheduling Dependencies > Output Name of Current Node" setting of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project.002_out
   */
  output?: string;
  /**
   * @remarks
   * The output table name of the file.
   * 
   * This parameter corresponds to the "Output Table Name" in the "Schedule Configuration > Scheduling Dependencies > Output Name of Current Node" setting of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The interval between automatic reruns, in milliseconds.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The number of automatic reruns.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The scheduling cron expression.
   * 
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of the scheduling cycle. Valid values: NOT_DAY (minute or hour) and DAY (day, week, or month).
   * 
   * This parameter corresponds to the "Schedule Configuration > Time Properties > Scheduling Cycle" setting of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The IDs of the nodes on which the current file depends when the DependentType parameter settings are set to USER_DEFINE. Separate multiple node IDs with commas (,).
   * 
   * This parameter corresponds to the "Settings > Scheduling Dependencies > Cross-epoch Dependencies (Previous Epoch)" setting of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console), when the dependency is set to "Other Nodes".
   * 
   * @example
   * 5,10,15,20
   */
  dependentNodeIdList?: string;
  /**
   * @remarks
   * The method of depending on the previous cycle. Valid values:
   * - SELF: the dependency is set to the current node.
   * - CHILD: the dependency is set to first-level child nodes.
   * - USER_DEFINE: the dependency is set to other nodes.
   * - NONE: no dependency is selected, meaning the node does not depend on the previous cycle.
   * 
   * @example
   * USER_DEFINE
   */
  dependentType?: string;
  /**
   * @remarks
   * The upstream file outputs on which the file depends.
   */
  inputList?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList[];
  /**
   * @remarks
   * The outputs of the file.
   * 
   * This parameter corresponds to the "Schedule Configuration > Scheduling Dependencies > Output Name of Current Node" setting of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   */
  outputList?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList[];
  /**
   * @remarks
   * The scheduling parameters.
   * 
   * This parameter corresponds to the "Schedule Configuration > Parameters" setting of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information, see [Scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @remarks
   * The rerun property. Valid values:
   * - ALL_ALLOWED: The node can be rerun regardless of whether it runs successfully or fails.
   * - FAILURE_ALLOWED: The node can be rerun only after it fails.
   * - ALL_DENIED: The node cannot be rerun regardless of whether it runs successfully or fails.
   * 
   * This parameter corresponds to the "Schedule Configuration > Time Properties > Rerun Properties" setting of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * The resource group used when the task is executed after the file is deployed. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to obtain the list of available resource groups for the workspace.
   * 
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - NORMAL: normal scheduling task.
   * - MANUAL: manual task that is not scheduled on a regular basis. This corresponds to nodes in a manual workflow.
   * - PAUSE: paused task.
   * - SKIP: dry-run task that is scheduled on a regular basis but is directly set to successful when scheduling starts.
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
   * The change type of this file version. Valid values: CREATE, UPDATE, and DELETE.
   * 
   * @example
   * UPDATE
   */
  changeType?: string;
  /**
   * @remarks
   * The description of this file version.
   * 
   * @example
   * Second version submission
   */
  comment?: string;
  /**
   * @remarks
   * The Alibaba Cloud user ID that generated this file version.
   * 
   * @example
   * 7384234****
   */
  committor?: string;
  /**
   * @remarks
   * The file code that generated this file version.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The ID of the file.
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
   * The additional properties of the file.
   */
  filePropertyContent?: GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent;
  /**
   * @remarks
   * The file type. Different file types have different code. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * The scheduling configuration of the file.
   */
  nodeConfiguration?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration;
  /**
   * @remarks
   * The ID of the scheduling node.
   * 
   * @example
   * 421429
   */
  nodeId?: number;
  /**
   * @remarks
   * The functional module to which the file belongs. Valid values:
   * - NORMAL: DataStudio.
   * - MANUAL: manual task.
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
   * The file code that generated this file version.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The latest version of the file.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The unique identifier of the data source associated with the file.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The ID of the file.
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
   * The file type. Different file types have different code. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * The ID of the folder to which the file belongs. You can call the [GetFolder](https://help.aliyun.com/document_detail/173952.html) operation to query file details by folder ID.
   * 
   * @example
   * aldurie78l2falure
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the scheduling node.
   * 
   * @example
   * 421429
   */
  nodeId?: number;
  /**
   * @remarks
   * The owner of the file.
   * 
   * @example
   * 7384234****
   */
  owner?: string;
  /**
   * @remarks
   * The node ID of the loop node or traversal node to which the file belongs.
   * 
   * @example
   * 1234122
   */
  parentFileId?: number;
  /**
   * @remarks
   * The functional module to which the file belongs. Valid values:
   * - NORMAL: DataStudio.
   * - MANUAL: manual task.
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
   * The file code that generated this file version.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The unique identifier of the data source associated with the file.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * 1234123
   */
  fileId?: number;
  /**
   * @remarks
   * The file type. Different file types have different code. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
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
   * The type of the column.
   * 
   * @example
   * BIGINT
   */
  columnType?: string;
  /**
   * @remarks
   * The comment of the column.
   * 
   * @example
   * ID
   */
  comment?: string;
  /**
   * @remarks
   * Indicates whether the column is a partition column. Valid values:
   * - true: The column is a partition column.
   * - false: The column is not a partition column.
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
   * The list of columns.
   */
  columns?: GetIDEEventDetailResponseBodyEventDetailTableModelColumns[];
  /**
   * @remarks
   * The comment of the table.
   * 
   * @example
   * A new table
   */
  comment?: string;
  /**
   * @remarks
   * The unique identifier of the data source to which the table belongs.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The environment to which the table belongs. Valid values:
   * - DEV: development environment.
   * - PROD: production environment.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The lifecycle of the table. Unit: days.
   * 
   * @example
   * 7
   */
  lifeCycle?: number;
  /**
   * @remarks
   * The location information of the external table.
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
   * The snapshot when a file is committed or deployed.
   * 
   * This field is valid only when the Message type is IDE_FILE_SUBMIT_BEFORE or IDE_FILE_DEPLOY_BEFORE.
   */
  committedFile?: GetIDEEventDetailResponseBodyEventDetailCommittedFile;
  /**
   * @remarks
   * The snapshot information when a file is deleted. This field is valid only when the Message type is IDE_FILE_DELETE_BEFORE.
   */
  deletedFile?: GetIDEEventDetailResponseBodyEventDetailDeletedFile;
  /**
   * @remarks
   * The snapshot when file code is executed. This field is valid only when the Message type is IDE_FILE_EXECUTE_BEFORE.
   */
  fileExecutionCommand?: GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand;
  /**
   * @remarks
   * The snapshot when a table is committed or deployed. This field is valid only when the Message type is IDE_TABLE_SUBMIT_BEFORE or IDE_TABLE_DEPLOY_BEFORE.
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
   * The data snapshot at the time the extension point event was triggered.
   * 
   * Different types of message events have different valid fields in the data snapshot. For details, refer to the field descriptions of each message event.
   */
  eventDetail?: GetIDEEventDetailResponseBodyEventDetail;
  /**
   * @remarks
   * The unique ID of the request, which can be used for troubleshooting.
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

