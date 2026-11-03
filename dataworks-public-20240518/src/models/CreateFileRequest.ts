// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced settings of the task.
   * 
   * This parameter corresponds to the **Advanced Settings** in the right-side navigation pane of the edit page for EMR Spark Streaming and EMR Streaming SQL Data Studio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * Currently, only EMR Spark Streaming and EMR Streaming SQL tasks support this parameter, and the parameter value must be in JSON format.
   * 
   * @example
   * {"queue":"default","SPARK_CONF":"--conf spark.driver.memory=2g"}
   */
  advancedSettings?: string;
  /**
   * @remarks
   * Specifies whether the scheduling configuration takes effect immediately after the file is published.
   * 
   * @example
   * true
   */
  applyScheduleImmediately?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic parsing for the file. Valid values:
   * - true: Automatically parses the code in the file.
   * - false: Does not automatically parse the code in the file.
   * 
   * This parameter corresponds to the code parsing setting in **Schedule Settings > Scheduling Dependencies** for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * The interval between automatic reruns after a failure, in milliseconds.
   * Maximum value: 1800000 (30 minutes).
   * 
   * This parameter corresponds to the **Rerun Interval** setting in **Schedule Settings > Time Attributes > Automatic Rerun after Failure** for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * The time unit for **Rerun Interval** in the console is minutes. Convert the time accordingly when you call this operation.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The maximum number of automatic reruns after an error occurs.
   * Maximum value: 10.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The data source connected when the task is run after the file is published as a task.
   * 
   * You can call the [UpdateDataSource](https://help.aliyun.com/document_detail/211432.html) operation to obtain the list of available data sources in the workspace.
   * 
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @remarks
   * The code content of the file. The code format varies based on the code type (fileType) of the file.
   * You can find a task of the corresponding type in Operation Center, right-click the task, and select View Code to view the specific code format.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to automatically create the directory specified by the FileFolderPath parameter if the directory does not exist. Valid values:
   * 
   * - true: Automatically creates the directory if it does not exist.
   * - false: The call fails if the directory does not exist.
   * 
   * @example
   * false
   */
  createFolderIfNotExists?: boolean;
  /**
   * @remarks
   * The cron expression for periodic scheduling. This parameter corresponds to the **Schedule Settings > Time Property > Cron Expression** setting for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console). After you configure the **Scheduling Cycle** and **timed scheduling time**, DataWorks automatically generates the corresponding cron expression.
   * 
   * Examples:
   * - timed scheduling at 05:30 every day: `00 30 05 * * ?`
   * 
   * - timed scheduling at the 15th minute of every hour: `00 15 00-23/1 * * ?`
   * 
   * - Schedule the task every 10 minutes: `00 00/10 * * * ?`
   * 
   * - Schedule the task every 10 minutes from 08:00 to 17:00 every day: `00 00-59/10 8-17 * * * ?`
   * 
   * - Automatically schedule the task at 00:20 on the 1st day of every month: `00 20 00 1 * ?`
   * 
   * - Schedule the task every 3 months starting from 00:10 on January 1: `00 10 00 1 1-12/3 ?`
   * 
   * - Automatically schedule the task at 00:05 every Tuesday and Friday: `00 05 00 * * 2,5`
   * 
   * Due to the rules of the DataWorks scheduling system, cron expressions have the following limits:
   * 
   * - The minimum scheduling interval is 5 minutes.
   * 
   * - The earliest scheduling time every day is 00:05.
   * 
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of the scheduling cycle. Valid values: NOT_DAY (minutes and hours) and DAY (days, weeks, and months).
   * 
   * This parameter corresponds to the **Schedule Settings > Time Attributes > Schedule Cycle** setting for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The IDs of the nodes on which the current file depends when the DependentType parameter settings are USER_DEFINE. Separate multiple node IDs with commas (,).
   * 
   * This parameter corresponds to the Settings when you set **Schedule Settings > Scheduling Dependencies** to **Cross-cycle Dependencies (formerly Previous Cycle)** and select **Other Nodes** for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * abc
   */
  dependentNodeIdList?: string;
  /**
   * @remarks
   * The dependency on the previous cycle. Valid values:
   * 
   * - SELF: Depends on the current node.
   * - CHILD: Depends on the first-level child nodes.
   * - USER_DEFINE: Depends on other nodes.
   * - NONE: Does not depend on the previous cycle.   
   * - USER_DEFINE_AND_SELF: Depends on a combination of the current node and other nodes across cycles.
   * - CHILD_AND_SELF: Depends on a combination of the first-level child nodes and the current node across cycles.
   * 
   * @example
   * NONE
   */
  dependentType?: string;
  /**
   * @remarks
   * The timestamp in milliseconds when automatic scheduling stops.
   * 
   * This parameter corresponds to the end time in milliseconds configured in **Schedule Settings > Time Attributes > Effective Date** for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * File name
   */
  fileName?: string;
  /**
   * @remarks
   * The code type of the file.
   * Different file types have different code formats. For more information, see [DataWorks node types](https://help.aliyun.com/document_detail/600169.html).
   * You can call the [ListFileType](https://help.aliyun.com/document_detail/212428.html) operation to query the code type of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * Specifies whether to inherit the dry-run property from the previous cycle. Valid values:
   * 
   * - true: Inherits the dry-run property from the previous cycle.
   * 
   * - false: Does not inherit the dry-run property from the previous cycle.
   * 
   * @example
   * false
   */
  ignoreParentSkipRunningProperty?: boolean;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * m-bp1h4b5a8ogkbll2f3tr
   */
  imageId?: string;
  /**
   * @remarks
   * The output names of the upstream files on which the current file depends. Separate multiple output names with commas (,).
   * 
   * This parameter corresponds to the **Output Name of Upstream Node** setting in **Schedule Settings > Scheduling Dependencies** for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * project_root,project.file1,project.001_out
   */
  inputList?: string;
  /**
   * @remarks
   * The context input parameters of the node. The parameter value is in JSON format. For the included fields, refer to the structure of the InputContextParameterList parameter in the response of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the **Schedule Settings > Node Context Parameters > Input Parameters of Current Node** setting for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"ValueSource": "project_001.first_node:bizdate_param","ParameterName": "bizdate_input"}]
   */
  inputParameters?: string;
  /**
   * @remarks
   * The output of the file.
   * 
   * This parameter corresponds to the **Output Name of Current Node** setting in **Schedule Settings > Scheduling Dependencies** for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project.ods_user_info_d
   */
  outputList?: string;
  /**
   * @remarks
   * The context output parameters of the node. The parameter value is in JSON format. For the included fields, refer to the structure of the OutputContextParameterList parameter in the response of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the **Schedule Settings > Node Context Parameters > Output Parameters of Current Node** setting for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"Type": 1,"Value": "${bizdate}","ParameterName": "bizdate_param"}]
   */
  outputParameters?: string;
  /**
   * @remarks
   * The Alibaba Cloud user ID of the file owner. If this parameter is left empty,
   * the Alibaba Cloud user ID of the caller is used by default.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The scheduling parameters. Separate multiple parameters with spaces.
   * 
   * This parameter corresponds to the **Schedule Settings > Scheduling Parameters** setting for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information, see [Scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the workspace ID.
   * You must specify either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace for this API call.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the workspace name.
   * 
   * You must specify either this parameter or the ProjectId parameter to determine the DataWorks workspace for this API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The rerun policy. Valid values:
   * - ALL_ALLOWED: The task can be rerun after it succeeds or fails.
   * - FAILURE_ALLOWED: The task cannot be rerun after it succeeds, but can be rerun after it fails.
   * - ALL_DENIED: The task cannot be rerun regardless of whether it succeeds or fails.
   * 
   * This parameter corresponds to the **Rerun Policy** setting in **Schedule Settings > Time Attributes > Rerun Policy** for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * **[Deprecated]** Do not use this field.
   * 
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The resource group used to run the task after the file is published as a task. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console),
   * go to the Workspace Management page, and click **Resource Groups** in the left-side navigation pane to obtain the ID of the resource group bound to the current workspace.
   * 
   * @example
   * S_res_group_559_1613715566828
   */
  resourceGroupIdentifier?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * 
   * - NORMAL: Normal scheduling task.
   * - MANUAL: Manual task. It is not run on a daily schedule and corresponds to a node in a manual business flow.
   * - PAUSE: Paused task.
   * - SKIP: Dry-run task. It is run on a daily schedule, but its status is directly set to successful when the scheduling is triggered.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @remarks
   * The timestamp in milliseconds when automatic scheduling starts.
   * 
   * This parameter corresponds to the start time in milliseconds configured in **Schedule Settings > Time Attributes > Effective Date** for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 1671608450000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Specifies whether to start the task immediately after it is published.
   * 
   * This parameter corresponds to the **Configuration > Time Attributes > Start Mode** setting in the right-side navigation pane of the edit page for EMR Spark Streaming and EMR Streaming SQL Data Studio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  startImmediately?: boolean;
  /**
   * @remarks
   * Specifies whether to pause scheduling. Valid values:
   * - true: Pauses scheduling.
   * - false: Does not pause scheduling.
   * 
   * This parameter corresponds to setting **Schedule Settings > Time Attributes > Schedule Type** to **Pause Scheduling** for a Data Studio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @remarks
   * The timeout definition in the scheduling configuration.
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
      outputList: 'OutputList',
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
      outputList: 'string',
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

