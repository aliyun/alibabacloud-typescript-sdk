// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced configurations of the node.
   * 
   * This parameter is valid only for an EMR Spark Streaming node or an EMR Streaming SQL node. This parameter corresponds to the Advanced Settings tab of the node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * This parameter is configured in the JSON format.
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
   * Specifies whether the automatic parsing feature is enabled for the file. Valid values:
   * 
   * *   true: The automatic parsing feature is enabled for the file.
   * *   false: The automatic parsing feature is not enabled for the file.
   * 
   * This parameter corresponds to the Analyze Code parameter that is displayed after Same Cycle is selected in the Dependencies section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @remarks
   * The interval between two consecutive automatic reruns after an error occurs. Unit: milliseconds. Maximum value: 1800000 (30 minutes).
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
   * The number of automatic reruns that are allowed after an error occurs.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The name of the connected data source that is used to run the node. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to query the available data sources of the workspace.
   * 
   * @example
   * odps_first
   */
  connectionName?: string;
  /**
   * @remarks
   * The code of the file. The code format varies based on the file type. To view the code format for a specific file type, go to Operation Center, right-click a node of the file type, and then select View Code.
   * 
   * @example
   * SELECT "1";
   */
  content?: string;
  /**
   * @remarks
   * The CRON expression that represents the periodic scheduling policy of the node. This parameter corresponds to the Cron Expression parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console). After you configure the Scheduling Cycle and Run At parameters in the DataWorks console, DataWorks automatically generates a value for the Cron Expression parameter.
   * 
   * Examples:
   * 
   * *   CRON expression for a node that is scheduled to run at 05:30 every day: `00 30 05 * * ?`
   * *   CRON expression for a node that is scheduled to run at the fifteenth minute of each hour: `00 15 * * * ?`
   * *   CRON expression for a node that is scheduled to run every 10 minutes: `00 00/10 * * * ?`
   * *   CRON expression for a node that is scheduled to run every 10 minutes from 08:00 to 17:00 every day: `00 00-59/10 8-23 * * * ?`
   * *   CRON expression for a node that is scheduled to run at 00:20 on the first day of each month: `00 20 00 1 * ?`
   * *   CRON expression for a node that is scheduled to run every three months starting from 00:10 on January 1: `00 10 00 1 1-12/3 ?`
   * *   CRON expression for a node that is scheduled to run at 00:05 every Tuesday and Friday: `00 05 00 * * 2,5`
   * 
   * The scheduling system of DataWorks imposes the following limits on CRON expressions:
   * 
   * *   A node can be scheduled to run at a minimum interval of 5 minutes.
   * *   A node can be scheduled to run at 00:05 every day at the earliest.
   * 
   * @example
   * 00 00-59/5 1-23 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of the scheduling cycle of the node that corresponds to the file. Valid values: NOT_DAY and DAY. The value NOT_DAY indicates that the node is scheduled to run by minute or hour. The value DAY indicates that the node is scheduled to run by day, week, or month.
   * 
   * This parameter corresponds to the Scheduling Cycle parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * NOT_DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The ID of the node on which the node corresponding to the file depends when the DependentType parameter is set to USER_DEFINE. Multiple IDs are separated by commas (,).
   * 
   * The value of this parameter corresponds to the ID of the node that you specified after you select Previous Cycle and set Depend On to Other Nodes in the Dependencies section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The end time of automatic scheduling. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter corresponds to the end time specified for the Validity Period parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The ID of the file. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000001
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the file. You can set the FileName parameter to a new value to change the file name.
   * 
   * You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the ID of the file whose name you want to change. Then, you can set the FileId parameter to the ID and set the FileName parameter to a new value when you call the [UpdateFile](https://help.aliyun.com/document_detail/173951.html) operation.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * Specifies whether to skip the dry-run property of the ancestor nodes of the node. This parameter corresponds to the Skip the dry-run property of the ancestor node parameter that is displayed after you configure the Depend On parameter in the Dependencies section of the Properties tab in the DataWorks console.
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
   * The output name of the parent file on which the current file depends. If you specify multiple output names, separate them with commas (,).
   * 
   * This parameter corresponds to the Parent Nodes parameter that is displayed after you select Same Cycle in the Dependencies section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * >  You must configure this parameter when you call the CreateDISyncTask or UpdateFile operation to create a batch synchronization task.
   * 
   * @example
   * project_root,project.file1,project.001_out
   */
  inputList?: string;
  /**
   * @remarks
   * The input parameters of the node. This parameter is configured in the JSON format. For more information about the input parameters, refer to the InputContextParameterList parameter in the Response parameters section of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the Input Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"ValueSource": "project_001.first_node:bizdate_param","ParameterName": "bizdate_input"}]
   */
  inputParameters?: string;
  /**
   * @remarks
   * The output name of the current file.
   * 
   * This parameter corresponds to the Output Name parameter in the Dependencies section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project.ods_user_info_d
   */
  outputList?: string;
  /**
   * @remarks
   * The output parameters of the node. This parameter is configured in the JSON format. For more information about the output parameters, refer to the OutputContextParameterList parameter in the Response parameters section of the [GetFile](https://help.aliyun.com/document_detail/173954.html) operation.
   * 
   * This parameter corresponds to the Output Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * [{"Type": 1,"Value": "${bizdate}","ParameterName": "bizdate_param"}]
   */
  outputParameters?: string;
  /**
   * @remarks
   * The ID of the file owner.
   * 
   * @example
   * 18023848927592
   */
  owner?: string;
  /**
   * @remarks
   * The scheduling parameters of the node.
   * 
   * This parameter corresponds to the Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information, see [Configure scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * x=a y=b z=c
   */
  paraValue?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
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
   * This parameter corresponds to the Rerun parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The identifier of the resource group that is used to run the node. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the available resource groups in the workspace.
   * 
   * @example
   * default_group
   */
  resourceGroupIdentifier?: string;
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
  /**
   * @remarks
   * The start time of automatic scheduling. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter corresponds to the Validity Period parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 936923400000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Specifies whether to immediately run a node after the node is deployed to the production environment. Valid values:
   * 
   * *   true: A node is immediately run after the node is deployed to the production environment.
   * *   false: A node is not immediately run after the node is deployed to the production environment.
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
   * *   true: suspends the scheduling of the node.
   * *   false: does not suspend the scheduling of the node.
   * 
   * This parameter corresponds to the Recurrence parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
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

