// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureViewResponseBodyFields } from "./GetFeatureViewResponseBodyFields";


export class GetFeatureViewResponseBody extends $dara.Model {
  /**
   * @example
   * {"save_original_field":true}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @example
   * featureEntity1
   */
  featureEntityName?: string;
  fields?: GetFeatureViewResponseBodyFields[];
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
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtSyncTime?: string;
  /**
   * @example
   * user_id
   */
  joinId?: string;
  /**
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
   * @example
   * item_table_mock_1
   */
  mockTableName?: string;
  /**
   * @example
   * featureView1
   */
  name?: string;
  /**
   * @example
   * 12321421412****
   */
  owner?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
  projectName?: string;
  /**
   * @example
   * from feature_store_py.fs_client import FeatureStoreClient\nimport datetime\nfrom feature_store_py.fs_datasource import MaxComputeDataSource\nimport sys\n\ncur_day = args[\"dt\"]\nprint(\"cur_day = \", cur_day)\n\naccess_key_id = o.account.access_id\naccess_key_secret = o.account.secret_access_key\nfs = FeatureStoreClient(access_key_id=access_key_id, access_key_secret=access_key_secret, region=\"cn-beijing\")\ncur_project_name = \"p1\"\nproject = fs.get_project(cur_project_name)\n\nfeature_view_name = \"user_fea\"\nbatch_feature_view = project.get_feature_view(feature_view_name)\ntask = batch_feature_view.publish_table(partitions={\"ds\":cur_day}, mode=\"Overwrite\")\ntask.wait()\ntask.print_summary()\n
   */
  publishTableScript?: string;
  /**
   * @example
   * 4
   */
  registerDatasourceId?: string;
  /**
   * @example
   * datasource1
   */
  registerDatasourceName?: string;
  /**
   * @example
   * table1
   */
  registerTable?: string;
  /**
   * @example
   * 72F15A8A-5A28-5B18-A0DE-0EABD7D3245A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  syncOnlineTable?: boolean;
  /**
   * @example
   * 90
   */
  TTL?: number;
  tags?: string[];
  /**
   * @example
   * Batch
   */
  type?: string;
  /**
   * @example
   * custom
   */
  writeMethod?: string;
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

