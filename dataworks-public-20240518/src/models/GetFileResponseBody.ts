// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataFile extends $dara.Model {
  /**
   * @remarks
   * Advanced configuration of the job.
   * 
   * This parameter corresponds to "Advanced Settings" in the right-side navigation bar on the editing page of an EMR Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * > Currently, EMR Shell jobs do not support advanced parameters.
   * 
   * For details about advanced parameters for different EMR job types, see [EMR Job Development](https://help.aliyun.com/document_detail/473077.html).
   * 
   * @example
   * {\\"priority\\":\\"1\\",\\"ENABLE_SPARKSQL_JDBC\\":false,\\"FLOW_SKIP_SQL_ANALYZE\\":false,\\"queue\\":\\"default\\"}
   */
  advancedSettings?: string;
  /**
   * @remarks
   * Indicates whether automatic parsing is enabled for the file. Valid values:
   * 
   * - true: The code in the file is automatically parsed.
   * 
   * - false: The code in the file is not automatically parsed.
   * 
   * This parameter corresponds to the "Code Parsing" option in the DataWorks console (https\\://workbench.data.aliyun.com/console) when you select "Same Cycle" under Schedule Configuration > Schedule Dependency for a Data Development job.
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * The ID of the Business Process to which the file belongs. This field is deprecated. Use the BusinessId field instead.
   * 
   * @example
   * 1000001
   */
  bizId?: number;
  /**
   * @remarks
   * The Business Process ID of the file.
   * 
   * @example
   * 1000001
   */
  businessId?: number;
  /**
   * @remarks
   * The current commit status of the file. Valid values:
   * 
   * - 0: The latest code has not been submitted.
   * 
   * - 1: The latest code has been submitted.
   * 
   * @example
   * 0
   */
  commitStatus?: number;
  /**
   * @remarks
   * The name of the data source used when executing the job corresponding to the file.
   * 
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @remarks
   * The code of the file.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * UNIX timestamp when the file was created, in milliseconds.
   * 
   * @example
   * 1593879116000
   */
  createTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud User ID of the file creator.
   * 
   * @example
   * 424732****
   */
  createUser?: string;
  /**
   * @remarks
   * Version number of the latest submitted version of the file.
   * 
   * @example
   * 3
   */
  currentVersion?: number;
  /**
   * @remarks
   * The deletion status of the file. Valid values:
   * 
   * - NORMAL: Not deleted.
   * 
   * - RECYCLE_BIN: In the recycle bin.
   * 
   * - DELETED: Deleted.
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
   * The ID of the file.
   * 
   * @example
   * 100000001
   */
  fileId?: number;
  /**
   * @remarks
   * Name of the file.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * The code type of the file. Different file types use different code. For more information, see [DataWorks Edge Zone Collection](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * Indicates whether the resource file needs to be uploaded to MaxCompute.
   * Configure this parameter only when the file is a MaxCompute resource file.
   * 
   * @example
   * true
   */
  isMaxCompute?: boolean;
  /**
   * @remarks
   * The UNIX timestamp of the most recent edit to the file, in milliseconds.
   * 
   * @example
   * 1593879116000
   */
  lastEditTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud User ID of the user who last edited the file.
   * 
   * @example
   * 424732****
   */
  lastEditUser?: string;
  /**
   * @remarks
   * The ID of the scheduling task generated in the CDN mapping system after the file is submitted.
   * 
   * @example
   * 300001
   */
  nodeId?: number;
  /**
   * @remarks
   * Alibaba Cloud User ID of the file owner.
   * 
   * @example
   * 7775674356****
   */
  owner?: string;
  /**
   * @remarks
   * If the current file is an internal file of a composite edge zone file, this field identifies the ID of the corresponding composite edge zone file.
   * 
   * @example
   * -1
   */
  parentId?: number;
  /**
   * @remarks
   * The function module to which the file belongs. Valid values:
   * 
   * - NORMAL: Data Development.
   * 
   * - MANUAL: One-time task.
   * 
   * - MANUAL_BIZ: Manually triggered workflow.
   * 
   * - SKIP: Dry-run scheduling in Data Development.
   * 
   * - ADHOCQUERY: Ad-hoc query.
   * 
   * - COMPONENT: Widget Management.
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

export class GetFileResponseBodyDataNodeConfigurationInputList extends $dara.Model {
  /**
   * @remarks
   * The output name of the upstream file on which this file depends.
   * 
   * This parameter corresponds to "Parent Node Output Name" when "Same Cycle" is selected under "Schedule Configuration > Schedule Dependency" for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * project.001_out
   */
  input?: string;
  /**
   * @remarks
   * The method for configuring file dependencies. Valid values:
   * 
   * - MANUAL: Manually configured.
   * 
   * - AUTO: Automatically parsed.
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

export class GetFileResponseBodyDataNodeConfigurationInputParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the input parameter in the node context. You can reference this parameter in code by using the ${...} syntax.
   * 
   * This parameter corresponds to the "Parameter Name" field under "Schedule Configuration > Node Context > Input Parameters of This Node" in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * input
   */
  parameterName?: string;
  /**
   * @remarks
   * The value source of the input parameter in the node context.
   * 
   * This parameter corresponds to the "Value Source" field under "Schedule Configuration > Node Context > Input Parameters of This Node" in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * project_001.parent_node:outputs
   */
  valueSource?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      valueSource: 'ValueSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      valueSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyDataNodeConfigurationOutputList extends $dara.Model {
  /**
   * @remarks
   * Output name of the file.
   * 
   * This parameter corresponds to the value in the "Output Name" column when "Same Cycle" is selected under "Scan Configuration > Schedule Dependency" for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project.002_out
   */
  output?: string;
  /**
   * @remarks
   * Output value of the file.
   * 
   * This parameter corresponds to the value in the "Output Table" column when "Same Cycle" is selected under "Scan Configuration > Schedule Dependency" for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
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

export class GetFileResponseBodyDataNodeConfigurationOutputParameters extends $dara.Model {
  /**
   * @remarks
   * The description of the output parameter in the edge zone context.
   * 
   * @example
   * It\\"s a context output parameter.
   */
  description?: string;
  /**
   * @remarks
   * The parameter name of the output parameter in the node context.
   * 
   * This parameter corresponds to the "Parameter Name" field under "Schedule Configuration > Node Context > Output Parameters of This Node" for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * output
   */
  parameterName?: string;
  /**
   * @remarks
   * The type of the expression for the edge zone context output parameter. Valid values are as follows:
   * 
   * - 1: constant
   * 
   * - 2: variable
   * 
   * - 3: pass-through variable from a parameter node
   * 
   * This parameter corresponds to the "Type" field in the "Scan Configuration > Edge Zone Context > Output Parameters of This Node" section for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 1
   */
  type?: string;
  /**
   * @remarks
   * The expression of the output parameter in the edge zone context.
   * 
   * This parameter corresponds to the "Value" field in the "Scan Configuration > Edge Zone Context > Output Parameters of This Node" section for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ${bizdate}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      parameterName: 'ParameterName',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      parameterName: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyDataNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * Whether to apply the schedule configuration immediately after publishing.
   * 
   * @example
   * true
   */
  applyScheduleImmediately?: string;
  /**
   * @remarks
   * The time interval between automatic reruns after an error, in milliseconds.
   * 
   * This parameter corresponds to the "Rerun Interval" setting under "Schedule Configuration > Time Properties > Auto Rerun on Error" for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).<br>
   * Note that the time unit for "Rerun Interval" in the console is minutes; convert the time accordingly when invoking the API.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The number of automatic reruns after an error.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The Cron Expression for timed scheduling of the file.
   * 
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of recurrence, including NOT_DAY (minute, hour) and DAY (day, week, month).
   * 
   * This parameter corresponds to "Schedule Configuration > Time Properties > Recurrence" for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * When the DependentType parameter is set to USER_DEFINE, this parameter specifies the IDs of the nodes on which the current file depends. Separate multiple node IDs with commas (,).
   * 
   * This parameter corresponds to the configuration when, in the [DataWorks console](https://workbench.data.aliyun.com/console), the "Schedule Configuration > Schedule Dependency" of a Data Development job is set to "Previous Cycle" and the dependency option is set to "Other Nodes".
   * 
   * @example
   * 5,10,15,20
   */
  dependentNodeIdList?: string;
  /**
   * @remarks
   * The method of depending on the previous cycle. Valid values:
   * 
   * - SELF: The dependency is the current node itself.
   * 
   * - CHILD: The dependency is direct child nodes.
   * 
   * - USER_DEFINE: The dependency is other specified nodes.
   * 
   * - NONE: No dependency is selected, meaning the node does not depend on the previous cycle.
   * 
   * @example
   * USER_DEFINE
   */
  dependentType?: string;
  /**
   * @remarks
   * The UNIX timestamp, in milliseconds, when automatic scheduling stops.
   * 
   * This parameter corresponds to the millisecond UNIX timestamp of the end time configured in the "Scan Configuration > Time Properties > Effective Date" setting for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 4155787800000
   */
  endEffectDate?: number;
  /**
   * @remarks
   * Schedule Configuration > Previous Cycle > Whether to ignore the upstream dry-run property.
   * 
   * @example
   * true
   */
  ignoreParentSkipRunningProperty?: string;
  /**
   * @remarks
   * Custom image ID
   * 
   * @example
   * m-bp1h4b5a8ogkbll2f3tr
   */
  imageId?: string;
  /**
   * @remarks
   * Information about outputs from upstream files on which this file depends.
   */
  inputList?: GetFileResponseBodyDataNodeConfigurationInputList[];
  /**
   * @remarks
   * Return Result.
   */
  inputParameters?: GetFileResponseBodyDataNodeConfigurationInputParameters[];
  /**
   * @remarks
   * Output information of the file.
   */
  outputList?: GetFileResponseBodyDataNodeConfigurationOutputList[];
  /**
   * @remarks
   * Return Result.
   */
  outputParameters?: GetFileResponseBodyDataNodeConfigurationOutputParameters[];
  /**
   * @remarks
   * Schedule parameter.
   * 
   * This parameter corresponds to the "Scan Configuration > Parameters" setting for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console). You can refer to the [Schedule Parameters](https://help.aliyun.com/document_detail/137548.html) documentation for configuration details.
   * 
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @remarks
   * Rerun property. Valid values:
   * 
   * - ALL_ALLOWED: The job can be rerun regardless of whether it previously Succeeded or failed.
   * 
   * - FAILURE_ALLOWED: The job cannot be rerun if it previously Succeeded, but can be rerun if it previously failed.
   * 
   * - ALL_DENIED: The job cannot be rerun regardless of whether it previously Succeeded or failed.
   * 
   * This parameter corresponds to the "Scan Configuration > Time Properties > Rerun Property" setting for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * The resource group used when the file is published as a Job and executed. You can call [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) to obtain the list of available resource groups in the workspace.
   * 
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The schedule type. Valid values:
   * 
   * - NORMAL: Normal scheduling task.
   * 
   * - MANUAL: One-time task, which is not included in regular scheduling and corresponds to a node in a manually triggered workflow.
   * 
   * - PAUSE: Paused task.
   * 
   * - SKIP: Dry-run task, which is included in regular scheduling but is immediately marked as Succeeded when scheduled.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @remarks
   * The UNIX timestamp (in milliseconds) indicating when automatic scheduling starts.
   * 
   * This parameter corresponds to the start time (as a UNIX timestamp in milliseconds) configured under "Schedule Configuration > Time Properties > Effective Date" for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 936923400000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Indicates whether to start immediately after publishing.
   * 
   * This parameter corresponds to the "Start Method" setting under "Configuration > Time Properties" in the right-side navigation bar on the editing page for EMR Spark Streaming and EMR Streaming SQL Data Development jobs in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  startImmediately?: boolean;
  /**
   * @remarks
   * Indicates whether to skip execution. Valid values:
   * 
   * - true: Skip execution.
   * 
   * - false: Do not skip execution.
   * 
   * This parameter corresponds to the setting "Schedule Type" under "Schedule Configuration > Time Properties" for a Data Development job in the [DataWorks console](https://workbench.data.aliyun.com/console), when it is set to "skip execution".
   * 
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @remarks
   * Timeout definition for scheduling configuration.
   * 
   * @example
   * 1
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      applyScheduleImmediately: 'ApplyScheduleImmediately',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      endEffectDate: 'EndEffectDate',
      ignoreParentSkipRunningProperty: 'IgnoreParentSkipRunningProperty',
      imageId: 'ImageId',
      inputList: 'InputList',
      inputParameters: 'InputParameters',
      outputList: 'OutputList',
      outputParameters: 'OutputParameters',
      paraValue: 'ParaValue',
      rerunMode: 'RerunMode',
      resourceGroupId: 'ResourceGroupId',
      schedulerType: 'SchedulerType',
      startEffectDate: 'StartEffectDate',
      startImmediately: 'StartImmediately',
      stop: 'Stop',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyScheduleImmediately: 'string',
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      endEffectDate: 'number',
      ignoreParentSkipRunningProperty: 'string',
      imageId: 'string',
      inputList: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationInputList },
      inputParameters: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationInputParameters },
      outputList: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationOutputList },
      outputParameters: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationOutputParameters },
      paraValue: 'string',
      rerunMode: 'string',
      resourceGroupId: 'number',
      schedulerType: 'string',
      startEffectDate: 'number',
      startImmediately: 'boolean',
      stop: 'boolean',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inputList)) {
      $dara.Model.validateArray(this.inputList);
    }
    if(Array.isArray(this.inputParameters)) {
      $dara.Model.validateArray(this.inputParameters);
    }
    if(Array.isArray(this.outputList)) {
      $dara.Model.validateArray(this.outputList);
    }
    if(Array.isArray(this.outputParameters)) {
      $dara.Model.validateArray(this.outputParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyDataResourceDownloadLink extends $dara.Model {
  /**
   * @remarks
   * Link for downloading the resource.
   * 
   * @example
   * http://xx
   */
  downloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'downloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Basic information about the file.
   */
  file?: GetFileResponseBodyDataFile;
  /**
   * @remarks
   * The schedule configuration of the file.
   */
  nodeConfiguration?: GetFileResponseBodyDataNodeConfiguration;
  /**
   * @remarks
   * Resource download link.
   */
  resourceDownloadLink?: GetFileResponseBodyDataResourceDownloadLink;
  static names(): { [key: string]: string } {
    return {
      file: 'File',
      nodeConfiguration: 'NodeConfiguration',
      resourceDownloadLink: 'ResourceDownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: GetFileResponseBodyDataFile,
      nodeConfiguration: GetFileResponseBodyDataNodeConfiguration,
      resourceDownloadLink: GetFileResponseBodyDataResourceDownloadLink,
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    if(this.nodeConfiguration && typeof (this.nodeConfiguration as any).validate === 'function') {
      (this.nodeConfiguration as any).validate();
    }
    if(this.resourceDownloadLink && typeof (this.resourceDownloadLink as any).validate === 'function') {
      (this.resourceDownloadLink as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the file.
   */
  data?: GetFileResponseBodyData;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Request ID. Used for troubleshooting when a fault occurs.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the invocation succeeded. Valid values:
   * 
   * - true: The invocation succeeded.
   * 
   * - false: Failed to invoke.
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
      data: GetFileResponseBodyData,
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

