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
   * The ID of the dataset.
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
   * The type of the OSS dataset.
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
   * The name of the PAI-EAS service. For more information about how to obtain the service name, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * This parameter is required.
   * 
   * @example
   * service_123
   */
  easServiceName?: string;
  /**
   * @remarks
   * The OSS bucket path of the EasyRec package.
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
   * The ID of the data backflow data source.
   * 
   * This parameter is required.
   * 
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
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
   * The name of the feature view to which the item features in the sequence features belong.
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
   * The ID of the instance. For more information about how to obtain the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
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
   * The format of the partition field for the item table. Valid values:
   * - yyyymmdd
   * - yyyy-mm-dd
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
   * The CPU allocated to the worker for executing the prediction script.
   * 
   * @example
   * 4
   */
  predictWorkerCpu?: number;
  /**
   * @remarks
   * The memory allocated to the worker for executing the prediction script.
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
   * The ID of the scene.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * thax-xxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vswitch-xxx
   */
  switchId?: string;
  /**
   * @remarks
   * Specifies whether to use Feature Store. Valid values:
   * - true: uses Feature Store. In this case, FeatureStoreProjectId, FeatureStoreProjectName, FeatureStoreModelId, FeatureStoreUserId, and FeatureStoreItemId are required.
   * - false: does not use Feature Store. In this case, UserTable, UserIdField, UserTablePartitionField, UserTablePartitionFieldFormat, ItemTable, ItemIdField, ItemTablePartitionField, and ItemTablePartitionFieldFormat are required.
   * 
   * This parameter is required.
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
   * The format of the partition field for the user table. Valid values:
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
   * The name of the workflow.
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

