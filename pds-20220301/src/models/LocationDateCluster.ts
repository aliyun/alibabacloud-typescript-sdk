// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";


export class LocationDateCluster extends $dara.Model {
  address?: Address;
  clusterId?: string;
  createdAt?: string;
  customLabels?: { [key: string]: string };
  driveId?: string;
  endTime?: string;
  level?: string;
  startTime?: string;
  title?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      clusterId: 'cluster_id',
      createdAt: 'created_at',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      endTime: 'end_time',
      level: 'level',
      startTime: 'start_time',
      title: 'title',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: Address,
      clusterId: 'string',
      createdAt: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      endTime: 'string',
      level: 'string',
      startTime: 'string',
      title: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.address && typeof (this.address as any).validate === 'function') {
      (this.address as any).validate();
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

