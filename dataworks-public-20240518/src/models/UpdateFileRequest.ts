// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileRequest extends $dara.Model {
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
   * SELECT "1";
   */
  content?: string;
  /**
   * @example
   * 00 00-59/5 1-23 * * ?
   */
  cronExpress?: string;
  /**
   * @example
   * NOT_DAY
   */
  cycleType?: string;
  /**
   * @example
   * 5,10,15,20
   */
  dependentNodeIdList?: string;
  /**
   * @example
   * USER_DEFINE
   */
  dependentType?: string;
  /**
   * @example
   * 4155787800000
   */
  endEffectDate?: number;
  /**
   * @example
   * Here is the file description
   */
  fileDescription?: string;
  /**
   * @example
   * Business_process/First_Business_Process/data_integration/Folder_1/Folder_2
   */
  fileFolderPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100000001
   */
  fileId?: number;
  /**
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @example
   * true
   */
  ignoreParentSkipRunningProperty?: boolean;
  /**
   * @example
   * m-uf6d7npxk1hhek8ng0cb
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
   * dw_project.ods_user_info_d
   */
  outputList?: string;
  /**
   * @example
   * [{"Type": 1,"Value": "${bizdate}","ParameterName": "bizdate_param"}]
   */
  outputParameters?: string;
  /**
   * @example
   * 18023848927592
   */
  owner?: string;
  /**
   * @example
   * x=a y=b z=c
   */
  paraValue?: string;
  /**
   * @example
   * 100001
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
   * default_group
   */
  resourceGroupIdentifier?: string;
  /**
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @example
   * 936923400000
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

