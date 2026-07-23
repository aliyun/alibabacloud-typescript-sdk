// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureConsistencyCheckJobConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Whether to enable feature comparison.
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
   * The EAS service name.
   * 
   * @example
   * eas_service_1
   */
  easServiceName?: string;
  /**
   * @remarks
   * The path of the EasyRec package.
   * 
   * @example
   * oss://*******
   */
  easyRecPackagePath?: string;
  /**
   * @remarks
   * The EasyRec version.
   * 
   * @example
   * 1.3.60
   */
  easyRecVersion?: string;
  /**
   * @remarks
   * A comma-separated list of features to exclude from the display.
   * 
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @remarks
   * The ID of the data source for feature fallback.
   * 
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @remarks
   * The URI of the data source for feature fallback.
   * 
   * @example
   * mc_project_1
   */
  featureLandingResourceUri?: string;
  /**
   * @remarks
   * A comma-separated list of features, ordered by priority.
   * 
   * @example
   * feature1,feature2,feature3
   */
  featurePriority?: string;
  /**
   * @remarks
   * The primary key for items in the Feature Store.
   * 
   * @example
   * item
   */
  featureStoreItemId?: string;
  /**
   * @remarks
   * The Feature Store model ID.
   * 
   * @example
   * 2
   */
  featureStoreModelId?: string;
  /**
   * @remarks
   * The Feature Store project ID.
   * 
   * @example
   * prj-01
   */
  featureStoreProjectId?: string;
  /**
   * @remarks
   * The Feature Store project name.
   * 
   * @example
   * project-1
   */
  featureStoreProjectName?: string;
  /**
   * @remarks
   * The name of the feature view that contains item features within sequence features.
   * 
   * @example
   * item-1
   */
  featureStoreSeqFeatureView?: string;
  /**
   * @remarks
   * The primary key for users in the Feature Store.
   * 
   * @example
   * user
   */
  featureStoreUserId?: string;
  /**
   * @remarks
   * The version of the `fg_jar` file.
   * 
   * @example
   * 1.0.0
   */
  fgJarVersion?: string;
  /**
   * @remarks
   * The name of the `fg_json` file.
   * 
   * @example
   * file.json
   */
  fgJsonFileName?: string;
  /**
   * @remarks
   * Whether to generate a ZIP package.
   * 
   * @example
   * true
   */
  generateZip?: boolean;
  /**
   * @remarks
   * The time the configuration was created.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time the configuration was last updated.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The name of the `item_id` field.
   * 
   * @example
   * item_id
   */
  itemIdField?: string;
  /**
   * @remarks
   * The item table name.
   * 
   * @example
   * item_table
   */
  itemTable?: string;
  /**
   * @remarks
   * The partition field of the item table.
   * 
   * @example
   * ds
   */
  itemTablePartitionField?: string;
  /**
   * @remarks
   * The format of the partition field in the item table. Valid values:
   * 
   * - `yyyymmdd`
   * 
   * - `yyyy-mm-dd`
   * 
   * @example
   * yyyymmdd
   */
  itemTablePartitionFieldFormat?: string;
  /**
   * @remarks
   * The end time of the most recent job.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingEndTime?: string;
  /**
   * @remarks
   * The start time of the most recent job.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingStartTime?: string;
  /**
   * @remarks
   * The ID of the most recent job created from this configuration.
   * 
   * @example
   * 3
   */
  latestJobId?: string;
  /**
   * @remarks
   * The name of the feature consistency check configuration.
   * 
   * @example
   * feature_consistency_check1
   */
  name?: string;
  /**
   * @remarks
   * The OSS bucket name.
   * 
   * @example
   * oss_bucket_1
   */
  ossBucket?: string;
  /**
   * @remarks
   * The ID of the OSS data source.
   * 
   * @example
   * reso-********
   */
  ossResourceId?: string;
  predictWorkerCount?: number;
  predictWorkerCpu?: number;
  predictWorkerMemory?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  resourceConfig?: string;
  /**
   * @remarks
   * The sample rate. The value must be between 0 and 1.
   * 
   * @example
   * 0.89
   */
  sampleRate?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * scene1
   */
  sceneName?: string;
  securityGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 4
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * service1
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the configuration. Valid values:
   * 
   * - `Editable`: The configuration can be edited.
   * 
   * - `Uneditable`: The configuration cannot be edited.
   * 
   * @example
   * Editable
   */
  status?: string;
  switchId?: string;
  /**
   * @remarks
   * Whether to use a Feature Store. Valid values:
   * 
   * - `true`: A Feature Store is used. In this case, the response also returns `FeatureStoreProjectId`, `FeatureStoreProjectName`, `FeatureStoreModelId`, `FeatureStoreUserId`, and `FeatureStoreItemId`.
   * 
   * - `false`: A Feature Store is not used. In this case, the `UserTable`, `UserIdField`, `UserTablePartitionField`, `UserTablePartitionFieldFormat`, `ItemTable`, `ItemIdField`, `ItemTablePartitionField`, and `ItemTablePartitionFieldFormat` parameters are returned.
   * 
   * @example
   * true
   */
  useFeatureStore?: boolean;
  /**
   * @remarks
   * The name of the `user_id` field.
   * 
   * @example
   * user_id
   */
  userIdField?: string;
  /**
   * @remarks
   * The user table name.
   * 
   * @example
   * user_table
   */
  userTable?: string;
  /**
   * @remarks
   * The partition field of the user table.
   * 
   * @example
   * ds
   */
  userTablePartitionField?: string;
  /**
   * @remarks
   * The format of the partition field in the user table. Valid values:
   * 
   * - `yyyymmdd`
   * 
   * - `yyyy-mm-dd`
   * 
   * @example
   * yyyymmdd
   */
  userTablePartitionFieldFormat?: string;
  vpcId?: string;
  /**
   * @remarks
   * The workflow name.
   * 
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
      requestId: 'RequestId',
      resourceConfig: 'ResourceConfig',
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
      requestId: 'string',
      resourceConfig: 'string',
      sampleRate: 'string',
      sceneId: 'string',
      sceneName: 'string',
      securityGroupId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
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

