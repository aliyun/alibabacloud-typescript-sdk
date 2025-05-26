// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";


export class LocationDateCluster extends $dara.Model {
  addresses?: Address[];
  createTime?: string;
  customId?: string;
  customLabels?: { [key: string]: any };
  locationDateClusterEndTime?: string;
  locationDateClusterLevel?: string;
  locationDateClusterStartTime?: string;
  objectId?: string;
  title?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      createTime: 'CreateTime',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      locationDateClusterEndTime: 'LocationDateClusterEndTime',
      locationDateClusterLevel: 'LocationDateClusterLevel',
      locationDateClusterStartTime: 'LocationDateClusterStartTime',
      objectId: 'ObjectId',
      title: 'Title',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': Address },
      createTime: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      locationDateClusterEndTime: 'string',
      locationDateClusterLevel: 'string',
      locationDateClusterStartTime: 'string',
      objectId: 'string',
      title: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

