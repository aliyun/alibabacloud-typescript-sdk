// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFeatureConsistencyCheckJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to compare features.
   * 
   * This parameter is required.
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
   * The dataset mount path.
   * 
   * @example
   * mnt/xxx
   */
  datasetMountPath?: string;
  /**
   * @remarks
   * The dataset name.
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
   * The dataset URI.
   * 
   * @example
   * oss-xxx
   */
  datasetUri?: string;
  /**
   * @remarks
   * The default route.
   * 
   * @example
   * Eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The name of the PAI-EAS service. To obtain this name, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * This parameter is required.
   * 
   * @example
   * service_123
   */
  easServiceName?: string;
  /**
   * @remarks
   * The path of the OSS bucket where the EasyRec package is stored.
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
   * The features to exclude from the display. Use a comma (,) to separate multiple features.
   * 
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @remarks
   * The ID of the data source where the feature data is saved.
   * 
   * This parameter is required.
   * 
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @remarks
   * The feature priority. Use a comma (,) to separate multiple features.
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
   * The feature store model ID.
   * 
   * @example
   * 2
   */
  featureStoreModelId?: string;
  /**
   * @remarks
   * The feature store project ID.
   * 
   * @example
   * prj-01
   */
  featureStoreProjectId?: string;
  /**
   * @remarks
   * The feature store project name.
   * 
   * @example
   * project-1
   */
  featureStoreProjectName?: string;
  /**
   * @remarks
   * The name of the feature view that contains the item features within sequence features.
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
   * The `fg_jar` version.
   * 
   * @example
   * 1.0.0
   */
  fgJarVersion?: string;
  /**
   * @remarks
   * The name of the `fg_json` file.
   * 
   * This parameter is required.
   * 
   * @example
   * file.json
   */
  fgJsonFileName?: string;
  /**
   * @remarks
   * Specifies whether to generate a ZIP package.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  generateZip?: boolean;
  /**
   * @remarks
   * The instance ID. To obtain this ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
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
   * The schema of the MaxCompute project.
   * 
   * @example
   * default
   */
  maxcomputeSchema?: string;
  /**
   * @remarks
   * The name of the feature consistency check.
   * 
   * This parameter is required.
   * 
   * @example
   * feature_consistency_check1
   */
  name?: string;
  /**
   * @remarks
   * The OSS data source ID.
   * 
   * @example
   * reso-********
   */
  ossResourceId?: string;
  /**
   * @remarks
   * The number of prediction workers.
   * 
   * @example
   * 1
   */
  predictWorkerCount?: number;
  /**
   * @remarks
   * The number of CPU cores for each prediction worker.
   * 
   * @example
   * 4
   */
  predictWorkerCpu?: number;
  /**
   * @remarks
   * The memory size for each prediction worker, in megabytes (MB).
   * 
   * @example
   * 32000
   */
  predictWorkerMemory?: number;
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
   * The sample rate. The value must be between 0 and 1, inclusive.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.89
   */
  sampleRate?: number;
  /**
   * @remarks
   * The scene ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * thax-xxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  serviceId?: string;
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
   * Specifies whether to use a feature store. Valid values:
   * 
   * - `true`: Use a feature store. The `FeatureStoreProjectId`, `FeatureStoreProjectName`, `FeatureStoreModelId`, `FeatureStoreUserId`, and `FeatureStoreItemId` parameters are required.
   * 
   * - `false`: Do not use a feature store. The `UserTable`, `UserIdField`, `UserTablePartitionField`, `UserTablePartitionFieldFormat`, `ItemTable`, `ItemIdField`, `ItemTablePartitionField`, and `ItemTablePartitionFieldFormat` parameters are required.
   * 
   * This parameter is required.
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
   * 
   * - `yyyymmdd`
   * 
   * - `yyyy-mm-dd`
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
   * The workspace ID.
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
      maxcomputeSchema: 'MaxcomputeSchema',
      name: 'Name',
      ossResourceId: 'OssResourceId',
      predictWorkerCount: 'PredictWorkerCount',
      predictWorkerCpu: 'PredictWorkerCpu',
      predictWorkerMemory: 'PredictWorkerMemory',
      resourceConfig: 'ResourceConfig',
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
      maxcomputeSchema: 'string',
      name: 'string',
      ossResourceId: 'string',
      predictWorkerCount: 'number',
      predictWorkerCpu: 'number',
      predictWorkerMemory: 'number',
      resourceConfig: 'string',
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

