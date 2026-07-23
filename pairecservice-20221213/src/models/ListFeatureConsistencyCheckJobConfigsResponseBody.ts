// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to enable feature comparison.
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
   * The name of the EAS service.
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
   * The version of EasyRec.
   * 
   * @example
   * 1.3.60
   */
  easyRecVersion?: string;
  /**
   * @remarks
   * The ID of the feature consistency check configuration.
   * 
   * @example
   * 3
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @remarks
   * The features to exclude from the results. Separate multiple features with a comma (,).
   * 
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @remarks
   * The ID of the data source for feature landing.
   * 
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @remarks
   * The URI of the data source for feature landing.
   * 
   * @example
   * mc_project_1
   */
  featureLandingResourceUri?: string;
  /**
   * @remarks
   * The high-priority features to read from the user table. If a feature is not found, the system retrieves it from the behavior table. Separate multiple features with a comma (,).
   * 
   * @example
   * feature1,feature2,feature3
   */
  featurePriority?: string;
  /**
   * @remarks
   * The primary key for the item side in the feature store.
   * 
   * @example
   * item
   */
  featureStoreItemId?: string;
  /**
   * @remarks
   * The ID of the model in the feature store.
   * 
   * @example
   * 2
   */
  featureStoreModelId?: string;
  /**
   * @remarks
   * The ID of the feature store project.
   * 
   * @example
   * prj-01
   */
  featureStoreProjectId?: string;
  /**
   * @remarks
   * The name of the feature store project.
   * 
   * @example
   * project-1
   */
  featureStoreProjectName?: string;
  /**
   * @remarks
   * The name of the feature view that contains item features within the sequence features.
   * 
   * @example
   * item-1
   */
  featureStoreSeqFeatureView?: string;
  /**
   * @remarks
   * The primary key for the user side in the feature store.
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
   * Indicates whether to generate a ZIP package.
   * 
   * @example
   * true
   */
  generateZip?: boolean;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the configuration was last updated.
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
   * The name of the item table.
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
   * The format of the partition field of the item table. Valid values:
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
   * The end time of the latest job based on this configuration.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingEndTime?: string;
  /**
   * @remarks
   * The start time of the latest job based on this configuration.
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
   * The name of the OSS bucket.
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
  resourceConfig?: string;
  /**
   * @remarks
   * The sample rate, a value from 0 to 1.
   * 
   * @example
   * 0.89
   */
  sampleRate?: string;
  /**
   * @remarks
   * The ID of the scene.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * The name of the scene.
   * 
   * @example
   * scene1
   */
  sceneName?: string;
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 4
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * service1
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the configuration. Valid values:
   * 
   * - `Editable`: The configuration is editable.
   * 
   * - `Uneditable`: The configuration is not editable.
   * 
   * @example
   * Editable
   */
  status?: string;
  switchId?: string;
  /**
   * @remarks
   * Indicates whether to use a feature store. Valid values:
   * 
   * - `true`: A feature store is used. In this case, the response includes parameters such as `FeatureStoreProjectId`, `FeatureStoreProjectName`, `FeatureStoreModelId`, `FeatureStoreUserId`, and `FeatureStoreItemId`.
   * 
   * - `false`: A feature store is not used. In this case, the response includes parameters such as `UserTable`, `UserIdField`, `UserTablePartitionField`, `UserTablePartitionFieldFormat`, `ItemTable`, `ItemIdField`, `ItemTablePartitionField`, and `ItemTablePartitionFieldFormat`.
   * 
   * @example
   * true
   */
  useFeatureStore?: string;
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
   * The name of the user table.
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
   * The format of the partition field of the user table. Valid values:
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
   * The name of the workflow.
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
      resourceConfig: 'string',
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

export class ListFeatureConsistencyCheckJobConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of feature consistency check configurations.
   */
  featureConsistencyCheckConfigs?: ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FCF741D8-9C30-578E-807F-B935487DB34A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of configurations.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckConfigs: 'FeatureConsistencyCheckConfigs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckConfigs: { 'type': 'array', 'itemType': ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featureConsistencyCheckConfigs)) {
      $dara.Model.validateArray(this.featureConsistencyCheckConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

