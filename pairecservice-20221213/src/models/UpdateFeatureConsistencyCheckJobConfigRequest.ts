// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFeatureConsistencyCheckJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether feature comparison is required.
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
   * d-xxx
   */
  datasetId?: string;
  /**
   * @remarks
   * The mount path of the dataset.
   * 
   * @example
   * /mnt/data/
   */
  datasetMountPath?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * dateset-test
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
   * oss://xxxx
   */
  datasetUri?: string;
  /**
   * @remarks
   * The default gateway. Valid values:
   * - Eth0: public gateway.
   * - Eth1: dedicated gateway.
   * 
   * @example
   * Eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The PAI-EAS service name.
   * 
   * This parameter is required.
   * 
   * @example
   * service_123
   */
  easServiceName?: string;
  /**
   * @remarks
   * The EasyRec package path.
   * 
   * @example
   * oss://********
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
   * The features to exclude from display. Separate multiple features with commas (,).
   * 
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @remarks
   * The data fallback data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @remarks
   * The feature priority. Separate multiple features with commas (,). This parameter specifies which features are preferentially read from the user table. If the user table is empty, the features are queried from the behavior table.
   * 
   * @example
   * feature1,feature2,feature3
   */
  featurePriority?: string;
  /**
   * @remarks
   * The Feature Store item-side primary key.
   * 
   * @example
   * item
   */
  featureStoreItemId?: string;
  /**
   * @remarks
   * feature store model id
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
   * 1
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
   * The name of the feature view that contains the item features in the sequence feature.
   * 
   * @example
   * seq_item_view
   */
  featureStoreSeqFeatureView?: string;
  /**
   * @remarks
   * The Feature Store user-side primary key.
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
   * The fg_json file name.
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
   * The instance ID. For information about how to obtain the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to use Feature Store.
   */
  isUseFeatureStore?: boolean;
  /**
   * @remarks
   * The item_id field name.
   * 
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  itemIdField?: string;
  /**
   * @remarks
   * The item table name.
   * 
   * This parameter is required.
   * 
   * @example
   * item_table
   */
  itemTable?: string;
  /**
   * @remarks
   * The item table partition field.
   * 
   * This parameter is required.
   * 
   * @example
   * ds
   */
  itemTablePartitionField?: string;
  /**
   * @remarks
   * The item table partition field format. Valid values:
   * - yyyymmdd
   * - yyyy-mm-dd
   * 
   * This parameter is required.
   * 
   * @example
   * yyyymmdd
   */
  itemTablePartitionFieldFormat?: string;
  /**
   * @remarks
   * maxcompute schema
   * 
   * @example
   * default
   */
  maxcomputeSchema?: string;
  /**
   * @remarks
   * The feature consistency check name.
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
   * The number of workers for running the prediction script.
   * 
   * @example
   * 1
   */
  predictWorkerCount?: number;
  /**
   * @remarks
   * The CPU specification of workers for running the prediction script.
   * 
   * @example
   * 4
   */
  predictWorkerCpu?: number;
  /**
   * @remarks
   * The memory specification of workers for running the prediction script.
   * 
   * @example
   * 32000(32G)
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
   * The sampling ratio (0-1).
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
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxx
   */
  switchId?: string;
  /**
   * @remarks
   * The user_id field name.
   * 
   * This parameter is required.
   * 
   * @example
   * user_id
   */
  userIdField?: string;
  /**
   * @remarks
   * The user table name.
   * 
   * This parameter is required.
   * 
   * @example
   * user_table
   */
  userTable?: string;
  /**
   * @remarks
   * The user table partition field.
   * 
   * This parameter is required.
   * 
   * @example
   * ds
   */
  userTablePartitionField?: string;
  /**
   * @remarks
   * The user table partition field format. Valid values:
   * - yyyymmdd
   * - yyyy-mm-dd
   * 
   * This parameter is required.
   * 
   * @example
   * yyyymmdd
   */
  userTablePartitionFieldFormat?: string;
  /**
   * @remarks
   * VpcID。
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
   * The PAI workspace ID.
   * 
   * @example
   * 34597***
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
      isUseFeatureStore: 'IsUseFeatureStore',
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
      isUseFeatureStore: 'boolean',
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

