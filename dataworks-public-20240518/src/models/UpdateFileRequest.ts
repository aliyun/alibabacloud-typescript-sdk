// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced settings of the task.
   * 
   * This parameter corresponds to the Advanced Settings section in the right-side navigation pane of the edit page for EMR Spark Streaming and EMR Streaming SQL data development tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * Specifies whether to enable the automatic parsing feature for the file. Valid values:
   * - true: The file automatically parses code.
   * - false: The file does not automatically parse code.
   * 
   * This parameter corresponds to the Code Parsing parameter in the Schedule > Scheduling Dependencies section of the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * The interval between automatic reruns after a failure, in milliseconds. The maximum value is 1800000, which indicates 30 minutes.
   * 
   * This parameter corresponds to the Rerun Interval parameter in the Schedule > Time Attributes > Auto Rerun upon Failure section of the [DataWorks console](https://workbench.data.aliyun.com/console). The unit of the Rerun Interval parameter in the console is minutes. Convert the time unit when you call this operation.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The number of automatic reruns allowed after an error occurs.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The identifier of the data source used when the task corresponding to the file is executed. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to obtain the list of available data sources.
   * 
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @remarks
   * The code content of the file. The code format varies based on the file type. You can go to Operation Center, right-click a task of the corresponding type, and select View Code to view the specific code format.
   * 
   * @example
   * SELECT "1";
   */
  content?: string;
  /**
   * @remarks
   * The cron expression for periodic scheduling. This parameter corresponds to the cron expression in the Schedule > Time Property section for the data development task in the [DataWorks console](https://workbench.data.aliyun.com/console). After you configure the scheduling cycle and timed scheduling time, DataWorks automatically generates the corresponding cron expression.
   * 
   * Examples:
   * 
   * - Schedule a task at 05:30 every day: `00 30 05 * * ?`.
   * 
   * - Schedule a task at the 15th minute of every hour: `00 15 * * * ?`.
   * 
   * - Schedule a task every 10 minutes: `00 00/10 * * * ?`.
   * 
   * - Schedule a task every 10 minutes from 08:00 to 17:00 every day: `00 00-59/10 8-23 * * * ?`.
   * 
   * - Schedule a task at 00:20 on the first day of every month: `00 20 00 1 * ?`.
   * 
   * - Schedule a task every three months starting from 00:10 on January 1: `00 10 00 1 1-12/3 ?`.
   * 
   * - Schedule a task at 00:05 every Tuesday and Friday: `00 05 00 * * 2,5`.
   * 
   * Due to the rules of the DataWorks scheduling system, cron expressions have the following limits:
   * 
   * - The minimum scheduling interval is 5 minutes.
   * 
   * - The earliest scheduling time of a day is 00:05.
   * 
   * @example
   * 00 00-59/5 1-23 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of the scheduling cycle. Valid values: NOT_DAY (minutes and hours) and DAY (days, weeks, and months).
   * 
   * This parameter corresponds to the Schedule Type parameter in the Schedule > Time Attributes section of the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * NOT_DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The IDs of the nodes on which the current file depends when the parameter settings of DependentType are set to USER_DEFINE. Separate multiple node IDs with commas (,).
   * 
   * This parameter corresponds to the content configured when you set the Dependency parameter to Cross-cycle Dependency (Previous Cycle) and select Other Nodes in the Schedule > Scheduling Dependencies section for the data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 5,10,15,20
   */
  dependentNodeIdList?: string;
  /**
   * @remarks
   * The dependency on the previous cycle. Valid values:
   * 
   * - SELF: The current node.
   * - CHILD: The child nodes at the first level.
   * - USER_DEFINE: Other nodes.
   * - NONE: No dependency on the previous cycle.
   * 
   * @example
   * USER_DEFINE
   */
  dependentType?: string;
  /**
   * @remarks
   * The end time of automatic scheduling, in the form of a millisecond timestamp.
   * 
   * This parameter corresponds to the end time in the Schedule > Time Attributes > Effective Date section of the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 4155787800000
   */
  endEffectDate?: number;
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * Here is the file description
   */
  fileDescription?: string;
  /**
   * @remarks
   * The path where the file is stored.
   * 
   * @example
   * Business_process/First_Business_Process/data_integration/Folder_1/Folder_2
   */
  fileFolderPath?: string;
  /**
   * @remarks
   * The ID of the file. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to obtain the file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000001
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the file. You can change the file name by resetting the value of FileName. For example, you can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the ID of a file in the destination directory, call the [UpdateFile](https://help.aliyun.com/document_detail/173951.html) operation, specify the queried file ID in the FileId parameter, and configure the FileName parameter to change the name of the file.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter corresponds to the Skip Dry Run of Upstream Nodes parameter that is configured when you set the Dependency parameter to Cross-cycle Dependency (Previous Cycle) and select Current Node or Child Nodes at First Level in the Schedule > Scheduling Dependencies section of the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  ignoreParentSkipRunningProperty?: boolean;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * m-uf6d7npxk1hhek8ng0cb
   */
  imageId?: string;
  /**
   * @remarks
   * The output names of the upstream files on which the current file depends. Separate multiple output names with commas (,).
   * 
   * This parameter corresponds to the Output Name of Upstream Node parameter in the Schedule > Scheduling Dependencies section of the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * > This parameter is required when you create a offline synchronization task by calling the CreateDISyncTask or UpdateFile operation.
   * 
   * @example
   * project_root,project.file1,project.001_out
   */
  inputList?: string;
  /**
   * @remarks
   * The context input parameters of the node. The parameter value is in JSON format. For the included fields, refer to the InputContextParameterList parameter structure in the response of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the Input Parameters of Current Node parameter in the Schedule > Node Context Parameters section of the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"ValueSource": "project_001.first_node:bizdate_param","ParameterName": "bizdate_input"}]
   */
  inputParameters?: string;
  /**
   * @remarks
   * The output of the file.
   * 
   * This parameter corresponds to the Output Name of Current Node parameter in the Schedule > Scheduling Dependencies section of the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project.ods_user_info_d
   */
  outputList?: string;
  /**
   * @remarks
   * The context output parameters of the node. The parameter value is in JSON format. For the included fields, refer to the OutputContextParameterList parameter structure in the response of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the Output Parameters of Current Node parameter in the Schedule > Node Context Parameters section of the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"Type": 1,"Value": "${bizdate}","ParameterName": "bizdate_param"}]
   */
  outputParameters?: string;
  /**
   * @remarks
   * The user ID of the file owner.
   * 
   * @example
   * 18023848927592
   */
  owner?: string;
  /**
   * @remarks
   * The scheduling parameters.
   * 
   * This parameter corresponds to the Scheduling Parameters section in the Schedule section of the [DataWorks console](https://workbench.data.aliyun.com/console). For more information, see [Scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * x=a y=b z=c
   */
  paraValue?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can logon to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the ID.
   * 
   * @example
   * 100001
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Settings page to obtain the workspace name.
   * 
   * You must specify either this parameter or the ProjectId parameter to determine the DataWorks workspace for this API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The rerun mode. Valid values:
   * 
   * - ALL_ALLOWED: The task can be rerun regardless of whether it is successfully run or fails to run.
   * - FAILURE_ALLOWED: The task can be rerun only after it fails to run.
   * - ALL_DENIED: The task cannot be rerun regardless of whether it is successfully run or fails to run.
   * 
   * This parameter corresponds to the Rerun Mode parameter in the Schedule > Time Attributes section of the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * The resource group used when the task is executed after the file is published as a task. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to obtain the list of available resource groups in the workspace.
   * 
   * @example
   * default_group
   */
  resourceGroupIdentifier?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * 
   * - NORMAL: Normal scheduling task.
   * - MANUAL: Manual task. It is not scheduled on a daily basis and corresponds to a node in a manual workflow.
   * - PAUSE: Paused task.
   * - SKIP: Dry-run task. It is scheduled on a daily basis, but its status is directly set to successful when the scheduling is triggered.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @remarks
   * The start time of automatic scheduling, in the form of a millisecond timestamp.
   * 
   * This parameter corresponds to the start time in the Schedule > Time Attributes > Effective Date section of the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 936923400000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Specifies whether to start the task immediately after it is published. Valid values:
   * 
   * - true: Start the task immediately after it is published.
   * - false: Do not start the task immediately after it is published.
   * 
   * This parameter corresponds to the Startup Method parameter in the Configuration > Time Attributes section in the right-side navigation pane of the edit page for EMR Spark Streaming and EMR Streaming SQL data development tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  startImmediately?: boolean;
  /**
   * @remarks
   * Specifies whether to pause scheduling. Valid values:
   * 
   * - true: Pause scheduling.
   * - false: Do not pause scheduling.
   * 
   * This parameter corresponds to the Pause Scheduling option in the Schedule > Time Attributes > Schedule Type section of the [DataWorks console](https://workbench.data.aliyun.com/console).
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
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      endEffectDate: 'EndEffectDate',
      fileDescription: 'FileDescription',
      fileFolderPath: 'FileFolderPath',
      fileId: 'FileId',
      fileName: 'FileName',
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
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      endEffectDate: 'number',
      fileDescription: 'string',
      fileFolderPath: 'string',
      fileId: 'number',
      fileName: 'string',
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

