// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SmartClusterRule } from "./SmartClusterRule";


export class SmartCluster extends $dara.Model {
  /**
   * @remarks
   * The category of the grouping.
   * 
   * @example
   * figure
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the grouping was created.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * MyDataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the grouping.
   * 
   * @example
   * 这是一个智能分组的描述示例，它用于展示记录的格式。
   */
  description?: string;
  /**
   * @remarks
   * The grouping name.
   * 
   * @example
   * MySmartCluster1
   */
  name?: string;
  /**
   * @remarks
   * The intelligent grouping ID.
   * 
   * @example
   * SmartCluster-12cd1645-deae-4b5e-9434-613747b75f6d
   */
  objectId?: string;
  /**
   * @remarks
   * The status of the grouping.
   * 
   * @example
   * Succeeded
   */
  objectStatus?: string;
  /**
   * @remarks
   * The grouping type.
   * 
   * @example
   * smart-cluster
   */
  objectType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1023210024677934
   */
  ownerId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * MyProject
   */
  projectName?: string;
  /**
   * @remarks
   * The reason why the grouping failed.
   * 
   * @example
   * [InvalidArgument.BaseURIs] Each BaseURI must contain exactly one figure
   */
  reason?: string;
  /**
   * @remarks
   * The grouping rule. This parameter is deprecated. Use the Rules parameter instead.
   */
  rule?: SmartClusterRule;
  /**
   * @remarks
   * The list of grouping rules.
   */
  rules?: SmartClusterRule[];
  /**
   * @remarks
   * The time when the grouping was last updated.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      datasetName: 'DatasetName',
      description: 'Description',
      name: 'Name',
      objectId: 'ObjectId',
      objectStatus: 'ObjectStatus',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      reason: 'Reason',
      rule: 'Rule',
      rules: 'Rules',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      createTime: 'string',
      datasetName: 'string',
      description: 'string',
      name: 'string',
      objectId: 'string',
      objectStatus: 'string',
      objectType: 'string',
      ownerId: 'string',
      projectName: 'string',
      reason: 'string',
      rule: SmartClusterRule,
      rules: { 'type': 'array', 'itemType': SmartClusterRule },
      updateTime: 'string',
    };
  }

  validate() {
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

