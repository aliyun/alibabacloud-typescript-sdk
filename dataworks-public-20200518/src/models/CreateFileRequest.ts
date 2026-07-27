// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced settings of the node.
   * 
   * This parameter corresponds to the **Advanced Settings** in the right-side navigation pane of the editing page for EMR Spark Streaming and EMR Streaming SQL DataStudio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * - true: The file automatically parses code.
   * - false: The file does not automatically parse code.
   * 
   * This parameter corresponds to the **Code Parsing** setting when **Same Cycle** is selected under **Scheduling Configuration > Scheduling Dependency** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * The interval between automatic reruns upon an error, in milliseconds. The maximum value is 1800000 milliseconds (30 minutes).
   * 
   * This parameter corresponds to the **Rerun Interval** setting under **Scheduling Configuration > Time Properties > Auto Rerun upon Error** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * The **Rerun Interval** in the console is in minutes. Make sure to convert the time unit when calling this operation.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The number of automatic reruns allowed upon an error. The maximum value is 10.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The data source that the node connects to when the file is published as a node and executed.
   * You can call the [UpdateDataSource](https://help.aliyun.com/document_detail/211432.html) operation to obtain the list of available data sources for the workspace.
   * 
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @remarks
   * The code content of the file. Different code types (fileType) have different code formats. You can find the corresponding type of node in Operation Center, right-click the node, and then click View Code to view the specific code format.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to automatically create the folder if the specified folder path (FileFolderPath) does not exist in the system. Valid values:
   * 
   * - true: The folder is automatically created if it does not exist.
   * - false: The invocation fails if the folder does not exist.
   * 
   * @example
   * false
   */
  createFolderIfNotExists?: boolean;
  /**
   * @remarks
   * The cron expression for periodic scheduling. This parameter corresponds to the **cron Expression** setting under **Scheduling Configuration > Time Property > cron Expression** of a DataStudio node in the [DataWorks console](https://workbench.data.aliyun.com/console). After you configure the **Scheduling Cycle** and **Timed Scheduling Time**, DataWorks automatically generates the corresponding cron expression.
   * 
   * Examples:
   * - Timed scheduling at 05:30 every day: `00 30 05 * * ?`
   * 
   * - Timed scheduling at the 15th minute of every hour: `00 15 00-23/1 * * ?`
   * 
   * - Schedule every 10 minutes: `00 00/10 * * * ?`
   * 
   * - Schedule every 10 minutes from 08:00 to 17:00 every day: `00 00-59/10 8-17 * * * ?`
   * 
   * - Timed scheduling at 00:20 on the 1st of every month: `00 20 00 1 * ?`
   * 
   * - Schedule every 3 months starting from 00:10 on January 1: `00 10 00 1 1-12/3 ?`
   * 
   * - Timed scheduling at 00:05 every Tuesday and Friday: `00 05 00 * * 2,5`
   * 
   * Due to the rules of the DataWorks scheduling system, the cron expression has the following limits:
   * 
   * - The minimum scheduling interval is 5 minutes.
   * 
   * - The earliest scheduling time each day is 00:05.
   * 
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of the scheduling cycle. Valid values: NOT_DAY (minute or hour) and DAY (day, week, or month).
   * 
   * This parameter corresponds to the **Scheduling Cycle** setting under **Scheduling Configuration > Time Properties** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The list of nodes that the current node depends on from the previous cycle.
   * 
   * @example
   * abc
   */
  dependentNodeIdList?: string;
  /**
   * @remarks
   * The mode of cross-cycle dependency. Valid values:
   * - SELF: The dependency is set to the current node.
   * - CHILD: The dependency is set to first-level child nodes.
   * - USER_DEFINE: The dependency is set to other nodes.
   * - NONE: No dependency is selected, which means the node does not depend on the previous cycle.   
   * - USER_DEFINE_AND_SELF: The dependency is set to a combination of the current node and other nodes across cycles.
   * - CHILD_AND_SELF: The dependency is set to a combination of first-level child nodes and the current node across cycles.
   * 
   * @example
   * NONE
   */
  dependentType?: string;
  /**
   * @remarks
   * The timestamp in milliseconds when automatic scheduling stops.
   * 
   * This parameter corresponds to the end time (in milliseconds) of the **Effective Date** setting under **Scheduling Configuration > Time Properties** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * This is a file description.
   */
  fileDescription?: string;
  /**
   * @remarks
   * The path of the file.
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
   * Different file types have different codes. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * You can call the [ListFileType](https://help.aliyun.com/document_detail/212428.html) operation to query the code types of files.
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
   * - true: Inherit the dry-run property from the previous cycle.
   * 
   * - false: Do not inherit the dry-run property from the previous cycle.
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
   * The output names of the upstream files that the file depends on. Separate multiple output names with commas (,).
   * 
   * This parameter corresponds to the **Parent Node Output Name** setting when **Same Cycle** is selected under **Scheduling Configuration > Scheduling Dependency** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * project_root,project.file1,project.001_out
   */
  inputList?: string;
  /**
   * @remarks
   * The context input parameters of the node. The parameter value is in JSON format. For the fields included, see the InputContextParameterList parameter structure in the response of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the **Input Parameters of This Node** setting under **Scheduling Configuration > Node Context** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"ValueSource": "project_001.first_node:bizdate_param","ParameterName": "bizdate_input"}]
   */
  inputParameters?: string;
  outputList?: string;
  /**
   * @remarks
   * The context output parameters of the node. The parameter value is in JSON format. For the fields included, see the OutputContextParameterList parameter structure in the response of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the **Output Parameters of This Node** setting under **Scheduling Configuration > Node Context** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"Type": 1,"Value": "${bizdate}","ParameterName": "bizdate_param"}]
   */
  outputParameters?: string;
  /**
   * @remarks
   * The Alibaba Cloud user ID of the file owner. If this parameter is left empty, the Alibaba Cloud user ID of the caller is used by default.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The scheduling parameters. Separate multiple parameters with spaces. 
   * 
   * This parameter corresponds to the **Parameters** setting under **Scheduling Configuration** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information, see [Scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Settings page to obtain the workspace ID.
   * 
   * You must specify either this parameter or ProjectIdentifier to determine the DataWorks workspace for this API call.
   * 
   * @example
   * 10000
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
   * This parameter corresponds to the **Rerun Property** setting under **Scheduling Configuration > Time Properties > Rerun Property** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * This parameter is deprecated. Do not use it.
   * 
   * The schedule resource used when the file is published as a node and executed. This parameter corresponds to the **Scheduling Configuration > Resource Properties > Scheduling Resource Group** setting on the page. You can specify either this parameter or ResourceGroupIdentifier.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to obtain the list of available resource groups for the workspace. Set ResourceGroupType to 1 and use the ID field from the response.
   * 
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The schedule resource used when the file is published as a node and executed. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation and use the **identifier** field to obtain the list of available resource groups for the workspace.
   * 
   * 
   * > Make sure that the resource group returned by the ListResourceGroups operation is bound to the workspace used to create the file. The resource group can be used in CreateFile only after it is bound.
   * 
   * @example
   * group_375827434852437
   */
  resourceGroupIdentifier?: string;
  /**
   * @remarks
   * The type of scheduling. Valid values:
   * - NORMAL: The node is a normal scheduled node.
   * - MANUAL: The node is a manual node that is not included in daily scheduling. This corresponds to nodes under manual workflows.
   * - PAUSE: The node is a paused node.
   * - SKIP: The node is a dry-run node that is included in daily scheduling but is immediately set to successful when triggered.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @remarks
   * The timestamp in milliseconds when automatic scheduling starts.
   * 
   * This parameter corresponds to the start time (in milliseconds) of the **Effective Date** setting under **Scheduling Configuration > Time Properties** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 1671608450000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Specifies whether to start the node immediately after it is published.
   * 
   * This parameter corresponds to the **Start Mode** setting under **Configuration > Time Properties** in the right-side navigation pane of the editing page for EMR Spark Streaming and EMR Streaming SQL DataStudio tasks in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  startImmediately?: boolean;
  /**
   * @remarks
   * Specifies whether to suspend scheduling. Valid values:
   * - true: Suspend scheduling.
   * - false: Do not suspend scheduling.
   * 
   * This parameter corresponds to setting the **Scheduling Type** to **Suspend Scheduling** under **Scheduling Configuration > Time Properties** of a DataStudio task in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @remarks
   * The timeout period defined in the scheduling configuration.
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

