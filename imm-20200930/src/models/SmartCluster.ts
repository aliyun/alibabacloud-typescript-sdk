// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SmartClusterRule } from "./SmartClusterRule";


export class SmartCluster extends $dara.Model {
  createTime?: string;
  datasetName?: string;
  description?: string;
  name?: string;
  objectId?: string;
  objectStatus?: string;
  objectType?: string;
  ownerId?: string;
  projectName?: string;
  rule?: SmartClusterRule;
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

