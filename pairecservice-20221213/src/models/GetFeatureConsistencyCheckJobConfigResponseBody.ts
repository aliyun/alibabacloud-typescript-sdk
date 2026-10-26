// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureConsistencyCheckJobConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether feature comparison is enabled.
   * 
   * @example
   * true
   */
  compareFeature?: boolean;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * s-xxx
   */
  datasetId?: string;
  /**
   * @remarks
   * The mount path of the dataset.
   * 
   * @example
   * mnt/xxx
   */
  datasetMountPath?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * test
   */
  datasetName?: string;
  /**
   * @remarks
   * The dataset type.
   * 
   * @example
   * OSS
   */
  datasetType?: string;
  /**
   * @remarks
   * The URI of the dataset.
   * 
   * @example
   * oss-xxx
   */
  datasetUri?: string;
  /**
   * @remarks
   * The default gateway. Eth0 indicates the public gateway. Eth1 indicates the dedicated gateway.
   * 
   * @example
   * Eth0
   */
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
   * The feature display filter. Separate multiple features with commas (,).
   * 
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @remarks
   * The ID of the data source for data backflow.
   * 
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @remarks
   * The URI of the data source for data backflow.
   * 
   * @example
   * mc_project_1
   */
  featureLandingResourceUri?: string;
  /**
   * @remarks
   * The feature priority. Separate multiple features with commas (,).
   * 
   * @example
   * feature1,feature2,feature3
   */
  featurePriority?: string;
  /**
   * @remarks
   * The primary key on the item side in Feature Store.
   * 
   * @example
   * item
   */
  featureStoreItemId?: string;
  /**
   * @remarks
   * The feature store model ID.
   * 
   * @example
   * 2
   */
  featureStoreModelId?: string;
  /**
   * @remarks
   * The ID of the Feature Store project.
   * 
   * @example
   * prj-01
   */
  featureStoreProjectId?: string;
  /**
   * @remarks
   * The name of the Feature Store project.
   * 
   * @example
   * project-1
   */
  featureStoreProjectName?: string;
  /**
   * @remarks
   * The name of the feature view to which the item feature belongs in the sequence feature.
   * 
   * @example
   * item-1
   */
  featureStoreSeqFeatureView?: string;
  /**
   * @remarks
   * The primary key on the user side in Feature Store.
   * 
   * @example
   * user
   */
  featureStoreUserId?: string;
  /**
   * @remarks
   * The fg_jar version.
   * 
   * @example
   * 1.0.0
   */
  fgJarVersion?: string;
  /**
   * @remarks
   * The name of the fg_json file.
   * 
   * @example
   * file.json
   */
  fgJsonFileName?: string;
  /**
   * @remarks
   * Indicates whether a ZIP package needs to be generated.
   * 
   * @example
   * true
   */
  generateZip?: boolean;
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format and includes a time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time. The time is in ISO 8601 format and includes a time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The name of the item_id field.
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
   * The format of the partition field in the item table. Valid values:
   * - yyyymmdd
   * - yyyy-mm-dd
   * 
   * @example
   * yyyymmdd
   */
  itemTablePartitionFieldFormat?: string;
  /**
   * @remarks
   * The end time of the latest job. The time is in ISO 8601 format and includes a time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingEndTime?: string;
  /**
   * @remarks
   * The start time of the latest job. The time is in ISO 8601 format and includes a time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingStartTime?: string;
  /**
   * @remarks
   * The ID of the latest job created based on this configuration.
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
  /**
   * @remarks
   * The number of workers used to execute the prediction script.
   * 
   * @example
   * 1
   */
  predictWorkerCount?: number;
  /**
   * @remarks
   * The CPU resources allocated to workers when executing the prediction script.
   * 
   * @example
   * 4
   */
  predictWorkerCpu?: number;
  /**
   * @remarks
   * The memory resources allocated to workers when executing the prediction script.
   * 
   * @example
   * 32000
   */
  predictWorkerMemory?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The resource configuration.
   * 
   * @example
   * {}
   */
  resourceConfig?: string;
  /**
   * @remarks
   * The sampling rate. Valid values: 0 to 1.
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
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-xxx
   */
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
   * The status. Valid values:
   * - Editable: The configuration is editable.
   * - Uneditable: The configuration is not editable.
   * 
   * @example
   * Editable
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vswitch-xxx
   */
  switchId?: string;
  /**
   * @remarks
   * Indicates whether to use Feature Store. Valid values:
   * - true: Feature Store is used. In this case, FeatureStoreProjectId, FeatureStoreProjectName, FeatureStoreModelId, FeatureStoreUserId, and FeatureStoreItemId are returned.
   * - false: Feature Store is not used. In this case, UserTable, UserIdField, UserTablePartitionField, UserTablePartitionFieldFormat, ItemTable, ItemIdField, ItemTablePartitionField, and ItemTablePartitionFieldFormat are required.
   * 
   * @example
   * true
   */
  useFeatureStore?: boolean;
  /**
   * @remarks
   * The name of the user_id field.
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
   * The format of the partition field in the user table. Valid values:
   * - yyyymmdd
   * - yyyy-mm-dd
   * 
   * @example
   * yyyymmdd
   */
  userTablePartitionFieldFormat?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * work_flow_1
   */
  workflowName?: string;
  /**
   * @remarks
   * The ID of the PAI workspace.
   * 
   * @example
   * test
   */
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

