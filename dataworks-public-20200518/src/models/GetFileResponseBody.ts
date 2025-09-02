// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataFile extends $dara.Model {
  /**
   * @remarks
   * The advanced configurations of the node.
   * 
   * This parameter is valid for an EMR node. This parameter corresponds to the Advanced Settings tab in the right-side navigation pane on the configuration tab of the node in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * >  You cannot configure advanced parameters for EMR Shell nodes.
   * 
   * For information about the advanced parameters of each type of EMR node, see [Develop EMR tasks](https://help.aliyun.com/document_detail/473077.html).
   * 
   * @example
   * {"queue":"default","SPARK_CONF":"--conf spark.driver.memory=2g"}
   */
  advancedSettings?: string;
  /**
   * @remarks
   * Indicates whether the automatic parsing feature is enabled for the file. Valid values:
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
   * The ID of the workflow to which the file belongs. This parameter is deprecated and replaced by the BusinessId parameter.
   * 
   * @example
   * 1000001
   */
  bizId?: number;
  /**
   * @remarks
   * The ID of the workflow to which the file belongs.
   * 
   * @example
   * 1000001
   */
  businessId?: number;
  /**
   * @remarks
   * Indicates whether the latest code in the file is committed. Valid values: 0 and 1. The value 0 indicates that the latest code in the file is not committed. The value 1 indicates that the latest code in the file is committed.
   * 
   * @example
   * 0
   */
  commitStatus?: number;
  /**
   * @remarks
   * The ID of the compute engine instance that is used to run the node that corresponds to the file.
   * 
   * @example
   * odps_first
   */
  connectionName?: string;
  /**
   * @remarks
   * The code in the file.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The time when the file was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593879116000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used to create the file.
   * 
   * @example
   * 424732****
   */
  createUser?: string;
  /**
   * @remarks
   * The latest version number of the file.
   * 
   * @example
   * 3
   */
  currentVersion?: number;
  /**
   * @remarks
   * The status of the file. Valid values:
   * 
   * *   NORMAL: The file is not deleted.
   * *   RECYCLE_BIN: The file is stored in the recycle bin.
   * *   DELETED: The file is deleted.
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
   * The name of the file.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the code for the file. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * Indicates whether the file needs to be uploaded to MaxCompute.
   * 
   * This parameter is returned only if the file is a MaxCompute resource file.
   * 
   * @example
   * true
   */
  isMaxCompute?: boolean;
  /**
   * @remarks
   * The time when the file was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593879116000
   */
  lastEditTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used to last modify the file.
   * 
   * @example
   * 62465892****
   */
  lastEditUser?: string;
  /**
   * @remarks
   * The ID of the auto triggered node that is generated in the scheduling system after the file is committed.
   * 
   * @example
   * 300001
   */
  nodeId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the file owner.
   * 
   * @example
   * 7775674356****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the node group file to which the current file belongs. This parameter is returned only if the current file is an inner file of the node group file.
   * 
   * @example
   * -1
   */
  parentId?: number;
  /**
   * @remarks
   * The module to which the file belongs. Valid values:
   * 
   * *   NORMAL: The file is used for DataStudio.
   * *   MANUAL: The file is used for a manually triggered node.
   * *   MANUAL_BIZ: The file is used for a manually triggered workflow.
   * *   SKIP: The file is used for a dry-run DataStudio node.
   * *   ADHOCQUERY: The file is used for an ad hoc query.
   * *   COMPONENT: The file is used for a snippet.
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
   * The output name of the parent file on which the current file depends.
   * 
   * This parameter corresponds to the Output Name of Ancestor Node parameter under Parent Nodes after Same Cycle is selected in the Dependencies section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * project.001_out
   */
  input?: string;
  /**
   * @remarks
   * The mode of the configuration file dependency. Valid values:
   * 
   * *   MANUAL: Scheduling dependencies are manually configured.
   * *   AUTO: Scheduling dependencies are automatically parsed.
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
   * The name of the input parameter of the node. In the code, you can use the ${...} method to reference the input parameter of the node.
   * 
   * This parameter corresponds to the Parameter Name parameter in the Input Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * input
   */
  parameterName?: string;
  /**
   * @remarks
   * The value source of the input parameter of the node.
   * 
   * This parameter corresponds to the Value Source parameter in the Input Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The output name of the current file.
   * 
   * This parameter corresponds to the Output Name parameter under Output after Same Cycle is selected in the Dependencies section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project.002_out
   */
  output?: string;
  /**
   * @remarks
   * The output table name of the current file.
   * 
   * This parameter corresponds to the Output Table Name parameter under Output after Same Cycle is selected in the Dependencies section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The description of the output parameter of the node.
   * 
   * @example
   * It\\"s a context output parameter.
   */
  description?: string;
  /**
   * @remarks
   * The name of the output parameter of the node.
   * 
   * This parameter corresponds to the Parameter Name parameter in the Output Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * output
   */
  parameterName?: string;
  /**
   * @remarks
   * The type of the output parameter of the node. Valid values:
   * 
   * *   1: indicates a constant.
   * *   2: indicates a variable.
   * *   3: indicates a pass-through variable.
   * 
   * This parameter corresponds to the Type parameter in the Output Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 1
   */
  type?: string;
  /**
   * @remarks
   * The value of the output parameter of the node.
   * 
   * This parameter corresponds to the Value parameter in the Output Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * Indicates whether scheduling configurations immediately take effect after the deployment.
   * 
   * @example
   * true
   */
  applyScheduleImmediately?: string;
  /**
   * @remarks
   * The interval between automatic reruns after an error occurs. Unit: milliseconds.
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
   * The CRON expression that represents the periodic scheduling policy of the node.
   * 
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of the scheduling cycle. Valid values: NOT_DAY and DAY. The value NOT_DAY indicates that the node is scheduled to run by minute or hour. The value DAY indicates that the node is scheduled to run by day, week, or month.
   * 
   * This parameter corresponds to the Scheduling Cycle parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The ID of the node on which the node corresponding to the file depends when the DependentType parameter is set to USER_DEFINE. Multiple IDs are separated by commas (,).
   * 
   * The value of this parameter is equivalent to the ID of the node that you specified after you select Previous Cycle and set Depend On to Other Nodes in the Dependencies section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The end time of automatic scheduling. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter corresponds to the Validity Period parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 4155787800000
   */
  endEffectDate?: number;
  /**
   * @remarks
   * Indicates whether to skip the dry-run property of the ancestor nodes of the node that corresponds to the file. This parameter corresponds to the Skip the dry-run property of the ancestor node parameter that is displayed after you configure the Depend On parameter in the Dependencies section of the Properties tab in the DataWorks console.
   * 
   * @example
   * true
   */
  ignoreParentSkipRunningProperty?: string;
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
   * The output names of the parent files on which the current file depends.
   */
  inputList?: GetFileResponseBodyDataNodeConfigurationInputList[];
  /**
   * @remarks
   * Input parameters of the node.
   * 
   * This parameter corresponds to the Input Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   */
  inputParameters?: GetFileResponseBodyDataNodeConfigurationInputParameters[];
  /**
   * @remarks
   * The output names of the current file.
   * 
   * This parameter corresponds to the Output Name parameter under Output after Same Cycle is selected in the Dependencies section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   */
  outputList?: GetFileResponseBodyDataNodeConfigurationOutputList[];
  /**
   * @remarks
   * Output parameters of the node.
   * 
   * This parameter corresponds to the Output Parameters table in the Input and Output Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   */
  outputParameters?: GetFileResponseBodyDataNodeConfigurationOutputParameters[];
  /**
   * @remarks
   * The scheduling parameters of the node.
   * 
   * This parameter corresponds to the Parameters section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information about the configurations of the scheduling parameters, see [Configure scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @remarks
   * Indicates whether the node that corresponds to the file can be rerun. Valid values:
   * 
   * *   ALL_ALLOWED: The node can be rerun regardless of whether it is successfully run or fails to run.
   * *   FAILURE_ALLOWED: The node can be rerun only after it fails to run.
   * *   ALL_DENIED: The node cannot be rerun regardless of whether it is successfully run or fails to run.
   * 
   * This parameter corresponds to the Rerun parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * The ID of the resource group that is used to run the node. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the available resource groups in the workspace.
   * 
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The scheduling type of the node. Valid values:
   * 
   * *   NORMAL: The node is an auto triggered node.
   * *   MANUAL: The node is a manually triggered node. Manually triggered nodes cannot be automatically triggered. They correspond to the nodes in the Manually Triggered Workflows pane.
   * *   PAUSE: The node is a paused node.
   * *   SKIP: The node is a dry-run node. Dry-run nodes are started as scheduled but the system sets the status of the nodes to successful when it starts to run them.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @remarks
   * The start time of automatic scheduling. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter corresponds to the Validity Period parameter in the Schedule section of the Properties tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 936923400000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Indicates whether a node is immediately run after the node is deployed to the production environment.
   * 
   * This parameter is valid only for an EMR Spark Streaming node or an EMR Streaming SQL node. This parameter corresponds to the Start Method parameter in the Schedule section of the Configure tab in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  startImmediately?: boolean;
  /**
   * @remarks
   * Indicates whether the scheduling for the node is suspended Valid values:
   * 
   * *   true: The scheduling for the node is suspended.
   * *   false: The scheduling for the node is not suspended.
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
   * The download URL of the resource.
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
   * The basic information about the file.
   */
  file?: GetFileResponseBodyDataFile;
  /**
   * @remarks
   * The scheduling configurations of the file.
   */
  nodeConfiguration?: GetFileResponseBodyDataNodeConfiguration;
  /**
   * @remarks
   * The download URL of the resource.
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
   * The details of the file.
   */
  data?: GetFileResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
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

