// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced configurations of the node.
   * 
   * This parameter is valid only for an EMR Spark Streaming node or an EMR Streaming SQL node. This parameter corresponds to the Advanced Settings tab of the node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * The value of this parameter must be in the JSON format.
   * 
   * @example
   * {"queue":"default","SPARK_CONF":"--conf spark.driver.memory=2g"}
   */
  advancedSettings?: string;
  /**
   * @remarks
   * Specifies whether scheduling configurations immediately take effect after the node is deployed.
   * 
   * @example
   * true
   */
  applyScheduleImmediately?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the automatic parsing feature for the file. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter corresponds to the Analyze Code parameter that is displayed after Same Cycle is selected in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * The interval between automatic reruns after an error occurs. Unit: milliseconds. Maximum value: 1800000 (30 minutes).
   * 
   * This parameter corresponds to the Rerun Interval parameter that is displayed after the Auto Rerun upon Error check box is selected in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * The interval that you specify in the DataWorks console is measured in minutes. Pay attention to the conversion between the units of time when you call the operation.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The number of automatic reruns that are allowed after an error occurs. Maximum value: 10.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The name of the data source for which the node is run.
   * 
   * You can call the [UpdateDataSource](https://help.aliyun.com/document_detail/211432.html) operation to query the available data sources in the workspace.
   * 
   * @example
   * odps_first
   */
  connectionName?: string;
  /**
   * @remarks
   * The code for the file. The code format varies based on the file type. To view the code format for a specific file type, go to Operation Center, right-click a node of the file type, and then select View Code.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to automatically create the directory that is specified by the FileFolderPath parameter if the directory does not exist. Valid values:
   * 
   * *   true: The system automatically creates the directory if the directory does not exist.
   * *   false: The system does not automatically create the directory if the directory does not exist. In this case, the call fails.
   * 
   * @example
   * false
   */
  createFolderIfNotExists?: boolean;
  /**
   * @remarks
   * The CRON expression that represents the periodic scheduling policy of the node. This parameter corresponds to the Cron Expression parameter in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console). After you configure the Scheduling Cycle and Scheduled time parameters in the DataWorks console, DataWorks generates the value of the Cron Expression parameter.
   * 
   * Examples:
   * 
   * *   CRON expression for a node that is scheduled to run at 05:30 every day: `00 30 05 * * ?`
   * *   CRON expression for a node that is scheduled to run at the fifteenth minute of each hour: `00 15 00-23/1 * * ?`
   * *   CRON expression for a node that is scheduled to run every 10 minutes: `00 00/10 * * * ?`
   * *   CRON expression for a node that is scheduled to run every 10 minutes from 08:00 to 17:00 every day: `00 00-59/10 8-17 * * * ?`
   * *   CRON expression for a node that is scheduled to run at 00:20 on the first day of each month: `00 20 00 1 * ?`
   * *   CRON expression for a node that is scheduled to run every three months from 00:10 on January 1: `00 10 00 1 1-12/3 ?`
   * *   CRON expression for a node that is scheduled to run at 00:05 every Tuesday and Friday: `00 05 00 * * 2,5`
   * 
   * The scheduling system of DataWorks imposes the following limits on CRON expressions:
   * 
   * *   The minimum interval specified in a CRON expression to schedule a node is 5 minutes.
   * *   The earliest time specified in a CRON expression to schedule a node every day is 00:05.
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
   * The IDs of the nodes that generate instances in the previous cycle on which the current node depends.
   * 
   * @example
   * abc
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
   * *   USER_DEFINE_AND_SELF: The instance generated for the node in the current cycle depends on the instance generated for the node in the previous cycle and the instances generated for one or more specified nodes in the previous cycle.
   * *   CHILD_AND_SELF: The instance generated for the node in the current cycle depends on the instances generated for the descendant nodes at the nearest level of the node in the previous cycle and the instance generated for the node in the previous cycle.
   * 
   * @example
   * NONE
   */
  dependentType?: string;
  /**
   * @remarks
   * The end time of automatic scheduling. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter corresponds to the Validity Period parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * Here is the file description
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
   * The type of the code for the file. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * You can call the [ListFileType](https://help.aliyun.com/document_detail/212428.html) operation to query the type of the code for the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * Whether to use the last cycle empty run attribute. The values are as follows:
   * - true: The empty run attribute of the previous cycle is used.
   * - false: The empty run attribute of the previous cycle is not used.
   * 
   * @example
   * false
   */
  ignoreParentSkipRunningProperty?: boolean;
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
   * The output name of the parent file on which the current file depends. If you specify multiple output names, separate them with commas (,).
   * 
   * This parameter corresponds to the Output Name parameter under Parent Nodes in the Dependencies section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * project_root,project.file1,project.001_out
   */
  inputList?: string;
  /**
   * @remarks
   * The input parameters of the node. The value of this parameter must be in the JSON format. For more information about the input parameters, see the InputContextParameterList parameter in the Response parameters section of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the Input Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"ValueSource": "project_001.first_node:bizdate_param","ParameterName": "bizdate_input"}]
   */
  inputParameters?: string;
  /**
   * @remarks
   * The output parameters of the node. The value of this parameter must be in the JSON format. For more information about the output parameters, see the OutputContextParameterList parameter in the Response parameters section of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the Output Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"Type": 1,"Value": "${bizdate}","ParameterName": "bizdate_param"}]
   */
  outputParameters?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the file owner. If this parameter is not configured, the ID of the Alibaba Cloud account of the user who calls the operation is used.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The scheduling parameters of the node. Separate multiple parameters with spaces.
   * 
   * This parameter corresponds to the Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information about the configurations of the scheduling parameters, see [Configure scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the workspace ID.
   * 
   * You must configure this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the workspace name.
   * 
   * You must configure this parameter or the ProjectId parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * Specifies whether the node that corresponds to the file can be rerun. Valid values:
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
   * This parameter is deprecated. Do not use this parameter.
   * 
   * The identifier of the resource group that is used to run the node. This parameter corresponds to the Resource Group parameter in the Resource Group section of the Properties tab in the DataWorks console. You must configure one of the ResourceGroupId and ResourceGroupIdentifier parameters to determine the resource group that is used to run the node.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the available resource groups in the workspace. When you call the operation, set the ResourceGroupType parameter to 1. The response parameter Id indicates the ID of an available resource group.
   * 
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The identifier of the resource group that is used to run the node. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the available resource groups in the workspace. The **Identifier** parameter in the response of the operation indicates the identifier of an available resource group.
   * 
   * >  You must make sure that the available resource groups in the response of the ListResourceGroups operation are associated with the workspace for which you want to create a file by calling the CreateFile operation.
   * 
   * @example
   * group_375827434852437
   */
  resourceGroupIdentifier?: string;
  /**
   * @remarks
   * The scheduling type of the node. Valid values:
   * 
   * *   NORMAL: The node is an auto triggered node.
   * *   MANUAL: The node is a manually triggered node. Manually triggered nodes cannot be automatically triggered. They correspond to the nodes in the Manually Triggered Workflows pane.
   * *   PAUSE: The node is a paused node.
   * *   SKIP: The node is a dry-run node. Dry-run nodes are started as scheduled, but the system sets the status of the nodes to successful when it starts to run them
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @remarks
   * The start time of automatic scheduling. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * Configuring this parameter is equivalent to specifying a start time for the Validity Period parameter in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 1671608450000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Specifies whether to immediately run a node after the node is deployed.
   * 
   * This parameter is valid only for an EMR Spark Streaming node or an EMR Streaming SQL node. This parameter corresponds to the Start Method parameter in the Schedule section of the Configure tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  startImmediately?: boolean;
  /**
   * @remarks
   * Specifies whether to suspend the scheduling of the node. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter corresponds to the Recurrence parameter in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @remarks
   * The timeout period.
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

