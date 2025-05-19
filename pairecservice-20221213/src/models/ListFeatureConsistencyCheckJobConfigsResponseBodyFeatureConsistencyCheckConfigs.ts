// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs extends $dara.Model {
  /**
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
   * @example
   * eas_service_1
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
   * 3
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @example
   * mc_project_1
   */
  featureLandingResourceUri?: string;
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
   * @example
   * file.json
   */
  fgJsonFileName?: string;
  /**
   * @example
   * true
   */
  generateZip?: boolean;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
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
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingEndTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingStartTime?: string;
  /**
   * @example
   * 3
   */
  latestJobId?: string;
  /**
   * @example
   * feature_consistency_check1
   */
  name?: string;
  /**
   * @example
   * oss_bucket_1
   */
  ossBucket?: string;
  /**
   * @example
   * reso-********
   */
  ossResourceId?: string;
  predictWorkerCount?: number;
  predictWorkerCpu?: number;
  predictWorkerMemory?: number;
  /**
   * @example
   * 0.89
   */
  sampleRate?: string;
  /**
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @example
   * scene1
   */
  sceneName?: string;
  securityGroupId?: string;
  /**
   * @example
   * 4
   */
  serviceId?: string;
  /**
   * @example
   * service1
   */
  serviceName?: string;
  /**
   * @example
   * Editable
   */
  status?: string;
  switchId?: string;
  useFeatureStore?: string;
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
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      featureDisplayExclude: 'FeatureDisplayExclude',
      featureLandingResourceId: 'FeatureLandingResourceId',
      featureLandingResourceUri: 'FeatureLandingResourceUri',
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
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      itemIdField: 'ItemIdField',
      itemTable: 'ItemTable',
      itemTablePartitionField: 'ItemTablePartitionField',
      itemTablePartitionFieldFormat: 'ItemTablePartitionFieldFormat',
      latestJobGmtSamplingEndTime: 'LatestJobGmtSamplingEndTime',
      latestJobGmtSamplingStartTime: 'LatestJobGmtSamplingStartTime',
      latestJobId: 'LatestJobId',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossResourceId: 'OssResourceId',
      predictWorkerCount: 'PredictWorkerCount',
      predictWorkerCpu: 'PredictWorkerCpu',
      predictWorkerMemory: 'PredictWorkerMemory',
      sampleRate: 'SampleRate',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      securityGroupId: 'SecurityGroupId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
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
      featureConsistencyCheckJobConfigId: 'string',
      featureDisplayExclude: 'string',
      featureLandingResourceId: 'string',
      featureLandingResourceUri: 'string',
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
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      itemIdField: 'string',
      itemTable: 'string',
      itemTablePartitionField: 'string',
      itemTablePartitionFieldFormat: 'string',
      latestJobGmtSamplingEndTime: 'string',
      latestJobGmtSamplingStartTime: 'string',
      latestJobId: 'string',
      name: 'string',
      ossBucket: 'string',
      ossResourceId: 'string',
      predictWorkerCount: 'number',
      predictWorkerCpu: 'number',
      predictWorkerMemory: 'number',
      sampleRate: 'string',
      sceneId: 'string',
      sceneName: 'string',
      securityGroupId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      switchId: 'string',
      useFeatureStore: 'string',
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

