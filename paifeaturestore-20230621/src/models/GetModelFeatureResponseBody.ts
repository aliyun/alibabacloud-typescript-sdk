// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelFeatureResponseBodyFeatures extends $dara.Model {
  /**
   * @example
   * feature2
   */
  aliasName?: string;
  /**
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @example
   * feature_view_1
   */
  featureViewName?: string;
  /**
   * @example
   * feature1
   */
  name?: string;
  /**
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
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      featureViewId: 'string',
      featureViewName: 'string',
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

export class GetModelFeatureResponseBodyRelationsDomains extends $dara.Model {
  /**
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
   * @example
   * model_feature_2
   */
  from?: string;
  /**
   * @example
   * user_id
   */
  link?: string;
  /**
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
  domains?: GetModelFeatureResponseBodyRelationsDomains[];
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
   * @example
   * from feature_store_py.fs_client import FeatureStoreClient\nfrom feature_store_py.fs_project import FeatureStoreProject\nfrom feature_store_py.fs_datasource import LabelInput, MaxComputeDataSource, TrainingSetOutput\nfrom feature_store_py.fs_features import FeatureSelector\nfrom feature_store_py.fs_config import LabelInputConfig, PartitionConfig, FeatureViewConfig\nfrom feature_store_py.fs_config import TrainSetOutputConfig, EASDeployConfig\nimport datetime\nimport sys\n\ncur_day = args[\"dt\"]\nprint(\"cur_day = \", cur_day)\noffset = datetime.timedelta(days=-1)\npre_day = (datetime.datetime.strptime(cur_day, \"%Y%m%d\") + offset).strftime(\"%Y%m%d\")\nprint(\"pre_day = \", pre_day)\n\n\naccess_key_id = o.account.access_id\naccess_key_secret = o.account.secret_access_key\nfs = FeatureStoreClient(access_key_id=access_key_id, access_key_secret=access_key_secret, region=\"cn-beijing\")\ncur_project_name = \"p1\"\nproject = fs.get_project(cur_project_name)\n\nlabel_partitions = PartitionConfig(name = \"ds\", value = cur_day)\nlabel_input_config = LabelInputConfig(partition_config=label_partitions)\n\nfeature_view_1_partitions = PartitionConfig(name = \"ds\", value = pre_day)\nfeature_view_1_config = FeatureViewConfig(name = \"user_fea\",\npartition_config=feature_view_1_partitions)\n\nfeature_view_2_partitions = PartitionConfig(name = \"ds\", value = pre_day)\nfeature_view_2_config = FeatureViewConfig(name = \"seq_fea\",\npartition_config=feature_view_2_partitions)\n\nfeature_view_3_partitions = PartitionConfig(name = \"ds\", value = pre_day)\nfeature_view_3_config = FeatureViewConfig(name = \"item_fea\",\npartition_config=feature_view_3_partitions)\n\nfeature_view_config_list = [feature_view_1_config,feature_view_2_config,feature_view_3_config]\ntrain_set_partitions = PartitionConfig(name = \"ds\", value = cur_day)\ntrain_set_output_config = TrainSetOutputConfig(partition_config=train_set_partitions)\n\n\nmodel_name = \"rank_v1\"\ncur_model = project.get_model(model_name)\ntask = cur_model.export_train_set(label_input_config, feature_view_config_list, train_set_output_config)\ntask.wait()\nprint(\"task_summary = \", task.task_summary)\n
   */
  exportTrainingSetTableScript?: string;
  features?: GetModelFeatureResponseBodyFeatures[];
  /**
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 0
   */
  labelPriorityLevel?: number;
  /**
   * @example
   * 3
   */
  labelTableId?: string;
  /**
   * @example
   * label_table1
   */
  labelTableName?: string;
  /**
   * @example
   * model_feature1
   */
  name?: string;
  /**
   * @example
   * 1231243253****
   */
  owner?: string;
  /**
   * @example
   * 5
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
  projectName?: string;
  relations?: GetModelFeatureResponseBodyRelations;
  /**
   * @example
   * 0C89F5E1-7F24-5EEC-9F05-508A39278CC8
   */
  requestId?: string;
  /**
   * @example
   * table2
   */
  trainingSetFGTable?: string;
  /**
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

