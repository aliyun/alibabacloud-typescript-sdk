// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SmartClusterRule } from "./SmartClusterRule";


export class SmartCluster extends $dara.Model {
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * MyDataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the cluster.
   */
  description?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * MySmartCluster1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * SmartCluster-12cd1645-deae-4b5e-9434-613747b75f6d
   */
  objectId?: string;
  /**
   * @remarks
   * The status of the cluster.
   * 
   * @example
   * Succeeded
   */
  objectStatus?: string;
  /**
   * @remarks
   * The type of the cluster.
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
   * The name of the project.
   * 
   * @example
   * MyProject
   */
  projectName?: string;
  /**
   * @remarks
   * The clustering rule.
   */
  rule?: SmartClusterRule;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      datasetName: 'DatasetName',
      description: 'Description',
      name: 'Name',
      objectId: 'ObjectId',
      objectStatus: 'ObjectStatus',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      rule: 'Rule',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasetName: 'string',
      description: 'string',
      name: 'string',
      objectId: 'string',
      objectStatus: 'string',
      objectType: 'string',
      ownerId: 'string',
      projectName: 'string',
      rule: SmartClusterRule,
      updateTime: 'string',
    };
  }

  validate() {
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

