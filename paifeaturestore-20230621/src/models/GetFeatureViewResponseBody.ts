// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureViewResponseBodyFieldsTransformInput extends $dara.Model {
  /**
   * @remarks
   * The modality type.
   * 
   * @example
   * TEXT
   */
  modality?: string;
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * feature1
   */
  name?: string;
  /**
   * @remarks
   * The feature type.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      modality: 'Modality',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modality: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureViewResponseBodyFieldsTransform extends $dara.Model {
  /**
   * @remarks
   * The input for the feature transformation.
   */
  input?: GetFeatureViewResponseBodyFieldsTransformInput[];
  /**
   * @remarks
   * The LLM configuration ID.
   * 
   * @example
   * 1
   */
  LLMConfigId?: number;
  /**
   * @remarks
   * The feature transformation type.
   * 
   * @example
   * LLMEmbedding
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      LLMConfigId: 'LLMConfigId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'array', 'itemType': GetFeatureViewResponseBodyFieldsTransformInput },
      LLMConfigId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureViewResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * The list of field attributes. Valid values:
   * 
   * ● `Partition`: The partition field.
   * 
   * ● `PrimaryKey`: The primary key.
   * 
   * ● `EventTime`: The event time.
   */
  attributes?: string[];
  /**
   * @example
   * 512
   */
  dimension?: number;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * user
   */
  name?: string;
  /**
   * @remarks
   * The feature transformation.
   */
  transform?: GetFeatureViewResponseBodyFieldsTransform[];
  /**
   * @remarks
   * The data type of the field. Valid values:
   * 
   * ● `int`
   * 
   * ● `string`
   * 
   * ● `float`
   * 
   * @example
   * int
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      dimension: 'Dimension',
      name: 'Name',
      transform: 'Transform',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      dimension: 'number',
      name: 'string',
      transform: { 'type': 'array', 'itemType': GetFeatureViewResponseBodyFieldsTransform },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    if(Array.isArray(this.transform)) {
      $dara.Model.validateArray(this.transform);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration.
   * 
   * @example
   * {"save_original_field":true}
   */
  config?: string;
  /**
   * @remarks
   * The feature entity ID.
   * 
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @remarks
   * The feature entity name.
   * 
   * @example
   * featureEntity1
   */
  featureEntityName?: string;
  /**
   * @remarks
   * The list of fields.
   */
  fields?: GetFeatureViewResponseBodyFields[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The synchronization time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtSyncTime?: string;
  /**
   * @remarks
   * The join ID of the feature entity.
   * 
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @remarks
   * The most recent synchronization configuration.
   * 
   * @example
   * {
   * 	"mode": "overwrite",
   * 	"partitions": {
   * 		"ds": {
   * 			"value": "20230820"
   * 		}
   * 	},
   * 	"event_time": "",
   * 	"config": {},
   * 	"offline_to_online": true
   * }
   */
  lastSyncConfig?: string;
  /**
   * @remarks
   * The name of the mock data table for the stream feature view.
   * 
   * @example
   * item_table_mock_1
   */
  mockTableName?: string;
  /**
   * @remarks
   * The feature view name.
   * 
   * @example
   * featureView1
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the owner.
   * 
   * @example
   * 12321421412****
   */
  owner?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * project1
   */
  projectName?: string;
  /**
   * @remarks
   * The script for data synchronization.
   * 
   * @example
   * from feature_store_py.fs_client import FeatureStoreClient\\nimport datetime\\nfrom feature_store_py.fs_datasource import MaxComputeDataSource\\nimport sys\\n\\ncur_day = args[\\"dt\\"]\\nprint(\\"cur_day = \\", cur_day)\\n\\naccess_key_id = o.account.access_id\\naccess_key_secret = o.account.secret_access_key\\nfs = FeatureStoreClient(access_key_id=access_key_id, access_key_secret=access_key_secret, region=\\"cn-beijing\\")\\ncur_project_name = \\"p1\\"\\nproject = fs.get_project(cur_project_name)\\n\\nfeature_view_name = \\"user_fea\\"\\nbatch_feature_view = project.get_feature_view(feature_view_name)\\ntask = batch_feature_view.publish_table(partitions={\\"ds\\":cur_day}, mode=\\"Overwrite\\")\\ntask.wait()\\ntask.print_summary()\\n
   */
  publishTableScript?: string;
  /**
   * @remarks
   * The ID of the data source where the registered table resides.
   * 
   * @example
   * 4
   */
  registerDatasourceId?: string;
  /**
   * @remarks
   * The name of the data source where the registered table resides.
   * 
   * @example
   * datasource1
   */
  registerDatasourceName?: string;
  /**
   * @remarks
   * The name of the registered table.
   * 
   * @example
   * table1
   */
  registerTable?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72F15A8A-5A28-5B18-A0DE-0EABD7D3245A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether to synchronize the online feature table.
   * 
   * @example
   * true
   */
  syncOnlineTable?: boolean;
  /**
   * @remarks
   * The time to live (TTL).
   * 
   * @example
   * 86400
   */
  TTL?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: string[];
  /**
   * @remarks
   * The type of the feature view. Valid values:
   * 
   * ● `Batch`: A batch feature.
   * 
   * ● `Stream`: A stream feature.
   * 
   * @example
   * Batch
   */
  type?: string;
  /**
   * @remarks
   * The write method. Valid values:
   * 
   * ● `ByReadyMadeTable`: Registers the feature view by using an existing table.
   * 
   * ● `Custom`: Uses a custom table structure.
   * 
   * @example
   * custom
   */
  writeMethod?: string;
  /**
   * @remarks
   * Indicates whether to write data to the online managed storage.
   * 
   * @example
   * false
   */
  writeToFeatureDB?: boolean;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureEntityId: 'FeatureEntityId',
      featureEntityName: 'FeatureEntityName',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtSyncTime: 'GmtSyncTime',
      joinId: 'JoinId',
      lastSyncConfig: 'LastSyncConfig',
      mockTableName: 'MockTableName',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      publishTableScript: 'PublishTableScript',
      registerDatasourceId: 'RegisterDatasourceId',
      registerDatasourceName: 'RegisterDatasourceName',
      registerTable: 'RegisterTable',
      requestId: 'RequestId',
      syncOnlineTable: 'SyncOnlineTable',
      TTL: 'TTL',
      tags: 'Tags',
      type: 'Type',
      writeMethod: 'WriteMethod',
      writeToFeatureDB: 'WriteToFeatureDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureEntityId: 'string',
      featureEntityName: 'string',
      fields: { 'type': 'array', 'itemType': GetFeatureViewResponseBodyFields },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      gmtSyncTime: 'string',
      joinId: 'string',
      lastSyncConfig: 'string',
      mockTableName: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      publishTableScript: 'string',
      registerDatasourceId: 'string',
      registerDatasourceName: 'string',
      registerTable: 'string',
      requestId: 'string',
      syncOnlineTable: 'boolean',
      TTL: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      writeMethod: 'string',
      writeToFeatureDB: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

