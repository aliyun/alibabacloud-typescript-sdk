// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced settings of the node.
   * 
   * This parameter corresponds to the Advanced Settings in the right-side navigation pane on the editing page for EMR Spark Streaming and EMR Streaming SQL data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * Currently, only EMR Spark Streaming and EMR Streaming SQL nodes support this parameter. The parameter value is in JSON format.
   * 
   * @example
   * {"queue":"default","SPARK_CONF":"--conf spark.driver.memory=2g"}
   */
  advancedSettings?: string;
  /**
   * @remarks
   * Specifies whether the scheduling configuration takes effect immediately after publishing.
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
   * This parameter corresponds to the Code Parsing setting when you select Same Cycle under Scheduling Configuration > Scheduling Dependency for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * The interval between automatic reruns upon an error, in milliseconds. The maximum value is 1800000 milliseconds (30 minutes).
   * 
   * This parameter corresponds to the Rerun Interval setting under Scheduling Configuration > Time Properties > Auto Rerun upon Error for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * The time unit for Rerun Interval in the console is minutes. Convert the time accordingly when calling this operation.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The number of automatic reruns after an error occurs.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The identifier of the data source used when the node corresponding to the file runs. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to obtain the list of available data sources.
   * 
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @remarks
   * The code content of the file. Files of different code types (fileType) have different code formats. In Operation Center, right-click a node of the corresponding type and select View Code to view the specific code format.
   * 
   * @example
   * SELECT "1";
   */
  content?: string;
  /**
   * @remarks
   * The cron expression for timed scheduling. This parameter corresponds to the cron Expression setting under Scheduling Configuration > Time Property for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console). After you configure the Scheduling Epoch and Timed Scheduling time, DataWorks automatically generates the corresponding cron expression.
   * 
   * Examples:
   * 
   * - Timed scheduling at 05:30 every day: `00 30 05 * * ?`.
   * 
   * - Timed scheduling at the 15th minute of every hour: `00 15 * * * ?`.
   * 
   * - Schedule every 10 minutes: `00 00/10 * * * ?`.
   * 
   * - Schedule every 10 minutes from 08:00 to 17:00 every day: `00 00-59/10 8-23 * * * ?`.
   * 
   * - Timed scheduling at 00:20 on the 1st of every month: `00 20 00 1 * ?`.
   * 
   * - Schedule every 3 months starting from 00:10 on January 1: `00 10 00 1 1-12/3 ?`.
   * 
   * - Timed scheduling at 00:05 every Tuesday and Friday: `00 05 00 * * 2,5`.
   * 
   * 
   * The cron expression has the following limits due to the DataWorks scheduling system rules:
   * 
   * - The minimum scheduling interval is 5 minutes.
   * 
   * - The earliest scheduling time each day is 00:05.
   * 
   * @example
   * 00 00-59/5 1-23 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of the scheduling cycle. Valid values: NOT_DAY (minute or hour) and DAY (day, week, or month).
   * 
   * This parameter corresponds to the Scheduling Cycle setting under Scheduling Configuration > Time Properties for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * NOT_DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The IDs of the nodes on which the current file depends when DependentType is set to USER_DEFINE. Separate multiple node IDs with commas (,).
   * 
   * This parameter corresponds to the Settings when you select Other Nodes as the dependency after configuring Scheduling Configuration > Scheduling Dependency to Previous Epoch for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console). This is part of the parameter settings for scheduling dependencies.
   * 
   * @example
   * 5,10,15,20
   */
  dependentNodeIdList?: string;
  /**
   * @remarks
   * The mode in which the node depends on the previous cycle. Valid values:
   * - SELF: The dependency is set to the current node.
   * - CHILD: The dependency is set to first-level child nodes.
   * - USER_DEFINE: The dependency is set to other nodes.
   * - NONE: No dependency is selected. The node does not depend on the previous cycle.
   * 
   * @example
   * USER_DEFINE
   */
  dependentType?: string;
  /**
   * @remarks
   * The timestamp in milliseconds when automatic scheduling stops.
   * 
   * This parameter corresponds to the end time in milliseconds under Scheduling Configuration > Time Properties > Effective Date for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The path of the file.
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
   * The name of the file. You can modify the file name by setting FileName to a new value.
   * For example, call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the file ID in the target folder, and then call the [UpdateFile](https://help.aliyun.com/document_detail/173951.html) operation to specify the file ID for the FileId parameter and configure the FileName parameter to rename the file.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * Specifies whether to skip the dry-run property of the upstream node under Scheduling Configuration > Previous Cycle.
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
   * The output names of the upstream files on which the current file depends. Separate multiple output names with commas (,).
   * 
   * This parameter corresponds to the Parent Node Output Name setting when you select Same Cycle under Scheduling Configuration > Scheduling Dependency for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * > This parameter is required when you create a batch synchronization node by calling CreateDISyncTask and UpdateFile.
   * 
   * @example
   * project_root,project.file1,project.001_out
   */
  inputList?: string;
  /**
   * @remarks
   * The input context parameters of the node. The parameter value is in JSON format. For the fields included, refer to the InputContextParameterList parameter structure in the response of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the Input Parameters of Current Node setting under Scheduling Configuration > Node Context for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"ValueSource": "project_001.first_node:bizdate_param","ParameterName": "bizdate_input"}]
   */
  inputParameters?: string;
  /**
   * @remarks
   * The output of the file.
   * 
   * This parameter corresponds to the Output Name of Current Node setting when you select Same Cycle under Scheduling Configuration > Scheduling Dependency for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project.ods_user_info_d
   */
  outputList?: string;
  /**
   * @remarks
   * The output context parameters of the node. The parameter value is in JSON format. For the fields included, refer to the OutputContextParameterList parameter structure in the response of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the Output Parameters of Current Node setting under Scheduling Configuration > Node Context for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * This parameter corresponds to the Parameters setting under Scheduling Configuration for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information, see [Scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * x=a y=b z=c
   */
  paraValue?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can logon to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Storage Management page to obtain the ID.
   * 
   * @example
   * 100001
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Settings page to obtain the workspace name.
   * 
   * You must specify either this parameter or ProjectId to determine the DataWorks workspace for this API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The rerun property. Valid values:
   * - ALL_ALLOWED: The node can be rerun regardless of whether it runs successfully or fails.
   * - FAILURE_ALLOWED: The node can be rerun only after it fails.
   * - ALL_DENIED: The node cannot be rerun regardless of whether it runs successfully or fails.
   * 
   * This parameter corresponds to the Rerun Property setting under Scheduling Configuration > Time Properties > Rerun Property for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * The schedule resource used when the file is published as a node and the node runs. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to obtain the list of available resource groups for the workspace.
   * 
   * @example
   * default_group
   */
  resourceGroupIdentifier?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - NORMAL: A normal scheduling node.
   * - MANUAL: A manual node that is not scheduled on a daily basis. This corresponds to nodes in a manual workflow.
   * - PAUSE: A paused node.
   * - SKIP: A dry-run node that is scheduled on a daily basis but is directly set to successful when scheduling starts.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @remarks
   * The timestamp in milliseconds when automatic scheduling starts.
   * 
   * This parameter corresponds to the start time in milliseconds under Scheduling Configuration > Time Properties > Effective Date for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 936923400000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Specifies whether to start the node immediately after publishing. Valid values:
   * - true: Starts immediately after publishing.
   * - false: Does not start after publishing.
   * 
   * This parameter corresponds to the Start Mode setting under Configuration > Time Properties in the right-side navigation pane on the editing page for EMR Spark Streaming and EMR Streaming SQL data development nodes in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * This parameter corresponds to the setting when Scheduling Type is set to Pause Scheduling under Scheduling Configuration > Time Properties > Scheduling Type for a data development node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @remarks
   * The timeout setting for the scheduling configuration.
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

