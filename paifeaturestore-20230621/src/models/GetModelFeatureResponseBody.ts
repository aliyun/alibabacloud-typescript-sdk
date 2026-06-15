// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelFeatureResponseBodyFeatures extends $dara.Model {
  /**
   * @remarks
   * The feature alias.
   * 
   * @example
   * feature2
   */
  aliasName?: string;
  /**
   * @remarks
   * The feature view ID.
   * 
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @remarks
   * The feature view name.
   * 
   * @example
   * feature_view_1
   */
  featureViewName?: string;
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * feature1
   */
  name?: string;
  /**
   * @example
   * cand_seq__
   */
  prefixName?: string;
  /**
   * @remarks
   * The feature type. Valid values:
   * 
   * - INT32
   * - INT64
   * - FLOAT
   * - DOUBLE
   * - STRING
   * - BOOLEAN
   * - TIMESTAMP.
   * 
   * @example
   * INT32
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      featureViewId: 'FeatureViewId',
      featureViewName: 'FeatureViewName',
      name: 'Name',
      prefixName: 'PrefixName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      featureViewId: 'string',
      featureViewName: 'string',
      name: 'string',
      prefixName: 'string',
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

export class GetModelFeatureResponseBodyRelationsDomains extends $dara.Model {
  /**
   * @remarks
   * The domain type. Valid values:
   * 
   * - FeatureEntity: feature entity.
   * - FeatureView: feature view.
   * - ModelFeature: model feature.
   * 
   * @example
   * FeatureEntity
   */
  domainType?: string;
  /**
   * @remarks
   * Domain ID。
   * 
   * @example
   * 3
   */
  id?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * feature_entity_1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domainType: 'DomainType',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainType: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureResponseBodyRelationsLinks extends $dara.Model {
  /**
   * @remarks
   * The source ID of the link.
   * 
   * @example
   * model_feature_2
   */
  from?: string;
  /**
   * @remarks
   * The dependency field of the link.
   * 
   * @example
   * user_id
   */
  link?: string;
  /**
   * @remarks
   * The destination ID of the link.
   * 
   * @example
   * feature_entity_3
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      link: 'Link',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      link: 'string',
      to: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureResponseBodyRelations extends $dara.Model {
  /**
   * @remarks
   * The domain list.
   */
  domains?: GetModelFeatureResponseBodyRelationsDomains[];
  /**
   * @remarks
   * The feature relationship link list.
   */
  links?: GetModelFeatureResponseBodyRelationsLinks[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      links: 'Links',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': GetModelFeatureResponseBodyRelationsDomains },
      links: { 'type': 'array', 'itemType': GetModelFeatureResponseBodyRelationsLinks },
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(Array.isArray(this.links)) {
      $dara.Model.validateArray(this.links);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The script for exporting the training sample table.
   * 
   * @example
   * from feature_store_py.fs_client import FeatureStoreClient\\nfrom feature_store_py.fs_project import FeatureStoreProject\\nfrom feature_store_py.fs_datasource import LabelInput, MaxComputeDataSource, TrainingSetOutput\\nfrom feature_store_py.fs_features import FeatureSelector\\nfrom feature_store_py.fs_config import LabelInputConfig, PartitionConfig, FeatureViewConfig\\nfrom feature_store_py.fs_config import TrainSetOutputConfig, EASDeployConfig\\nimport datetime\\nimport sys\\n\\ncur_day = args[\\"dt\\"]\\nprint(\\"cur_day = \\", cur_day)\\noffset = datetime.timedelta(days=-1)\\npre_day = (datetime.datetime.strptime(cur_day, \\"%Y%m%d\\") + offset).strftime(\\"%Y%m%d\\")\\nprint(\\"pre_day = \\", pre_day)\\n\\n\\naccess_key_id = o.account.access_id\\naccess_key_secret = o.account.secret_access_key\\nfs = FeatureStoreClient(access_key_id=access_key_id, access_key_secret=access_key_secret, region=\\"cn-beijing\\")\\ncur_project_name = \\"p1\\"\\nproject = fs.get_project(cur_project_name)\\n\\nlabel_partitions = PartitionConfig(name = \\"ds\\", value = cur_day)\\nlabel_input_config = LabelInputConfig(partition_config=label_partitions)\\n\\nfeature_view_1_partitions = PartitionConfig(name = \\"ds\\", value = pre_day)\\nfeature_view_1_config = FeatureViewConfig(name = \\"user_fea\\",\\npartition_config=feature_view_1_partitions)\\n\\nfeature_view_2_partitions = PartitionConfig(name = \\"ds\\", value = pre_day)\\nfeature_view_2_config = FeatureViewConfig(name = \\"seq_fea\\",\\npartition_config=feature_view_2_partitions)\\n\\nfeature_view_3_partitions = PartitionConfig(name = \\"ds\\", value = pre_day)\\nfeature_view_3_config = FeatureViewConfig(name = \\"item_fea\\",\\npartition_config=feature_view_3_partitions)\\n\\nfeature_view_config_list = [feature_view_1_config,feature_view_2_config,feature_view_3_config]\\ntrain_set_partitions = PartitionConfig(name = \\"ds\\", value = cur_day)\\ntrain_set_output_config = TrainSetOutputConfig(partition_config=train_set_partitions)\\n\\n\\nmodel_name = \\"rank_v1\\"\\ncur_model = project.get_model(model_name)\\ntask = cur_model.export_train_set(label_input_config, feature_view_config_list, train_set_output_config)\\ntask.wait()\\nprint(\\"task_summary = \\", task.task_summary)\\n
   */
  exportTrainingSetTableScript?: string;
  /**
   * @remarks
   * The feature list.
   */
  features?: GetModelFeatureResponseBodyFeatures[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The priority level of the label table. Default value: 0. Set to 1 to prioritize the label table. Set to 2 to prioritize the feature view.
   * 
   * @example
   * 0
   */
  labelPriorityLevel?: number;
  /**
   * @remarks
   * The label table ID.
   * 
   * @example
   * 3
   */
  labelTableId?: string;
  /**
   * @remarks
   * The label table name.
   * 
   * @example
   * label_table1
   */
  labelTableName?: string;
  /**
   * @remarks
   * The model feature name.
   * 
   * @example
   * model_feature1
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 1231243253****
   */
  owner?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 5
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
   * The feature relationships.
   */
  relations?: GetModelFeatureResponseBodyRelations;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C89F5E1-7F24-5EEC-9F05-508A39278CC8
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the exported training set FG table.
   * 
   * @example
   * table2
   */
  trainingSetFGTable?: string;
  /**
   * @remarks
   * The name of the exported training set table.
   * 
   * @example
   * table1
   */
  trainingSetTable?: string;
  static names(): { [key: string]: string } {
    return {
      exportTrainingSetTableScript: 'ExportTrainingSetTableScript',
      features: 'Features',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelPriorityLevel: 'LabelPriorityLevel',
      labelTableId: 'LabelTableId',
      labelTableName: 'LabelTableName',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      relations: 'Relations',
      requestId: 'RequestId',
      trainingSetFGTable: 'TrainingSetFGTable',
      trainingSetTable: 'TrainingSetTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTrainingSetTableScript: 'string',
      features: { 'type': 'array', 'itemType': GetModelFeatureResponseBodyFeatures },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labelPriorityLevel: 'number',
      labelTableId: 'string',
      labelTableName: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      relations: GetModelFeatureResponseBodyRelations,
      requestId: 'string',
      trainingSetFGTable: 'string',
      trainingSetTable: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    if(this.relations && typeof (this.relations as any).validate === 'function') {
      (this.relations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

