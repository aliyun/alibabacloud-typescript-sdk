// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced settings for the task.
   * 
   * This parameter corresponds to the Advanced Settings in the right-side navigation pane on the editing page for EMR Spark Streaming and EMR Streaming SQL tasks in Data Studio in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * Currently, only EMR Spark Streaming and EMR Streaming SQL tasks support this parameter, and the parameter must be in JSON format.
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
   * The number of automatic reruns after the file execution fails.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The name of the data source that is used to run the node. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to query the available data sources.
   * 
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @remarks
   * The file code content. Different code types (fileType) have different code formats. In Operation Center, you can right-click a task of the corresponding type and select View Code to view the specific code format.
   * 
   * @example
   * SELECT "1";
   */
  content?: string;
  /**
   * @remarks
   * The cron expression for scheduled execution. This parameter corresponds to the Cron Expression setting in Scheduling > Scheduling Time for Data Studio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console). After you configure Scheduling Cycle and Scheduled Time, DataWorks automatically generates a cron expression.
   * 
   * Examples:
   * 
   * *   Scheduled at 05:30 every day: `00 30 05 * * ?`
   * *   Scheduled at the 15th minute of every hour: `00 15 * * * ?`
   * *   Scheduled every 10 minutes: `00 00/10 * * * ?`
   * *   Scheduled every 10 minutes between 08:00 and 23:00 every day: `00 00-59/10 8-23 * * * ?`
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
   * 00 00-59/5 1-23 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of scheduling cycle. Valid values: NOT_DAY (minute, hour) and DAY (day, week, month).
   * 
   * This parameter corresponds to the Scheduling Cycle setting in Scheduling > Scheduling Time for Data Studio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * NOT_DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The IDs of the nodes on which the current node depends. This parameter takes effect only when the DependentType parameter is set to USER_DEFINE. Separate multiple node IDs with commas (,).
   * 
   * This parameter corresponds to the Other Nodes option in Properties > Dependencies > Cross-cycle Dependency (Original Previous-cycle Dependency) for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 5,10,15,20
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
   * 
   * @example
   * USER_DEFINE
   */
  dependentType?: string;
  /**
   * @remarks
   * The timestamp (in milliseconds) when automatic scheduling stops.
   * 
   * This parameter corresponds to the end time of Effective Period in Scheduling > Scheduling Time for Data Studio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 4155787800000
   */
  endEffectDate?: number;
  /**
   * @remarks
   * The file description.
   * 
   * @example
   * Here is the file description
   */
  fileDescription?: string;
  /**
   * @remarks
   * The path to the folder where the file is located.
   * 
   * @example
   * Business_process/First_Business_Process/data_integration/Folder_1/Folder_2
   */
  fileFolderPath?: string;
  /**
   * @remarks
   * The file ID. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to obtain the file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000001
   */
  fileId?: number;
  /**
   * @remarks
   * The file name. You can modify the file name by setting a new value for FileName. For example, you can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the file ID in the target directory, and then call the [UpdateFile](https://help.aliyun.com/document_detail/173951.html) operation with the file ID specified in the FileId parameter and a new value specified in the FileName parameter to modify the file name.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter corresponds to the Skip The Dry-Run Property Of The Ancestor Node option in Properties > Dependencies > Cross-cycle Dependency (Original Previous-cycle Dependency) when Instances of Current Node or Level-1 Child Node is selected for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  ignoreParentSkipRunningProperty?: boolean;
  /**
   * @remarks
   * The custom image ID.
   * 
   * @example
   * m-uf6d7npxk1hhek8ng0cb
   */
  imageId?: string;
  /**
   * @remarks
   * The output names of the ancestor nodes on which the current node depends. Separate multiple output names with commas (,).
   * 
   * This parameter corresponds to the Output Name of Ancestor Node setting in Properties > Dependencies for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * > This parameter is required when you call the CreateDISyncTask or UpdateFile operation to create a batch synchronization node.
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
   * The outputs of the node.
   * 
   * This parameter corresponds to the Output Name setting in Properties > Dependencies for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project.ods_user_info_d
   */
  outputList?: string;
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
   * The file owner ID.
   * 
   * @example
   * 18023848927592
   */
  owner?: string;
  /**
   * @remarks
   * The scheduling parameters of the node.
   * 
   * This parameter corresponds to the Scheduling Parameter setting in Properties for data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information, see [Scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * x=a y=b z=c
   */
  paraValue?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. To obtain the ID, log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and navigate to the workspace management page.
   * 
   * @example
   * 100001
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
   * Valid values:
   * 
   * *   ALL_ALLOWD
   * *   FAILURE_ALLOWED
   * *   ALL_DENIED
   * *   ALL_ALLOWED
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * The resource group for the task published from the file. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the available resource groups in the workspace.
   * 
   * @example
   * default_group
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
   * 936923400000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Specifies whether to start the task immediately after it is published. Valid values:
   * 
   * *   true: Start the task immediately after it is published.
   * *   false: Do not start the task immediately after it is published.
   * 
   * This parameter corresponds to the Start Method setting in Configuration > Scheduling Policies in the right-side navigation pane on the editing page for EMR Spark Streaming and EMR Streaming SQL tasks in Data Studio in the [DataWorks console](https://workbench.data.aliyun.com/console).
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

