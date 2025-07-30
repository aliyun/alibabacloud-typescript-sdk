// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileRequest extends $dara.Model {
  /**
   * @example
   * {"queue":"default","SPARK_CONF":"--conf spark.driver.memory=2g"}
   */
  advancedSettings?: string;
  /**
   * @example
   * true
   */
  applyScheduleImmediately?: boolean;
  /**
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @example
   * false
   */
  createFolderIfNotExists?: boolean;
  /**
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @example
   * DAY
   */
  cycleType?: string;
  /**
   * @example
   * abc
   */
  dependentNodeIdList?: string;
  /**
   * @example
   * NONE
   */
  dependentType?: string;
  /**
   * @example
   * 1671694850000
   */
  endEffectDate?: number;
  fileDescription?: string;
  /**
   * @example
   * Business_process/First_Business_Process/MaxCompute/Folder_1/Folder_2
   */
  fileFolderPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * File name
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @example
   * false
   */
  ignoreParentSkipRunningProperty?: boolean;
  /**
   * @example
   * m-bp1h4b5a8ogkbll2f3tr
   */
  imageId?: string;
  /**
   * @example
   * project_root,project.file1,project.001_out
   */
  inputList?: string;
  /**
   * @example
   * [{"ValueSource": "project_001.first_node:bizdate_param","ParameterName": "bizdate_input"}]
   */
  inputParameters?: string;
  /**
   * @example
   * [{"Type": 1,"Value": "${bizdate}","ParameterName": "bizdate_param"}]
   */
  outputParameters?: string;
  /**
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The resource group for the task deployed from the file. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page. In the left-side navigation pane, click **Resource Group** to obtain the ID of the resource group associated with the current workspace.
   * 
   * @example
   * S_res_group_559_1613715566828
   */
  resourceGroupIdentifier?: string;
  /**
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @example
   * 1671608450000
   */
  startEffectDate?: number;
  /**
   * @example
   * true
   */
  startImmediately?: boolean;
  /**
   * @example
   * false
   */
  stop?: boolean;
  /**
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

