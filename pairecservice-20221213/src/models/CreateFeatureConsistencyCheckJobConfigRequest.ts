// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFeatureConsistencyCheckJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  compareFeature?: boolean;
  datasetId?: string;
  datasetMountPath?: string;
  datasetName?: string;
  datasetType?: string;
  datasetUri?: string;
  defaultRoute?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * service_123
   */
  easServiceName?: string;
  /**
   * @example
   * oss://*******
   */
  easyRecPackagePath?: string;
  /**
   * @example
   * 1.3.60
   */
  easyRecVersion?: string;
  /**
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @example
   * feature1,feature2,feature3
   */
  featurePriority?: string;
  featureStoreItemId?: string;
  featureStoreModelId?: string;
  featureStoreProjectId?: string;
  featureStoreProjectName?: string;
  featureStoreSeqFeatureView?: string;
  featureStoreUserId?: string;
  /**
   * @example
   * 1.0.0
   */
  fgJarVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file.json
   */
  fgJsonFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  generateZip?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @example
   * item_id
   */
  itemIdField?: string;
  /**
   * @example
   * item_table
   */
  itemTable?: string;
  /**
   * @example
   * ds
   */
  itemTablePartitionField?: string;
  /**
   * @example
   * yyyymmdd
   */
  itemTablePartitionFieldFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * feature_consistency_check1
   */
  name?: string;
  /**
   * @example
   * reso-********
   */
  ossResourceId?: string;
  predictWorkerCount?: number;
  predictWorkerCpu?: number;
  predictWorkerMemory?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.89
   */
  sampleRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  serviceId?: string;
  switchId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  useFeatureStore?: boolean;
  /**
   * @example
   * user_id
   */
  userIdField?: string;
  /**
   * @example
   * user_table
   */
  userTable?: string;
  /**
   * @example
   * ds
   */
  userTablePartitionField?: string;
  /**
   * @example
   * yyyymmdd
   */
  userTablePartitionFieldFormat?: string;
  vpcId?: string;
  /**
   * @example
   * work_flow_1
   */
  workflowName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      compareFeature: 'CompareFeature',
      datasetId: 'DatasetId',
      datasetMountPath: 'DatasetMountPath',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      datasetUri: 'DatasetUri',
      defaultRoute: 'DefaultRoute',
      easServiceName: 'EasServiceName',
      easyRecPackagePath: 'EasyRecPackagePath',
      easyRecVersion: 'EasyRecVersion',
      featureDisplayExclude: 'FeatureDisplayExclude',
      featureLandingResourceId: 'FeatureLandingResourceId',
      featurePriority: 'FeaturePriority',
      featureStoreItemId: 'FeatureStoreItemId',
      featureStoreModelId: 'FeatureStoreModelId',
      featureStoreProjectId: 'FeatureStoreProjectId',
      featureStoreProjectName: 'FeatureStoreProjectName',
      featureStoreSeqFeatureView: 'FeatureStoreSeqFeatureView',
      featureStoreUserId: 'FeatureStoreUserId',
      fgJarVersion: 'FgJarVersion',
      fgJsonFileName: 'FgJsonFileName',
      generateZip: 'GenerateZip',
      instanceId: 'InstanceId',
      itemIdField: 'ItemIdField',
      itemTable: 'ItemTable',
      itemTablePartitionField: 'ItemTablePartitionField',
      itemTablePartitionFieldFormat: 'ItemTablePartitionFieldFormat',
      name: 'Name',
      ossResourceId: 'OssResourceId',
      predictWorkerCount: 'PredictWorkerCount',
      predictWorkerCpu: 'PredictWorkerCpu',
      predictWorkerMemory: 'PredictWorkerMemory',
      sampleRate: 'SampleRate',
      sceneId: 'SceneId',
      securityGroupId: 'SecurityGroupId',
      serviceId: 'ServiceId',
      switchId: 'SwitchId',
      useFeatureStore: 'UseFeatureStore',
      userIdField: 'UserIdField',
      userTable: 'UserTable',
      userTablePartitionField: 'UserTablePartitionField',
      userTablePartitionFieldFormat: 'UserTablePartitionFieldFormat',
      vpcId: 'VpcId',
      workflowName: 'WorkflowName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareFeature: 'boolean',
      datasetId: 'string',
      datasetMountPath: 'string',
      datasetName: 'string',
      datasetType: 'string',
      datasetUri: 'string',
      defaultRoute: 'string',
      easServiceName: 'string',
      easyRecPackagePath: 'string',
      easyRecVersion: 'string',
      featureDisplayExclude: 'string',
      featureLandingResourceId: 'string',
      featurePriority: 'string',
      featureStoreItemId: 'string',
      featureStoreModelId: 'string',
      featureStoreProjectId: 'string',
      featureStoreProjectName: 'string',
      featureStoreSeqFeatureView: 'string',
      featureStoreUserId: 'string',
      fgJarVersion: 'string',
      fgJsonFileName: 'string',
      generateZip: 'boolean',
      instanceId: 'string',
      itemIdField: 'string',
      itemTable: 'string',
      itemTablePartitionField: 'string',
      itemTablePartitionFieldFormat: 'string',
      name: 'string',
      ossResourceId: 'string',
      predictWorkerCount: 'number',
      predictWorkerCpu: 'number',
      predictWorkerMemory: 'number',
      sampleRate: 'number',
      sceneId: 'string',
      securityGroupId: 'string',
      serviceId: 'string',
      switchId: 'string',
      useFeatureStore: 'boolean',
      userIdField: 'string',
      userTable: 'string',
      userTablePartitionField: 'string',
      userTablePartitionFieldFormat: 'string',
      vpcId: 'string',
      workflowName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

