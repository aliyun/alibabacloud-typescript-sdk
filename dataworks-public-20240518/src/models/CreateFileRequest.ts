// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced settings of the node.
   * 
   * This parameter corresponds to the Advanced Settings section in the right-side navigation pane on the configuration tab of EMR Spark Streaming and EMR Streaming SQL nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * Only EMR Spark Streaming and EMR Streaming SQL nodes support this parameter. The value must be in the JSON format.
   * 
   * @example
   * {"queue":"default","SPARK_CONF":"--conf spark.driver.memory=2g"}
   */
  advancedSettings?: string;
  /**
   * @remarks
   * Specifies whether to apply the scheduling configuration immediately after the file is published.
   * 
   * @example
   * true
   */
  applyScheduleImmediately?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic parsing for the file. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter corresponds to the Analyze Code setting in Properties > Dependencies for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * The interval at which the node is automatically rerun after a failure. Unit: milliseconds. Maximum value: 1800000 milliseconds (30 minutes).
   * 
   * This parameter corresponds to the Rerun interval parameter in Properties > Schedule > Auto Rerun upon Failure for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console). In the console, the unit of the rerun interval is minutes. Convert the time unit when you call this operation.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The number of automatic reruns after an error occurs. Maximum value: 10.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The data source used when the task published from the file is run.
   * 
   * You can call the [UpdateDataSource](https://help.aliyun.com/document_detail/211432.html) operation to query the available data sources in the workspace.
   * 
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @remarks
   * The file code content. Different code types (fileType) have different code formats. In Operation Center, you can find a task of the corresponding type, right-click it, and select View Code to view the specific code format.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to automatically create the directory specified by FileFolderPath if the directory does not exist. Valid values:
   * 
   * *   true: If the directory does not exist, automatically create it.
   * *   false: If the directory does not exist, the call fails.
   * 
   * @example
   * false
   */
  createFolderIfNotExists?: boolean;
  /**
   * @remarks
   * The cron expression for scheduled execution. This parameter corresponds to the Cron Expression setting in Scheduling > Scheduling Time for Data Studio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console). After you configure Scheduling Cycle and Scheduled Time, DataWorks automatically generates a cron expression.
   * 
   * Examples:
   * 
   * *   Scheduled at 05:30 every day: `00 30 05 * * ?`
   * *   Scheduled at the 15th minute of every hour: `00 15 00-23/1 * * ?`
   * *   Scheduled every 10 minutes: `00 00/10 * * * ?`
   * *   Scheduled every 10 minutes between 08:00 and 17:00 every day: `00 00-59/10 8-17 * * * ?`
   * *   Scheduled at 00:20 on the 1st day of every month: `00 20 00 1 * ?`
   * *   Scheduled every 3 months starting from 00:10 on January 1: `00 10 00 1 1-12/3 ?`
   * *   Scheduled at 00:05 on every Tuesday and Friday: `00 05 00 * * 2,5`
   * 
   * Due to the rules of the DataWorks scheduling system, cron expressions have the following restrictions:
   * 
   * *   The minimum scheduling interval is 5 minutes.
   * *   The earliest scheduling time each day is 00:05.
   * 
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of scheduling cycle. Valid values: NOT_DAY (minute, hour) and DAY (day, week, month).
   * 
   * This parameter corresponds to the Scheduling Cycle setting in Scheduling > Scheduling Time for Data Studio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The IDs of the nodes on which the current node depends. This parameter takes effect only when the DependentType parameter is set to USER_DEFINE. Separate multiple node IDs with commas (,).
   * 
   * This parameter corresponds to the Other Nodes option in Properties > Dependencies > Cross-cycle Dependency (Original Previous-cycle Dependency) for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * abc
   */
  dependentNodeIdList?: string;
  /**
   * @remarks
   * The dependency mode on the previous cycle. Valid values:
   * 
   * *   SELF: Depends on the current node.
   * *   CHILD: Depends on the child nodes.
   * *   USER_DEFINE: Depends on other nodes.
   * *   NONE: No dependencies. Does not depend on the previous cycle.
   * *   USER_DEFINE_AND_SELF: Depends on both the current node and other nodes in the previous cycle.
   * *   CHILD_AND_SELF: Depends on both the current node and its child nodes in the previous cycle.
   * 
   * @example
   * NONE
   */
  dependentType?: string;
  /**
   * @remarks
   * The timestamp (in milliseconds) when automatic scheduling stops.
   * 
   * This parameter corresponds to the end time of Effective Period in Scheduling > Scheduling Time for Data Studio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 1671694850000
   */
  endEffectDate?: number;
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * test
   */
  fileDescription?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * Business_process/First_Business_Process/MaxCompute/Folder_1/Folder_2
   */
  fileFolderPath?: string;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * File name
   */
  fileName?: string;
  /**
   * @remarks
   * The code type of the file. Different file types have different code. For more information, see [DataWorks node types](https://help.aliyun.com/document_detail/600169.html). You can call the [ListFileType](https://help.aliyun.com/document_detail/212428.html) operation to query the code types of files.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * Specifies whether to inherit the dry-run status from the previous cycle. Valid values:
   * 
   * *   true: Inherit the dry-run status from the previous cycle.
   * *   false: Do not inherit the dry-run status from the previous cycle.
   * 
   * @example
   * false
   */
  ignoreParentSkipRunningProperty?: boolean;
  /**
   * @remarks
   * The custom image ID.
   * 
   * @example
   * m-bp1h4b5a8ogkbll2f3tr
   */
  imageId?: string;
  /**
   * @remarks
   * The output names of the ancestor nodes on which the current node depends. Separate multiple output names with commas (,).
   * 
   * This parameter corresponds to the Output Name of Ancestor Node setting in Properties > Dependencies for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * project_root,project.file1,project.001_out
   */
  inputList?: string;
  /**
   * @remarks
   * The input context parameters of the node. The value must be in the JSON format. For more information about the parameter structure, see the InputContextParameterList parameter in the response parameters of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the Input Parameters setting in Properties > Input and Output Parameters for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"ValueSource": "project_001.first_node:bizdate_param","ParameterName": "bizdate_input"}]
   */
  inputParameters?: string;
  /**
   * @remarks
   * The output context parameters of the node. The value must be in the JSON format. For more information about the parameter structure, see the OutputContextParameterList parameter in the response parameters of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the Output Parameters setting in Properties > Input and Output Parameters for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"Type": 1,"Value": "${bizdate}","ParameterName": "bizdate_param"}]
   */
  outputParameters?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the file owner. If this parameter is not specified, the Alibaba Cloud account ID of the caller is used by default.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The scheduling parameters of the node. Separate multiple parameters with spaces.
   * 
   * This parameter corresponds to the Scheduling Parameter setting in Properties for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information, see [Scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. To obtain the workspace ID, log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and navigate to the workspace configuration page. You must configure either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
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
   * The rerun policy. Valid values:
   * 
   * *   ALL_ALLOWED: Reruns are allowed regardless of whether the task succeeds or fails.
   * *   FAILURE_ALLOWED: Reruns are allowed only when the task fails.
   * *   ALL_DENIED: Reruns are not allowed regardless of whether the task succeeds or fails.
   * 
   * This parameter corresponds to the Support for Rerun setting in Scheduling > Scheduling Policies for Data Studio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The resource group for the task published from the file. To obtain the ID, log on to the [DataWorks console](https://workbench.data.aliyun.com/console), navigate to the workspace configuration page, and click Resource Groups in the left-side navigation pane to view the IDs of resource groups bound to the current workspace.
   * 
   * @example
   * S_res_group_559_1613715566828
   */
  resourceGroupIdentifier?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * 
   * *   NORMAL: Normal scheduled task.
   * *   MANUAL: Manually triggered node. Not scheduled for daily execution. Corresponds to nodes in manually triggered workflows.
   * *   PAUSE: Paused task.
   * *   SKIP: Dry-run task. Scheduled for daily execution but is directly marked as successful when scheduling starts.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @remarks
   * The timestamp (in milliseconds) when automatic scheduling starts.
   * 
   * This parameter corresponds to the start time of Effective Period in Scheduling > Scheduling Time for Data Studio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 1671608450000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Specifies whether to immediately run the node after the node is deployed.
   * 
   * This parameter corresponds to the Start Method setting in Settings > Schedule in the right-side navigation pane on the configuration tab of EMR Spark Streaming and EMR Streaming SQL nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  startImmediately?: boolean;
  /**
   * @remarks
   * Specifies whether to skip execution. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter corresponds to the Skip Execution option in Properties > Schedule > Recurrence for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @remarks
   * The timeout settings for scheduling configuration.
   * 
   * @example
   * 1
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      applyScheduleImmediately: 'ApplyScheduleImmediately',
      autoParsing: 'AutoParsing',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      connectionName: 'ConnectionName',
      content: 'Content',
      createFolderIfNotExists: 'CreateFolderIfNotExists',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      endEffectDate: 'EndEffectDate',
      fileDescription: 'FileDescription',
      fileFolderPath: 'FileFolderPath',
      fileName: 'FileName',
      fileType: 'FileType',
      ignoreParentSkipRunningProperty: 'IgnoreParentSkipRunningProperty',
      imageId: 'ImageId',
      inputList: 'InputList',
      inputParameters: 'InputParameters',
      outputParameters: 'OutputParameters',
      owner: 'Owner',
      paraValue: 'ParaValue',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      rerunMode: 'RerunMode',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
      schedulerType: 'SchedulerType',
      startEffectDate: 'StartEffectDate',
      startImmediately: 'StartImmediately',
      stop: 'Stop',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedSettings: 'string',
      applyScheduleImmediately: 'boolean',
      autoParsing: 'boolean',
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      connectionName: 'string',
      content: 'string',
      createFolderIfNotExists: 'boolean',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      endEffectDate: 'number',
      fileDescription: 'string',
      fileFolderPath: 'string',
      fileName: 'string',
      fileType: 'number',
      ignoreParentSkipRunningProperty: 'boolean',
      imageId: 'string',
      inputList: 'string',
      inputParameters: 'string',
      outputParameters: 'string',
      owner: 'string',
      paraValue: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      rerunMode: 'string',
      resourceGroupId: 'number',
      resourceGroupIdentifier: 'string',
      schedulerType: 'string',
      startEffectDate: 'number',
      startImmediately: 'boolean',
      stop: 'boolean',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

